from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Product, ArtisanProfile, InteractionLog
from datetime import datetime

products_bp = Blueprint('products', __name__)

@products_bp.route('/', methods=['GET'])
def get_products():
    """Get all products with optional filters"""
    try:
        # Query parameters
        category = request.args.get('category')
        region = request.args.get('region')
        search = request.args.get('search')
        artisan_id = request.args.get('artisan_id')
        limit = request.args.get('limit', type=int)
        
        # Build query
        query = Product.query.filter_by(is_available=True)
        
        if category:
            query = query.filter_by(category=category)
        if region:
            query = query.filter_by(region=region)
        if search:
            query = query.filter(Product.name.ilike(f'%{search}%') | Product.description.ilike(f'%{search}%'))
        if artisan_id:
            query = query.filter_by(artisan_profile_id=artisan_id)
        
        # Apply limit
        if limit:
            query = query.limit(limit)
        
        products = query.order_by(Product.created_at.desc()).all()
        
        return jsonify({
            'products': [p.to_dict() for p in products],
            'count': len(products)
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@products_bp.route('/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Get single product by ID"""
    try:
        product = Product.query.get(product_id)
        
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        # Increment views
        product.views_count += 1
        db.session.commit()
        
        return jsonify({'product': product.to_dict()}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@products_bp.route('/', methods=['POST'])
@jwt_required()
def create_product():
    """Create new product (artisan only)"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can create products'}), 403
        
        if not user.artisan_profile:
            return jsonify({'error': 'Artisan profile not found'}), 404
        
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'category', 'price']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Create product
        product = Product(
            artisan_profile_id=user.artisan_profile.id,
            name=data['name'],
            description=data.get('description', ''),
            category=data['category'],
            price=float(data['price']),
            image_url=data.get('image_url', ''),
            tags=','.join(data.get('tags', [])) if isinstance(data.get('tags'), list) else data.get('tags', ''),
            region=data.get('region', user.artisan_profile.region),
            stock_quantity=data.get('stock_quantity', 0),
            is_available=data.get('is_available', True)
        )
        
        db.session.add(product)
        db.session.commit()
        
        return jsonify({
            'message': 'Product created successfully',
            'product': product.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@products_bp.route('/<int:product_id>', methods=['PUT'])
@jwt_required()
def update_product(product_id):
    """Update product (artisan only)"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can update products'}), 403
        
        product = Product.query.get(product_id)
        
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        # Check ownership
        if product.artisan_profile_id != user.artisan_profile.id:
            return jsonify({'error': 'You can only update your own products'}), 403
        
        data = request.get_json()
        
        # Update fields
        if 'name' in data:
            product.name = data['name']
        if 'description' in data:
            product.description = data['description']
        if 'category' in data:
            product.category = data['category']
        if 'price' in data:
            product.price = float(data['price'])
        if 'image_url' in data:
            product.image_url = data['image_url']
        if 'tags' in data:
            product.tags = ','.join(data['tags']) if isinstance(data['tags'], list) else data['tags']
        if 'region' in data:
            product.region = data['region']
        if 'stock_quantity' in data:
            product.stock_quantity = data['stock_quantity']
        if 'is_available' in data:
            product.is_available = data['is_available']
        
        product.updated_at = datetime.utcnow()
        db.session.commit()
        
        return jsonify({
            'message': 'Product updated successfully',
            'product': product.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@products_bp.route('/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_product(product_id):
    """Delete product (artisan only)"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can delete products'}), 403
        
        product = Product.query.get(product_id)
        
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        # Check ownership
        if product.artisan_profile_id != user.artisan_profile.id:
            return jsonify({'error': 'You can only delete your own products'}), 403
        
        db.session.delete(product)
        db.session.commit()
        
        return jsonify({'message': 'Product deleted successfully'}), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@products_bp.route('/<int:product_id>/interaction', methods=['POST'])
def log_interaction(product_id):
    """Log user interaction with product"""
    try:
        data = request.get_json()
        
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        # Create interaction log
        interaction = InteractionLog(
            user_id=data.get('user_id'),
            product_id=product_id,
            interaction_type=data.get('interaction_type', 'view'),
            session_id=data.get('session_id'),
            recommendation_source=data.get('recommendation_source'),
            accepted_recommendation=data.get('accepted_recommendation', False)
        )
        
        db.session.add(interaction)
        
        # Update product stats
        if data.get('interaction_type') == 'view':
            product.views_count += 1
        elif data.get('interaction_type') == 'purchase':
            product.sales_count += 1
        
        db.session.commit()
        
        return jsonify({
            'message': 'Interaction logged successfully',
            'interaction': interaction.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@products_bp.route('/my-products', methods=['GET'])
@jwt_required()
def get_my_products():
    """Get products for logged-in artisan"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can access this endpoint'}), 403
        
        if not user.artisan_profile:
            return jsonify({'products': [], 'count': 0}), 200
        
        products = Product.query.filter_by(artisan_profile_id=user.artisan_profile.id).order_by(Product.created_at.desc()).all()
        
        return jsonify({
            'products': [p.to_dict() for p in products],
            'count': len(products)
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
