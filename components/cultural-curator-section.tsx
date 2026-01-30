"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  BookOpen, 
  Globe, 
  Users,
  Award,
  Palette,
  History,
  Languages,
  ArrowRight
} from "lucide-react"

interface CulturalCuratorProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    title: "Cultural Curator AI",
    subtitle: "Preserving Heritage Through Intelligent Insights",
    description: "Our AI-powered cultural curator helps artisans understand, document, and share the rich cultural heritage behind their craft while connecting with global audiences.",
    features: {
      heritage: {
        title: "Heritage Documentation",
        desc: "AI analyzes pottery patterns and techniques to document cultural significance"
      },
      translation: {
        title: "Smart Translation",
        desc: "Automatically translates product descriptions to reach international markets"
      },
      storytelling: {
        title: "Story Generation",
        desc: "Creates compelling narratives about artisan techniques and traditions"
      },
      cultural: {
        title: "Cultural Context",
        desc: "Provides historical and cultural background for each pottery style"
      }
    },
    cta: "Explore AI Features",
    stats: {
      patterns: "Patterns Analyzed",
      stories: "Stories Generated",
      languages: "Languages Supported"
    }
  },
  bn: {
    title: "সাংস্কৃতিক কিউরেটর এআই",
    subtitle: "বুদ্ধিমান অন্তর্দৃষ্টির মাধ্যমে ঐতিহ্য সংরক্ষণ",
    description: "আমাদের এআই-চালিত সাংস্কৃতিক কিউরেটর শিল্পীদের তাদের কারুশিল্পের পিছনের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য বুঝতে, নথিভুক্ত করতে এবং ভাগ করতে সাহায্য করে।",
    features: {
      heritage: {
        title: "ঐতিহ্য নথিভুক্তকরণ",
        desc: "এআই সাংস্কৃতিক তাৎপর্য নথিভুক্ত করতে মৃৎশিল্পের নিদর্শন বিশ্লেষণ করে"
      },
      translation: {
        title: "স্মার্ট অনুবাদ",
        desc: "আন্তর্জাতিক বাজারে পৌঁছাতে স্বয়ংক্রিয়ভাবে পণ্যের বিবরণ অনুবাদ করে"
      },
      storytelling: {
        title: "গল্প তৈরি",
        desc: "কারিগরদের কৌশল এবং ঐতিহ্য সম্পর্কে আকর্ষণীয় বর্ণনা তৈরি করে"
      },
      cultural: {
        title: "সাংস্কৃতিক প্রেক্ষাপট",
        desc: "প্রতিটি মৃৎশিল্প শৈলীর জন্য ঐতিহাসিক এবং সাংস্কৃতিক পটভূমি প্রদান করে"
      }
    },
    cta: "এআই বৈশিষ্ট্যগুলি অন্বেষণ করুন",
    stats: {
      patterns: "নিদর্শন বিশ্লেষিত",
      stories: "গল্প তৈরি",
      languages: "ভাষা সমর্থিত"
    }
  }
}

export function CulturalCuratorSection({ language }: CulturalCuratorProps) {
  const t = translations[language]

  return (
    <section id="cultural-curator" className="py-24 px-4 bg-gradient-to-br from-primary/5 via-gold/5 to-emerald/5">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-gold text-white">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Heritage
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            {t.description}
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Heritage Documentation */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-primary/20 group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold mb-3">{t.features.heritage.title}</h3>
                <p className="text-muted-foreground mb-4">{t.features.heritage.desc}</p>
                <div className="bg-card rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center gap-2 text-sm">
                    <History className="h-4 w-4 text-primary" />
                    <span className="font-mono text-xs">Pattern Recognition: 98.5%</span>
                  </div>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-gold rounded-full" style={{ width: "98.5%" }} />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Smart Translation */}
          <Card className="p-8 bg-gradient-to-br from-emerald/10 to-transparent hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-emerald/20 group-hover:scale-110 transition-transform">
                <Languages className="h-8 w-8 text-emerald" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold mb-3">{t.features.translation.title}</h3>
                <p className="text-muted-foreground mb-4">{t.features.translation.desc}</p>
                <div className="bg-card rounded-lg p-4 border border-emerald/20">
                  <div className="flex gap-2 flex-wrap">
                    {["English", "বাংলা", "हिन्दी", "中文"].map((lang, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Story Generation */}
          <Card className="p-8 bg-gradient-to-br from-gold/10 to-transparent hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-gold/20 group-hover:scale-110 transition-transform">
                <Palette className="h-8 w-8 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold mb-3">{t.features.storytelling.title}</h3>
                <p className="text-muted-foreground mb-4">{t.features.storytelling.desc}</p>
                <div className="bg-card rounded-lg p-4 border border-gold/20">
                  <p className="text-sm italic text-muted-foreground">
                    "Crafted using the traditional <span className="text-gold font-bold">Nakshi technique</span>, 
                    passed down through 5 generations..."
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Cultural Context */}
          <Card className="p-8 bg-gradient-to-br from-rose-500/10 to-transparent hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-rose-500/20 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-rose-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold mb-3">{t.features.cultural.title}</h3>
                <p className="text-muted-foreground mb-4">{t.features.cultural.desc}</p>
                <div className="bg-card rounded-lg p-4 border border-rose-500/20">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-rose-500" />
                    <span className="text-sm font-semibold">UNESCO Heritage Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-transparent">
            <div className="font-serif text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">{t.stats.patterns}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-emerald/5 to-transparent">
            <div className="font-serif text-4xl font-bold text-emerald mb-2">1,200+</div>
            <div className="text-muted-foreground">{t.stats.stories}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-gold/5 to-transparent">
            <div className="font-serif text-4xl font-bold text-gold mb-2">12+</div>
            <div className="text-muted-foreground">{t.stats.languages}</div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary via-gold to-emerald hover:scale-105 transition-transform"
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
