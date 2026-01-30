from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity, jwt_required
from services.recommendation_engine import RecommendationEngine

recommendations_bp = Blueprint('recommendations', __name__)

@recommendations_bp.route('/', methods=['GET'])
def get_recommendations():
    """Get personalized recommendations"""
    try:
        # Get user ID if authenticated
        user_id = None
        try:
            user_id = get_jwt_identity()
        except:
            pass  # User not authenticated, use anonymous recommendations
        
        limit = request.args.get('limit', 5, type=int)
        
        # Get recommendations
        recommended_products = RecommendationEngine.get_recommendations(user_id, limit)
        
        # Get user preferences for explanations
        preferences = None
        if user_id:
            preferences = RecommendationEngine.get_user_preferences(user_id)
        
        # Build response with explanations
        recommendations = []
        for product in recommended_products:
            explanation = RecommendationEngine.explain_recommendation(product, preferences)
            recommendations.append({
                **product.to_dict(),
                'recommendation_reason': explanation
            })
        
        return jsonify({
            'recommendations': recommendations,
            'count': len(recommendations),
            'personalized': user_id is not None
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@recommendations_bp.route('/explain/<int:product_id>', methods=['GET'])
def explain_recommendation(product_id):
    """Get explanation for specific product recommendation"""
    try:
        from models import Product
        
        # Get user ID if authenticated
        user_id = None
        try:
            user_id = get_jwt_identity()
        except:
            pass
        
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'error': 'Product not found'}), 404
        
        preferences = None
        if user_id:
            preferences = RecommendationEngine.get_user_preferences(user_id)
        
        explanation = RecommendationEngine.explain_recommendation(product, preferences)
        
        return jsonify({
            'product_id': product_id,
            'explanation': explanation,
            'product': product.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
