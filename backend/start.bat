@echo off
echo ================================
echo AI Pottery Platform Backend
echo ================================
echo.

echo [1/4] Activating virtual environment...
if exist venv\Scripts\activate (
    call venv\Scripts\activate
) else (
    echo Virtual environment not found. Creating...
    python -m venv venv
    call venv\Scripts\activate
    echo Installing dependencies...
    pip install -r requirements.txt
)

echo.
echo [2/4] Checking dependencies...
pip install -q -r requirements.txt

echo.
echo [3/4] Starting Flask server...
echo.
echo ✅ Backend running on http://localhost:5000
echo 📊 API Documentation: http://localhost:5000/api
echo 🛑 Press Ctrl+C to stop
echo.

python app.py
