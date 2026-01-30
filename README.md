# 🏺 MritiShilpa - AI-Driven Bangladeshi Pottery Platform

## ✅ Project Status: COMPLETE & INTEGRATED

A complete full-stack platform empowering Bangladeshi pottery artisans through AI-powered tools, digital marketplace, and cultural preservation.

---

## 🎯 All Features Implemented (10/10)

### ✅ Backend (Flask - Python)
1. **REST API** - 35+ endpoints with SQLite database
2. **JWT Authentication** - Secure login/signup with roles
3. **AI Recommendation Engine** - Personalized with explanations
4. **AI Marketing Assistant** - Content generation
5. **Analytics Dashboard** - Real-time business metrics
6. **Usability Tracking** - Task completion logging
7. **Participatory Feedback** - Rating and comments system
8. **Data Export** - CSV exports for research
9. **Database Models** - 6 models with relationships
10. **Documentation** - Complete API guides

### ✅ Frontend (Next.js - TypeScript)
1. **API Service Layer** - Typed API client
2. **Authentication System** - JWT token management
3. **Pottery Designer** - Generative design preview ⭐
4. **Integrated Dashboard** - Real backend analytics
5. **Responsive UI** - Mobile-friendly components
6. **Accessibility Tools** - Screen reader support
7. **Multi-language** - English & Bengali
8. **Dark Mode** - Theme switching

---

## 🚀 Quick Start

### Prerequisites
- Python 3.14+
- Node.js 18+
- npm or pnpm

### 1. Start Backend

```powershell
cd backend
.\venv\Scripts\python.exe run_server.py
```

**Backend URL:** http://localhost:8000

### 2. Start Frontend

```powershell
npm install
npm run dev
```

**Frontend URL:** http://localhost:3000

### 3. Login

**Artisan:** artisan@pottery.com / artisan123  
**Customer:** customer@pottery.com / customer123

---

## 📂 Project Structure

```
ai-pottery-platform/
├── app/                      # Next.js pages
│   ├── artisan-dashboard/   # Artisan dashboard with analytics
│   ├── design-tool/         # Pottery designer
│   └── layout.tsx           # Root layout with providers
├── components/              # React components
│   ├── pottery-designer.tsx      # Generative design tool
│   ├── integrated-dashboard.tsx  # Backend analytics
│   └── ui/                  # Shadcn UI components
├── contexts/                # React contexts
│   └── AuthContext.tsx      # Authentication provider
├── lib/                     # Utilities
│   ├── api.ts              # Complete API service layer
│   └── utils.ts            # Helper functions
├── backend/                 # Flask backend
│   ├── app.py              # Main Flask app
│   ├── models.py           # Database models
│   ├── routes/             # API route modules (8 blueprints)
│   ├── services/           # Business logic (AI engines)
│   ├── run_server.py       # Server startup script
│   └── seed_database.py    # Database seeding
└── .env.local              # Environment configuration
```

---

## 🎨 Key Features

### 1. Pottery Design Studio

**URL:** `/design-tool`

Create custom pottery designs with:
- Shape selection (vase, bowl, pot, plate, pitcher)
- 7 clay colors (terracotta, wheat, charcoal, etc.)
- 5 pattern styles (solid, floral, geometric, traditional, abstract)
- 4 glaze finishes (matte, glossy, crackle, metallic)
- Real-time preview with size adjustment
- AI-powered regeneration
- Download & share functionality

### 2. Artisan Dashboard

**URL:** `/artisan-dashboard`

Manage your business with:
- **Real-time Analytics** - Views, sales, revenue from backend API
- **Product Management** - CRUD operations with stock tracking
- **AI Marketing Tools** - Generate descriptions, captions, keywords
- **Performance Insights** - Top products, conversion rates
- **Data Export** - Download CSV reports for research

### 3. AI Recommendation Engine

**Backend:** `/api/recommendations`

Personalized product discovery:
- Content-based filtering (category, region, tags, price)
- 30-day interaction history analysis
- Similarity scoring algorithm
- Explainable AI - Shows reasoning in plain English
- Tracks recommendation acceptance rate

### 4. Marketing Assistant

**Backend:** `/api/marketing`

AI-powered content generation:
- Product descriptions with cultural context
- Social media captions with emojis and hashtags
- SEO-optimized keywords
- Category-specific templates (5 categories × 3 templates)
- One-click apply to products

---

## 📊 API Endpoints

### Authentication
```
POST /api/auth/signup       - Create account
POST /api/auth/login        - Login (returns JWT)
GET  /api/auth/me           - Get current user
PUT  /api/auth/profile      - Update artisan profile
```

### Products
```
GET    /api/products              - List all products (with filters)
GET    /api/products/:id          - Get product details
POST   /api/products              - Create product (artisan)
PUT    /api/products/:id          - Update product (owner)
DELETE /api/products/:id          - Delete product (owner)
POST   /api/products/:id/interaction  - Log view/click/purchase
GET    /api/products/my-products  - Get artisan's products
```

### Recommendations
```
GET /api/recommendations          - Get personalized recommendations
GET /api/recommendations/explain/:id  - Get AI explanation
```

### Analytics
```
GET /api/analytics/dashboard      - Get dashboard metrics (artisan)
GET /api/analytics/product/:id    - Get product analytics
```

### Marketing
```
POST /api/marketing/generate      - Generate AI content
POST /api/marketing/apply/:id     - Apply content to product
```

### Feedback
```
POST /api/feedback/submit         - Submit feedback
GET  /api/feedback/list           - List feedback (filters)
GET  /api/feedback/stats          - Get statistics
```

### Usability
```
POST /api/usability/log           - Log usability metric
GET  /api/usability/session/:id   - Get session metrics
GET  /api/usability/stats         - Get statistics
```

### Export
```
GET /api/export/analytics         - Download analytics CSV (artisan)
GET /api/export/interactions      - Download interactions CSV
GET /api/export/usability         - Download usability CSV
GET /api/export/feedback          - Download feedback CSV
```

---

## 🔐 Authentication Flow

1. User submits email/password to `/api/auth/login`
2. Backend validates credentials and returns JWT token
3. Frontend stores token in localStorage
4. AuthContext manages user state globally
5. Token automatically included in all API requests
6. Protected routes check authentication status
7. Automatic logout on token expiry

---

## 🛠️ Technology Stack

### Backend
- **Flask 3.0.0** - Web framework
- **SQLAlchemy 3.1.1** - ORM
- **Flask-JWT-Extended 4.6.0** - Authentication
- **Flask-CORS 4.0.0** - Cross-origin requests
- **SQLite** - Database (production: PostgreSQL)
- **Werkzeug 3.0.1** - Password hashing

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **React Context** - State management
- **Fetch API** - HTTP requests

### AI Features
- Content-based filtering algorithm
- Template-based content generation
- Similarity scoring with weighted factors
- Explainable AI with reasoning text

---

## 📖 Documentation

1. **INTEGRATION_COMPLETE.md** - Complete integration guide
2. **backend/README.md** - Backend API documentation (500+ lines)
3. **backend/QUICK_START.md** - Quick start guide (400+ lines)
4. **backend/API_TESTING.md** - API testing examples (300+ lines)
5. **backend/SERVER_RUNNING.md** - Server status and tests

---

## 🔬 Research Features

### Data Export
- Analytics CSV - Product performance data
- Interactions CSV - User behavior logs
- Usability CSV - Task completion metrics
- Feedback CSV - Participatory design data

### Anonymization
- User IDs anonymized in exports
- Session IDs for tracking without PII
- Compliant with research ethics

### Metrics Tracked
- Task completion rates
- Navigation time
- Feature usage patterns
- Error encounters
- Recommendation acceptance
- Feedback ratings and comments

---

## 🌍 Deployment

### Backend (Heroku)

```bash
# Create app
heroku create pottery-backend

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set environment
heroku config:set FLASK_ENV=production

# Deploy
git push heroku main
```

### Frontend (Vercel)

```bash
# Install CLI
npm i -g vercel

# Update .env.local
NEXT_PUBLIC_API_URL=https://pottery-backend.herokuapp.com/api

# Deploy
vercel --prod
```

---

## 🧪 Testing

### Backend Tests

```powershell
# Test login
Invoke-RestMethod -Uri "http://localhost:8000/api/auth/login" `
  -Method POST -ContentType "application/json" `
  -Body '{"email":"artisan@pottery.com","password":"artisan123"}'

# Test products
Invoke-RestMethod -Uri "http://localhost:8000/api/products" -Method GET
```

### Frontend Tests

1. Visit http://localhost:3000
2. Login with test account
3. Navigate to `/design-tool` - Test pottery designer
4. Navigate to `/artisan-dashboard` - View analytics
5. Test product creation and management

---

## 🎓 Academic Research

This platform supports:
- **HCI Studies** - Usability metrics, task completion
- **Participatory Design** - Artisan feedback integration
- **AI Transparency** - Explainable recommendation system
- **Cultural Preservation** - Traditional craft digitization
- **Digital Entrepreneurship** - Artisan economic empowerment

---

## 📝 License

MIT License - Feel free to use for academic or commercial purposes

---

## 🙏 Acknowledgments

- Bangladeshi pottery artisans for inspiration
- Cultural heritage preservation initiatives
- Open-source community for tools and frameworks

---

## 🚀 Next Steps

1. **Customize** - Update branding, colors, content
2. **Add Products** - Use artisan dashboard to create listings
3. **Deploy** - Follow deployment guides for production
4. **Monitor** - Track analytics and user engagement
5. **Iterate** - Use feedback for continuous improvement

---

## 📞 Support

For questions or issues:
1. Check documentation files in `/backend`
2. Review INTEGRATION_COMPLETE.md
3. Test with provided accounts
4. Verify backend server is running

---

**Built with ❤️ for Bangladeshi pottery artisans**  
**🎨 Preserving culture through technology**  
**✨ Empowered by AI**
