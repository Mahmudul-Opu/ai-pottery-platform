from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Product
from services.marketing_assistant import MarketingAssistant

marketing_bp = Blueprint('marketing', __name__)

@marketing_bp.route('/generate', methods=['POST'])
@jwt_required()
def generate_marketing_content():
    """Generate AI marketing content for product"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can access this feature'}), 403
        
        data = request.get_json()
        
        if 'product_name' not in data:
            return jsonify({'error': 'Product name is required'}), 400
        
        product_name = data['product_name']
        category = data.get('category', 'default')
        
        # Generate content
        content = MarketingAssistant.generate_all(product_name, category)
        
        return jsonify({
            'message': 'Marketing content generated successfully',
            'content': content
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@marketing_bp.route('/apply/<int:product_id>', methods=['POST'])
@jwt_required()
def apply_marketing_content(product_id):
    """Apply AI-generated marketing content to product"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can access this feature'}), 403
        
        product = Product.query.get(product_id)
        
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        # Check ownership
        if product.artisan_profile_id != user.artisan_profile.id:
            return jsonify({'error': 'You can only update your own products'}), 403
        
        data = request.get_json()
        
        # Apply content (editable by artisan)
        if 'description' in data:
            product.ai_generated_description = data['description']
        if 'caption' in data:
            product.ai_generated_caption = data['caption']
        if 'keywords' in data:
            keywords = data['keywords']
            if isinstance(keywords, list):
                product.ai_generated_keywords = ','.join(keywords)
            else:
                product.ai_generated_keywords = keywords
        
        db.session.commit()
        
        return jsonify({
            'message': 'Marketing content applied successfully',
            'product': product.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
