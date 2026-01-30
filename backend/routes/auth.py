from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models import db, User, ArtisanProfile
from datetime import datetime

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    """Register a new user"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['email', 'username', 'password', 'role']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Check if user already exists
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email already registered'}), 400
        
        if User.query.filter_by(username=data['username']).first():
            return jsonify({'error': 'Username already taken'}), 400
        
        # Validate role
        if data['role'] not in ['artisan', 'customer']:
            return jsonify({'error': 'Invalid role. Must be artisan or customer'}), 400
        
        # Create new user
        user = User(
            email=data['email'],
            username=data['username'],
            role=data['role']
        )
        user.set_password(data['password'])
        
        db.session.add(user)
        db.session.commit()
        
        # Create artisan profile if role is artisan
        if data['role'] == 'artisan':
            artisan_profile = ArtisanProfile(
                user_id=user.id,
                full_name=data.get('full_name', ''),
                region=data.get('region', ''),
                specialization=data.get('specialization', '')
            )
            db.session.add(artisan_profile)
            db.session.commit()
        
        # Generate JWT token
        access_token = create_access_token(identity=user.id)
        
        return jsonify({
            'message': 'User registered successfully',
            'access_token': access_token,
            'user': user.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@auth_bp.route('/login', methods=['POST'])
def login():
    """Login user"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if 'email' not in data or 'password' not in data:
            return jsonify({'error': 'Email and password required'}), 400
        
        # Find user
        user = User.query.filter_by(email=data['email']).first()
        
        if not user or not user.check_password(data['password']):
            return jsonify({'error': 'Invalid email or password'}), 401
        
        if not user.is_active:
            return jsonify({'error': 'Account is deactivated'}), 403
        
        # Generate JWT token
        access_token = create_access_token(identity=user.id)
        
        # Get artisan profile if exists
        artisan_profile = None
        if user.role == 'artisan' and user.artisan_profile:
            artisan_profile = user.artisan_profile.to_dict()
        
        return jsonify({
            'message': 'Login successful',
            'access_token': access_token,
            'user': user.to_dict(),
            'artisan_profile': artisan_profile
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@auth_bp.route('/me', methods=['GET'])
@jwt_required()
def get_current_user():
    """Get current logged in user"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        # Get artisan profile if exists
        artisan_profile = None
        if user.role == 'artisan' and user.artisan_profile:
            artisan_profile = user.artisan_profile.to_dict()
        
        return jsonify({
            'user': user.to_dict(),
            'artisan_profile': artisan_profile
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@auth_bp.route('/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    """Update artisan profile"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.role != 'artisan':
            return jsonify({'error': 'Only artisans can update profile'}), 403
        
        data = request.get_json()
        profile = user.artisan_profile
        
        # Update profile fields
        if 'full_name' in data:
            profile.full_name = data['full_name']
        if 'phone' in data:
            profile.phone = data['phone']
        if 'address' in data:
            profile.address = data['address']
        if 'region' in data:
            profile.region = data['region']
        if 'specialization' in data:
            profile.specialization = data['specialization']
        if 'bio' in data:
            profile.bio = data['bio']
        if 'years_experience' in data:
            profile.years_experience = data['years_experience']
        if 'profile_image' in data:
            profile.profile_image = data['profile_image']
        
        profile.updated_at = datetime.utcnow()
        db.session.commit()
        
        return jsonify({
            'message': 'Profile updated successfully',
            'profile': profile.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
