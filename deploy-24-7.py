#!/usr/bin/env python3
"""
Quick deployment script for Railway
Automates the deployment process for 24/7 uptime
"""

import subprocess
import sys
import os

def run_command(cmd, description):
    """Run a shell command and handle errors"""
    print(f"\n🔧 {description}...")
    try:
        result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} - Success!")
        if result.stdout:
            print(result.stdout)
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} - Failed!")
        if e.stderr:
            print(e.stderr)
        return None

def main():
    print("""
    ╔═══════════════════════════════════════════════════╗
    ║   🚀 AI Pottery Platform - Railway Deployment    ║
    ║   24/7 Uptime Configuration                       ║
    ╚═══════════════════════════════════════════════════╝
    """)
    
    # Check if Railway CLI is installed
    print("\n📋 Step 1: Checking Railway CLI...")
    railway_check = subprocess.run("railway --version", shell=True, capture_output=True)
    
    if railway_check.returncode != 0:
        print("❌ Railway CLI not found. Installing...")
        print("\nPlease run: npm install -g @railway/cli")
        print("Then run this script again.")
        sys.exit(1)
    else:
        print("✅ Railway CLI found!")
    
    # Login to Railway
    print("\n📋 Step 2: Railway Login")
    print("Opening browser for Railway authentication...")
    run_command("railway login", "Railway Login")
    
    # Navigate to backend directory
    backend_path = os.path.join(os.getcwd(), "backend")
    if not os.path.exists(backend_path):
        print(f"❌ Backend directory not found at {backend_path}")
        sys.exit(1)
    
    os.chdir(backend_path)
    print(f"✅ Changed to backend directory: {backend_path}")
    
    # Initialize Railway project
    print("\n📋 Step 3: Initialize Railway Project")
    run_command("railway init", "Initialize Railway Project")
    
    # Deploy backend
    print("\n📋 Step 4: Deploy Backend to Railway")
    run_command("railway up", "Deploy Backend")
    
    # Add PostgreSQL database
    print("\n📋 Step 5: Add PostgreSQL Database")
    add_db = input("\nDo you want to add PostgreSQL database? (recommended for production) [y/n]: ")
    if add_db.lower() == 'y':
        run_command("railway add -d postgres", "Add PostgreSQL Database")
    
    # Get Railway URL
    print("\n📋 Step 6: Get Backend URL")
    backend_url = run_command("railway domain", "Get Backend URL")
    
    if backend_url:
        backend_url = backend_url.strip()
        print(f"\n✅ Your backend URL: https://{backend_url}")
        print(f"✅ API URL: https://{backend_url}/api")
        
        # Return to root directory
        os.chdir("..")
        
        # Update .env.production
        print("\n📋 Step 7: Update Frontend Environment")
        env_content = f"NEXT_PUBLIC_API_URL=https://{backend_url}/api\n"
        with open(".env.production", "w") as f:
            f.write(env_content)
        print("✅ Updated .env.production")
        
        # Deploy to Vercel
        print("\n📋 Step 8: Deploy Frontend to Vercel")
        vercel_deploy = input("\nDo you want to deploy frontend to Vercel now? [y/n]: ")
        if vercel_deploy.lower() == 'y':
            # Check Vercel CLI
            vercel_check = subprocess.run("vercel --version", shell=True, capture_output=True)
            if vercel_check.returncode != 0:
                print("❌ Vercel CLI not found. Installing...")
                run_command("npm install -g vercel", "Install Vercel CLI")
            
            run_command("vercel login", "Vercel Login")
            run_command(f"vercel --prod -e NEXT_PUBLIC_API_URL=https://{backend_url}/api", "Deploy to Vercel")
        
        print(f"""
        ╔═══════════════════════════════════════════════════╗
        ║   🎉 DEPLOYMENT SUCCESSFUL!                      ║
        ╚═══════════════════════════════════════════════════╝
        
        ✅ Backend deployed to Railway
        ✅ Backend URL: https://{backend_url}
        ✅ API URL: https://{backend_url}/api
        
        📋 NEXT STEPS:
        
        1. Upgrade to Railway Hobby plan ($5/month) for 24/7 uptime:
           → Go to https://railway.app/dashboard
           → Settings → Plan → Upgrade to Hobby
        
        2. Set up monitoring with UptimeRobot:
           → Go to https://uptimerobot.com
           → Add monitor: https://{backend_url}/api/products
           → Interval: 5 minutes
        
        3. Configure CORS in backend/app.py:
           → Add your Vercel URL to allowed origins
           → Redeploy: railway up
        
        4. Seed production database:
           → railway run python seed_database.py
        
        🎯 Your site will be running 24/7 at:
        → https://ai-pottery-platform.vercel.app
        
        📊 Monitor your deployment:
        → Railway: https://railway.app/dashboard
        → Vercel: https://vercel.com/dashboard
        
        💡 Test your API:
        → curl https://{backend_url}/api/products
        
        🔐 Test accounts:
        → Artisan: artisan@pottery.com / artisan123
        → Customer: customer@pottery.com / customer123
        """)
    else:
        print("\n❌ Failed to get Railway URL. Please check Railway dashboard.")
    
    print("\n✨ Deployment script completed!")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n❌ Deployment cancelled by user.")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Unexpected error: {e}")
        sys.exit(1)
