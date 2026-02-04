"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Sparkles, 
  Globe, 
  Heart,
  ShoppingCart,
  TrendingUp,
  Eye,
  Info,
  Star,
  Lightbulb,
  MessageCircle,
  ThumbsUp,
  ArrowLeft,
  Home
} from "lucide-react";

export default function RecommendationsPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [explanation, setExplanation] = useState<any>(null);

  const content = {
    en: {
      title: "Personalized Product Suggestions",
      subtitle: "AI-Powered Recommendations Based on Your Preferences",
      
      // Loading
      loading: "Finding perfect pottery for you...",
      
      // Sections
      forYou: "Recommended For You",
      whyRecommended: "Why This is Recommended",
      basedOn: "Based On Your Interests",
      similarItems: "Similar Items You May Like",
      
      // Explanations
      explainTitle: "Why We Recommend This",
      explainDesc: "Our AI considers multiple factors to suggest the best pottery for you",
      
      factors: {
        browsing: "Your Browsing Pattern",
        browsingDesc: "Products you viewed recently",
        
        preferences: "Your Preferences",
        preferencesDesc: "Categories and styles you prefer",
        
        popularity: "Community Favorites",
        popularityDesc: "Highly rated by other buyers",
        
        artisan: "Artisan Quality",
        artisanDesc: "From trusted, skilled artisans",
        
        traditional: "Traditional Craftsmanship",
        traditionalDesc: "Authentic heritage techniques",
        
        priceRange: "Price Match",
        priceRangeDesc: "Within your budget range"
      },
      
      // Actions
      viewDetails: "View Details",
      addToCart: "Add to Cart",
      explainWhy: "Why this?",
      closeExplanation: "Close",
      
      // Stats
      matchScore: "Match Score",
      viewedBy: "Viewed by",
      buyers: "buyers",
      rating: "Rating",
      
      // Empty State
      noRecommendations: "No Recommendations Yet",
      noRecommendationsDesc: "Browse some products to get personalized suggestions!",
      browseCatalog: "Browse Catalog",
      
      // AI Transparency
      aiNotice: {
        title: "How Our AI Works",
        desc: "Recommendations are based on your browsing history and preferences. We don't track you across other websites or sell your data. Your privacy is protected."
      },
      
      sessionBased: "Session-Based Recommendations",
      sessionDesc: "Recommendations reset when you close your browser - we respect your privacy",
      
      // Features
      features: {
        personalized: "Personalized Just For You",
        personalizedDesc: "Curated based on your interests and browsing behavior",
        
        explainable: "Transparent AI",
        explainableDesc: "Understand why each item is recommended to you",
        
        privacy: "Privacy First",
        privacyDesc: "Session-based tracking, no persistent data collection",
        
        quality: "Verified Quality",
        qualityDesc: "All recommended products from verified artisans"
      }
    },
    bn: {
      title: "ব্যক্তিগত পণ্য সুপারিশ",
      subtitle: "আপনার পছন্দের উপর ভিত্তি করে AI-চালিত সুপারিশ",
      
      // Loading
      loading: "আপনার জন্য নিখুঁত মৃৎশিল্প খুঁজছি...",
      
      // Sections
      forYou: "আপনার জন্য সুপারিশকৃত",
      whyRecommended: "কেন এটি সুপারিশ করা হয়েছে",
      basedOn: "আপনার আগ্রহের উপর ভিত্তি করে",
      similarItems: "অনুরূপ আইটেম যা আপনি পছন্দ করতে পারেন",
      
      // Explanations
      explainTitle: "আমরা কেন এটি সুপারিশ করি",
      explainDesc: "আমাদের AI আপনার জন্য সেরা মৃৎশিল্প সুপারিশ করতে একাধিক ফ্যাক্টর বিবেচনা করে",
      
      factors: {
        browsing: "আপনার ব্রাউজিং প্যাটার্ন",
        browsingDesc: "সম্প্রতি দেখা পণ্য",
        
        preferences: "আপনার পছন্দ",
        preferencesDesc: "আপনার পছন্দের বিভাগ এবং শৈলী",
        
        popularity: "কমিউনিটি পছন্দসই",
        popularityDesc: "অন্যান্য ক্রেতাদের দ্বারা উচ্চ রেট",
        
        artisan: "কারিগর মান",
        artisanDesc: "বিশ্বস্ত, দক্ষ কারিগরদের থেকে",
        
        traditional: "ঐতিহ্যবাহী কারুশিল্প",
        traditionalDesc: "খাঁটি ঐতিহ্য কৌশল",
        
        priceRange: "মূল্য মিল",
        priceRangeDesc: "আপনার বাজেট সীমার মধ্যে"
      },
      
      // Actions
      viewDetails: "বিস্তারিত দেখুন",
      addToCart: "কার্টে যোগ করুন",
      explainWhy: "কেন এটি?",
      closeExplanation: "বন্ধ করুন",
      
      // Stats
      matchScore: "ম্যাচ স্কোর",
      viewedBy: "দেখেছেন",
      buyers: "ক্রেতা",
      rating: "রেটিং",
      
      // Empty State
      noRecommendations: "এখনও কোনো সুপারিশ নেই",
      noRecommendationsDesc: "ব্যক্তিগত সুপারিশ পেতে কিছু পণ্য ব্রাউজ করুন!",
      browseCatalog: "ক্যাটালগ ব্রাউজ করুন",
      
      // AI Transparency
      aiNotice: {
        title: "আমাদের AI কীভাবে কাজ করে",
        desc: "সুপারিশগুলি আপনার ব্রাউজিং ইতিহাস এবং পছন্দের উপর ভিত্তি করে। আমরা অন্যান্য ওয়েবসাইট জুড়ে আপনাকে ট্র্যাক করি না বা আপনার ডেটা বিক্রি করি না। আপনার গোপনীয়তা সুরক্ষিত।"
      },
      
      sessionBased: "সেশন-ভিত্তিক সুপারিশ",
      sessionDesc: "ব্রাউজার বন্ধ করলে সুপারিশ রিসেট হয় - আমরা আপনার গোপনীয়তাকে সম্মান করি",
      
      // Features
      features: {
        personalized: "শুধুমাত্র আপনার জন্য ব্যক্তিগত",
        personalizedDesc: "আপনার আগ্রহ এবং ব্রাউজিং আচরণের উপর ভিত্তি করে কিউরেটেড",
        
        explainable: "স্বচ্ছ AI",
        explainableDesc: "বুঝুন কেন প্রতিটি আইটেম আপনাকে সুপারিশ করা হয়েছে",
        
        privacy: "গোপনীয়তা প্রথম",
        privacyDesc: "সেশন-ভিত্তিক ট্র্যাকিং, কোনো স্থায়ী ডেটা সংগ্রহ নেই",
        
        quality: "যাচাইকৃত মান",
        qualityDesc: "যাচাইকৃত কারিগরদের থেকে সমস্ত সুপারিশকৃত পণ্য"
      }
    }
  };

  const t = content[language];

  // Demo recommendations data (in production, fetch from API)
  const demoRecommendations = [
    {
      id: 1,
      name: language === "en" ? "Traditional Water Pot (Kolshi)" : "ঐতিহ্যবাহী পানির পাত্র (কলসি)",
      artisan: language === "en" ? "Rahim Ahmed" : "রহিম আহমেদ",
      location: language === "en" ? "Narsingdi" : "নরসিংদী",
      priceBDT: 450,
      priceUSD: 4.20,
      image: "🏺",
      matchScore: 95,
      viewedBy: 234,
      rating: 4.8,
      reasons: [
        language === "en" ? "Similar to products you viewed" : "আপনার দেখা পণ্যের মতো",
        language === "en" ? "Traditional craftsmanship" : "ঐতিহ্যবাহী কারুশিল্প",
        language === "en" ? "Highly rated by buyers" : "ক্রেতাদের দ্বারা উচ্চ রেটেড"
      ]
    },
    {
      id: 2,
      name: language === "en" ? "Decorative Flower Vase" : "সাজসজ্জা ফুলদানি",
      artisan: language === "en" ? "Fatima Begum" : "ফাতিমা বেগম",
      location: language === "en" ? "Bogura" : "বগুড়া",
      priceBDT: 850,
      priceUSD: 8.00,
      image: "🏺",
      matchScore: 92,
      viewedBy: 189,
      rating: 4.9,
      reasons: [
        language === "en" ? "Matches your style preferences" : "আপনার শৈলী পছন্দ মেলে",
        language === "en" ? "Popular in your area" : "আপনার এলাকায় জনপ্রিয়",
        language === "en" ? "Within your budget" : "আপনার বাজেটের মধ্যে"
      ]
    },
    {
      id: 3,
      name: language === "en" ? "Clay Cooking Pot (Hari)" : "মাটির রান্নার পাত্র (হাঁড়ি)",
      artisan: language === "en" ? "Karim Mia" : "করিম মিয়া",
      location: language === "en" ? "Rajshahi" : "রাজশাহী",
      priceBDT: 650,
      priceUSD: 6.10,
      image: "🍲",
      matchScore: 88,
      viewedBy: 156,
      rating: 4.7,
      reasons: [
        language === "en" ? "Practical & traditional" : "ব্যবহারিক এবং ঐতিহ্যবাহী",
        language === "en" ? "Excellent artisan reputation" : "চমৎকার কারিগর খ্যাতি",
        language === "en" ? "Perfect for everyday use" : "দৈনন্দিন ব্যবহারের জন্য নিখুঁত"
      ]
    },
    {
      id: 4,
      name: language === "en" ? "Handmade Tea Cups Set" : "হাতে তৈরি চায়ের কাপ সেট",
      artisan: language === "en" ? "Salma Khatun" : "সালমা খাতুন",
      location: language === "en" ? "Dinajpur" : "দিনাজপুর",
      priceBDT: 1200,
      priceUSD: 11.30,
      image: "☕",
      matchScore: 85,
      viewedBy: 267,
      rating: 4.9,
      reasons: [
        language === "en" ? "Unique design style" : "অনন্য ডিজাইন শৈলী",
        language === "en" ? "Gift-worthy quality" : "উপহারযোগ্য মান",
        language === "en" ? "Trending this month" : "এই মাসে ট্রেন্ডিং"
      ]
    },
    {
      id: 5,
      name: language === "en" ? "Decorative Wall Plate" : "সাজসজ্জা দেয়াল প্লেট",
      artisan: language === "en" ? "Jahangir Alam" : "জাহাঙ্গীর আলম",
      location: language === "en" ? "Pabna" : "পাবনা",
      priceBDT: 950,
      priceUSD: 8.90,
      image: "🎨",
      matchScore: 82,
      viewedBy: 134,
      rating: 4.6,
      reasons: [
        language === "en" ? "Artistic home décor" : "শিল্পকলা গৃহ সাজসজ্জা",
        language === "en" ? "Hand-painted patterns" : "হাতে আঁকা প্যাটার্ন",
        language === "en" ? "Limited availability" : "সীমিত প্রাপ্যতা"
      ]
    },
    {
      id: 6,
      name: language === "en" ? "Storage Jar with Lid" : "ঢাকনা সহ সংরক্ষণ পাত্র",
      artisan: language === "en" ? "Ayesha Siddiqua" : "আয়েশা সিদ্দিকা",
      location: language === "en" ? "Jamalpur" : "জামালপুর",
      priceBDT: 550,
      priceUSD: 5.20,
      image: "🫙",
      matchScore: 80,
      viewedBy: 198,
      rating: 4.8,
      reasons: [
        language === "en" ? "Functional & beautiful" : "কার্যকর এবং সুন্দর",
        language === "en" ? "Eco-friendly material" : "পরিবেশ বান্ধব উপাদান",
        language === "en" ? "Great value for money" : "টাকার জন্য দুর্দান্ত মূল্য"
      ]
    }
  ];

  useEffect(() => {
    // Simulate API call
    const loadRecommendations = async () => {
      setLoading(true);
      
      // In production: fetch from API
      // const response = await fetch(`${API_URL}/api/recommendations`);
      // const data = await response.json();
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setRecommendations(demoRecommendations);
      setLoading(false);
    };

    loadRecommendations();
  }, [language]);

  const handleExplainWhy = (productId: number) => {
    setSelectedProduct(productId);
    
    // In production: fetch explanation from API
    // const response = await fetch(`${API_URL}/api/recommendations/explain/${productId}`);
    
    // Demo explanation
    setExplanation({
      productId,
      factors: [
        { name: t.factors.browsing, desc: t.factors.browsingDesc, weight: 35, icon: Eye },
        { name: t.factors.preferences, desc: t.factors.preferencesDesc, weight: 25, icon: Heart },
        { name: t.factors.popularity, desc: t.factors.popularityDesc, weight: 20, icon: TrendingUp },
        { name: t.factors.artisan, desc: t.factors.artisanDesc, weight: 15, icon: Star },
        { name: t.factors.traditional, desc: t.factors.traditionalDesc, weight: 5, icon: Sparkles }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Button
          onClick={() => window.location.href = '/'}
          variant="outline"
          size="lg"
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-5 w-5" />
          {language === "en" ? "Back to Home" : "হোমে ফিরুন"}
        </Button>

        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-purple-900 mb-2">{t.title}</h1>
            <p className="text-lg text-purple-700">{t.subtitle}</p>
          </div>
          <Button
            onClick={() => setLanguage(language === "en" ? "bn" : "en")}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Globe className="h-5 w-5" />
            {language === "en" ? "বাংলা" : "English"}
          </Button>
        </div>

        {/* AI Transparency Notice */}
        <Alert className="mb-8 bg-blue-50 border-blue-200">
          <Info className="h-5 w-5 text-blue-600" />
          <AlertDescription className="text-blue-900">
            <strong>{t.aiNotice.title}:</strong> {t.aiNotice.desc}
          </AlertDescription>
        </Alert>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200">
            <CardContent className="p-6 text-center">
              <Sparkles className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-purple-900 mb-2">{t.features.personalized}</h3>
              <p className="text-sm text-gray-700">{t.features.personalizedDesc}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <Lightbulb className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">{t.features.explainable}</h3>
              <p className="text-sm text-gray-700">{t.features.explainableDesc}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-green-900 mb-2">{t.features.privacy}</h3>
              <p className="text-sm text-gray-700">{t.features.privacyDesc}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-100 to-amber-50 border-amber-200">
            <CardContent className="p-6 text-center">
              <ThumbsUp className="h-10 w-10 text-amber-600 mx-auto mb-3" />
              <h3 className="font-bold text-amber-900 mb-2">{t.features.quality}</h3>
              <p className="text-sm text-gray-700">{t.features.qualityDesc}</p>
            </CardContent>
          </Card>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <Sparkles className="h-16 w-16 text-purple-600 animate-spin mx-auto mb-4" />
            <p className="text-xl text-gray-700">{t.loading}</p>
          </div>
        )}

        {/* Recommendations Grid */}
        {!loading && recommendations.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-purple-600" />
              {t.forYou}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {recommendations.map((product) => (
                <Card key={product.id} className="bg-white border-2 border-purple-200 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-6xl">{product.image}</div>
                      <Badge className="bg-purple-600 text-white">
                        {t.matchScore}: {product.matchScore}%
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>
                      <span className="font-medium">{product.artisan}</span>
                      <br />
                      <span className="text-sm">{product.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl font-bold text-purple-900">
                          ৳{product.priceBDT}
                        </p>
                        <p className="text-sm text-gray-600">${product.priceUSD}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{t.rating}</p>
                        <p className="text-lg font-bold text-amber-600 flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-600" />
                          {product.rating}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Eye className="h-4 w-4" />
                      <span>{t.viewedBy} {product.viewedBy} {t.buyers}</span>
                    </div>

                    {/* Reasons */}
                    <div className="bg-purple-50 rounded-lg p-3 mb-4">
                      <p className="text-xs font-semibold text-purple-900 mb-2">{t.whyRecommended}:</p>
                      <ul className="space-y-1">
                        {product.reasons.map((reason, index) => (
                          <li key={index} className="text-xs text-gray-700 flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">•</span>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-purple-600 hover:bg-purple-700"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        {t.addToCart}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleExplainWhy(product.id)}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && recommendations.length === 0 && (
          <Card className="bg-white border-2 border-gray-200 text-center py-16">
            <CardContent>
              <Sparkles className="h-20 w-20 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.noRecommendations}</h3>
              <p className="text-gray-600 mb-6">{t.noRecommendationsDesc}</p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                {t.browseCatalog}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Explanation Modal */}
        {explanation && selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-purple-900">{t.explainTitle}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => {
                      setSelectedProduct(null);
                      setExplanation(null);
                    }}
                  >
                    ×
                  </Button>
                </div>
                <CardDescription>{t.explainDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {explanation.factors.map((factor: any, index: number) => (
                    <div key={index} className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <factor.icon className="h-6 w-6 text-purple-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">{factor.name}</h4>
                          <p className="text-sm text-gray-600">{factor.desc}</p>
                        </div>
                        <Badge className="bg-purple-600 text-white">{factor.weight}%</Badge>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${factor.weight}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Alert className="mt-6 bg-green-50 border-green-200">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <AlertDescription className="text-green-900">
                    <strong>{t.sessionBased}:</strong> {t.sessionDesc}
                  </AlertDescription>
                </Alert>
                <Button 
                  className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    setSelectedProduct(null);
                    setExplanation(null);
                  }}
                >
                  {t.closeExplanation}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

      </div>
    </div>
  );
}
