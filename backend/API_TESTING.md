# API Testing Guide

## Prerequisites
- Backend running on http://localhost:5000
- Postman, curl, or similar tool

## 1. Test Authentication

### Register Artisan
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test_artisan@example.com",
    "username": "test_artisan",
    "password": "password123",
    "role": "artisan",
    "full_name": "Test Artisan",
    "region": "Dhaka"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "artisan@pottery.com",
    "password": "artisan123"
  }'
```

**Save the `access_token` from response!**

### Get Current User
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 2. Test Products

### List All Products
```bash
curl -X GET http://localhost:5000/api/products/
```

### Get Single Product
```bash
curl -X GET http://localhost:5000/api/products/1
```

### Create Product (Artisan Only)
```bash
curl -X POST http://localhost:5000/api/products/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "name": "New Vase",
    "category": "Vase",
    "price": 1200,
    "description": "Beautiful new vase",
    "tags": ["handmade", "vase", "traditional"],
    "stock_quantity": 10
  }'
```

### Log Interaction
```bash
curl -X POST http://localhost:5000/api/products/1/interaction \
  -H "Content-Type: application/json" \
  -d '{
    "interaction_type": "view",
    "session_id": "test_session_123"
  }'
```

## 3. Test Recommendations

### Get Recommendations (Anonymous)
```bash
curl -X GET http://localhost:5000/api/recommendations/
```

### Get Recommendations (Authenticated)
```bash
curl -X GET http://localhost:5000/api/recommendations/ \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Get Explanation
```bash
curl -X GET http://localhost:5000/api/recommendations/explain/1
```

## 4. Test AI Marketing

### Generate Content
```bash
curl -X POST http://localhost:5000/api/marketing/generate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "product_name": "Traditional Vase",
    "category": "Vase"
  }'
```

### Apply Content to Product
```bash
curl -X POST http://localhost:5000/api/marketing/apply/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "description": "AI-generated description here",
    "caption": "Social media caption here",
    "keywords": ["keyword1", "keyword2", "keyword3"]
  }'
```

## 5. Test Analytics

### Get Dashboard
```bash
curl -X GET http://localhost:5000/api/analytics/dashboard?days=30 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Get Product Analytics
```bash
curl -X GET http://localhost:5000/api/analytics/product/1 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 6. Test Feedback

### Submit Feedback
```bash
curl -X POST http://localhost:5000/api/feedback/submit \
  -H "Content-Type: application/json" \
  -d '{
    "feedback_type": "feature",
    "rating": 5,
    "comment": "Great feature!",
    "feature_name": "AI Recommendations"
  }'
```

### Get Feedback Stats
```bash
curl -X GET http://localhost:5000/api/feedback/stats \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 7. Test Usability Metrics

### Log Metric
```bash
curl -X POST http://localhost:5000/api/usability/log \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "test_session_123",
    "task_name": "Find product",
    "task_completed": true,
    "time_spent_seconds": 15.5,
    "feature_used": "search"
  }'
```

### Get Usability Stats
```bash
curl -X GET http://localhost:5000/api/usability/stats \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 8. Test Data Export

### Export Analytics
```bash
curl -X GET http://localhost:5000/api/export/analytics \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --output analytics.csv
```

### Export Interactions
```bash
curl -X GET http://localhost:5000/api/export/interactions \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --output interactions.csv
```

### Export Usability
```bash
curl -X GET http://localhost:5000/api/export/usability \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --output usability.csv
```

### Export Feedback
```bash
curl -X GET http://localhost:5000/api/export/feedback \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --output feedback.csv
```

## Expected Status Codes

- 200: Success
- 201: Created
- 400: Bad Request (validation error)
- 401: Unauthorized (invalid credentials)
- 403: Forbidden (insufficient permissions)
- 404: Not Found
- 500: Server Error

## Tips

1. Always save your JWT token after login
2. Include `Authorization: Bearer TOKEN` header for protected routes
3. Check response messages for errors
4. Use seed data to test quickly: `python seed_database.py`
5. Monitor server logs for debugging
