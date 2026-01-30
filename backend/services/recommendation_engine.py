from models import db, Product, InteractionLog, User
from sqlalchemy import func, and_
from datetime import datetime, timedelta
from collections import Counter

class RecommendationEngine:
    """Content-based recommendation system"""
    
    @staticmethod
    def get_user_preferences(user_id, days=30):
        """Analyze user interactions to determine preferences"""
        cutoff_date = datetime.utcnow() - timedelta(days=days)
        
        # Get user's interaction history
        interactions = InteractionLog.query.filter(
            and_(
                InteractionLog.user_id == user_id,
                InteractionLog.timestamp >= cutoff_date
            )
        ).all()
        
        if not interactions:
            return None
        
        # Extract product IDs
        product_ids = [i.product_id for i in interactions]
        products = Product.query.filter(Product.id.in_(product_ids)).all()
        
        # Analyze preferences
        categories = [p.category for p in products]
        regions = [p.region for p in products if p.region]
        all_tags = []
        for p in products:
            if p.tags:
                all_tags.extend(p.tags.split(','))
        
        return {
            'favorite_categories': Counter(categories).most_common(3),
            'favorite_regions': Counter(regions).most_common(2),
            'favorite_tags': Counter(all_tags).most_common(5),
            'avg_price_range': {
                'min': min([p.price for p in products]),
                'max': max([p.price for p in products])
            }
        }
    
    @staticmethod
    def calculate_similarity_score(product, preferences):
        """Calculate similarity score between product and user preferences"""
        score = 0
        
        # Category match (highest weight)
        if preferences and 'favorite_categories' in preferences:
            for category, count in preferences['favorite_categories']:
                if product.category == category:
                    score += 30 * (count / sum([c[1] for c in preferences['favorite_categories']]))
        
        # Region match
        if preferences and 'favorite_regions' in preferences and product.region:
            for region, count in preferences['favorite_regions']:
                if product.region == region:
                    score += 20 * (count / sum([c[1] for c in preferences['favorite_regions']]))
        
        # Tags match
        if preferences and 'favorite_tags' in preferences and product.tags:
            product_tags = product.tags.split(',')
            for tag, count in preferences['favorite_tags']:
                if tag in product_tags:
                    score += 10 * (count / sum([c[1] for c in preferences['favorite_tags']]))
        
        # Price range match
        if preferences and 'avg_price_range' in preferences:
            price_range = preferences['avg_price_range']
            if price_range['min'] <= product.price <= price_range['max']:
                score += 15
        
        # Popularity boost
        if product.views_count > 0:
            score += min(product.views_count / 100, 10)  # Cap at 10 points
        
        if product.sales_count > 0:
            score += min(product.sales_count / 10, 15)  # Cap at 15 points
        
        return score
    
    @staticmethod
    def get_recommendations(user_id=None, limit=5):
        """Get personalized recommendations for user"""
        
        # Get user preferences
        preferences = None
        if user_id:
            preferences = RecommendationEngine.get_user_preferences(user_id)
        
        # Get all available products
        products = Product.query.filter_by(is_available=True).all()
        
        if not products:
            return []
        
        # If no preferences (new user), return popular products
        if not preferences:
            products = sorted(products, key=lambda p: (p.sales_count * 2 + p.views_count), reverse=True)
            return products[:limit]
        
        # Calculate similarity scores
        product_scores = []
        for product in products:
            score = RecommendationEngine.calculate_similarity_score(product, preferences)
            product_scores.append((product, score))
        
        # Sort by score and return top N
        product_scores.sort(key=lambda x: x[1], reverse=True)
        recommended_products = [p[0] for p in product_scores[:limit]]
        
        return recommended_products
    
    @staticmethod
    def explain_recommendation(product, preferences):
        """Generate explanation for why product was recommended"""
        reasons = []
        
        if not preferences:
            if product.sales_count > 10:
                reasons.append(f"Popular choice with {product.sales_count} sales")
            if product.views_count > 50:
                reasons.append(f"Highly viewed by other customers")
            reasons.append("Featured item for new visitors")
            return " • ".join(reasons[:2]) if reasons else "Recommended for you"
        
        # Category match
        if 'favorite_categories' in preferences:
            for category, _ in preferences['favorite_categories']:
                if product.category == category:
                    reasons.append(f"Matches your interest in {category}")
                    break
        
        # Region match
        if 'favorite_regions' in preferences and product.region:
            for region, _ in preferences['favorite_regions']:
                if product.region == region:
                    reasons.append(f"From {region}, a region you've shown interest in")
                    break
        
        # Tags match
        if 'favorite_tags' in preferences and product.tags:
            product_tags = product.tags.split(',')
            matching_tags = []
            for tag, _ in preferences['favorite_tags']:
                if tag in product_tags:
                    matching_tags.append(tag)
            if matching_tags:
                reasons.append(f"Similar to items you liked ({', '.join(matching_tags[:2])})")
        
        # Price match
        if 'avg_price_range' in preferences:
            price_range = preferences['avg_price_range']
            if price_range['min'] <= product.price <= price_range['max']:
                reasons.append("Within your preferred price range")
        
        # Popularity
        if product.sales_count > 5:
            reasons.append("Popular among other customers")
        
        return " • ".join(reasons[:3]) if reasons else "Recommended based on your browsing history"
