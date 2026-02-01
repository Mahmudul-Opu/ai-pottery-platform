'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Camera, Upload, BarChart3, Sparkles, Globe, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

export default function LearningPage() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [activeGuide, setActiveGuide] = useState<string | null>(null);

  const guides = [
    {
      id: 'upload',
      icon: Upload,
      titleEn: 'Upload Products',
      titleBn: 'পণ্য আপলোড করুন',
      descEn: 'Step-by-step guide to add your pottery',
      descBn: 'আপনার মৃৎশিল্প যুক্ত করার ধাপে ধাপে নির্দেশিকা',
      steps: language === 'en' ? [
        { icon: '📱', text: 'Go to "My Products" page' },
        { icon: '➕', text: 'Click "Add New Product" button' },
        { icon: '🏺', text: 'Enter product name (e.g., "Clay Vase")' },
        { icon: '📦', text: 'Select category (Vase, Bowl, Pot, Plate)' },
        { icon: '💰', text: 'Add price in BDT' },
        { icon: '📝', text: 'Write short description' },
        { icon: '📸', text: 'Upload product photo' },
        { icon: '✅', text: 'Click "Save" to publish' },
      ] : [
        { icon: '📱', text: '"আমার পণ্য" পৃষ্ঠায় যান' },
        { icon: '➕', text: '"নতুন পণ্য যুক্ত করুন" বাটনে ক্লিক করুন' },
        { icon: '🏺', text: 'পণ্যের নাম লিখুন (যেমন: "মাটির ফুলদানি")' },
        { icon: '📦', text: 'বিভাগ নির্বাচন করুন (ফুলদানি, বাটি, হাঁড়ি, প্লেট)' },
        { icon: '💰', text: 'টাকায় মূল্য যুক্ত করুন' },
        { icon: '📝', text: 'সংক্ষিপ্ত বিবরণ লিখুন' },
        { icon: '📸', text: 'পণ্যের ছবি আপলোড করুন' },
        { icon: '✅', text: 'প্রকাশ করতে "সংরক্ষণ" ক্লিক করুন' },
      ]
    },
    {
      id: 'photo',
      icon: Camera,
      titleEn: 'Take Quality Photos',
      titleBn: 'মানসম্পন্ন ছবি তুলুন',
      descEn: 'Mobile photography tips for pottery',
      descBn: 'মৃৎশিল্পের জন্য মোবাইল ফটোগ্রাফি টিপস',
      steps: language === 'en' ? [
        { icon: '☀️', text: 'Use natural daylight (not direct sun)' },
        { icon: '🤍', text: 'Place pottery on white cloth/paper' },
        { icon: '🧹', text: 'Clean pottery before photo' },
        { icon: '📐', text: 'Center pottery in frame' },
        { icon: '📱', text: 'Hold phone steady (use both hands)' },
        { icon: '🔍', text: 'Take 3-4 photos from different angles' },
        { icon: '📏', text: 'Include size reference (coin, hand)' },
        { icon: '✨', text: 'Avoid shadows and reflections' },
      ] : [
        { icon: '☀️', text: 'প্রাকৃতিক দিনের আলো ব্যবহার করুন (সরাসরি রোদ নয়)' },
        { icon: '🤍', text: 'সাদা কাপড়/কাগজে মৃৎশিল্প রাখুন' },
        { icon: '🧹', text: 'ছবির আগে মৃৎশিল্প পরিষ্কার করুন' },
        { icon: '📐', text: 'ফ্রেমের মাঝখানে মৃৎশিল্প রাখুন' },
        { icon: '📱', text: 'ফোন স্থিরভাবে ধরুন (দুই হাত ব্যবহার করুন)' },
        { icon: '🔍', text: 'বিভিন্ন কোণ থেকে ৩-৪টি ছবি তুলুন' },
        { icon: '📏', text: 'আকার রেফারেন্স অন্তর্ভুক্ত করুন (কয়েন, হাত)' },
        { icon: '✨', text: 'ছায়া এবং প্রতিফলন এড়িয়ে চলুন' },
      ]
    },
    {
      id: 'description',
      icon: BookOpen,
      titleEn: 'Write Descriptions',
      titleBn: 'বিবরণ লিখুন',
      descEn: 'Simple product description tips',
      descBn: 'সহজ পণ্য বিবরণ টিপস',
      steps: language === 'en' ? [
        { icon: '🏺', text: 'Start with product type (Vase, Bowl, etc.)' },
        { icon: '📏', text: 'Mention size (small, medium, large)' },
        { icon: '🎨', text: 'Describe color (red clay, brown, white)' },
        { icon: '✋', text: 'Add "handmade" or "traditional"' },
        { icon: '🌍', text: 'Mention your village/area' },
        { icon: '💡', text: 'Suggest use (flowers, cooking, decor)' },
        { icon: '📝', text: 'Keep it simple (3-4 sentences)' },
        { icon: '🗣️', text: 'Write like you\'re talking to buyer' },
      ] : [
        { icon: '🏺', text: 'পণ্যের ধরন দিয়ে শুরু করুন (ফুলদানি, বাটি, ইত্যাদি)' },
        { icon: '📏', text: 'আকার উল্লেখ করুন (ছোট, মাঝারি, বড়)' },
        { icon: '🎨', text: 'রঙ বর্ণনা করুন (লাল মাটি, বাদামী, সাদা)' },
        { icon: '✋', text: '"হস্তনির্মিত" বা "ঐতিহ্যবাহী" যুক্ত করুন' },
        { icon: '🌍', text: 'আপনার গ্রাম/এলাকা উল্লেখ করুন' },
        { icon: '💡', text: 'ব্যবহার পরামর্শ দিন (ফুল, রান্না, সাজসজ্জা)' },
        { icon: '📝', text: 'সহজ রাখুন (৩-৪ বাক্য)' },
        { icon: '🗣️', text: 'ক্রেতার সাথে কথা বলার মতো লিখুন' },
      ]
    },
    {
      id: 'analytics',
      icon: BarChart3,
      titleEn: 'Understand Dashboard',
      titleBn: 'ড্যাশবোর্ড বুঝুন',
      descEn: 'How to read your sales data',
      descBn: 'আপনার বিক্রয় ডেটা কীভাবে পড়বেন',
      steps: language === 'en' ? [
        { icon: '👁️', text: 'Views = How many people saw your product' },
        { icon: '🛒', text: 'Sales = Products you sold' },
        { icon: '💰', text: 'Revenue = Total money earned' },
        { icon: '📊', text: 'Green arrow = More than last month' },
        { icon: '📉', text: 'Red arrow = Less than last month' },
        { icon: '⭐', text: 'Top Products = Your best sellers' },
        { icon: '📅', text: 'Check dashboard weekly' },
        { icon: '📸', text: 'Popular products = Good photos!' },
      ] : [
        { icon: '👁️', text: 'ভিউ = কতজন আপনার পণ্য দেখেছে' },
        { icon: '🛒', text: 'বিক্রয় = আপনার বিক্রিত পণ্য' },
        { icon: '💰', text: 'রাজস্ব = মোট অর্জিত অর্থ' },
        { icon: '📊', text: 'সবুজ তীর = গত মাসের চেয়ে বেশি' },
        { icon: '📉', text: 'লাল তীর = গত মাসের চেয়ে কম' },
        { icon: '⭐', text: 'শীর্ষ পণ্য = আপনার সেরা বিক্রেতা' },
        { icon: '📅', text: 'সাপ্তাহিক ড্যাশবোর্ড চেক করুন' },
        { icon: '📸', text: 'জনপ্রিয় পণ্য = ভালো ছবি!' },
      ]
    },
    {
      id: 'ai-tools',
      icon: Sparkles,
      titleEn: 'Use AI Marketing Tools',
      titleBn: 'এআই মার্কেটিং টুল ব্যবহার করুন',
      descEn: 'Generate social media posts easily',
      descBn: 'সহজেই সোশ্যাল মিডিয়া পোস্ট তৈরি করুন',
      steps: language === 'en' ? [
        { icon: '🤖', text: 'Go to "Marketing Tools" page' },
        { icon: '📝', text: 'Fill product information form' },
        { icon: '🌐', text: 'Choose language (English or Bangla)' },
        { icon: '✨', text: 'Click "Generate Content" button' },
        { icon: '📱', text: 'AI creates Facebook, Instagram, WhatsApp posts' },
        { icon: '✏️', text: 'Edit generated text if needed' },
        { icon: '📋', text: 'Click "Copy" to copy text' },
        { icon: '📲', text: 'Paste in Facebook/WhatsApp to share' },
      ] : [
        { icon: '🤖', text: '"মার্কেটিং টুলস" পৃষ্ঠায় যান' },
        { icon: '📝', text: 'পণ্য তথ্য ফর্ম পূরণ করুন' },
        { icon: '🌐', text: 'ভাষা নির্বাচন করুন (ইংরেজি বা বাংলা)' },
        { icon: '✨', text: '"কন্টেন্ট তৈরি করুন" বাটনে ক্লিক করুন' },
        { icon: '📱', text: 'এআই ফেসবুক, ইনস্টাগ্রাম, হোয়াটসঅ্যাপ পোস্ট তৈরি করে' },
        { icon: '✏️', text: 'প্রয়োজনে উৎপন্ন টেক্সট সম্পাদনা করুন' },
        { icon: '📋', text: 'টেক্সট কপি করতে "কপি" ক্লিক করুন' },
        { icon: '📲', text: 'শেয়ার করতে ফেসবুক/হোয়াটসঅ্যাপে পেস্ট করুন' },
      ]
    },
  ];

  const faqs = language === 'en' ? [
    { q: 'How do I add my first product?', a: 'Follow the "Upload Products" guide above. It\'s simple: take a photo, add details, and click save!' },
    { q: 'What makes a good product photo?', a: 'Use daylight, clean background, center your pottery, and take multiple angles.' },
    { q: 'Do I need to know English?', a: 'No! All features work in Bangla. Switch language using the globe icon.' },
    { q: 'How do I share products on Facebook?', a: 'Use the AI Marketing Tools to generate ready-to-post content, then copy and paste!' },
    { q: 'What if I make a mistake?', a: 'You can always edit or delete your products. Click on any product to update it.' },
  ] : [
    { q: 'আমি কীভাবে আমার প্রথম পণ্য যুক্ত করব?', a: 'উপরের "পণ্য আপলোড করুন" নির্দেশিকা অনুসরণ করুন। এটি সহজ: একটি ছবি তুলুন, বিবরণ যুক্ত করুন এবং সংরক্ষণ ক্লিক করুন!' },
    { q: 'একটি ভালো পণ্য ছবি কী তৈরি করে?', a: 'দিনের আলো ব্যবহার করুন, পরিষ্কার পটভূমি, আপনার মৃৎশিল্প কেন্দ্রে রাখুন এবং একাধিক কোণ থেকে তুলুন।' },
    { q: 'আমার কি ইংরেজি জানতে হবে?', a: 'না! সমস্ত বৈশিষ্ট্য বাংলায় কাজ করে। গ্লোব আইকন ব্যবহার করে ভাষা পরিবর্তন করুন।' },
    { q: 'আমি ফেসবুকে পণ্য কীভাবে শেয়ার করব?', a: 'তৈরি-থেকে-পোস্ট কন্টেন্ট তৈরি করতে এআই মার্কেটিং টুলস ব্যবহার করুন, তারপর কপি এবং পেস্ট করুন!' },
    { q: 'যদি আমি ভুল করি?', a: 'আপনি সর্বদা আপনার পণ্য সম্পাদনা বা মুছে ফেলতে পারেন। এটি আপডেট করতে যেকোনো পণ্যে ক্লিক করুন।' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {language === 'en' ? '📚 Artisan Learning & Support' : '📚 কারিগর শিক্ষা ও সহায়তা'}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Step-by-step visual guides to help you succeed on the platform'
              : 'প্ল্যাটফর্মে সফল হতে আপনাকে সাহায্য করার জন্য ধাপে ধাপে ভিজ্যুয়াল গাইড'}
          </p>
          
          {/* Language Toggle */}
          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant={language === 'en' ? 'default' : 'outline'}
              onClick={() => setLanguage('en')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              English
            </Button>
            <Button
              variant={language === 'bn' ? 'default' : 'outline'}
              onClick={() => setLanguage('bn')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              বাংলা
            </Button>
          </div>
        </div>

        {/* Learning Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Card 
                key={guide.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  activeGuide === guide.id ? 'ring-2 ring-orange-500' : ''
                }`}
                onClick={() => setActiveGuide(activeGuide === guide.id ? null : guide.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                      <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {language === 'en' ? guide.titleEn : guide.titleBn}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription>
                    {language === 'en' ? guide.descEn : guide.descBn}
                  </CardDescription>
                </CardHeader>
                
                {activeGuide === guide.id && (
                  <CardContent>
                    <div className="space-y-3">
                      {guide.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <Badge variant="outline" className="shrink-0">
                            {idx + 1}
                          </Badge>
                          <span className="text-2xl shrink-0">{step.icon}</span>
                          <p className="text-sm flex-1">{step.text}</p>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {language === 'en' ? 'Got it!' : 'বুঝেছি!'}
                    </Button>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Quick Tips */}
        <Card className="mb-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💡 {language === 'en' ? 'Quick Tips' : 'দ্রুত টিপস'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {(language === 'en' ? [
                'Use icons and tooltips to understand each feature',
                'Take your time - there\'s no rush',
                'Ask questions in the Community Forum',
                'Check your dashboard weekly',
                'Update product photos for better sales',
              ] : [
                'প্রতিটি বৈশিষ্ট্য বুঝতে আইকন এবং টুলটিপ ব্যবহার করুন',
                'আপনার সময় নিন - কোন তাড়াহুড়ো নেই',
                'কমিউনিটি ফোরামে প্রশ্ন জিজ্ঞাসা করুন',
                'সাপ্তাহিক আপনার ড্যাশবোর্ড চেক করুন',
                'ভাল বিক্রয়ের জন্য পণ্যের ছবি আপডেট করুন',
              ]).map((tip, idx) => (
                <li key={idx} className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-500" />
              {language === 'en' ? 'Frequently Asked Questions' : 'প্রায়শই জিজ্ঞাসিত প্রশ্ন'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold mb-1">{faq.q}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Help CTA */}
        <div className="mt-8 text-center">
          <Card className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-2">
                {language === 'en' ? 'Need More Help?' : 'আরও সাহায্য প্রয়োজন?'}
              </h3>
              <p className="mb-4">
                {language === 'en' 
                  ? 'Join our community forum to ask questions and share experiences'
                  : 'প্রশ্ন জিজ্ঞাসা করতে এবং অভিজ্ঞতা শেয়ার করতে আমাদের কমিউনিটি ফোরামে যোগ দিন'}
              </p>
              <Button variant="secondary" size="lg">
                {language === 'en' ? 'Join Community' : 'কমিউনিটিতে যোগ দিন'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
