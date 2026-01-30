import random

class MarketingAssistant:
    """Simple AI marketing content generator"""
    
    # Template-based descriptions
    DESCRIPTION_TEMPLATES = {
        'vase': [
            "Beautifully crafted {adjective} vase perfect for displaying fresh flowers. Made with traditional techniques passed down through generations.",
            "This {adjective} vase showcases the artisan's skill in creating functional art. Each piece tells a unique story of craftsmanship.",
            "Handmade {adjective} vase that brings elegance to any space. Perfect for homes and offices."
        ],
        'bowl': [
            "A {adjective} bowl crafted with care and precision. Ideal for serving or as a decorative centerpiece.",
            "Traditional {adjective} bowl made using time-honored methods. Both beautiful and functional.",
            "This {adjective} bowl demonstrates the artisan's mastery of clay shaping techniques."
        ],
        'pot': [
            "Authentic {adjective} pot crafted for everyday use. Strong, durable, and culturally significant.",
            "Traditional {adjective} pot made with locally sourced materials. Perfect for cooking or storage.",
            "Handcrafted {adjective} pot that combines utility with artistic beauty."
        ],
        'plate': [
            "Beautifully designed {adjective} plate perfect for serving traditional meals.",
            "Handmade {adjective} plate that adds cultural charm to your dining table.",
            "Traditional {adjective} plate crafted with attention to detail and quality."
        ],
        'default': [
            "Unique {adjective} pottery piece handcrafted by skilled artisans. Each item is one-of-a-kind.",
            "Traditional {adjective} pottery made with authentic techniques. A perfect addition to your collection.",
            "Handcrafted {adjective} pottery that celebrates our rich cultural heritage."
        ]
    }
    
    ADJECTIVES = [
        'elegant', 'traditional', 'handcrafted', 'beautiful', 'authentic',
        'rustic', 'decorative', 'artistic', 'cultural', 'unique',
        'terracotta', 'glazed', 'painted', 'carved', 'textured'
    ]
    
    CAPTION_TEMPLATES = [
        "🏺 New arrival! Check out this beautiful {product_name}. Handcrafted with love. #HandmadePottery #TraditionalCraft",
        "✨ Introducing our latest creation: {product_name}. Perfect for your home! #ArtisanMade #PotteryArt",
        "🎨 Freshly made {product_name} now available! Support local artisans. #LocalCraft #PotteryLove",
        "💫 Proud to share this {product_name}. Each piece tells a story. #Handcrafted #CulturalHeritage",
        "🌟 Just finished: {product_name}. Made with traditional techniques. #PotteryMaker #ArtisanCraft"
    ]
    
    KEYWORDS_BY_CATEGORY = {
        'vase': ['pottery', 'vase', 'home decor', 'flower holder', 'handmade', 'ceramic', 'traditional'],
        'bowl': ['bowl', 'pottery', 'serving bowl', 'handmade', 'ceramic', 'traditional', 'kitchenware'],
        'pot': ['pot', 'pottery', 'cooking pot', 'storage', 'handmade', 'terracotta', 'traditional'],
        'plate': ['plate', 'pottery', 'dinnerware', 'handmade', 'ceramic', 'serving plate', 'traditional'],
        'default': ['pottery', 'handmade', 'ceramic', 'traditional', 'artisan', 'craft', 'unique']
    }
    
    @staticmethod
    def generate_description(product_name, category='default'):
        """Generate product description"""
        # Determine category key
        category_key = category.lower() if category else 'default'
        
        # Find matching template category
        template_key = 'default'
        for key in MarketingAssistant.DESCRIPTION_TEMPLATES.keys():
            if key in category_key:
                template_key = key
                break
        
        # Select random template and adjective
        template = random.choice(MarketingAssistant.DESCRIPTION_TEMPLATES[template_key])
        adjective = random.choice(MarketingAssistant.ADJECTIVES)
        
        # Generate description
        description = template.format(adjective=adjective)
        description += f" This {product_name.lower()} represents hours of dedicated work and traditional knowledge."
        
        return description
    
    @staticmethod
    def generate_caption(product_name):
        """Generate social media caption"""
        template = random.choice(MarketingAssistant.CAPTION_TEMPLATES)
        return template.format(product_name=product_name)
    
    @staticmethod
    def generate_keywords(product_name, category='default'):
        """Generate SEO keywords"""
        # Determine category key
        category_key = category.lower() if category else 'default'
        
        # Find matching keywords
        keywords_key = 'default'
        for key in MarketingAssistant.KEYWORDS_BY_CATEGORY.keys():
            if key in category_key:
                keywords_key = key
                break
        
        # Get base keywords
        keywords = MarketingAssistant.KEYWORDS_BY_CATEGORY[keywords_key].copy()
        
        # Add product-specific keywords
        keywords.extend([
            'Bangladesh pottery',
            'artisan made',
            'cultural craft',
            'authentic'
        ])
        
        return keywords[:8]  # Return top 8 keywords
    
    @staticmethod
    def generate_all(product_name, category='default'):
        """Generate description, caption, and keywords"""
        return {
            'description': MarketingAssistant.generate_description(product_name, category),
            'caption': MarketingAssistant.generate_caption(product_name),
            'keywords': MarketingAssistant.generate_keywords(product_name, category),
            'note': 'AI-generated content. Please review and edit before using.'
        }
