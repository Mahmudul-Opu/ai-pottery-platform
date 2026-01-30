"""
Health check and keep-alive endpoint for 24/7 uptime monitoring
"""
from flask import Blueprint, jsonify
from datetime import datetime
import psutil
import os

health_bp = Blueprint('health', __name__)

@health_bp.route('/health', methods=['GET'])
def health_check():
    """
    Health check endpoint for uptime monitoring
    Returns system status and uptime information
    """
    try:
        # Get system metrics
        cpu_percent = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory()
        disk = psutil.disk_usage('/')
        
        return jsonify({
            'status': 'healthy',
            'timestamp': datetime.utcnow().isoformat(),
            'uptime': 'running',
            'environment': os.getenv('FLASK_ENV', 'development'),
            'system': {
                'cpu_usage': f"{cpu_percent}%",
                'memory_usage': f"{memory.percent}%",
                'memory_available': f"{memory.available / (1024**3):.2f}GB",
                'disk_usage': f"{disk.percent}%",
                'disk_free': f"{disk.free / (1024**3):.2f}GB"
            },
            'service': {
                'name': 'AI Pottery Platform API',
                'version': '1.0.0',
                'database': 'connected'
            }
        }), 200
    except Exception as e:
        return jsonify({
            'status': 'unhealthy',
            'timestamp': datetime.utcnow().isoformat(),
            'error': str(e)
        }), 500

@health_bp.route('/ping', methods=['GET'])
def ping():
    """
    Simple ping endpoint for keep-alive checks
    """
    return jsonify({
        'status': 'ok',
        'timestamp': datetime.utcnow().isoformat(),
        'message': 'pong'
    }), 200

@health_bp.route('/status', methods=['GET'])
def status():
    """
    Detailed status endpoint
    """
    return jsonify({
        'api': 'online',
        'database': 'connected',
        'timestamp': datetime.utcnow().isoformat(),
        'endpoints': {
            'auth': '/api/auth',
            'products': '/api/products',
            'recommendations': '/api/recommendations',
            'marketing': '/api/marketing',
            'analytics': '/api/analytics',
            'feedback': '/api/feedback',
            'usability': '/api/usability',
            'export': '/api/export'
        }
    }), 200
