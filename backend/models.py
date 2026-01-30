from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    """User model for both artisans and customers"""
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False, index=True)
    username = db.Column(db.String(80), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False, default='customer')  # 'artisan' or 'customer'
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_active = db.Column(db.Boolean, default=True)
    
    # Relationships
    artisan_profile = db.relationship('ArtisanProfile', backref='user', uselist=False, cascade='all, delete-orphan')
    interactions = db.relationship('InteractionLog', backref='user', cascade='all, delete-orphan')
    feedback = db.relationship('FeedbackLog', backref='user', cascade='all, delete-orphan')
    usability_metrics = db.relationship('UsabilityMetric', backref='user', cascade='all, delete-orphan')
    
    def set_password(self, password):
        """Hash and set password"""
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        """Check if password matches hash"""
        return check_password_hash(self.password_hash, password)
    
    def to_dict(self):
        """Convert user to dictionary"""
        return {
            'id': self.id,
            'email': self.email,
            'username': self.username,
            'role': self.role,
            'created_at': self.created_at.isoformat(),
            'is_active': self.is_active
        }


class ArtisanProfile(db.Model):
    """Artisan profile model"""
    __tablename__ = 'artisan_profiles'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)
    full_name = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    address = db.Column(db.String(255))
    region = db.Column(db.String(50))
    specialization = db.Column(db.String(100))
    bio = db.Column(db.Text)
    profile_image = db.Column(db.String(255))
    years_experience = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    products = db.relationship('Product', backref='artisan', cascade='all, delete-orphan')
    
    def to_dict(self):
        """Convert profile to dictionary"""
        return {
            'id': self.id,
            'user_id': self.user_id,
            'full_name': self.full_name,
            'phone': self.phone,
            'address': self.address,
            'region': self.region,
            'specialization': self.specialization,
            'bio': self.bio,
            'profile_image': self.profile_image,
            'years_experience': self.years_experience,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }


class Product(db.Model):
    """Product model"""
    __tablename__ = 'products'
    
    id = db.Column(db.Integer, primary_key=True)
    artisan_profile_id = db.Column(db.Integer, db.ForeignKey('artisan_profiles.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    category = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255))
    tags = db.Column(db.String(255))  # Comma-separated tags
    region = db.Column(db.String(50))
    stock_quantity = db.Column(db.Integer, default=0)
    is_available = db.Column(db.Boolean, default=True)
    views_count = db.Column(db.Integer, default=0)
    sales_count = db.Column(db.Integer, default=0)
    ai_generated_description = db.Column(db.Text)
    ai_generated_caption = db.Column(db.Text)
    ai_generated_keywords = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    interactions = db.relationship('InteractionLog', backref='product', cascade='all, delete-orphan')
    
    def to_dict(self):
        """Convert product to dictionary"""
        return {
            'id': self.id,
            'artisan_profile_id': self.artisan_profile_id,
            'name': self.name,
            'description': self.description,
            'category': self.category,
            'price': self.price,
            'image_url': self.image_url,
            'tags': self.tags.split(',') if self.tags else [],
            'region': self.region,
            'stock_quantity': self.stock_quantity,
            'is_available': self.is_available,
            'views_count': self.views_count,
            'sales_count': self.sales_count,
            'ai_generated_description': self.ai_generated_description,
            'ai_generated_caption': self.ai_generated_caption,
            'ai_generated_keywords': self.ai_generated_keywords.split(',') if self.ai_generated_keywords else [],
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }


class InteractionLog(db.Model):
    """User interaction tracking"""
    __tablename__ = 'interaction_logs'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)  # Nullable for anonymous users
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    interaction_type = db.Column(db.String(20), nullable=False)  # 'view', 'click', 'save', 'purchase'
    session_id = db.Column(db.String(100))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, index=True)
    recommendation_source = db.Column(db.String(50))  # 'ai', 'featured', 'search', etc.
    accepted_recommendation = db.Column(db.Boolean, default=False)
    
    def to_dict(self):
        """Convert interaction to dictionary"""
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'interaction_type': self.interaction_type,
            'session_id': self.session_id,
            'timestamp': self.timestamp.isoformat(),
            'recommendation_source': self.recommendation_source,
            'accepted_recommendation': self.accepted_recommendation
        }


class FeedbackLog(db.Model):
    """Participatory design feedback"""
    __tablename__ = 'feedback_logs'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    feedback_type = db.Column(db.String(50), nullable=False)  # 'feature', 'usability', 'design', 'general'
    rating = db.Column(db.Integer)  # 1-5 stars
    comment = db.Column(db.Text)
    feature_name = db.Column(db.String(100))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, index=True)
    is_resolved = db.Column(db.Boolean, default=False)
    
    def to_dict(self):
        """Convert feedback to dictionary"""
        return {
            'id': self.id,
            'user_id': self.user_id,
            'feedback_type': self.feedback_type,
            'rating': self.rating,
            'comment': self.comment,
            'feature_name': self.feature_name,
            'timestamp': self.timestamp.isoformat(),
            'is_resolved': self.is_resolved
        }


class UsabilityMetric(db.Model):
    """Usability testing metrics"""
    __tablename__ = 'usability_metrics'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    session_id = db.Column(db.String(100), nullable=False, index=True)
    task_name = db.Column(db.String(100), nullable=False)
    task_completed = db.Column(db.Boolean, default=False)
    time_spent_seconds = db.Column(db.Float)  # Time to complete task
    navigation_path = db.Column(db.Text)  # JSON string of pages visited
    feature_used = db.Column(db.String(100))
    error_encountered = db.Column(db.Boolean, default=False)
    error_description = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, index=True)
    
    def to_dict(self):
        """Convert usability metric to dictionary"""
        return {
            'id': self.id,
            'user_id': self.user_id,
            'session_id': self.session_id,
            'task_name': self.task_name,
            'task_completed': self.task_completed,
            'time_spent_seconds': self.time_spent_seconds,
            'navigation_path': self.navigation_path,
            'feature_used': self.feature_used,
            'error_encountered': self.error_encountered,
            'error_description': self.error_description,
            'timestamp': self.timestamp.isoformat()
        }
