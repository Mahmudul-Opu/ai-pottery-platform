# Run the Flask Backend Server
# This script starts the Flask backend server in non-debug mode

import sys
import os

# Add current directory to path
sys.path.insert(0, os.path.dirname(__file__))

from app import create_app

if __name__ == '__main__':
    app = create_app()
    print("\n" + "="*60)
    print("🚀 AI Pottery Platform Backend Server")
    print("="*60)
    print("📍 Server URL: http://localhost:8000")
    print("📚 API Docs: See README.md")
    print("🧪 Test Accounts:")
    print("   Artisan: artisan@pottery.com / artisan123")
    print("   Customer: customer@pottery.com / customer123")
    print("="*60 + "\n")
    
    # Run server (non-debug mode for stability)
    app.run(host='127.0.0.1', port=8000, debug=False, use_reloader=False)
