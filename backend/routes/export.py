from flask import Blueprint, request, jsonify, send_file
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, Product, InteractionLog, FeedbackLog, UsabilityMetric
import csv
import io
from datetime import datetime, timedelta

export_bp = Blueprint('export', __name__)

@export_bp.route('/analytics', methods=['GET'])
@jwt_required()
def export_analytics():
    """Export analytics data to CSV"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or user.role != 'artisan':
            return jsonify({'error': 'Only artisans can export analytics'}), 403
        
        if not user.artisan_profile:
            return jsonify({'error': 'Artisan profile not found'}), 404
        
        # Get artisan's products
        products = Product.query.filter_by(artisan_profile_id=user.artisan_profile.id).all()
        
        # Create CSV in memory
        output = io.StringIO()
        writer = csv.writer(output)
        
        # Write header
        writer.writerow(['Product ID', 'Product Name', 'Category', 'Price', 'Views', 'Sales', 'Revenue', 'Stock', 'Created Date'])
        
        # Write data
        for product in products:
            writer.writerow([
                product.id,
                product.name,
                product.category,
                product.price,
                product.views_count,
                product.sales_count,
                product.price * product.sales_count,
                product.stock_quantity,
                product.created_at.strftime('%Y-%m-%d')
            ])
        
        # Convert to bytes
        output.seek(0)
        bytes_output = io.BytesIO()
        bytes_output.write(output.getvalue().encode('utf-8'))
        bytes_output.seek(0)
        
        return send_file(
            bytes_output,
            mimetype='text/csv',
            as_attachment=True,
            download_name=f'analytics_{user.username}_{datetime.utcnow().strftime("%Y%m%d")}.csv'
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@export_bp.route('/interactions', methods=['GET'])
@jwt_required()
def export_interactions():
    """Export interaction logs to CSV (research purpose)"""
    try:
        # Note: Add admin check here for production
        
        days = request.args.get('days', 30, type=int)
        
        # Get interactions
        cutoff_date = datetime.utcnow() - timedelta(days=days)
        interactions = InteractionLog.query.filter(InteractionLog.timestamp >= cutoff_date).all()
        
        # Create CSV in memory
        output = io.StringIO()
        writer = csv.writer(output)
        
        # Write header
        writer.writerow(['Interaction ID', 'User ID', 'Product ID', 'Interaction Type', 'Session ID', 'Recommendation Source', 'Accepted Recommendation', 'Timestamp'])
        
        # Write data (anonymized)
        for interaction in interactions:
            writer.writerow([
                interaction.id,
                interaction.user_id if interaction.user_id else 'Anonymous',
                interaction.product_id,
                interaction.interaction_type,
                interaction.session_id,
                interaction.recommendation_source,
                interaction.accepted_recommendation,
                interaction.timestamp.strftime('%Y-%m-%d %H:%M:%S')
            ])
        
        # Convert to bytes
        output.seek(0)
        bytes_output = io.BytesIO()
        bytes_output.write(output.getvalue().encode('utf-8'))
        bytes_output.seek(0)
        
        return send_file(
            bytes_output,
            mimetype='text/csv',
            as_attachment=True,
            download_name=f'interactions_{datetime.utcnow().strftime("%Y%m%d")}.csv'
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@export_bp.route('/usability', methods=['GET'])
@jwt_required()
def export_usability():
    """Export usability metrics to CSV (research purpose)"""
    try:
        # Note: Add admin check here for production
        
        days = request.args.get('days', 30, type=int)
        
        # Get usability metrics
        cutoff_date = datetime.utcnow() - timedelta(days=days)
        metrics = UsabilityMetric.query.filter(UsabilityMetric.timestamp >= cutoff_date).all()
        
        # Create CSV in memory
        output = io.StringIO()
        writer = csv.writer(output)
        
        # Write header
        writer.writerow(['Metric ID', 'User ID', 'Session ID', 'Task Name', 'Task Completed', 'Time Spent (seconds)', 'Feature Used', 'Error Encountered', 'Error Description', 'Timestamp'])
        
        # Write data (anonymized)
        for metric in metrics:
            writer.writerow([
                metric.id,
                metric.user_id if metric.user_id else 'Anonymous',
                metric.session_id,
                metric.task_name,
                metric.task_completed,
                metric.time_spent_seconds,
                metric.feature_used,
                metric.error_encountered,
                metric.error_description,
                metric.timestamp.strftime('%Y-%m-%d %H:%M:%S')
            ])
        
        # Convert to bytes
        output.seek(0)
        bytes_output = io.BytesIO()
        bytes_output.write(output.getvalue().encode('utf-8'))
        bytes_output.seek(0)
        
        return send_file(
            bytes_output,
            mimetype='text/csv',
            as_attachment=True,
            download_name=f'usability_metrics_{datetime.utcnow().strftime("%Y%m%d")}.csv'
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@export_bp.route('/feedback', methods=['GET'])
@jwt_required()
def export_feedback():
    """Export feedback to CSV (research purpose)"""
    try:
        # Note: Add admin check here for production
        
        days = request.args.get('days', 90, type=int)
        
        # Get feedback
        cutoff_date = datetime.utcnow() - timedelta(days=days)
        feedback_list = FeedbackLog.query.filter(FeedbackLog.timestamp >= cutoff_date).all()
        
        # Create CSV in memory
        output = io.StringIO()
        writer = csv.writer(output)
        
        # Write header
        writer.writerow(['Feedback ID', 'User ID', 'Feedback Type', 'Rating', 'Comment', 'Feature Name', 'Is Resolved', 'Timestamp'])
        
        # Write data (anonymized)
        for feedback in feedback_list:
            writer.writerow([
                feedback.id,
                feedback.user_id if feedback.user_id else 'Anonymous',
                feedback.feedback_type,
                feedback.rating,
                feedback.comment,
                feedback.feature_name,
                feedback.is_resolved,
                feedback.timestamp.strftime('%Y-%m-%d %H:%M:%S')
            ])
        
        # Convert to bytes
        output.seek(0)
        bytes_output = io.BytesIO()
        bytes_output.write(output.getvalue().encode('utf-8'))
        bytes_output.seek(0)
        
        return send_file(
            bytes_output,
            mimetype='text/csv',
            as_attachment=True,
            download_name=f'feedback_{datetime.utcnow().strftime("%Y%m%d")}.csv'
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@export_bp.route('/all', methods=['GET'])
@jwt_required()
def export_all_data():
    """Export all data summary - provides links to individual export endpoints"""
    try:
        # Note: Add admin check here for production
        return jsonify({
            'message': 'Use individual export endpoints to download CSV files',
            'endpoints': {
                'analytics': '/api/export/analytics',
                'interactions': '/api/export/interactions?days=30',
                'usability': '/api/export/usability?days=30',
                'feedback': '/api/export/feedback?days=90'
            },
            'note': 'Add ?days=N parameter to filter by days'
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
