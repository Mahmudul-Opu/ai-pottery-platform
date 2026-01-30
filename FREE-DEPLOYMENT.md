# 🆓 FREE 24/7 Deployment Guide

## 💰 Cost: $0/month

Your AI pottery platform running 24/7 with **ZERO COST** using free tiers + keep-alive tricks.

---

## 🎯 Free Services Stack

| Service | Purpose | Free Tier | Limitation |
|---------|---------|-----------|------------|
| **Render** | Backend hosting | 750 hours/month | Sleeps after 15 min (fixable) |
| **Vercel** | Frontend hosting | Unlimited | 100GB bandwidth |
| **UptimeRobot** | Keep-alive pings | 50 monitors | 5-minute intervals |
| **Cron-job.org** | Backup pings | Unlimited crons | 1-minute intervals |
| **Render DB** | PostgreSQL | 90 days free | 1GB storage |

---

## 🚀 Automated Deployment (Easiest)

```powershell
# Run the free deployment script
python deploy-free-24-7.py
```

This script will:
1. ✅ Guide you through Render backend setup
2. ✅ Deploy frontend to Vercel (free)
3. ✅ Configure keep-alive monitoring (UptimeRobot + Cron-job)
4. ✅ Set up environment variables
5. ✅ Test your deployment

**Total time:** 15 minutes  
**Total cost:** $0

---

## 📋 Manual Deployment Steps

### Step 1: Deploy Backend to Render (FREE)

**1. Sign up for Render**
- Go to https://render.com
- Sign up with GitHub (free)

**2. Create Web Service**
- Click "New +" → "Web Service"
- Connect your GitHub repository
- Or "Deploy from GitHub repo" and select your repo

**3. Configure Service**
```
Name:              ai-pottery-backend
Root Directory:    backend
Environment:       Python 3
Build Command:     pip install -r requirements.txt
Start Command:     gunicorn app:app
Branch:            main
Plan:              FREE ⭐ (Important!)
```

**4. Add Environment Variables**
```
SECRET_KEY         = your-secret-key-change-this
JWT_SECRET_KEY     = your-jwt-secret-change-this
FLASK_ENV          = production
```

**5. Deploy**
- Click "Create Web Service"
- Wait 3-5 minutes for first deployment
- Get your URL: `https://your-app-name.onrender.com`

---

### Step 2: Deploy Frontend to Vercel (FREE)

**Option A: Vercel CLI (Fastest)**
```powershell
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy with environment variable
vercel --prod
```

When prompted, set:
```
NEXT_PUBLIC_API_URL = https://your-app-name.onrender.com/api
```

**Option B: Vercel Dashboard**
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Framework: Next.js (auto-detected)
4. Add Environment Variable:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://your-app-name.onrender.com/api`
5. Click Deploy

---

### Step 3: Set Up FREE Keep-Alive (Critical!)

#### ⚠️ Why Keep-Alive?
Render free tier **sleeps after 15 minutes** of inactivity. Keep-alive prevents this by pinging your backend every few minutes.

#### Option 1: UptimeRobot (Recommended) ⭐

**1. Sign Up**
- Go to https://uptimerobot.com/signUp
- Create free account

**2. Add Monitor**
```
Monitor Type:      HTTP(s)
Friendly Name:     AI Pottery Backend
URL:               https://your-app-name.onrender.com/api/health
Monitoring Interval: 5 minutes
Alert Contact:     Your email
```

**3. Save**
- Your backend will be pinged every 5 minutes
- Backend stays awake 24/7! ✅

#### Option 2: Cron-job.org (Backup)

**1. Sign Up**
- Go to https://cron-job.org/en/signup/
- Create free account

**2. Create Cronjob**
```
Title:             Pottery Keep-Alive
URL:               https://your-app-name.onrender.com/api/ping
Execution:         */10 * * * * (Every 10 minutes)
Enable:            Yes
```

**3. Save**
- Backup keep-alive activated! ✅

#### Best Practice: Use BOTH
- UptimeRobot: Primary (5 min intervals)
- Cron-job.org: Backup (10 min intervals)
- Result: Backend never sleeps! 🎉

---

### Step 4: Configure CORS

Update `backend/app.py` to allow your Vercel domain:

```python
from flask_cors import CORS

# After app = create_app()
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",
            "https://ai-pottery-platform.vercel.app",
            "https://*.vercel.app"
        ],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})
```

Commit and push to GitHub - Render will auto-deploy.

---

### Step 5: Seed Database

**Option A: Render Dashboard Shell**
1. Go to your Render dashboard
2. Click your web service
3. Go to "Shell" tab
4. Run:
```bash
python seed_database.py
```

**Option B: Temporary Database Seeding**
Add this to your `backend/app.py` after `db.create_all()`:

```python
# One-time database seeding (remove after first run)
from seed_database import seed_all_data
with app.app_context():
    seed_all_data()
```

Deploy, then remove this code and redeploy.

---

## ✅ Verification

### Test Backend
```powershell
# Check health
curl https://your-app-name.onrender.com/api/health

# Check products
curl https://your-app-name.onrender.com/api/products
```

### Test Frontend
1. Visit: `https://ai-pottery-platform.vercel.app`
2. Login: `artisan@pottery.com` / `artisan123`
3. Try design tool: `/design-tool`
4. Check dashboard: `/artisan-dashboard`

---

## 📊 Free Tier Limits

### Render Free
- ✅ 750 hours/month (= full month with keep-alive)
- ✅ 512MB RAM
- ✅ 0.1 CPU
- ✅ Unlimited bandwidth
- ⚠️ Cold start: ~30 seconds after inactivity
- ⚠️ Resets monthly

### Vercel Free
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Zero cold starts

### UptimeRobot Free
- ✅ 50 monitors
- ✅ 5-minute intervals
- ✅ Email alerts
- ✅ Public status pages

---

## 💡 Performance Tips

### Cold Start Optimization
```python
# backend/app.py - Add warming endpoint
@app.route('/warm')
def warm():
    return 'warmed', 200
```

Configure UptimeRobot to ping `/warm` instead of `/api/health`.

### Database Optimization
Use SQLite for free tier:
```python
# backend/config.py
SQLALCHEMY_DATABASE_URI = 'sqlite:///pottery_platform.db'
```

For production with PostgreSQL:
- Render Free DB: 90 days free trial
- After trial: Switch to paid ($7/month) or Railway free ($5 credit)

---

## 🔧 Troubleshooting

### "Backend not responding"
**Cause:** Cold start (first request after 15+ min inactivity)  
**Solution:** Wait 30-60 seconds for backend to wake up  
**Prevention:** Set up keep-alive with UptimeRobot

### "CORS error"
**Cause:** Vercel URL not in CORS allowed origins  
**Solution:** Update `backend/app.py` CORS settings, commit & push

### "Database empty"
**Cause:** Database not seeded  
**Solution:** Run `python seed_database.py` in Render shell

### "API calls failing"
**Cause:** Wrong API URL in frontend  
**Solution:** Check `.env.production` has correct Render URL

---

## 🚨 Important: Free Tier Sustainability

### When to Upgrade?

**Stay on Free Tier if:**
- ✅ Low traffic (< 100 daily users)
- ✅ Cold starts acceptable (30 seconds)
- ✅ 750 hours/month sufficient
- ✅ Learning/portfolio project

**Upgrade to Paid if:**
- ❌ High traffic (100+ daily users)
- ❌ Need instant response times
- ❌ Exceeding 750 hours/month
- ❌ Production business application

**Paid Options:**
- Render: $7/month (starter)
- Railway: $5/month (hobby)
- Azure: $13/month (B1, includes $200 trial)

---

## 📈 Monitoring Your Free Tier

### Render Dashboard
- View logs: Real-time backend logs
- Metrics: CPU, memory, bandwidth usage
- Hours used: Check monthly limit progress

### Vercel Analytics
- Enable in project settings (free)
- View traffic, page views
- Core Web Vitals

### UptimeRobot
- Uptime percentage
- Response time graphs
- Downtime alerts

---

## 🎉 Success Checklist

- [ ] Backend deployed on Render (free tier)
- [ ] Frontend deployed on Vercel (free tier)
- [ ] UptimeRobot monitoring configured (5 min)
- [ ] Cron-job.org backup configured (10 min)
- [ ] CORS configured for Vercel domain
- [ ] Database seeded with test data
- [ ] Environment variables set correctly
- [ ] Site accessible at https://ai-pottery-platform.vercel.app
- [ ] Backend responds at https://your-app.onrender.com/api/health
- [ ] Keep-alive preventing sleep
- [ ] Email alerts configured for downtime

---

## 💰 Total Cost Breakdown

```
Backend (Render Free):        $0/month
Frontend (Vercel Free):       $0/month
Database (Render/SQLite):     $0/month
Keep-Alive (UptimeRobot):     $0/month
Keep-Alive (Cron-job.org):    $0/month
Domain (Vercel subdomain):    $0/month
SSL Certificate:              $0/month (auto)
CDN (Vercel):                 $0/month
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL:                        $0/month ✅
```

---

## 🚀 Quick Deploy Command

```powershell
# One command to deploy everything
python deploy-free-24-7.py
```

**That's it!** Your site runs 24/7 for **FREE**! 🎉

---

## 📞 Support

- **Render:** https://render.com/docs
- **Vercel:** https://vercel.com/docs
- **UptimeRobot:** https://uptimerobot.com/faq

---

**🎯 Bottom Line:**

You get a **fully functional 24/7 website** at **$0/month** with:
- ✅ Professional domain (Vercel subdomain)
- ✅ HTTPS/SSL (automatic)
- ✅ Global CDN (Vercel)
- ✅ Keep-alive monitoring (UptimeRobot)
- ✅ Automatic deployments (Git push)
- ✅ 99% uptime (with keep-alive)

**Ready to deploy?** Run `python deploy-free-24-7.py` now! 🚀
