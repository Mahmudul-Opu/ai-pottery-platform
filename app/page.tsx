"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { ArtisanSection } from "@/components/artisan-section"
import { AIFeatureSection } from "@/components/ai-feature-section"
import { CulturalCuratorSection } from "@/components/cultural-curator-section"
import { CommunityForumSection } from "@/components/community-forum-section"
import { ParticipatoryDesignSection } from "@/components/participatory-design-section"
import { FeedbackLoopSection } from "@/components/feedback-loop-section"
import { ResearchSection } from "@/components/research-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [language, setLanguage] = useState<"en" | "bn">("en")

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* Navigation */}
      <Navigation language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <HeroSection language={language} />

      {/* Platform Process Section */}
      <ProcessSection language={language} />

      {/* Artisan Stories Section */}
      <ArtisanSection language={language} />

      {/* Cultural Curator AI Section */}
      <CulturalCuratorSection language={language} />

      {/* Participatory Design Section */}
      <ParticipatoryDesignSection language={language} />

      {/* Feedback Loop Section */}
      <FeedbackLoopSection language={language} />

      {/* Research & Credibility Section */}
      <ResearchSection language={language} />

      {/* Call to Action Section */}
      <CTASection language={language} />

      {/* Footer */}
      <Footer language={language} />
    </main>
  )
}
