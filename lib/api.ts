/**
 * API Service Layer for AI Pottery Platform
 * Connects Next.js frontend to Flask backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Helper function to get auth token from localStorage
const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

// Helper function to set auth token
export const setAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

// Helper function to remove auth token
export const removeAuthToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
};

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || error.message || `HTTP ${response.status}`);
  }
  
  return response.json();
}

// ============================================
// AUTHENTICATION API
// ============================================

export interface User {
  id: number;
  username: string;
  email: string;
  role: 'artisan' | 'customer';
  created_at: string;
  artisan_profile?: ArtisanProfile;
}

export interface ArtisanProfile {
  id: number;
  bio: string;
  specialization: string;
  years_of_experience: number;
  location: string;
  profile_image_url?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
  role: 'artisan' | 'customer';
  bio?: string;
  specialization?: string;
  years_of_experience?: number;
  location?: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export const authAPI = {
  login: (data: LoginRequest) => 
    apiRequest<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  signup: (data: SignupRequest) => 
    apiRequest<AuthResponse>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  getCurrentUser: () => 
    apiRequest<{ user: User }>('/auth/me', { method: 'GET' }),
  
  updateProfile: (data: Partial<ArtisanProfile>) => 
    apiRequest<{ message: string; profile: ArtisanProfile }>('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

// ============================================
// PRODUCTS API
// ============================================

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url?: string;
  region: string;
  tags: string[];
  stock_quantity: number;
  views_count: number;
  sales_count: number;
  artisan_profile_id: number;
  ai_generated_description?: string;
  ai_generated_caption?: string;
  ai_generated_keywords?: string;
  created_at: string;
  updated_at: string;
}

export interface ProductFilters {
  category?: string;
  region?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  category: string;
  price: number;
  image_url?: string;
  region: string;
  tags: string[];
  stock_quantity: number;
}

export const productsAPI = {
  getAll: (filters?: ProductFilters) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.region) params.append('region', filters.region);
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    
    const queryString = params.toString();
    return apiRequest<{ products: Product[] }>(
      `/products${queryString ? `?${queryString}` : ''}`
    );
  },
  
  getById: (id: number) => 
    apiRequest<{ product: Product }>(`/products/${id}`),
  
  create: (data: CreateProductRequest) => 
    apiRequest<{ message: string; product: Product }>('/products', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  update: (id: number, data: Partial<CreateProductRequest>) => 
    apiRequest<{ message: string; product: Product }>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  delete: (id: number) => 
    apiRequest<{ message: string }>(`/products/${id}`, { method: 'DELETE' }),
  
  getMyProducts: () => 
    apiRequest<{ products: Product[] }>('/products/my-products'),
  
  logInteraction: (id: number, interactionType: 'view' | 'click' | 'purchase', sessionId?: string, recommendationSource?: string) => 
    apiRequest<{ message: string }>(`/products/${id}/interaction`, {
      method: 'POST',
      body: JSON.stringify({
        interaction_type: interactionType,
        session_id: sessionId,
        recommendation_source: recommendationSource,
      }),
    }),
};

// ============================================
// RECOMMENDATIONS API
// ============================================

export interface Recommendation {
  product: Product;
  recommendation_reason: string;
  similarity_score: number;
}

export interface RecommendationExplanation {
  product: Product;
  explanation: string;
  matching_factors: {
    category_match: boolean;
    region_match: boolean;
    price_range_match: boolean;
    tags_overlap: string[];
  };
  user_preferences: {
    favorite_categories: string[];
    favorite_regions: string[];
    favorite_tags: string[];
    price_range: { min: number; max: number };
  };
}

export const recommendationsAPI = {
  getRecommendations: () => 
    apiRequest<{ recommendations: Recommendation[] }>('/recommendations'),
  
  explainRecommendation: (id: number) => 
    apiRequest<{ explanation: RecommendationExplanation }>(`/recommendations/explain/${id}`),
};

// ============================================
// MARKETING API
// ============================================

export interface MarketingContent {
  description: string;
  caption: string;
  keywords: string[];
}

export const marketingAPI = {
  generateContent: (productName: string, category: string) => 
    apiRequest<{ content: MarketingContent }>('/marketing/generate', {
      method: 'POST',
      body: JSON.stringify({ product_name: productName, category }),
    }),
  
  applyContent: (productId: number, content: MarketingContent) => 
    apiRequest<{ message: string; product: Product }>(`/marketing/apply/${productId}`, {
      method: 'POST',
      body: JSON.stringify(content),
    }),
};

// ============================================
// ANALYTICS API
// ============================================

export interface DashboardAnalytics {
  total_products: number;
  total_views: number;
  total_clicks: number;
  total_sales: number;
  total_revenue: number;
  unique_visitors: number;
  recommendation_acceptance_rate: number;
  views_by_product: { product_name: string; views: number }[];
  sales_by_product: { product_name: string; sales: number }[];
}

export interface ProductAnalytics {
  product_id: number;
  product_name: string;
  total_views: number;
  total_clicks: number;
  total_sales: number;
  revenue: number;
  unique_visitors: number;
  click_through_rate: number;
  conversion_rate: number;
}

export const analyticsAPI = {
  getDashboard: () => 
    apiRequest<{ analytics: DashboardAnalytics }>('/analytics/dashboard'),
  
  getProductAnalytics: (productId: number) => 
    apiRequest<{ analytics: ProductAnalytics }>(`/analytics/product/${productId}`),
};

// ============================================
// FEEDBACK API
// ============================================

export interface Feedback {
  id: number;
  user_id?: number;
  feedback_type: 'feature_request' | 'bug_report' | 'suggestion' | 'testimonial';
  rating?: number;
  comment: string;
  feature_name?: string;
  is_resolved: boolean;
  timestamp: string;
}

export interface FeedbackStats {
  total_feedback: number;
  average_rating: number;
  feedback_by_type: { type: string; count: number; avg_rating: number }[];
}

export const feedbackAPI = {
  submit: (data: {
    feedback_type: string;
    rating?: number;
    comment: string;
    feature_name?: string;
  }) => 
    apiRequest<{ message: string; feedback: Feedback }>('/feedback/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  getAll: (filters?: { type?: string; resolved?: boolean }) => {
    const params = new URLSearchParams();
    if (filters?.type) params.append('type', filters.type);
    if (filters?.resolved !== undefined) params.append('resolved', filters.resolved.toString());
    
    const queryString = params.toString();
    return apiRequest<{ feedback: Feedback[] }>(
      `/feedback/list${queryString ? `?${queryString}` : ''}`
    );
  },
  
  getStats: () => 
    apiRequest<{ stats: FeedbackStats }>('/feedback/stats'),
};

// ============================================
// USABILITY API
// ============================================

export interface UsabilityMetric {
  id: number;
  user_id?: number;
  session_id: string;
  task_name: string;
  task_completed: boolean;
  time_spent_seconds: number;
  feature_used?: string;
  error_encountered: boolean;
  error_description?: string;
  timestamp: string;
}

export interface UsabilityStats {
  total_tasks: number;
  completion_rate: number;
  average_time: number;
  error_rate: number;
  task_stats: { task_name: string; completion_rate: number; avg_time: number }[];
  feature_usage: { feature: string; count: number }[];
}

export const usabilityAPI = {
  logMetric: (data: {
    session_id: string;
    task_name: string;
    task_completed: boolean;
    time_spent_seconds: number;
    feature_used?: string;
    error_encountered: boolean;
    error_description?: string;
    navigation_path?: any;
  }) => 
    apiRequest<{ message: string; metric: UsabilityMetric }>('/usability/log', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  getSessionMetrics: (sessionId: string) => 
    apiRequest<{ metrics: UsabilityMetric[] }>(`/usability/session/${sessionId}`),
  
  getStats: () => 
    apiRequest<{ stats: UsabilityStats }>('/usability/stats'),
};

// ============================================
// EXPORT API
// ============================================

export const exportAPI = {
  downloadAnalytics: async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/export/analytics`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    const blob = await response.blob();
    return blob;
  },
  
  downloadInteractions: async (days = 30) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/export/interactions?days=${days}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    const blob = await response.blob();
    return blob;
  },
  
  downloadUsability: async (days = 30) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/export/usability?days=${days}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    const blob = await response.blob();
    return blob;
  },
  
  downloadFeedback: async (days = 90) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/export/feedback?days=${days}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    const blob = await response.blob();
    return blob;
  },
};

// Helper function to download blob as file
export const downloadBlob = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
