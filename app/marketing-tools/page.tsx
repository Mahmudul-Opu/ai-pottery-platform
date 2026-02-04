'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Globe, MessageSquare, Tag, Image, Copy, RefreshCw, AlertCircle, ArrowLeft, Home } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function MarketingToolsPage() {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    origin: '',
    price: '',
    description: '',
  });

  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState({
    facebook: '',
    instagram: '',
    whatsapp: '',
    seoTitle: '',
    keywords: '',
    bannerText: '',
  });

  const generateContent = () => {
    setGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      if (language === 'en') {
        setGenerated({
          facebook: `🏺 Discover authentic ${productData.category} from ${productData.origin}!\n\nHandcrafted with traditional techniques, each piece tells a story of Bangladeshi artisan heritage. ${productData.description}\n\n💰 Only ${productData.price} BDT\n🛒 Shop now and support local artisans!\n\n#BangladeshiPottery #HandmadeCraft #ArtisanCraft #${productData.category}`,
          instagram: `✨ ${productData.name}\n\n${productData.description}\n\n🏺 Handcrafted in ${productData.origin}\n💫 Traditional ${productData.category}\n💰 ${productData.price} BDT\n\n#pottery #handicraft #bangladesh #artisan #handmade #${productData.category.toLowerCase()} #culturalheritage #supportlocal`,
          whatsapp: `🎨 *${productData.name}*\n\nAuthentic ${productData.category} from ${productData.origin}\n\n${productData.description}\n\n✅ Handcrafted by local artisans\n✅ Traditional techniques\n✅ Cultural heritage\n\n💰 Price: ${productData.price} BDT\n\n🛒 Order now!`,
          seoTitle: `${productData.name} - Authentic Bangladeshi ${productData.category} from ${productData.origin}`,
          keywords: `${productData.category}, bangladeshi pottery, ${productData.origin} pottery, handmade pottery, traditional pottery, artisan craft, clay pottery, handcrafted pottery, ${productData.name}`,
          bannerText: `🏺 ${productData.name}\nAuthentic ${productData.category} • ${productData.origin}\n${productData.price} BDT`,
        });
      } else {
        setGenerated({
          facebook: `🏺 ${productData.origin} থেকে খাঁটি ${productData.category} আবিষ্কার করুন!\n\nঐতিহ্যবাহী কৌশলে হস্তনির্মিত, প্রতিটি পিস বাংলাদেশী কারিগর ঐতিহ্যের গল্প বলে। ${productData.description}\n\n💰 মাত্র ${productData.price} টাকা\n🛒 এখনই কিনুন এবং স্থানীয় কারিগরদের সমর্থন করুন!\n\n#বাংলাদেশীমৃৎশিল্প #হস্তনির্মিত #কারিগরশিল্প`,
          instagram: `✨ ${productData.name}\n\n${productData.description}\n\n🏺 ${productData.origin} এ হস্তনির্মিত\n💫 ঐতিহ্যবাহী ${productData.category}\n💰 ${productData.price} টাকা\n\n#মৃৎশিল্প #হস্তশিল্প #বাংলাদেশ #কারিগর #হস্তনির্মিত #সাংস্কৃতিকঐতিহ্য`,
          whatsapp: `🎨 *${productData.name}*\n\n${productData.origin} থেকে খাঁটি ${productData.category}\n\n${productData.description}\n\n✅ স্থানীয় কারিগর দ্বারা হস্তনির্মিত\n✅ ঐতিহ্যবাহী কৌশল\n✅ সাংস্কৃতিক ঐতিহ্য\n\n💰 মূল্য: ${productData.price} টাকা\n\n🛒 এখনই অর্ডার করুন!`,
          seoTitle: `${productData.name} - ${productData.origin} থেকে খাঁটি বাংলাদেশী ${productData.category}`,
          keywords: `${productData.category}, বাংলাদেশী মৃৎশিল্প, ${productData.origin} মৃৎশিল্প, হস্তনির্মিত মাটির পাত্র, ঐতিহ্যবাহী মৃৎশিল্প, কারিগর শিল্প`,
          bannerText: `🏺 ${productData.name}\nখাঁটি ${productData.category} • ${productData.origin}\n${productData.price} টাকা`,
        });
      }
      setGenerating(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(language === 'en' ? 'Copied to clipboard!' : 'কপি হয়েছে!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {language === 'en' ? '🤖 AI Marketing Support Tools' : '🤖 এআই মার্কেটিং সহায়তা সরঞ্জাম'}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Generate social media posts, SEO content, and promotional materials for your pottery products'
              : 'আপনার মৃৎশিল্প পণ্যের জন্য সোশ্যাল মিডিয়া পোস্ট, এসইও কন্টেন্ট এবং প্রচারমূলক উপকরণ তৈরি করুন'}
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

        {/* Back Button */}
        <Button
          onClick={() => window.location.href = '/'}
          variant="outline"
          size="lg"
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-5 w-5" />
          {language === 'en' ? 'Back to Home' : 'হোমে ফিরুন'}
        </Button>

        {/* AI Disclaimer */}
        <Card className="mb-8 border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-orange-900 dark:text-orange-100 font-medium">
                  {language === 'en' 
                    ? '⚠️ AI-Generated Content – Editable by Artisan'
                    : '⚠️ এআই-উৎপন্ন বিষয়বস্তু – কারিগর দ্বারা সম্পাদনাযোগ্য'}
                </p>
                <p className="text-xs text-orange-800 dark:text-orange-200 mt-1">
                  {language === 'en'
                    ? 'All content is AI-generated and should be reviewed and edited before use. You maintain full control over final content.'
                    : 'সমস্ত বিষয়বস্তু এআই দ্বারা তৈরি এবং ব্যবহারের আগে পর্যালোচনা এবং সম্পাদনা করা উচিত। আপনি চূড়ান্ত বিষয়বস্তুর উপর সম্পূর্ণ নিয়ন্ত্রণ বজায় রাখেন।'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-orange-500" />
                {language === 'en' ? 'Product Information' : 'পণ্য তথ্য'}
              </CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? 'Enter your pottery product details'
                  : 'আপনার মৃৎশিল্প পণ্যের বিবরণ লিখুন'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>{language === 'en' ? '🏺 Product Name' : '🏺 পণ্যের নাম'}</Label>
                <Input
                  placeholder={language === 'en' ? 'Traditional Clay Vase' : 'ঐতিহ্যবাহী মাটির ফুলদানি'}
                  value={productData.name}
                  onChange={(e) => setProductData({...productData, name: e.target.value})}
                />
              </div>

              <div>
                <Label>{language === 'en' ? '📦 Category' : '📦 বিভাগ'}</Label>
                <Input
                  placeholder={language === 'en' ? 'Vase, Bowl, Pot, Plate' : 'ফুলদানি, বাটি, হাঁড়ি, প্লেট'}
                  value={productData.category}
                  onChange={(e) => setProductData({...productData, category: e.target.value})}
                />
              </div>

              <div>
                <Label>{language === 'en' ? '🌍 Cultural Origin' : '🌍 সাংস্কৃতিক উৎস'}</Label>
                <Input
                  placeholder={language === 'en' ? 'Dhaka, Tangail, Rajshahi' : 'ঢাকা, টাঙ্গাইল, রাজশাহী'}
                  value={productData.origin}
                  onChange={(e) => setProductData({...productData, origin: e.target.value})}
                />
              </div>

              <div>
                <Label>{language === 'en' ? '💰 Price (BDT)' : '💰 মূল্য (টাকা)'}</Label>
                <Input
                  type="number"
                  placeholder="500"
                  value={productData.price}
                  onChange={(e) => setProductData({...productData, price: e.target.value})}
                />
              </div>

              <div>
                <Label>{language === 'en' ? '📝 Short Description' : '📝 সংক্ষিপ্ত বিবরণ'}</Label>
                <Textarea
                  placeholder={language === 'en' 
                    ? 'Handcrafted with traditional techniques...'
                    : 'ঐতিহ্যবাহী কৌশলে হস্তনির্মিত...'}
                  value={productData.description}
                  onChange={(e) => setProductData({...productData, description: e.target.value})}
                  rows={3}
                />
              </div>

              <Button 
                onClick={generateContent} 
                className="w-full" 
                disabled={generating || !productData.name}
              >
                {generating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    {language === 'en' ? 'Generating...' : 'তৈরি হচ্ছে...'}
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Generate Marketing Content' : 'মার্কেটিং বিষয়বস্তু তৈরি করুন'}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Content */}
          <div className="space-y-6">
            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  {language === 'en' ? 'Facebook Post' : 'ফেসবুক পোস্ট'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  value={generated.facebook} 
                  onChange={(e) => setGenerated({...generated, facebook: e.target.value})}
                  rows={6}
                  placeholder={language === 'en' ? 'Generated content will appear here...' : 'উৎপন্ন বিষয়বস্তু এখানে প্রদর্শিত হবে...'}
                />
                <Button 
                  onClick={() => copyToClipboard(generated.facebook)} 
                  variant="outline" 
                  className="mt-2 w-full"
                  disabled={!generated.facebook}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Copy' : 'কপি করুন'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-pink-500" />
                  {language === 'en' ? 'Instagram Caption' : 'ইনস্টাগ্রাম ক্যাপশন'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  value={generated.instagram} 
                  onChange={(e) => setGenerated({...generated, instagram: e.target.value})}
                  rows={6}
                />
                <Button 
                  onClick={() => copyToClipboard(generated.instagram)} 
                  variant="outline" 
                  className="mt-2 w-full"
                  disabled={!generated.instagram}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Copy' : 'কপি করুন'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  {language === 'en' ? 'WhatsApp Message' : 'হোয়াটসঅ্যাপ বার্তা'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  value={generated.whatsapp} 
                  onChange={(e) => setGenerated({...generated, whatsapp: e.target.value})}
                  rows={6}
                />
                <Button 
                  onClick={() => copyToClipboard(generated.whatsapp)} 
                  variant="outline" 
                  className="mt-2 w-full"
                  disabled={!generated.whatsapp}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Copy' : 'কপি করুন'}
                </Button>
              </CardContent>
            </Card>

            {/* SEO Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-purple-500" />
                  {language === 'en' ? 'SEO Title & Keywords' : 'এসইও শিরোনাম এবং কীওয়ার্ড'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-xs">{language === 'en' ? 'Title' : 'শিরোনাম'}</Label>
                  <Input 
                    value={generated.seoTitle} 
                    onChange={(e) => setGenerated({...generated, seoTitle: e.target.value})}
                  />
                </div>
                <div>
                  <Label className="text-xs">{language === 'en' ? 'Keywords' : 'কীওয়ার্ড'}</Label>
                  <Textarea 
                    value={generated.keywords} 
                    onChange={(e) => setGenerated({...generated, keywords: e.target.value})}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Banner Text */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-orange-500" />
                  {language === 'en' ? 'Banner Text' : 'ব্যানার টেক্সট'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  value={generated.bannerText} 
                  onChange={(e) => setGenerated({...generated, bannerText: e.target.value})}
                  rows={3}
                />
                <Button 
                  onClick={() => copyToClipboard(generated.bannerText)} 
                  variant="outline" 
                  className="mt-2 w-full"
                  disabled={!generated.bannerText}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Copy' : 'কপি করুন'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
