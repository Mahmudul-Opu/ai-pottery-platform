from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from models import db

def create_app(config_class=Config):
    """Application factory pattern"""
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Initialize extensions
    db.init_app(app)
    CORS(app)
    JWTManager(app)
    
    # Register blueprints
    from routes.auth import auth_bp
    from routes.products import products_bp
    from routes.recommendations import recommendations_bp
    from routes.analytics import analytics_bp
    from routes.feedback import feedback_bp
    from routes.marketing import marketing_bp
    from routes.usability import usability_bp
    from routes.export import export_bp
    from routes.health import health_bp
    
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(products_bp, url_prefix='/api/products')
    app.register_blueprint(recommendations_bp, url_prefix='/api/recommendations')
    app.register_blueprint(analytics_bp, url_prefix='/api/analytics')
    app.register_blueprint(feedback_bp, url_prefix='/api/feedback')
    app.register_blueprint(marketing_bp, url_prefix='/api/marketing')
    app.register_blueprint(usability_bp, url_prefix='/api/usability')
    app.register_blueprint(export_bp, url_prefix='/api/export')
    app.register_blueprint(health_bp, url_prefix='/api')
    
    # Create database tables
    with app.app_context():
        db.create_all()
        print("✅ Database tables created successfully")
    
    return app


if __name__ == '__main__':
    app = create_app()
    print("🚀 Flask server starting...")
    print("📍 Running on http://localhost:8000")
    print("🔧 Environment: Development")
    app.run(debug=True, host='127.0.0.1', port=8000)
