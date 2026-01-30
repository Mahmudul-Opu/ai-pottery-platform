# AI Pottery Platform Backend

## Features Implemented

### ✅ Step 1-10: All Requirements Complete

1. **Flask Backend with REST API** - Complete
2. **User Authentication** - JWT-based with role-based access (artisan/customer)
3. **AI Recommendations** - Content-based filtering with explainable AI
4. **Product Management** - Full CRUD operations
5. **AI Marketing Assistant** - Auto-generate descriptions, captions, keywords
6. **Analytics Dashboard** - Views, clicks, sales, revenue tracking
7. **Usability Metrics** - Task completion, navigation time, feature usage
8. **Participatory Design** - Feedback collection with ratings
9. **Explainable AI** - Clear reasoning for recommendations
10. **Data Export** - CSV exports for research analysis

## Installation

```bash
# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

## API Endpoints

### Authentication (`/api/auth`)
- `POST /signup` - Register new user (artisan or customer)
- `POST /login` - Login and get JWT token
- `GET /me` - Get current user info (requires JWT)
- `PUT /profile` - Update artisan profile (requires JWT)

### Products (`/api/products`)
- `GET /` - List all products (with filters: category, region, search)
- `GET /<id>` - Get single product
- `POST /` - Create product (artisan only)
- `PUT /<id>` - Update product (artisan only)
- `DELETE /<id>` - Delete product (artisan only)
- `GET /my-products` - Get logged-in artisan's products
- `POST /<id>/interaction` - Log user interaction

### Recommendations (`/api/recommendations`)
- `GET /` - Get personalized recommendations (with AI explanations)
- `GET /explain/<id>` - Get explanation for specific product

### Marketing (`/api/marketing`)
- `POST /generate` - Generate AI marketing content (artisan only)
- `POST /apply/<id>` - Apply AI content to product (artisan only)

### Analytics (`/api/analytics`)
- `GET /dashboard` - Get dashboard analytics (artisan only)
- `GET /product/<id>` - Get product-specific analytics (artisan only)

### Feedback (`/api/feedback`)
- `POST /submit` - Submit participatory design feedback
- `GET /list` - List all feedback (requires JWT)
- `GET /stats` - Get feedback statistics (requires JWT)

### Usability (`/api/usability`)
- `POST /log` - Log usability metric
- `GET /session/<id>` - Get metrics for specific session
- `GET /stats` - Get usability statistics

### Export (`/api/export`)
- `GET /analytics` - Export analytics as CSV (artisan only)
- `GET /interactions` - Export interaction logs as CSV
- `GET /usability` - Export usability metrics as CSV
- `GET /feedback` - Export feedback as CSV

## Database Models

- **User** - Email, username, password, role (artisan/customer)
- **ArtisanProfile** - Full name, region, specialization, bio, etc.
- **Product** - Name, description, price, category, tags, AI content
- **InteractionLog** - User interactions (view, click, save, purchase)
- **FeedbackLog** - User feedback for participatory design
- **UsabilityMetric** - Task completion, time, navigation, errors

## Configuration

Edit `.env` file:
```
SECRET_KEY=your-secret-key
JWT_SECRET_KEY=your-jwt-secret
DATABASE_URL=sqlite:///pottery_platform.db
FLASK_ENV=development
```

## Testing Accounts

### Artisan
```json
{
  "email": "artisan@pottery.com",
  "username": "artisan_demo",
  "password": "artisan123",
  "role": "artisan",
  "full_name": "Mohammad Rahman",
  "region": "Dhaka"
}
```

### Customer
```json
{
  "email": "customer@pottery.com",
  "username": "customer_demo",
  "password": "customer123",
  "role": "customer"
}
```

## AI Features Explained

### 1. Recommendation Engine
- **Content-based filtering** using category, region, tags
- **Personalization** based on user interaction history
- **Explainable AI** - Shows why each product was recommended
- Example: "Matches your interest in vases • From Dhaka, a region you've shown interest in"

### 2. Marketing Assistant
- **Auto-generates** product descriptions with cultural context
- **Creates** social media captions with hashtags
- **Suggests** SEO keywords for better discoverability
- **Editable** by artisans before publishing

### 3. Analytics System
- Tracks **views, clicks, sales, revenue**
- Calculates **recommendation acceptance rate**
- Shows **product performance** rankings
- Monitors **visitor behavior**

### 4. Usability Tracking
- Logs **task completion** success/failure
- Measures **time spent** on tasks
- Records **navigation paths**
- Tracks **feature usage** frequency
- Captures **errors** encountered

## Research Data Export

All data can be exported as CSV for academic research:
- **Anonymized** user data (no personal info leaked)
- **Timestamped** for temporal analysis
- **Complete metrics** for evaluation
- **Ready for statistical analysis**

## CORS Configuration

Frontend can connect from:
- Development: `http://localhost:3000`
- Production: Your Vercel URL

Update CORS settings in `app.py` if needed.

## Database

SQLite database `pottery_platform.db` is created automatically on first run.

For production, switch to PostgreSQL by updating `DATABASE_URL` in `.env`:
```
DATABASE_URL=postgresql://user:password@localhost/pottery_platform
```

## Port

Backend runs on **http://localhost:5000**

## Next Steps

1. Start backend server: `python app.py`
2. Update Next.js frontend to connect to backend API
3. Add environment variable in frontend: `NEXT_PUBLIC_API_URL=http://localhost:5000/api`
4. Test all endpoints with Postman or frontend
5. Deploy to production (Heroku, Railway, etc.)

## Academic Features

✅ **Participatory Design** - User feedback collection  
✅ **Usability Testing** - Comprehensive metrics logging  
✅ **Explainable AI** - Transparent recommendation reasoning  
✅ **Data Export** - Research-ready CSV files  
✅ **Ethical Considerations** - Anonymized data, user consent  

## Support

For issues or questions, check the code comments or API documentation above.
