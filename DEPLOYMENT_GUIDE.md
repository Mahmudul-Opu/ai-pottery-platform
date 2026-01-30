# 🚀 Deployment Guide - AI Pottery Platform

## Deploying to Vercel (Frontend) + Railway (Backend)

This guide will help you deploy your AI pottery platform to production at **https://ai-pottery-platform.vercel.app/**

---

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free)
- ✅ Railway account (free tier available) OR Render/Heroku account
- ✅ Git initialized in your project

---

## 🔧 Step 1: Prepare Your Backend for Deployment

### Option A: Deploy to Railway (Recommended - Easiest)

**1. Create Railway Account**
- Go to https://railway.app/
- Sign up with GitHub

**2. Create New Project**
- Click "New Project"
- Select "Deploy from GitHub repo"
- Connect your GitHub repository
- Select the repository

**3. Configure Backend**
- Railway will auto-detect Python
- Set root directory: `backend`
- Railway will automatically:
  - Install dependencies from `requirements.txt`
  - Run using `Procfile` (web: gunicorn app:app)

**4. Set Environment Variables**
In Railway dashboard, add:
```
SECRET_KEY=your-secret-key-here-change-in-production
JWT_SECRET_KEY=your-jwt-secret-key-change-in-production
DATABASE_URL=sqlite:///pottery_platform.db
FLASK_ENV=production
```

**5. Get Your Backend URL**
- Railway will provide: `https://your-app-name.railway.app`
- Copy this URL - you'll need it for frontend

**6. Update CORS in Backend**
Edit `backend/app.py` to allow your Vercel domain:
```python
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",
            "https://ai-pottery-platform.vercel.app",
            "https://*.vercel.app"
        ]
    }
})
```

---

### Option B: Deploy to Render

**1. Create Render Account**
- Go to https://render.com/
- Sign up with GitHub

**2. Create New Web Service**
- Click "New +"
- Select "Web Service"
- Connect GitHub repository
- Root Directory: `backend`

**3. Configure Service**
- Name: `ai-pottery-backend`
- Environment: `Python 3`
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app`

**4. Environment Variables**
```
SECRET_KEY=your-secret-key
JWT_SECRET_KEY=your-jwt-secret
DATABASE_URL=sqlite:///pottery_platform.db
FLASK_ENV=production
```

**5. Get Backend URL**
- Render provides: `https://ai-pottery-backend.onrender.com`

---

## 🎨 Step 2: Deploy Frontend to Vercel

### Using Vercel CLI (Fastest)

**1. Install Vercel CLI**
```powershell
npm install -g vercel
```

**2. Login to Vercel**
```powershell
vercel login
```

**3. Deploy**
```powershell
# From project root
vercel
```

**4. Set Environment Variable**
When prompted or in Vercel dashboard:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
```

**5. Deploy to Production**
```powershell
vercel --prod
```

Your app will be available at: `https://ai-pottery-platform.vercel.app`

---

### Using Vercel Dashboard (Alternative)

**1. Go to Vercel Dashboard**
- https://vercel.com/dashboard
- Click "Add New" → "Project"

**2. Import Git Repository**
- Connect your GitHub account
- Select your repository
- Vercel auto-detects Next.js

**3. Configure Project**
- Framework Preset: **Next.js**
- Root Directory: `./` (leave as root)
- Build Command: `npm run build` (auto-detected)
- Output Directory: `.next` (auto-detected)

**4. Environment Variables**
Add this variable:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
```

**5. Deploy**
- Click "Deploy"
- Wait 2-3 minutes
- Get your URL: `https://ai-pottery-platform.vercel.app`

---

## 🔐 Step 3: Update Backend CORS

After getting your Vercel URL, update backend to allow requests:

**Edit `backend/app.py`:**
```python
from flask_cors import CORS

# After app = create_app()
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",  # Local development
            "https://ai-pottery-platform.vercel.app",  # Production
            "https://*.vercel.app"  # Preview deployments
        ],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})
```

Redeploy backend after this change.

---

## 🗄️ Step 4: Database Setup (Production)

### For Production, use PostgreSQL instead of SQLite:

**1. Create PostgreSQL Database on Railway**
- In Railway project, click "New"
- Select "Database" → "Add PostgreSQL"
- Copy the `DATABASE_URL`

**2. Update Backend Database Configuration**

Edit `backend/config.py`:
```python
import os

class Config:
    # Use PostgreSQL in production, SQLite in development
    if os.getenv('FLASK_ENV') == 'production':
        SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
        if SQLALCHEMY_DATABASE_URI.startswith('postgres://'):
            SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace('postgres://', 'postgresql://', 1)
    else:
        SQLALCHEMY_DATABASE_URI = 'sqlite:///pottery_platform.db'
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

**3. Add PostgreSQL Driver**

Add to `backend/requirements.txt`:
```
psycopg2-binary==2.9.9
```

**4. Seed Production Database**

Run seed script after deployment:
```powershell
# SSH into Railway or run via Railway CLI
railway run python seed_database.py
```

---

## ✅ Step 5: Verify Deployment

**1. Check Backend Health**
```powershell
curl https://your-backend-url.railway.app/api/products
```

Should return JSON with products.

**2. Check Frontend**
- Visit: https://ai-pottery-platform.vercel.app
- Try logging in with test account
- Navigate to `/design-tool`
- Check `/artisan-dashboard`

**3. Test API Integration**
- Open browser DevTools (F12)
- Go to Network tab
- Login as artisan
- Check API calls go to your Railway backend
- Verify responses return data

---

## 🔧 Troubleshooting

### Frontend Shows "Failed to Fetch"
- ✅ Check `NEXT_PUBLIC_API_URL` is set correctly in Vercel
- ✅ Verify backend is running on Railway
- ✅ Check CORS is configured properly
- ✅ Redeploy frontend after changing environment variables

### Backend Not Responding
- ✅ Check Railway logs for errors
- ✅ Verify `Procfile` exists and is correct
- ✅ Check `requirements.txt` includes `gunicorn`
- ✅ Verify environment variables are set

### Database Errors
- ✅ For production, use PostgreSQL not SQLite
- ✅ Check `DATABASE_URL` is set correctly
- ✅ Run migrations: `flask db upgrade`
- ✅ Seed database with test data

### CORS Errors
- ✅ Add your Vercel URL to CORS origins
- ✅ Include `https://*.vercel.app` for preview deployments
- ✅ Redeploy backend after CORS changes

---

## 📱 Custom Domain (Optional)

### Add Custom Domain to Vercel

**1. Go to Project Settings**
- Select your project
- Go to "Domains"

**2. Add Domain**
- Enter: `ai-pottery-platform.com`
- Follow DNS configuration steps
- Vercel provides nameservers or CNAME records

**3. Update Backend CORS**
Add your custom domain to allowed origins.

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

**Vercel:**
- Automatically deploys on push to `main` branch
- Creates preview URLs for pull requests

**Railway:**
- Automatically deploys on push to `main`
- Can configure different branches

### Workflow:
1. Make changes locally
2. Commit to Git: `git commit -am "Update feature"`
3. Push: `git push origin main`
4. Vercel and Railway auto-deploy
5. Check deployment status in dashboards

---

## 🔒 Security Checklist

Before going live:

- [ ] Change `SECRET_KEY` in production
- [ ] Change `JWT_SECRET_KEY` in production
- [ ] Use PostgreSQL instead of SQLite
- [ ] Enable HTTPS only (Vercel/Railway do this automatically)
- [ ] Set secure CORS origins (not `*`)
- [ ] Review API rate limiting
- [ ] Enable production logging
- [ ] Set up error monitoring (Sentry)
- [ ] Regular database backups

---

## 📊 Monitoring

### Vercel Analytics
- Enable in Vercel dashboard
- View traffic, performance, Core Web Vitals

### Railway Logs
- Access via Railway dashboard
- View backend errors and requests
- Set up alerts for errors

### Application Insights (Optional)
- Add Application Insights for detailed monitoring
- Track API performance
- Monitor error rates

---

## 💰 Cost Estimates

### Free Tier (Development)
- **Vercel:** 100GB bandwidth/month, unlimited deployments
- **Railway:** $5 credit/month, ~500 hours runtime
- **Total:** FREE for small projects

### Production (Low Traffic)
- **Vercel Pro:** $20/month (if exceeding free tier)
- **Railway:** ~$5-15/month for backend
- **Database:** Included in Railway or $7/month PostgreSQL
- **Total:** $0-35/month

---

## 🚀 Quick Deploy Commands

```powershell
# 1. Deploy Backend to Railway
railway login
railway init
railway up

# 2. Get backend URL
railway status

# 3. Update frontend environment
# Set NEXT_PUBLIC_API_URL in Vercel dashboard

# 4. Deploy Frontend to Vercel
vercel --prod

# Done! Your app is live! 🎉
```

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Railway Docs:** https://docs.railway.app
- **Flask Deployment:** https://flask.palletsprojects.com/en/3.0.x/deploying/
- **Next.js Deployment:** https://nextjs.org/docs/deployment

---

## ✨ Your Deployed URLs

After deployment, you'll have:

- **Frontend:** https://ai-pottery-platform.vercel.app
- **Backend API:** https://your-app-name.railway.app/api
- **Admin Dashboard:** https://ai-pottery-platform.vercel.app/artisan-dashboard
- **Design Tool:** https://ai-pottery-platform.vercel.app/design-tool

---

**🎉 Congratulations! Your AI Pottery Platform is now live!**

Test accounts for production:
- Artisan: `artisan@pottery.com` / `artisan123`
- Customer: `customer@pottery.com` / `customer123`

Remember to create real accounts and change default passwords in production! 🔒
