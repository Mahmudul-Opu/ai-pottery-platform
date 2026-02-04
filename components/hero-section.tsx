"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Users, ShoppingBag, Package } from "lucide-react"

interface HeroSectionProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    tagline: "AI + Heritage = Future",
    title: "Empowering Artisans,",
    titleHighlight: "Preserving Heritage",
    titleEnd: "with Custom Designer",
    subtitle:
      "Discover authentic Bangladeshi pottery crafted by skilled artisans. Our AI-powered platform connects you directly with traditional craftspeople while preserving centuries-old techniques.",
    discoverBtn: "Discover Pottery",
    productsBtn: "Browse Products",
    artisanBtn: "Artisan Portal",
    watchDemo: "Watch Demo",
    stats: {
      artisans: "Artisans",
      products: "Products",
      villages: "Villages",
    },
    roleSelect: "Choose Your Journey",
    buyer: "I'm a Buyer",
    buyerDesc: "Discover authentic pottery",
    artisan: "I'm an Artisan",
    artisanDesc: "Sell your creations",
    community: "Community Forum",
    communityDesc: "Join discussions & share ideas",
    designTool: "Custom Pottery Designer",
    designToolDesc: "Experience Human-AI Co-Creativity",
  },
  bn: {
    tagline: "এআই + ঐতিহ্য = ভবিষ্যৎ",
    title: "শিল্পীদের ক্ষমতায়ন,",
    titleHighlight: "ঐতিহ্য সংরক্ষণ",
    titleEnd: "কাস্টম ডিজাইনার দিয়ে",
    subtitle:
      "দক্ষ কারিগরদের তৈরি খাঁটি বাংলাদেশি মৃৎশিল্প আবিষ্কার করুন। আমাদের এআই-চালিত প্ল্যাটফর্ম আপনাকে সরাসরি ঐতিহ্যবাহী কারিগরদের সাথে সংযুক্ত করে।",
    discoverBtn: "মৃৎশিল্প আবিষ্কার করুন",
    productsBtn: "পণ্য ব্রাউজ করুন",
    artisanBtn: "শিল্পী পোর্টাল",
    watchDemo: "ডেমো দেখুন",
    stats: {
      artisans: "শিল্পী",
      products: "পণ্য",
      villages: "গ্রাম",
    },
    roleSelect: "আপনার যাত্রা বেছে নিন",
    buyer: "আমি একজন ক্রেতা",
    buyerDesc: "খাঁটি মৃৎশিল্প আবিষ্কার করুন",
    artisan: "আমি একজন শিল্পী",
    artisanDesc: "আপনার সৃষ্টি বিক্রি করুন",
    community: "কমিউনিটি ফোরাম",
    communityDesc: "আলোচনায় যোগ দিন এবং ধারণা শেয়ার করুন",
    designTool: "কাস্টম মৃৎশিল্প ডিজাইনার",
    designToolDesc: "মানব-এআই সহ-সৃজনশীলতা অনুভব করুন",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary to-terracotta-light blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 10}%`,
            top: `${10 + mousePosition.y * 10}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-emerald to-accent blur-3xl"
          style={{
            right: `${10 + mousePosition.x * 10}%`,
            bottom: `${20 + mousePosition.y * 10}%`,
            transform: "translate(50%, 50%)",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-gold to-primary blur-3xl"
          style={{
            left: `${50 + mousePosition.x * 5}%`,
            top: `${60 + mousePosition.y * 5}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Clay Texture Overlay */}
      <div className="absolute inset-0 clay-texture" />

      {/* Floating Pottery Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float" style={{ animationDelay: "0s" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <ellipse cx="50" cy="50" rx="45" ry="35" fill="currentColor" />
            <ellipse cx="50" cy="30" rx="30" ry="15" fill="currentColor" opacity="0.7" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
          <svg viewBox="0 0 100 120" className="w-full h-full text-terracotta-dark">
            <path d="M50 10 C20 10 10 40 10 70 C10 100 30 110 50 110 C70 110 90 100 90 70 C90 40 80 10 50 10" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
            <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-primary">{t.tagline}</span>
            </div>

            {/* Main Title */}
            <h1 className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="block font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                {t.title}
              </span>
              <span className="block font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="gold-foil">{t.titleHighlight}</span>
              </span>
              <span className="block font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                {t.titleEnd}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald to-emerald-dark hover:from-emerald/90 hover:to-emerald-dark/90 text-accent-foreground shadow-lg shadow-emerald/25 animate-pulse-glow"
                onClick={() => window.location.href = '/pottery'}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {t.discoverBtn}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2"
                onClick={() => window.location.href = '/pottery'}
              >
                <Package className="mr-2 h-5 w-5" />
                {t.productsBtn}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-gold to-primary hover:from-gold/90 hover:to-primary/90 text-gold-foreground shadow-lg shadow-gold/25"
                onClick={() => window.location.href = '/artisan'}
              >
                <Users className="mr-2 h-5 w-5" />
                {t.artisanBtn}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Watch Demo */}
            <div
              className="flex items-center gap-3 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border group-hover:border-gold transition-colors">
                  <Play className="h-5 w-5 ml-0.5" />
                  <span className="absolute inset-0 rounded-full animate-ping bg-gold/20 group-hover:animate-none" />
                </span>
                <span className="text-sm font-medium">{t.watchDemo}</span>
              </button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-center lg:text-left">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">{t.stats.artisans}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-emerald">100+</div>
                <div className="text-sm text-muted-foreground">{t.stats.products}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-gold">5+</div>
                <div className="text-sm text-muted-foreground">{t.stats.villages}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Role Selection Cards */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 rounded-3xl" />
            
            {/* Role Selection */}
            <div className="relative space-y-6">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-center text-foreground">
                {t.roleSelect}
              </h2>

              <div className="grid gap-4">
                {/* Buyer Card */}
                <button onClick={() => window.location.href = '/pottery'} className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-emerald transition-all duration-300 text-left magnetic-hover overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald/0 to-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center shadow-lg">
                      <ShoppingBag className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-emerald transition-colors">
                        {t.buyer}
                      </h3>
                      <p className="text-muted-foreground">{t.buyerDesc}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-emerald group-hover:translate-x-2 transition-all" />
                  </div>
                </button>

                {/* Artisan Card */}
                <button onClick={() => window.location.href = '/artisan'} className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-gold transition-all duration-300 text-left magnetic-hover overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-primary flex items-center justify-center shadow-lg">
                      <svg className="h-8 w-8 text-gold-foreground" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm0-2h-4v-1h4v1zm-2-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                        {t.artisan}
                      </h3>
                      <p className="text-muted-foreground">{t.artisanDesc}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-gold group-hover:translate-x-2 transition-all" />
                  </div>
                </button>

                {/* AI Marketing Tools Card */}
                <button onClick={() => window.location.href = '/marketing-tools'} className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-purple-500 transition-all duration-300 text-left magnetic-hover overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-purple-500 transition-colors">
                        {language === "en" ? "AI Marketing Tools" : "AI মার্কেটিং টুলস"}
                      </h3>
                      <p className="text-muted-foreground">{language === "en" ? "Generate content & boost sales" : "কন্টেন্ট তৈরি করুন এবং বিক্রয় বাড়ান"}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-purple-500 group-hover:translate-x-2 transition-all" />
                  </div>
                </button>

                {/* Product Recommendations Card */}
                <button onClick={() => window.location.href = '/recommendations'} className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-pink-500 transition-all duration-300 text-left magnetic-hover overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
                      <ShoppingBag className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-pink-500 transition-colors">
                        {language === "en" ? "Smart Recommendations" : "স্মার্ট সুপারিশ"}
                      </h3>
                      <p className="text-muted-foreground">{language === "en" ? "AI-powered product suggestions" : "AI-চালিত পণ্য সুপারিশ"}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-pink-500 group-hover:translate-x-2 transition-all" />
                  </div>
                </button>
              </div>

              {/* Featured Pottery Preview */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="group relative aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-terracotta-light/30 overflow-hidden magnetic-hover">
                  <img
                    src="/6332575338747071980.jpg"
                    alt="Hand-painted Terracotta Bowl Set"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-semibold">Hand-painted Bowl Set</p>
                  </div>
                </div>
                <div className="group relative aspect-square rounded-xl bg-gradient-to-br from-gold/20 to-primary/30 overflow-hidden magnetic-hover">
                  <img
                    src="/6332575338747071979.jpg"
                    alt="Terracotta Water Pots (Matka)"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-semibold">Water Pots (Matka)</p>
                  </div>
                </div>
                <div className="group relative aspect-square rounded-xl bg-gradient-to-br from-emerald/20 to-accent/30 overflow-hidden magnetic-hover">
                  <img
                    src="/6332575338747071978.jpg"
                    alt="Painted Terracotta Vessels"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-semibold">Painted Clay Vessels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-border flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
