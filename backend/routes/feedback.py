from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, FeedbackLog, User

feedback_bp = Blueprint('feedback', __name__)

@feedback_bp.route('/submit', methods=['POST'])
def submit_feedback():
    """Submit participatory design feedback"""
    try:
        data = request.get_json()
        
        # Get user ID if authenticated
        user_id = None
        try:
            user_id = get_jwt_identity()
        except:
            pass  # Anonymous feedback allowed
        
        # Validate required fields
        if 'feedback_type' not in data:
            return jsonify({'error': 'feedback_type is required'}), 400
        
        # Create feedback
        feedback = FeedbackLog(
            user_id=user_id,
            feedback_type=data['feedback_type'],
            rating=data.get('rating'),
            comment=data.get('comment'),
            feature_name=data.get('feature_name')
        )
        
        db.session.add(feedback)
        db.session.commit()
        
        return jsonify({
            'message': 'Thank you for your feedback! Your input helps us improve.',
            'feedback': feedback.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@feedback_bp.route('/list', methods=['GET'])
@jwt_required()
def list_feedback():
    """Get all feedback (admin/research purpose)"""
    try:
        # Optional: Add admin check here
        
        feedback_type = request.args.get('type')
        limit = request.args.get('limit', 100, type=int)
        
        query = FeedbackLog.query
        
        if feedback_type:
            query = query.filter_by(feedback_type=feedback_type)
        
        feedback_list = query.order_by(FeedbackLog.timestamp.desc()).limit(limit).all()
        
        return jsonify({
            'feedback': [f.to_dict() for f in feedback_list],
            'count': len(feedback_list)
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@feedback_bp.route('/stats', methods=['GET'])
@jwt_required()
def feedback_stats():
    """Get feedback statistics"""
    try:
        from sqlalchemy import func
        
        # Count by type
        type_stats = db.session.query(
            FeedbackLog.feedback_type,
            func.count(FeedbackLog.id).label('count'),
            func.avg(FeedbackLog.rating).label('avg_rating')
        ).group_by(FeedbackLog.feedback_type).all()
        
        # Average rating overall
        avg_rating = db.session.query(func.avg(FeedbackLog.rating)).scalar()
        
        # Total feedback
        total_feedback = FeedbackLog.query.count()
        
        return jsonify({
            'total_feedback': total_feedback,
            'average_rating': round(avg_rating, 2) if avg_rating else 0,
            'feedback_by_type': [
                {
                    'type': stat[0],
                    'count': stat[1],
                    'avg_rating': round(stat[2], 2) if stat[2] else 0
                }
                for stat in type_stats
            ]
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
