"use client"

import { useState } from "react"
import { Search, Sparkles, ShoppingBag, BarChart3, Users, Upload, MessageSquare, TrendingUp } from "lucide-react"

interface ProcessSectionProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    title: "How It Works",
    subtitle: "Our Human-Centered Design Process",
    description: "Experience a seamless journey from discovery to purchase, powered by lightweight AI that works even on slow connections.",
    forBuyers: "For Buyers",
    forArtisans: "For Artisans",
    steps: {
      buyers: [
        {
          icon: Search,
          title: "Browse & Discover",
          description: "Explore authentic pottery with visual navigation designed for easy browsing.",
          detail: "Icon-based interface minimizes text input for accessibility",
        },
        {
          icon: Sparkles,
          title: "AI Recommendations",
          description: "Get personalized suggestions based on your browsing patterns.",
          detail: "Lightweight session-based AI with explainability",
        },
        {
          icon: ShoppingBag,
          title: "Customize & Preview",
          description: "Use our generative design tool to visualize pottery in different styles.",
          detail: "Interactive canvas for human-AI co-creativity",
        },
        {
          icon: MessageSquare,
          title: "Connect with Artisans",
          description: "Chat directly with craftspeople to understand their heritage.",
          detail: "Building trust through authentic connections",
        },
      ],
      artisans: [
        {
          icon: Upload,
          title: "Easy Product Upload",
          description: "Add your creations with minimal typing using visual guidance.",
          detail: "Designed for low digital literacy users",
        },
        {
          icon: Sparkles,
          title: "AI-Assisted Marketing",
          description: "Auto-generate captions, keywords, and promotional content.",
          detail: "No marketing expertise required",
        },
        {
          icon: BarChart3,
          title: "Simple Analytics",
          description: "View visitor stats and interactions in human-readable format.",
          detail: "Plain language insights, not technical charts",
        },
        {
          icon: TrendingUp,
          title: "Grow Your Business",
          description: "Reach domestic and international markets with AI support.",
          detail: "Sustainable digital entrepreneurship",
        },
      ],
    },
  },
  bn: {
    title: "এটি কীভাবে কাজ করে",
    subtitle: "আমাদের মানব-কেন্দ্রিক ডিজাইন প্রক্রিয়া",
    description: "আবিষ্কার থেকে ক্রয় পর্যন্ত একটি নিরবচ্ছিন্ন যাত্রা অনুভব করুন, হালকা ওজনের এআই দ্বারা চালিত।",
    forBuyers: "ক্রেতাদের জন্য",
    forArtisans: "শিল্পীদের জন্য",
    steps: {
      buyers: [
        {
          icon: Search,
          title: "ব্রাউজ ও আবিষ্কার",
          description: "সহজ ব্রাউজিংয়ের জন্য ডিজাইন করা ভিজ্যুয়াল নেভিগেশন সহ খাঁটি মৃৎশিল্প অন্বেষণ করুন।",
          detail: "অ্যাক্সেসিবিলিটির জন্য আইকন-ভিত্তিক ইন্টারফেস",
        },
        {
          icon: Sparkles,
          title: "এআই সুপারিশ",
          description: "আপনার ব্রাউজিং প্যাটার্নের উপর ভিত্তি করে ব্যক্তিগতকৃত পরামর্শ পান।",
          detail: "ব্যাখ্যাযোগ্যতা সহ হালকা সেশন-ভিত্তিক এআই",
        },
        {
          icon: ShoppingBag,
          title: "কাস্টমাইজ ও প্রিভিউ",
          description: "বিভিন্ন স্টাইলে মৃৎশিল্প কল্পনা করতে আমাদের জেনারেটিভ ডিজাইন টুল ব্যবহার করুন।",
          detail: "মানব-এআই সহ-সৃজনশীলতার জন্য ইন্টারেক্টিভ ক্যানভাস",
        },
        {
          icon: MessageSquare,
          title: "শিল্পীদের সাথে সংযোগ করুন",
          description: "তাদের ঐতিহ্য বুঝতে কারিগরদের সাথে সরাসরি চ্যাট করুন।",
          detail: "খাঁটি সংযোগের মাধ্যমে বিশ্বাস তৈরি করা",
        },
      ],
      artisans: [
        {
          icon: Upload,
          title: "সহজ পণ্য আপলোড",
          description: "ভিজ্যুয়াল গাইডেন্স ব্যবহার করে ন্যূনতম টাইপিংয়ে আপনার সৃষ্টি যোগ করুন।",
          detail: "কম ডিজিটাল সাক্ষরতা ব্যবহারকারীদের জন্য ডিজাইন করা",
        },
        {
          icon: Sparkles,
          title: "এআই-সহায়তা মার্কেটিং",
          description: "স্বয়ংক্রিয়ভাবে ক্যাপশন, কীওয়ার্ড এবং প্রচারমূলক সামগ্রী তৈরি করুন।",
          detail: "কোন মার্কেটিং দক্ষতার প্রয়োজন নেই",
        },
        {
          icon: BarChart3,
          title: "সহজ বিশ্লেষণ",
          description: "মানব-পাঠযোগ্য ফর্ম্যাটে ভিজিটর পরিসংখ্যান এবং ইন্টারঅ্যাকশন দেখুন।",
          detail: "সাধারণ ভাষায় অন্তর্দৃষ্টি, প্রযুক্তিগত চার্ট নয়",
        },
        {
          icon: TrendingUp,
          title: "আপনার ব্যবসা বাড়ান",
          description: "এআই সহায়তায় দেশীয় এবং আন্তর্জাতিক বাজারে পৌঁছান।",
          detail: "টেকসই ডিজিটাল উদ্যোক্তা",
        },
      ],
    },
  },
}

export function ProcessSection({ language }: ProcessSectionProps) {
  const t = translations[language]
  const [activeTab, setActiveTab] = useState<"buyers" | "artisans">("buyers")
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = t.steps[activeTab]

  return (
    <section id="process" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%238B4513' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.title}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-card border border-border shadow-sm">
            <button
              onClick={() => setActiveTab("buyers")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "buyers"
                  ? "bg-gradient-to-r from-emerald to-emerald-dark text-accent-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              {t.forBuyers}
            </button>
            <button
              onClick={() => setActiveTab("artisans")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "artisans"
                  ? "bg-gradient-to-r from-gold to-primary text-gold-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="h-5 w-5" />
              {t.forArtisans}
            </button>
          </div>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Card */}
                  <div className={`relative p-6 lg:p-8 rounded-2xl bg-card border transition-all duration-500 magnetic-hover ${
                    hoveredStep === index 
                      ? "border-primary shadow-xl shadow-primary/10 -translate-y-2" 
                      : "border-border"
                  }`}>
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center text-sm font-bold text-gold-foreground shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      activeTab === "buyers"
                        ? "bg-gradient-to-br from-emerald/20 to-emerald/10"
                        : "bg-gradient-to-br from-gold/20 to-primary/10"
                    }`}>
                      <Icon className={`h-7 w-7 ${
                        activeTab === "buyers" ? "text-emerald" : "text-gold"
                      }`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Detail (shows on hover) */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      hoveredStep === index ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <p className="text-sm text-primary/80 italic border-t border-border pt-4">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Connector (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 -translate-y-1/2">
                      <div className={`w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 ${
                        hoveredStep === index ? "border-primary scale-110" : ""
                      }`}>
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* UCD Stages Indicator */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-emerald" />
              </div>
              <div className="text-sm font-medium text-foreground">Contextual Inquiry</div>
              <div className="text-xs text-muted-foreground">User Research</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
              <div className="text-sm font-medium text-foreground">Design & Development</div>
              <div className="text-xs text-muted-foreground">Cultural UI</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium text-foreground">Evaluation & Testing</div>
              <div className="text-xs text-muted-foreground">Usability Metrics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
