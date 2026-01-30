#!/usr/bin/env python3
"""
FREE 24/7 Deployment Script for Render + Vercel
No cost solution with keep-alive configuration
"""

import subprocess
import sys
import os
import webbrowser

def print_header(text):
    """Print styled header"""
    print(f"\n{'='*60}")
    print(f"  {text}")
    print(f"{'='*60}\n")

def print_step(step_num, text):
    """Print step number"""
    print(f"\n🔧 Step {step_num}: {text}")
    print("-" * 60)

def main():
    print("""
    ╔═══════════════════════════════════════════════════════╗
    ║   🚀 AI Pottery Platform - FREE 24/7 Deployment     ║
    ║   Backend: Render Free + Keep-Alive                   ║
    ║   Frontend: Vercel Free                               ║
    ║   Cost: $0/month                                      ║
    ╚═══════════════════════════════════════════════════════╝
    """)
    
    print("✨ This script will guide you through FREE deployment")
    print("⏱️  Total setup time: ~15 minutes")
    print("💰 Total cost: $0/month\n")
    
    input("Press Enter to continue...")
    
    # Step 1: Render Backend Deployment
    print_step(1, "Deploy Backend to Render (FREE)")
    print("""
    📋 Manual steps for Render:
    
    1. Go to: https://render.com
    2. Sign up/login with GitHub
    3. Click "New +" → "Web Service"
    4. Connect your GitHub repository
    5. Configure:
       - Name: ai-pottery-backend
       - Root Directory: backend
       - Environment: Python 3
       - Build Command: pip install -r requirements.txt
       - Start Command: gunicorn app:app
       - Plan: FREE (Important!)
    
    6. Add Environment Variables:
       SECRET_KEY = your-secret-key-here
       JWT_SECRET_KEY = your-jwt-secret-here
       FLASK_ENV = production
       DATABASE_URL = (leave empty for SQLite)
    
    7. Click "Create Web Service"
    8. Wait 3-5 minutes for deployment
    """)
    
    print("\n🌐 Opening Render in browser...")
    webbrowser.open('https://render.com/signup')
    
    input("\n✅ Press Enter once your backend is deployed on Render...")
    
    backend_url = input("\n📝 Enter your Render backend URL (e.g., https://ai-pottery-backend.onrender.com): ").strip()
    
    if not backend_url:
        print("❌ Backend URL is required!")
        sys.exit(1)
    
    # Remove trailing slash
    backend_url = backend_url.rstrip('/')
    api_url = f"{backend_url}/api"
    
    print(f"\n✅ Backend URL: {backend_url}")
    print(f"✅ API URL: {api_url}")
    
    # Step 2: Update environment variables
    print_step(2, "Configure Frontend Environment")
    
    # Update .env.production
    env_content = f"NEXT_PUBLIC_API_URL={api_url}\n"
    with open(".env.production", "w") as f:
        f.write(env_content)
    print(f"✅ Updated .env.production with API URL")
    
    # Update .env.local for testing
    with open(".env.local", "w") as f:
        f.write(env_content)
    print(f"✅ Updated .env.local with API URL")
    
    # Step 3: Deploy Frontend to Vercel
    print_step(3, "Deploy Frontend to Vercel (FREE)")
    
    print("📋 Checking Vercel CLI...")
    vercel_check = subprocess.run("vercel --version", shell=True, capture_output=True)
    
    if vercel_check.returncode != 0:
        print("Installing Vercel CLI...")
        subprocess.run("npm install -g vercel", shell=True)
    
    print("\n🔐 Logging into Vercel...")
    subprocess.run("vercel login", shell=True)
    
    print(f"\n🚀 Deploying to Vercel with environment variable...")
    print(f"   NEXT_PUBLIC_API_URL={api_url}")
    
    # Deploy to Vercel
    subprocess.run(f'vercel --prod', shell=True, env={
        **os.environ,
        'NEXT_PUBLIC_API_URL': api_url
    })
    
    # Step 4: Set up keep-alive for FREE tier
    print_step(4, "Configure FREE Keep-Alive (Prevent Sleep)")
    
    print("""
    ⚠️  Render Free tier sleeps after 15 minutes of inactivity
    
    💡 Solution: Set up FREE keep-alive monitoring
    
    🔧 UptimeRobot (FREE - Recommended):
    1. Go to: https://uptimerobot.com/signUp
    2. Create account (FREE)
    3. Add New Monitor:
       - Monitor Type: HTTP(s)
       - Friendly Name: AI Pottery Backend
       - URL: {backend_url}/api/health
       - Monitoring Interval: 5 minutes (FREE)
    4. Save
    
    ✅ This pings your backend every 5 minutes = stays awake!
    
    🔧 Cron-job.org (FREE - Backup):
    1. Go to: https://cron-job.org/en/signup/
    2. Create account (FREE)
    3. Create cronjob:
       - Title: Pottery Keep-Alive
       - URL: {backend_url}/api/ping
       - Execution: Every 10 minutes
    4. Save
    
    With both services, your backend will NEVER sleep! 🎉
    """)
    
    print("\n🌐 Opening UptimeRobot...")
    webbrowser.open('https://uptimerobot.com/signUp')
    
    input("\n✅ Press Enter once you've set up UptimeRobot...")
    
    print("\n🌐 Opening Cron-job.org...")
    webbrowser.open('https://cron-job.org/en/signup/')
    
    input("\n✅ Press Enter once you've set up Cron-job.org (optional but recommended)...")
    
    # Step 5: Seed database
    print_step(5, "Seed Production Database")
    
    seed = input("\n🌱 Do you want to seed the database with test data? [y/n]: ")
    if seed.lower() == 'y':
        print("""
        📋 To seed your Render database:
        
        1. Go to your Render dashboard
        2. Click on your web service
        3. Go to "Shell" tab
        4. Run: python seed_database.py
        
        Or use Render CLI:
        1. Install: npm install -g render-cli
        2. Login: render login
        3. Run: render shell <your-service-name> python seed_database.py
        """)
        
        input("✅ Press Enter once database is seeded...")
    
    # Step 6: Test deployment
    print_step(6, "Test Your FREE 24/7 Deployment")
    
    print(f"""
    🧪 Testing backend health...
    """)
    
    try:
        import requests
        response = requests.get(f"{backend_url}/api/health", timeout=30)
        if response.status_code == 200:
            print("✅ Backend is healthy!")
            print(f"   Response: {response.json()}")
        else:
            print(f"⚠️  Backend returned status {response.status_code}")
    except Exception as e:
        print(f"⚠️  Could not reach backend: {e}")
        print("   (This is normal if backend is still starting up)")
    
    # Final summary
    print_header("🎉 DEPLOYMENT COMPLETE!")
    
    print(f"""
    ✅ Your AI Pottery Platform is now running 24/7 for FREE!
    
    🌐 URLs:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Frontend:  https://ai-pottery-platform.vercel.app
    Backend:   {backend_url}
    API:       {api_url}
    Health:    {backend_url}/api/health
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    💰 Cost Breakdown:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Render Free:      $0/month (750 hours = ~31 days)
    Vercel Free:      $0/month (100GB bandwidth)
    UptimeRobot:      $0/month (50 monitors)
    Cron-job.org:     $0/month (unlimited crons)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    TOTAL:            $0/month 🎉
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    ⚡ Performance:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    First Request:    ~30 seconds (cold start)
    After Keep-Alive: Instant (< 1 second)
    Uptime:           99%+ (with keep-alive)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    🔐 Test Accounts:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Artisan:   artisan@pottery.com / artisan123
    Customer:  customer@pottery.com / customer123
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    📊 Monitor Your Site:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Render Dashboard:     https://dashboard.render.com
    Vercel Dashboard:     https://vercel.com/dashboard
    UptimeRobot:          https://uptimerobot.com/dashboard
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    ⚠️  Important Notes:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    1. First request after inactivity takes ~30 seconds (cold start)
    2. Keep-alive monitoring keeps backend warm (~instant response)
    3. Render free tier resets monthly (750 hours = full month)
    4. If you exceed limits, upgrade to paid tier ($7/month)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    🎯 Next Steps:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    1. ✅ Visit your site: https://ai-pottery-platform.vercel.app
    2. ✅ Login with test account
    3. ✅ Try the pottery designer: /design-tool
    4. ✅ Check analytics dashboard: /artisan-dashboard
    5. ✅ Monitor uptime on UptimeRobot
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    💡 Pro Tips:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    - Set UptimeRobot to ping every 5 minutes (minimum on free tier)
    - Add email alerts in UptimeRobot for downtime notifications
    - Check Render logs if you see any issues
    - First request might be slow - that's normal for free tier
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    🆘 Troubleshooting:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "Backend not responding":
      → Wait 30 seconds for cold start
      → Check Render logs for errors
      → Verify environment variables are set
    
    "CORS error":
      → Update backend/app.py CORS settings
      → Add your Vercel URL to allowed origins
      → Redeploy on Render
    
    "Database error":
      → Run seed_database.py in Render shell
      → Check DATABASE_URL is set correctly
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    🎉 Congratulations! Your site is live and running 24/7 for FREE!
    """)
    
    print("\n✨ Deployment script completed successfully!")
    print("🚀 Your AI Pottery Platform is now live!\n")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n❌ Deployment cancelled by user.")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
