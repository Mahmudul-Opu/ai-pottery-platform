"""
Seed database with sample data for testing
"""
from app import create_app
from models import db, User, ArtisanProfile, Product
from datetime import datetime

app = create_app()

with app.app_context():
    # Clear existing data
    print("Clearing existing data...")
    db.drop_all()
    db.create_all()
    
    # Create artisan user
    print("Creating artisan user...")
    artisan_user = User(
        email='artisan@pottery.com',
        username='artisan_demo',
        role='artisan',
        is_active=True
    )
    artisan_user.set_password('artisan123')
    db.session.add(artisan_user)
    db.session.commit()
    
    # Create artisan profile
    print("Creating artisan profile...")
    artisan_profile = ArtisanProfile(
        user_id=artisan_user.id,
        full_name='Mohammad Rahman',
        phone='+880 1712 345678',
        address='123 Pottery Street, Old Dhaka',
        region='Dhaka',
        specialization='Traditional Terracotta',
        bio='Master potter with 15 years of experience in traditional Bangladeshi pottery. Specializing in terracotta vases and decorative items.',
        years_experience=15
    )
    db.session.add(artisan_profile)
    db.session.commit()
    
    # Create customer user
    print("Creating customer user...")
    customer_user = User(
        email='customer@pottery.com',
        username='customer_demo',
        role='customer',
        is_active=True
    )
    customer_user.set_password('customer123')
    db.session.add(customer_user)
    db.session.commit()
    
    # Create sample products
    print("Creating sample products...")
    products = [
        Product(
            artisan_profile_id=artisan_profile.id,
            name='Traditional Terracotta Vase',
            description='Handcrafted terracotta vase with intricate patterns. Perfect for displaying flowers.',
            category='Vase',
            price=850.00,
            image_url='https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg',
            tags='traditional,terracotta,handmade,vase',
            region='Dhaka',
            stock_quantity=15,
            is_available=True,
            views_count=142,
            sales_count=12
        ),
        Product(
            artisan_profile_id=artisan_profile.id,
            name='Decorative Bowl Set',
            description='Set of 3 decorative bowls with traditional Bengali motifs.',
            category='Bowl',
            price=1100.00,
            image_url='https://images.pexels.com/photos/6045067/pexels-photo-6045067.jpeg',
            tags='bowl,decorative,handmade,set',
            region='Dhaka',
            stock_quantity=8,
            is_available=True,
            views_count=76,
            sales_count=5
        ),
        Product(
            artisan_profile_id=artisan_profile.id,
            name='Traditional Cooking Pot',
            description='Authentic clay cooking pot for traditional Bengali cuisine.',
            category='Pot',
            price=675.00,
            image_url='https://images.pexels.com/photos/3094035/pexels-photo-3094035.jpeg',
            tags='cooking,pot,traditional,clay',
            region='Dhaka',
            stock_quantity=20,
            is_available=True,
            views_count=54,
            sales_count=8
        ),
        Product(
            artisan_profile_id=artisan_profile.id,
            name='Painted Clay Pitcher',
            description='Beautiful hand-painted clay pitcher with colorful designs.',
            category='Pitcher',
            price=920.00,
            image_url='https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg',
            tags='pitcher,painted,decorative,handmade',
            region='Dhaka',
            stock_quantity=12,
            is_available=True,
            views_count=131,
            sales_count=15
        ),
        Product(
            artisan_profile_id=artisan_profile.id,
            name='Artisan Flower Pot',
            description='Medium-sized flower pot perfect for indoor plants.',
            category='Pot',
            price=580.00,
            image_url='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
            tags='flower,pot,plants,handmade',
            region='Dhaka',
            stock_quantity=25,
            is_available=True,
            views_count=89,
            sales_count=10
        )
    ]
    
    for product in products:
        db.session.add(product)
    
    db.session.commit()
    
    print("\n✅ Database seeded successfully!")
    print("\n📝 Test Accounts:")
    print("\nArtisan:")
    print("  Email: artisan@pottery.com")
    print("  Password: artisan123")
    print("\nCustomer:")
    print("  Email: customer@pottery.com")
    print("  Password: customer123")
    print("\n🎯 Products created: 5")
    print("\n🚀 Start the server with: python app.py")
