"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { PotteryDesigner } from "@/components/pottery-designer"
import { Footer } from "@/components/footer"

export default function DesignToolPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en")

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} setLanguage={setLanguage} />
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Pottery Design Studio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create your custom pottery design with AI-powered tools. 
              Experiment with traditional Bangladeshi patterns and modern aesthetics.
            </p>
          </div>
          
          <PotteryDesigner />
        </div>
      </section>
      
      <Footer language={language} />
    </main>
  )
}
