"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { CommunityForumSection } from "@/components/community-forum-section"
import { Footer } from "@/components/footer"

export default function CommunityForumPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en")

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} setLanguage={setLanguage} />
      <CommunityForumSection language={language} />
      <Footer language={language} />
    </main>
  )
}
