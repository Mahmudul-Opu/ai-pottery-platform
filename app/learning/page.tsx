'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Camera, TrendingUp, MessageCircle, HelpCircle, Globe } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            📚 Artisan Learning & Support
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Visual guides to help artisans use the platform effectively
          </p>
          <Badge variant="outline" className="mt-4">
            <Globe className="w-3 h-3 mr-1" />
            Available in English & বাংলা
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Upload Products */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
                Upload Your Pottery
              </CardTitle>
              <CardDescription>Step-by-step guide to add products</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">1</span>
                  <div>
                    <p className="font-medium">📸 Take Clear Photos</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Use natural light, clean background</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">2</span>
                  <div>
                    <p className="font-medium">➕ Click "Add Product"</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Find button in your dashboard</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">3</span>
                  <div>
                    <p className="font-medium">✍️ Write Simple Description</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Name, price, size, color</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">4</span>
                  <div>
                    <p className="font-medium">✅ Publish</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Your pottery is now visible to buyers!</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Take Photos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-blue-600" />
                </div>
                Quality Photo Tips
              </CardTitle>
              <CardDescription>Mobile photography guide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <p className="font-medium">Natural Light</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Photograph near window during daytime</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🧼</span>
                  <div>
                    <p className="font-medium">Clean Background</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Use white cloth or plain surface</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-medium">Hold Phone Steady</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Take multiple angles (front, side, top)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <p className="font-medium">Show Details</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Capture patterns and textures</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                Understanding Analytics
              </CardTitle>
              <CardDescription>Read your performance data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <p className="font-medium flex items-center gap-2">
                    <span className="text-xl">👀</span> Views
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">How many people saw your product</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <p className="font-medium flex items-center gap-2">
                    <span className="text-xl">🛒</span> Sales
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Total items sold</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <p className="font-medium flex items-center gap-2">
                    <span className="text-xl">💰</span> Revenue
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Money earned</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Marketing Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                </div>
                Using AI Marketing Tools
              </CardTitle>
              <CardDescription>Promote your pottery online</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm">1</span>
                  <p className="text-sm">Go to "Marketing Tools" section</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm">2</span>
                  <p className="text-sm">Fill in product details (name, price)</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm">3</span>
                  <p className="text-sm">Click "Generate" button</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm">4</span>
                  <p className="text-sm">AI creates posts for Facebook, Instagram</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm">5</span>
                  <p className="text-sm">✏️ Edit text if needed, then copy & share!</p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <Card className="mt-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-500" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-lg mb-1">❓ How do I change my product price?</p>
                <p className="text-slate-600 dark:text-slate-400">Go to "My Products" → Click "Edit" → Change price → Save</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-1">❓ Can I delete a product?</p>
                <p className="text-slate-600 dark:text-slate-400">Yes! Go to product page → Click "Delete" button</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-1">❓ How do customers contact me?</p>
                <p className="text-slate-600 dark:text-slate-400">Through messages or phone number you provided</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-1">❓ Is there a fee to sell?</p>
                <p className="text-slate-600 dark:text-slate-400">No! Platform is free for artisans</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Badge */}
        <div className="text-center mt-12">
          <Card className="inline-block">
            <CardContent className="pt-6">
              <p className="text-lg mb-2">💡 Need More Help?</p>
              <p className="text-slate-600 dark:text-slate-400">Contact support or join community forum</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
