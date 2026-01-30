# 🔄 24/7 Uptime Configuration

## ⚠️ Free Tier Limitations

**Services that SLEEP (avoid for 24/7):**
- ❌ Render Free - Spins down after 15 minutes of inactivity
- ❌ Railway Free - Limited to 500 hours/month (~20 days)
- ❌ Heroku Free - Deprecated

**Services with TRUE 24/7 uptime:**
- ✅ Railway Hobby Plan - $5/month, always on
- ✅ Azure App Service - $13/month, enterprise-grade
- ✅ AWS EC2 t2.micro - Free tier 1 year, then $8/month
- ✅ DigitalOcean App Platform - $5/month

---

## 🚀 Recommended Setup for 24/7

### **Option 1: Railway Hobby (Easiest & Cheapest)** ⭐

**Cost:** $5/month for backend  
**Uptime:** 99.9% guaranteed  
**Setup Time:** 5 minutes

**Steps:**
1. Deploy backend to Railway (see DEPLOYMENT_GUIDE.md)
2. Upgrade to Hobby plan ($5/month)
3. Backend stays running 24/7
4. Vercel frontend (always free, always on)

**Total Cost: $5/month**

---

### **Option 2: Azure App Service (Best for Production)** 

**Cost:** ~$13/month (Basic B1)  
**Uptime:** 99.95% SLA  
**Setup Time:** 10 minutes

**Why Azure:**
- Enterprise-grade reliability
- Built-in monitoring
- Auto-scaling
- Easy CI/CD with GitHub Actions
- Azure Free Trial: $200 credit

**Steps:**

1. **Deploy Backend to Azure App Service**

```powershell
# Install Azure CLI
winget install Microsoft.AzureCLI

# Login
az login

# Create resource group
az group create --name ai-pottery-rg --location southeastasia

# Create App Service plan (B1 - Always On enabled)
az appservice plan create --name pottery-plan --resource-group ai-pottery-rg --sku B1 --is-linux

# Create web app
az webapp create --resource-group ai-pottery-rg --plan pottery-plan --name ai-pottery-backend --runtime "PYTHON:3.11"

# Configure Always On
az webapp config set --resource-group ai-pottery-rg --name ai-pottery-backend --always-on true

# Deploy code
cd backend
az webapp up --runtime PYTHON:3.11 --sku B1 --name ai-pottery-backend
```

2. **Configure Environment Variables**

```powershell
az webapp config appsettings set --resource-group ai-pottery-rg --name ai-pottery-backend --settings \
  SECRET_KEY="your-secret-key" \
  JWT_SECRET_KEY="your-jwt-key" \
  FLASK_ENV="production" \
  SCM_DO_BUILD_DURING_DEPLOYMENT="true"
```

3. **Get Backend URL**
```
https://ai-pottery-backend.azurewebsites.net
```

4. **Deploy Frontend to Vercel**
```powershell
# Set environment variable in Vercel
vercel env add NEXT_PUBLIC_API_URL production
# Enter: https://ai-pottery-backend.azurewebsites.net/api

# Deploy
vercel --prod
```

**Total Cost: $13/month (with $200 free trial)**

---

### **Option 3: DigitalOcean App Platform**

**Cost:** $5/month  
**Uptime:** 99.99%  
**Setup Time:** 10 minutes

**Steps:**

1. Go to https://cloud.digitalocean.com
2. Create new App
3. Connect GitHub repo
4. Select `backend` folder
5. Choose "Python" environment
6. Select $5/month plan
7. Set environment variables
8. Deploy

**Frontend:** Still on Vercel (free)

**Total Cost: $5/month**

---

## 🔧 Keep-Alive Configuration

Even with paid plans, add these to ensure maximum uptime:

### 1. Health Check Endpoint

Your backend already has this at `/api/products`, but let's add a dedicated health check.

### 2. Uptime Monitoring (FREE)

**UptimeRobot** - Free monitoring, pings your site every 5 minutes

1. Go to https://uptimerobot.com (free)
2. Add monitor:
   - Type: HTTP(s)
   - URL: `https://your-backend-url.railway.app/api/products`
   - Interval: 5 minutes
3. Get alerts via email if site goes down

### 3. Cron Job Keep-Alive (for Render Free Tier)

If using Render Free temporarily:

```javascript
// Add to frontend: lib/keep-alive.ts
export function setupKeepAlive(apiUrl: string) {
  // Ping backend every 10 minutes to prevent sleep
  setInterval(async () => {
    try {
      await fetch(`${apiUrl}/products`);
    } catch (error) {
      console.error('Keep-alive ping failed:', error);
    }
  }, 10 * 60 * 1000); // 10 minutes
}

// Call in app/layout.tsx
useEffect(() => {
  setupKeepAlive(process.env.NEXT_PUBLIC_API_URL!);
}, []);
```

---

## 💰 Cost Comparison (Monthly)

| Solution | Backend | Frontend | Database | Total | Uptime |
|----------|---------|----------|----------|-------|--------|
| **Railway Hobby** | $5 | Free | Included | **$5** | 99.9% |
| **Azure App Service** | $13 | Free | Included | **$13** | 99.95% |
| **DigitalOcean** | $5 | Free | Included | **$5** | 99.99% |
| **AWS EC2** | $8* | Free | $8 | **$16** | 99.95% |
| **Render Paid** | $7 | Free | $7 | **$14** | 99.9% |

*Free for first year

---

## 🎯 My Recommendation for You

**For 24/7 uptime at lowest cost:**

### **Railway Hobby Plan - $5/month**

**Why:**
- ✅ Cheapest reliable option
- ✅ Zero-configuration, just deploy
- ✅ Automatic deployments from GitHub
- ✅ Built-in PostgreSQL database
- ✅ 99.9% uptime guarantee
- ✅ No sleep/spin-down issues
- ✅ Easy to upgrade/downgrade

**Steps to Deploy:**

```powershell
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login
railway login

# 3. Deploy backend
cd backend
railway init
railway up

# 4. Add PostgreSQL database
railway add -d postgres

# 5. Upgrade to Hobby plan
# Go to Railway dashboard > Settings > Plan > Upgrade to Hobby ($5/month)

# 6. Get your backend URL
railway domain

# 7. Deploy frontend to Vercel
cd ..
vercel --prod

# Done! Your site runs 24/7 🎉
```

---

## 🔐 Production Checklist for 24/7

Before going live:

- [ ] Upgrade to paid plan (Railway Hobby or Azure B1)
- [ ] Enable "Always On" setting
- [ ] Set up UptimeRobot monitoring
- [ ] Configure production database (PostgreSQL)
- [ ] Set up error logging (Sentry)
- [ ] Enable HTTPS (automatic on all platforms)
- [ ] Configure CORS for your domain
- [ ] Set up automated backups
- [ ] Add health check endpoint
- [ ] Test failover scenarios
- [ ] Set up email alerts for downtime

---

## 📊 Monitoring Your 24/7 Site

### Free Monitoring Tools:

**1. UptimeRobot** (Free)
- https://uptimerobot.com
- Pings every 5 minutes
- Email/SMS alerts

**2. Vercel Analytics** (Free)
- Built into Vercel
- Real-time traffic monitoring
- Core Web Vitals

**3. Railway Metrics** (Included)
- CPU/Memory usage
- Request logs
- Error tracking

**4. Azure Monitor** (If using Azure)
- Application Insights
- Performance metrics
- Custom alerts

---

## 🚨 Troubleshooting 24/7 Issues

### Site Still Goes Down?

**Check:**
1. ✅ Upgraded to paid plan?
2. ✅ "Always On" enabled?
3. ✅ Database connection stable?
4. ✅ No memory leaks in code?
5. ✅ CORS configured correctly?

**Common Issues:**

**Backend sleeps after 15 min:**
- You're on free tier → Upgrade to paid

**High response time:**
- Database too slow → Use PostgreSQL, not SQLite
- Need caching → Add Redis

**Random crashes:**
- Memory overflow → Check logs
- Database connection pool → Configure SQLAlchemy

---

## 🎉 Quick Deploy for 24/7 (5 Minutes)

```powershell
# 1. Deploy backend to Railway
railway login
cd backend
railway init
railway up

# 2. Upgrade to Hobby plan in Railway dashboard
# Settings > Plan > Hobby ($5/month)

# 3. Get backend URL
$BACKEND_URL = railway domain

# 4. Deploy frontend to Vercel
cd ..
vercel --prod
# When asked for NEXT_PUBLIC_API_URL, paste Railway URL with /api

# 5. Set up monitoring
# Go to uptimerobot.com and add your Railway URL

# ✅ Done! Your site is now running 24/7!
```

---

## 📞 Support

- **Railway:** https://railway.app/help
- **Azure:** https://azure.microsoft.com/support
- **Vercel:** https://vercel.com/support

---

**🎯 Bottom Line:**

For **$5/month**, Railway Hobby gives you:
- ✅ True 24/7 uptime (no sleep)
- ✅ PostgreSQL database included
- ✅ Automatic deployments
- ✅ 99.9% SLA
- ✅ Your site at https://ai-pottery-platform.vercel.app running 24/7

**Ready to deploy?** Follow the "Quick Deploy for 24/7" section above! 🚀
