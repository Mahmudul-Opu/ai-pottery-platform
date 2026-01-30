from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Product, InteractionLog, ArtisanProfile
from sqlalchemy import func, and_
from datetime import datetime, timedelta

analytics_bp = Blueprint('analytics', __name__)

@analytics_bp.route('/dashboard', methods=['GET'])
@jwt_required()
def get_dashboard_analytics():
    """Get analytics dashboard data for artisan"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can access analytics'}), 403
        
        if not user.artisan_profile:
            return jsonify({'error': 'Artisan profile not found'}), 404
        
        # Get time range
        days = request.args.get('days', 30, type=int)
        cutoff_date = datetime.utcnow() - timedelta(days=days)
        
        # Get artisan's products
        products = Product.query.filter_by(artisan_profile_id=user.artisan_profile.id).all()
        product_ids = [p.id for p in products]
        
        if not product_ids:
            return jsonify({
                'total_products': 0,
                'total_views': 0,
                'total_clicks': 0,
                'total_sales': 0,
                'total_revenue': 0,
                'visitors_count': 0,
                'recommendation_clicks': 0,
                'recommendation_acceptance_rate': 0
            }), 200
        
        # Total products
        total_products = len(products)
        
        # Total views (from product table)
        total_views = sum([p.views_count for p in products])
        
        # Interactions in time range
        interactions = InteractionLog.query.filter(
            and_(
                InteractionLog.product_id.in_(product_ids),
                InteractionLog.timestamp >= cutoff_date
            )
        ).all()
        
        # Calculate metrics
        total_clicks = len([i for i in interactions if i.interaction_type == 'click'])
        total_sales = sum([p.sales_count for p in products])
        total_revenue = sum([p.price * p.sales_count for p in products])
        
        # Unique visitors (unique session IDs)
        unique_sessions = set([i.session_id for i in interactions if i.session_id])
        visitors_count = len(unique_sessions)
        
        # Recommendation metrics
        recommendation_interactions = [i for i in interactions if i.recommendation_source == 'ai']
        recommendation_clicks = len(recommendation_interactions)
        accepted_recommendations = len([i for i in recommendation_interactions if i.accepted_recommendation])
        recommendation_acceptance_rate = (accepted_recommendations / recommendation_clicks * 100) if recommendation_clicks > 0 else 0
        
        # Views by product
        views_by_product = [
            {'product_id': p.id, 'product_name': p.name, 'views': p.views_count}
            for p in sorted(products, key=lambda x: x.views_count, reverse=True)[:5]
        ]
        
        # Sales by product
        sales_by_product = [
            {'product_id': p.id, 'product_name': p.name, 'sales': p.sales_count, 'revenue': p.price * p.sales_count}
            for p in sorted(products, key=lambda x: x.sales_count, reverse=True)[:5]
        ]
        
        return jsonify({
            'total_products': total_products,
            'total_views': total_views,
            'total_clicks': total_clicks,
            'total_sales': total_sales,
            'total_revenue': round(total_revenue, 2),
            'visitors_count': visitors_count,
            'recommendation_clicks': recommendation_clicks,
            'recommendation_acceptance_rate': round(recommendation_acceptance_rate, 2),
            'views_by_product': views_by_product,
            'sales_by_product': sales_by_product,
            'time_range_days': days
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@analytics_bp.route('/product/<int:product_id>', methods=['GET'])
@jwt_required()
def get_product_analytics(product_id):
    """Get analytics for specific product"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can access analytics'}), 403
        
        product = Product.query.get(product_id)
        
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        # Check ownership
        if product.artisan_profile_id != user.artisan_profile.id:
            return jsonify({'error': 'You can only view analytics for your own products'}), 403
        
        # Get interactions
        days = request.args.get('days', 30, type=int)
        cutoff_date = datetime.utcnow() - timedelta(days=days)
        
        interactions = InteractionLog.query.filter(
            and_(
                InteractionLog.product_id == product_id,
                InteractionLog.timestamp >= cutoff_date
            )
        ).all()
        
        # Calculate metrics
        views = len([i for i in interactions if i.interaction_type == 'view'])
        clicks = len([i for i in interactions if i.interaction_type == 'click'])
        saves = len([i for i in interactions if i.interaction_type == 'save'])
        
        return jsonify({
            'product': product.to_dict(),
            'views': views,
            'clicks': clicks,
            'saves': saves,
            'sales': product.sales_count,
            'revenue': round(product.price * product.sales_count, 2),
            'time_range_days': days
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
