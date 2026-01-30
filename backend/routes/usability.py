from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, UsabilityMetric
import json

usability_bp = Blueprint('usability', __name__)

@usability_bp.route('/log', methods=['POST'])
def log_usability_metric():
    """Log usability testing metric"""
    try:
        data = request.get_json()
        
        # Get user ID if authenticated
        user_id = None
        try:
            user_id = get_jwt_identity()
        except:
            pass  # Anonymous metrics allowed
        
        # Validate required fields
        if 'session_id' not in data or 'task_name' not in data:
            return jsonify({'error': 'session_id and task_name are required'}), 400
        
        # Create metric
        metric = UsabilityMetric(
            user_id=user_id,
            session_id=data['session_id'],
            task_name=data['task_name'],
            task_completed=data.get('task_completed', False),
            time_spent_seconds=data.get('time_spent_seconds'),
            navigation_path=json.dumps(data.get('navigation_path', [])),
            feature_used=data.get('feature_used'),
            error_encountered=data.get('error_encountered', False),
            error_description=data.get('error_description')
        )
        
        db.session.add(metric)
        db.session.commit()
        
        return jsonify({
            'message': 'Usability metric logged successfully',
            'metric': metric.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@usability_bp.route('/session/<session_id>', methods=['GET'])
@jwt_required()
def get_session_metrics(session_id):
    """Get all metrics for a session"""
    try:
        metrics = UsabilityMetric.query.filter_by(session_id=session_id).order_by(UsabilityMetric.timestamp).all()
        
        return jsonify({
            'session_id': session_id,
            'metrics': [m.to_dict() for m in metrics],
            'count': len(metrics)
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@usability_bp.route('/stats', methods=['GET'])
@jwt_required()
def usability_stats():
    """Get usability statistics"""
    try:
        from sqlalchemy import func
        
        # Task completion rate
        total_tasks = UsabilityMetric.query.count()
        completed_tasks = UsabilityMetric.query.filter_by(task_completed=True).count()
        completion_rate = (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0
        
        # Average time per task
        avg_time = db.session.query(func.avg(UsabilityMetric.time_spent_seconds)).filter(
            UsabilityMetric.time_spent_seconds.isnot(None)
        ).scalar()
        
        # Error rate
        tasks_with_errors = UsabilityMetric.query.filter_by(error_encountered=True).count()
        error_rate = (tasks_with_errors / total_tasks * 100) if total_tasks > 0 else 0
        
        # Task statistics
        task_stats = db.session.query(
            UsabilityMetric.task_name,
            func.count(UsabilityMetric.id).label('attempts'),
            func.sum(func.cast(UsabilityMetric.task_completed, db.Integer)).label('completions'),
            func.avg(UsabilityMetric.time_spent_seconds).label('avg_time')
        ).group_by(UsabilityMetric.task_name).all()
        
        # Feature usage
        feature_usage = db.session.query(
            UsabilityMetric.feature_used,
            func.count(UsabilityMetric.id).label('usage_count')
        ).filter(
            UsabilityMetric.feature_used.isnot(None)
        ).group_by(UsabilityMetric.feature_used).all()
        
        return jsonify({
            'total_tasks': total_tasks,
            'completed_tasks': completed_tasks,
            'completion_rate': round(completion_rate, 2),
            'average_time_seconds': round(avg_time, 2) if avg_time else 0,
            'tasks_with_errors': tasks_with_errors,
            'error_rate': round(error_rate, 2),
            'task_statistics': [
                {
                    'task_name': stat[0],
                    'attempts': stat[1],
                    'completions': stat[2] or 0,
                    'success_rate': round((stat[2] or 0) / stat[1] * 100, 2) if stat[1] > 0 else 0,
                    'avg_time': round(stat[3], 2) if stat[3] else 0
                }
                for stat in task_stats
            ],
            'feature_usage': [
                {
                    'feature': stat[0],
                    'usage_count': stat[1]
                }
                for stat in feature_usage
            ]
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
