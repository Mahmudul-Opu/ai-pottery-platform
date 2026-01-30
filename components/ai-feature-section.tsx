"use client"

import { useState, useRef, useEffect } from "react"
import { Sparkles, Palette, Wand2, Info, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

interface AIFeatureSectionProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    title: "AI-Powered Features",
    subtitle: "Custom Pottery Designer",
    description: "Our lightweight AI enhances your experience without requiring high-speed internet. Every recommendation is explainable and optional.",
    designPreview: "Generative Design Preview",
    designDesc: "Customize pottery colors and patterns in real-time",
    colorHue: "Color Tone",
    saturation: "Saturation",
    pattern: "Pattern Style",
    patternTypes: ["Traditional", "Modern", "Floral", "Geometric"],
    generateVariations: "Generate 5 Variations",
    whyRecommend: "Why this recommendation?",
    explanation: "Based on your interest in terracotta items and warm color preferences, this design aligns with traditional Bangladeshi pottery aesthetics.",
    aiAssist: "AI-Assisted Marketing",
    aiAssistDesc: "Auto-generate captions and keywords for your products",
    sampleCaption: "Handcrafted terracotta vase with traditional Bengali motifs. Perfect for home décor. #BangladeshiPottery #Handmade #Terracotta",
    regenerate: "Regenerate",
    personalizedSuggestions: "Personalized Suggestions",
    suggestionsDesc: "AI learns your preferences to show relevant pottery",
    explainableAI: "Explainable AI",
    explainableDesc: "Every recommendation comes with a reason",
  },
  bn: {
    title: "এআই-চালিত বৈশিষ্ট্য",
    subtitle: "কাস্টম মৃৎশিল্প ডিজাইনার",
    description: "আমাদের হালকা এআই উচ্চ-গতির ইন্টারনেট প্রয়োজন ছাড়াই আপনার অভিজ্ঞতা বাড়ায়। প্রতিটি সুপারিশ ব্যাখ্যাযোগ্য এবং ঐচ্ছিক।",
    designPreview: "জেনারেটিভ ডিজাইন প্রিভিউ",
    designDesc: "রিয়েল-টাইমে মৃৎশিল্পের রং এবং প্যাটার্ন কাস্টমাইজ করুন",
    colorHue: "রঙের টোন",
    saturation: "স্যাচুরেশন",
    pattern: "প্যাটার্ন স্টাইল",
    patternTypes: ["ঐতিহ্যবাহী", "আধুনিক", "ফুল", "জ্যামিতিক"],
    generateVariations: "৫টি ভ্যারিয়েশন তৈরি করুন",
    whyRecommend: "এই সুপারিশ কেন?",
    explanation: "টেরাকোটা আইটেম এবং উষ্ণ রঙের পছন্দে আপনার আগ্রহের উপর ভিত্তি করে, এই ডিজাইন ঐতিহ্যবাহী বাংলাদেশি মৃৎশিল্প নান্দনিকতার সাথে সামঞ্জস্যপূর্ণ।",
    aiAssist: "এআই-সহায়তা মার্কেটিং",
    aiAssistDesc: "আপনার পণ্যগুলির জন্য স্বয়ংক্রিয়ভাবে ক্যাপশন এবং কীওয়ার্ড তৈরি করুন",
    sampleCaption: "ঐতিহ্যবাহী বাংলা মোটিফ সহ হাতে তৈরি টেরাকোটা ফুলদানি। ঘরের সাজসজ্জার জন্য উপযুক্ত। #বাংলাদেশিমৃৎশিল্প #হাতেতৈরি #টেরাকোটা",
    regenerate: "পুনরায় তৈরি করুন",
    personalizedSuggestions: "ব্যক্তিগতকৃত পরামর্শ",
    suggestionsDesc: "এআই আপনার পছন্দ শিখে প্রাসঙ্গিক মৃৎশিল্প দেখায়",
    explainableAI: "ব্যাখ্যাযোগ্য এআই",
    explainableDesc: "প্রতিটি সুপারিশ একটি কারণ সহ আসে",
  },
}

const potteryColors = [
  { hue: 25, name: "Terracotta" },
  { hue: 35, name: "Clay Brown" },
  { hue: 45, name: "Golden Sand" },
  { hue: 15, name: "Deep Earth" },
  { hue: 5, name: "Burnt Sienna" },
]

export function AIFeatureSection({ language }: AIFeatureSectionProps) {
  const t = translations[language]
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hue, setHue] = useState(25)
  const [saturation, setSaturation] = useState(60)
  const [selectedPattern, setSelectedPattern] = useState(0)
  const [variations, setVariations] = useState<Array<{hue: number, sat: number, pattern: number}>>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [captionIndex, setCaptionIndex] = useState(0)

  const captions = [
    t.sampleCaption,
    "Authentic Bangladeshi pottery crafted with love. Each piece unique. #ArtisanCrafts #ClayArt #Heritage",
    "Traditional meets contemporary in this stunning pottery piece. #BangladeshArt #Handcrafted #HomeDecor",
  ]

  // Draw pottery on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Background
    ctx.fillStyle = `hsl(${hue + 10}, ${saturation - 20}%, 95%)`
    ctx.fillRect(0, 0, width, height)

    // Draw pottery vase shape
    const centerX = width / 2
    const baseY = height - 40
    const topY = 60

    ctx.beginPath()
    ctx.moveTo(centerX - 60, baseY)
    
    // Left curve of vase
    ctx.bezierCurveTo(
      centerX - 80, baseY - 60,
      centerX - 100, height / 2,
      centerX - 50, topY + 40
    )
    ctx.bezierCurveTo(
      centerX - 30, topY + 20,
      centerX - 40, topY,
      centerX, topY
    )
    
    // Right curve of vase
    ctx.bezierCurveTo(
      centerX + 40, topY,
      centerX + 30, topY + 20,
      centerX + 50, topY + 40
    )
    ctx.bezierCurveTo(
      centerX + 100, height / 2,
      centerX + 80, baseY - 60,
      centerX + 60, baseY
    )
    
    ctx.closePath()

    // Fill with gradient
    const gradient = ctx.createLinearGradient(centerX - 100, 0, centerX + 100, 0)
    gradient.addColorStop(0, `hsl(${hue}, ${saturation}%, 35%)`)
    gradient.addColorStop(0.3, `hsl(${hue}, ${saturation}%, 50%)`)
    gradient.addColorStop(0.7, `hsl(${hue}, ${saturation}%, 45%)`)
    gradient.addColorStop(1, `hsl(${hue}, ${saturation}%, 30%)`)
    ctx.fillStyle = gradient
    ctx.fill()

    // Add patterns based on selection
    ctx.strokeStyle = `hsl(${hue - 10}, ${saturation - 10}%, 25%)`
    ctx.lineWidth = 2

    if (selectedPattern === 0) {
      // Traditional horizontal bands
      for (let y = topY + 60; y < baseY - 40; y += 30) {
        const yRatio = (y - topY) / (baseY - topY)
        const widthAtY = 50 + Math.sin(yRatio * Math.PI) * 50
        ctx.beginPath()
        ctx.moveTo(centerX - widthAtY, y)
        ctx.lineTo(centerX + widthAtY, y)
        ctx.stroke()
      }
    } else if (selectedPattern === 1) {
      // Modern dots
      for (let y = topY + 60; y < baseY - 40; y += 25) {
        const yRatio = (y - topY) / (baseY - topY)
        const widthAtY = 40 + Math.sin(yRatio * Math.PI) * 40
        for (let x = -widthAtY; x <= widthAtY; x += 20) {
          ctx.beginPath()
          ctx.arc(centerX + x, y, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    } else if (selectedPattern === 2) {
      // Floral swirls
      for (let i = 0; i < 5; i++) {
        const y = topY + 80 + i * 40
        const yRatio = (y - topY) / (baseY - topY)
        const widthAtY = 30 + Math.sin(yRatio * Math.PI) * 30
        
        ctx.beginPath()
        ctx.arc(centerX - widthAtY/2, y, 8, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(centerX + widthAtY/2, y, 8, 0, Math.PI * 2)
        ctx.stroke()
      }
    } else if (selectedPattern === 3) {
      // Geometric triangles
      for (let y = topY + 60; y < baseY - 60; y += 35) {
        const yRatio = (y - topY) / (baseY - topY)
        const widthAtY = 35 + Math.sin(yRatio * Math.PI) * 35
        
        ctx.beginPath()
        ctx.moveTo(centerX - widthAtY, y + 15)
        ctx.lineTo(centerX - widthAtY + 15, y)
        ctx.lineTo(centerX - widthAtY + 30, y + 15)
        ctx.closePath()
        ctx.stroke()
        
        ctx.beginPath()
        ctx.moveTo(centerX + widthAtY - 30, y + 15)
        ctx.lineTo(centerX + widthAtY - 15, y)
        ctx.lineTo(centerX + widthAtY, y + 15)
        ctx.closePath()
        ctx.stroke()
      }
    }

    // Add shine highlight
    ctx.fillStyle = `hsla(${hue + 20}, ${saturation - 20}%, 70%, 0.3)`
    ctx.beginPath()
    ctx.ellipse(centerX - 30, height / 2 - 20, 15, 40, -0.3, 0, Math.PI * 2)
    ctx.fill()

  }, [hue, saturation, selectedPattern])

  const generateVariations = () => {
    const newVariations = []
    for (let i = 0; i < 5; i++) {
      newVariations.push({
        hue: hue + (Math.random() * 30 - 15),
        sat: saturation + (Math.random() * 20 - 10),
        pattern: Math.floor(Math.random() * 4),
      })
    }
    setVariations(newVariations)
  }

  return (
    <section id="pottery" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald/10 text-emerald text-sm font-medium mb-4">
            {t.title}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Main Demo Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Generative Design Preview */}
          <div className="bg-card rounded-3xl border border-border p-6 lg:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
                <Palette className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">{t.designPreview}</h3>
                <p className="text-sm text-muted-foreground">{t.designDesc}</p>
              </div>
            </div>

            {/* Canvas Display */}
            <div className="relative mb-6">
              <div className="aspect-square max-w-xs mx-auto bg-gradient-to-br from-muted to-secondary rounded-2xl overflow-hidden shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              {/* Color Hue */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">{t.colorHue}</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[hue]}
                    onValueChange={(v) => setHue(v[0])}
                    min={5}
                    max={50}
                    step={1}
                    className="flex-1"
                  />
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-border"
                    style={{ backgroundColor: `hsl(${hue}, ${saturation}%, 45%)` }}
                  />
                </div>
              </div>

              {/* Saturation */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">{t.saturation}</Label>
                <Slider
                  value={[saturation]}
                  onValueChange={(v) => setSaturation(v[0])}
                  min={30}
                  max={80}
                  step={1}
                />
              </div>

              {/* Pattern Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">{t.pattern}</Label>
                <div className="flex flex-wrap gap-2">
                  {t.patternTypes.map((pattern, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPattern(index)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        selectedPattern === index
                          ? "bg-gradient-to-r from-emerald to-emerald-dark text-accent-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {pattern}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={generateVariations}
                className="w-full bg-gradient-to-r from-gold to-primary hover:from-gold/90 hover:to-primary/90 text-gold-foreground"
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {t.generateVariations}
              </Button>

              {/* Variations Display */}
              {variations.length > 0 && (
                <div className="grid grid-cols-5 gap-2 pt-4">
                  {variations.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setHue(v.hue)
                        setSaturation(v.sat)
                        setSelectedPattern(v.pattern)
                      }}
                      className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-gold transition-all"
                      style={{ backgroundColor: `hsl(${v.hue}, ${v.sat}%, 45%)` }}
                    >
                      <span className="sr-only">Variation {i + 1}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* AI Features Cards */}
          <div className="space-y-6">
            {/* Explainable AI Card */}
            <div className="bg-card rounded-3xl border border-border p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-gold-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{t.explainableAI}</h3>
                  <p className="text-sm text-muted-foreground">{t.explainableDesc}</p>
                </div>
              </div>

              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-left"
              >
                <span className="flex items-center gap-2 text-foreground">
                  <Info className="h-4 w-4 text-gold" />
                  {t.whyRecommend}
                </span>
                <span className={`transition-transform ${showExplanation ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {showExplanation && (
                <div className="mt-4 p-4 rounded-xl bg-emerald/10 border border-emerald/20 animate-fade-in-up">
                  <p className="text-sm text-foreground leading-relaxed">
                    {t.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* AI Marketing Assistant */}
            <div className="bg-card rounded-3xl border border-border p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-terracotta-dark flex items-center justify-center">
                  <Wand2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{t.aiAssist}</h3>
                  <p className="text-sm text-muted-foreground">{t.aiAssistDesc}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-secondary/50 mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  {captions[captionIndex]}
                </p>
              </div>

              <Button
                variant="outline"
                onClick={() => setCaptionIndex((captionIndex + 1) % captions.length)}
                className="w-full bg-transparent"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                {t.regenerate}
              </Button>
            </div>

            {/* Personalized Suggestions */}
            <div className="bg-card rounded-3xl border border-border p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-accent flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{t.personalizedSuggestions}</h3>
                  <p className="text-sm text-muted-foreground">{t.suggestionsDesc}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "/6332575338747071983.jpg", alt: "Handcrafted Earthen Pots with Traditional Patterns" },
                  { src: "/6332575338747071982.jpg", alt: "Clay Pottery Workshop Collection" }, 
                  { src: "/6332575338747071981.jpg", alt: "Decorative Terracotta Vessels with Carved Designs" },
                ].map((item, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
