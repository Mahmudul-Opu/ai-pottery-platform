"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Users, 
  ThumbsUp, 
  Send, 
  Globe,
  Star,
  MessageSquare,
  Award,
  Heart,
  Search
} from "lucide-react";

export default function CommunityPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [newPost, setNewPost] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const content = {
    en: {
      title: "Community Engagement",
      subtitle: "Connect with Artisans and Pottery Enthusiasts",
      
      // Categories
      categories: {
        title: "Community Categories",
        forum: "Discussion Forum",
        forumDesc: "Ask questions and share experiences",
        success: "Success Stories",
        successDesc: "Inspiring stories from artisans",
        tips: "Tips & Techniques",
        tipsDesc: "Share pottery making skills",
        market: "Marketplace Talk",
        marketDesc: "Discuss buying and selling"
      },

      // Create Post
      createPost: {
        title: "Share with Community",
        placeholder: "What's on your mind? Share your pottery journey, ask questions, or give advice...",
        button: "Post to Community",
        guidelines: "Be respectful, supportive, and helpful"
      },

      // Forum Discussions
      discussions: {
        title: "Recent Discussions",
        replies: "replies",
        views: "views",
        newPost: "New Discussion"
      },

      // Success Stories
      stories: {
        title: "Success Stories",
        readMore: "Read Story"
      },

      // Q&A Section
      qa: {
        title: "Questions & Answers",
        askQuestion: "Ask a Question",
        answer: "Answer"
      },

      // Community Stats
      stats: {
        title: "Community Overview",
        members: "Active Members",
        discussions: "Discussions",
        answered: "Questions Answered",
        stories: "Success Stories"
      },

      // Moderation Notice
      moderation: {
        title: "Community Guidelines",
        rule1: "Be respectful and kind to all members",
        rule2: "Share authentic pottery experiences",
        rule3: "No spam or self-promotion without value",
        rule4: "Help others learn and grow",
        rule5: "Report inappropriate content"
      },

      // Search
      search: "Search discussions, questions, stories..."
    },
    bn: {
      title: "কমিউনিটি এনগেজমেন্ট",
      subtitle: "কুমোর এবং মাটির পাত্র প্রেমীদের সাথে সংযুক্ত হন",

      // Categories
      categories: {
        title: "কমিউনিটি ক্যাটাগরি",
        forum: "আলোচনা ফোরাম",
        forumDesc: "প্রশ্ন জিজ্ঞাসা করুন এবং অভিজ্ঞতা শেয়ার করুন",
        success: "সফলতার গল্প",
        successDesc: "কুমোরদের থেকে অনুপ্রেরণামূলক গল্প",
        tips: "টিপস এবং কৌশল",
        tipsDesc: "মাটির পাত্র তৈরির দক্ষতা শেয়ার করুন",
        market: "বাজার আলোচনা",
        marketDesc: "কেনাবেচা নিয়ে আলোচনা করুন"
      },

      // Create Post
      createPost: {
        title: "কমিউনিটিতে শেয়ার করুন",
        placeholder: "আপনার মনে কি? আপনার মাটির পাত্রের যাত্রা শেয়ার করুন, প্রশ্ন জিজ্ঞাসা করুন, বা পরামর্শ দিন...",
        button: "কমিউনিটিতে পোস্ট করুন",
        guidelines: "সম্মানজনক, সহায়ক এবং সাহায্যকারী হন"
      },

      // Forum Discussions
      discussions: {
        title: "সাম্প্রতিক আলোচনা",
        replies: "উত্তর",
        views: "দেখা হয়েছে",
        newPost: "নতুন আলোচনা"
      },

      // Success Stories
      stories: {
        title: "সফলতার গল্প",
        readMore: "গল্প পড়ুন"
      },

      // Q&A Section
      qa: {
        title: "প্রশ্ন এবং উত্তর",
        askQuestion: "একটি প্রশ্ন জিজ্ঞাসা করুন",
        answer: "উত্তর"
      },

      // Community Stats
      stats: {
        title: "কমিউনিটি ওভারভিউ",
        members: "সক্রিয় সদস্য",
        discussions: "আলোচনা",
        answered: "প্রশ্নের উত্তর",
        stories: "সফলতার গল্প"
      },

      // Moderation Notice
      moderation: {
        title: "কমিউনিটি নির্দেশিকা",
        rule1: "সকল সদস্যদের প্রতি সম্মানজনক এবং দয়ালু হন",
        rule2: "সত্যিকারের মাটির পাত্রের অভিজ্ঞতা শেয়ার করুন",
        rule3: "মূল্য ছাড়া স্প্যাম বা আত্ম-প্রচার নয়",
        rule4: "অন্যদের শিখতে এবং বাড়তে সাহায্য করুন",
        rule5: "অনুপযুক্ত কন্টেন্ট রিপোর্ট করুন"
      },

      // Search
      search: "আলোচনা, প্রশ্ন, গল্প খুঁজুন..."
    }
  };

  const t = content[language];

  // Sample discussions data
  const discussions = [
    {
      id: 1,
      title: language === "en" ? "How to price handmade pottery?" : "হাতে তৈরি মাটির পাত্রের দাম কিভাবে নির্ধারণ করবেন?",
      author: "Rahim Ahmed",
      category: "marketplace",
      replies: 12,
      views: 234,
      likes: 18,
      time: language === "en" ? "2 hours ago" : "২ ঘন্টা আগে"
    },
    {
      id: 2,
      title: language === "en" ? "Best clay for making water pots?" : "পানির পাত্র তৈরির জন্য সেরা মাটি?",
      author: "Fatima Begum",
      category: "tips",
      replies: 8,
      views: 156,
      likes: 14,
      time: language === "en" ? "5 hours ago" : "৫ ঘন্টা আগে"
    },
    {
      id: 3,
      title: language === "en" ? "My first online sale - Thank you!" : "আমার প্রথম অনলাইন বিক্রয় - ধন্যবাদ!",
      author: "Karim Mia",
      category: "success",
      replies: 24,
      views: 412,
      likes: 56,
      time: language === "en" ? "1 day ago" : "১ দিন আগে"
    },
    {
      id: 4,
      title: language === "en" ? "Traditional vs modern pottery techniques" : "ঐতিহ্যবাহী বনাম আধুনিক মাটির পাত্র কৌশল",
      author: "Salma Khatun",
      category: "forum",
      replies: 16,
      views: 289,
      likes: 22,
      time: language === "en" ? "2 days ago" : "২ দিন আগে"
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      author: "Jahangir Alam",
      location: language === "en" ? "Narsingdi, Bangladesh" : "নরসিংদী, বাংলাদেশ",
      story: language === "en" 
        ? "From local market to international orders - how AI marketing helped me reach customers worldwide"
        : "স্থানীয় বাজার থেকে আন্তর্জাতিক অর্ডার পর্যন্ত - AI মার্কেটিং আমাকে বিশ্বব্যাপী গ্রাহকদের কাছে পৌঁছাতে সাহায্য করেছে",
      sales: language === "en" ? "₹50,000+ in 3 months" : "৩ মাসে ৳৫০,০০০+ বিক্রয়",
      image: "🏆"
    },
    {
      id: 2,
      author: "Ayesha Siddiqua",
      location: language === "en" ? "Bogura, Bangladesh" : "বগুড়া, বাংলাদেশ",
      story: language === "en"
        ? "Single mother supporting 3 children through pottery sales - platform made it possible"
        : "একক মা ৩ সন্তানকে মাটির পাত্র বিক্রয়ের মাধ্যমে সমর্থন করছেন - প্ল্যাটফর্ম এটি সম্ভব করেছে",
      sales: language === "en" ? "₹35,000+ monthly" : "মাসিক ৳৩৫,০০০+",
      image: "⭐"
    },
    {
      id: 3,
      author: "Rafiq Uddin",
      location: language === "en" ? "Rajshahi, Bangladesh" : "রাজশাহী, বাংলাদেশ",
      story: language === "en"
        ? "Reviving family pottery tradition with AI tools - now teaching young artisans"
        : "AI টুল দিয়ে পরিবারের মাটির পাত্র ঐতিহ্য পুনরুজ্জীবিত করছি - এখন তরুণ কুমোরদের শেখাচ্ছি",
      sales: language === "en" ? "Training 12 apprentices" : "১২ জন শিক্ষানবিশ প্রশিক্ষণ",
      image: "🌟"
    }
  ];

  // Community stats
  const stats = [
    { label: t.stats.members, value: "847", icon: Users },
    { label: t.stats.discussions, value: "1,234", icon: MessageCircle },
    { label: t.stats.answered, value: "892", icon: MessageSquare },
    { label: t.stats.stories, value: "156", icon: Award }
  ];

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      alert(language === "en" 
        ? "Post submitted! (Demo - In production, this would be saved to database)"
        : "পোস্ট জমা দেওয়া হয়েছে! (ডেমো - উৎপাদনে, এটি ডেটাবেসে সংরক্ষণ করা হবে)"
      );
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Language Toggle */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-amber-900 mb-2">{t.title}</h1>
            <p className="text-lg text-amber-700">{t.subtitle}</p>
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

        {/* Community Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-amber-900 mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className="h-10 w-10 text-amber-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <Card className="mb-8 bg-white border-amber-200">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Category Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">{t.categories.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">{t.categories.forum}</CardTitle>
                <CardDescription>{t.categories.forumDesc}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Award className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-900">{t.categories.success}</CardTitle>
                <CardDescription>{t.categories.successDesc}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Star className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-purple-900">{t.categories.tips}</CardTitle>
                <CardDescription>{t.categories.tipsDesc}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-900">{t.categories.market}</CardTitle>
                <CardDescription>{t.categories.marketDesc}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - Discussions */}
          <div className="lg:col-span-2">
            
            {/* Create New Post */}
            <Card className="mb-8 bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  {t.createPost.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder={t.createPost.placeholder}
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[120px] mb-4"
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">{t.createPost.guidelines}</p>
                  <Button 
                    onClick={handlePostSubmit}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {t.createPost.button}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Discussions */}
            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    {t.discussions.title}
                  </span>
                  <Button size="sm" variant="outline">
                    {t.discussions.newPost}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <div key={discussion.id}>
                      <div className="flex items-start gap-4 p-4 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-amber-200 text-amber-900">
                            {discussion.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{discussion.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span>{discussion.author}</span>
                            <span>•</span>
                            <span>{discussion.time}</span>
                            <Badge variant="outline" className="text-xs">
                              {discussion.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {discussion.replies} {t.discussions.replies}
                            </span>
                            <span>{discussion.views} {t.discussions.views}</span>
                            <button className="flex items-center gap-1 hover:text-amber-600 transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                              {discussion.likes}
                            </button>
                          </div>
                        </div>
                      </div>
                      {index < discussions.length - 1 && <Separator className="my-2" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Stories Section */}
            <Card className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  {t.stories.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {successStories.map((story) => (
                    <Card key={story.id} className="bg-white border-green-200">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-5xl">{story.image}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-bold text-lg text-gray-900">{story.author}</h4>
                              <Badge className="bg-green-100 text-green-800">{story.location}</Badge>
                            </div>
                            <p className="text-gray-700 mb-3">{story.story}</p>
                            <div className="flex items-center justify-between">
                              <Badge className="bg-green-600 text-white">{story.sales}</Badge>
                              <Button variant="link" className="text-green-700 p-0 h-auto">
                                {t.stories.readMore} →
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Community Guidelines */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 text-lg">{t.moderation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{t.moderation.rule1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{t.moderation.rule2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{t.moderation.rule3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{t.moderation.rule4}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{t.moderation.rule5}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Research Notice */}
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900 text-lg">
                  {language === "en" ? "Research Prototype" : "গবেষণা প্রোটোটাইপ"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  {language === "en"
                    ? "This community platform is part of a human-centered AI research project. All discussions are moderated for safety and authenticity."
                    : "এই কমিউনিটি প্ল্যাটফর্মটি একটি মানব-কেন্দ্রিক AI গবেষণা প্রকল্পের অংশ। সমস্ত আলোচনা নিরাপত্তা এবং সত্যতার জন্য পর্যবেক্ষণ করা হয়।"}
                </p>
                <Badge className="bg-purple-600 text-white">
                  {language === "en" ? "Safe Community Space" : "নিরাপদ কমিউনিটি স্পেস"}
                </Badge>
              </CardContent>
            </Card>

          </div>

        </div>

      </div>
    </div>
  );
}
