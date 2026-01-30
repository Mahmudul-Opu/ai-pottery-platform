"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  Lightbulb,
  Vote,
  Palette,
  MessageCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  Target
} from "lucide-react"

interface ParticipatoryDesignProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    title: "Participatory Design",
    subtitle: "Co-Creating the Future of Pottery",
    description: "Your voice matters! Join our community in shaping platform features, design decisions, and policies that work for everyone.",
    propose: "Propose Feature",
    active: "Active Proposals",
    implemented: "Implemented",
    voting: "Community Voting",
    stats: {
      proposals: "Active Proposals",
      votes: "Total Votes Cast",
      implemented: "Features Implemented"
    }
  },
  bn: {
    title: "অংশগ্রহণমূলক ডিজাইন",
    subtitle: "মৃৎশিল্পের ভবিষ্যৎ একসাথে তৈরি করা",
    description: "আপনার মতামত গুরুত্বপূর্ণ! প্ল্যাটফর্ম বৈশিষ্ট্য, ডিজাইন সিদ্ধান্ত এবং নীতি গঠনে আমাদের কমিউনিটিতে যোগ দিন।",
    propose: "বৈশিষ্ট্য প্রস্তাব করুন",
    active: "সক্রিয় প্রস্তাব",
    implemented: "বাস্তবায়িত",
    voting: "কমিউনিটি ভোটিং",
    stats: {
      proposals: "সক্রিয় প্রস্তাব",
      votes: "মোট ভোট",
      implemented: "বৈশিষ্ট্য বাস্তবায়িত"
    }
  }
}

export function ParticipatoryDesignSection({ language }: ParticipatoryDesignProps) {
  const t = translations[language]

  const proposals = [
    {
      id: 1,
      title: "Virtual Pottery Workshop Feature",
      author: "Kamal Das",
      description: "Live streaming capability for artisans to conduct online workshops",
      votes: 245,
      status: "voting",
      progress: 82,
      category: "Feature",
      timeLeft: "5 days"
    },
    {
      id: 2,
      title: "Multi-Currency Payment Support",
      author: "Rina Begum",
      description: "Allow international customers to pay in their local currency",
      votes: 189,
      status: "voting",
      progress: 63,
      category: "Payment",
      timeLeft: "8 days"
    },
    {
      id: 3,
      title: "Artisan Skill Badge System",
      author: "Abdul Karim",
      description: "Recognition badges for artisan expertise and specializations",
      votes: 312,
      status: "approved",
      progress: 100,
      category: "Gamification",
      timeLeft: "In Development"
    },
    {
      id: 4,
      title: "Mobile App for Artisans",
      author: "Maya Rani",
      description: "Dedicated mobile application for easier product management",
      votes: 428,
      status: "approved",
      progress: 100,
      category: "Platform",
      timeLeft: "Coming Q2 2026"
    }
  ]

  const implemented = [
    {
      title: "AI Product Description Generator",
      votes: 567,
      date: "January 2026",
      impact: "95% of artisans now use this feature"
    },
    {
      title: "Bilingual Interface (EN/BN)",
      votes: 423,
      date: "December 2025",
      impact: "Increased artisan engagement by 60%"
    },
    {
      title: "Direct Messaging System",
      votes: 389,
      date: "November 2025",
      impact: "Reduced response time by 40%"
    }
  ]

  return (
    <section id="participatory-design" className="py-24 px-4 bg-gradient-to-br from-emerald/5 via-transparent to-primary/5">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-emerald to-accent text-white">
            <Users className="mr-2 h-4 w-4" />
            Co-Design with Us
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-gradient-to-br from-emerald/10 to-transparent">
            <div className="font-serif text-4xl font-bold text-emerald mb-2">24</div>
            <div className="text-muted-foreground">{t.stats.proposals}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-transparent">
            <div className="font-serif text-4xl font-bold text-primary mb-2">2,450+</div>
            <div className="text-muted-foreground">{t.stats.votes}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-gold/10 to-transparent">
            <div className="font-serif text-4xl font-bold text-gold mb-2">18</div>
            <div className="text-muted-foreground">{t.stats.implemented}</div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="active" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="active">{t.active}</TabsTrigger>
            <TabsTrigger value="voting">{t.voting}</TabsTrigger>
            <TabsTrigger value="implemented">{t.implemented}</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-2xl font-bold">Community Proposals</h3>
              <Button className="bg-gradient-to-r from-emerald to-emerald-dark">
                <Lightbulb className="mr-2 h-5 w-5" />
                {t.propose}
              </Button>
            </div>

            <div className="grid gap-6">
              {proposals.filter(p => p.status === "voting").map((proposal) => (
                <Card key={proposal.id} className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{proposal.category}</Badge>
                        <h4 className="font-bold text-lg">{proposal.title}</h4>
                      </div>
                      <p className="text-muted-foreground mb-3">{proposal.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          Proposed by {proposal.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {proposal.timeLeft} left
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Vote className="h-5 w-5 text-emerald" />
                        <span className="font-bold text-lg">{proposal.votes} votes</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{proposal.progress}% support</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald to-accent rounded-full transition-all duration-500" 
                        style={{ width: `${proposal.progress}%` }} 
                      />
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button className="flex-1 bg-gradient-to-r from-emerald to-emerald-dark">
                        <Vote className="mr-2 h-4 w-4" />
                        Vote Yes
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Discuss
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="voting" className="space-y-6">
            <div className="text-center py-12">
              <Target className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">Vote on New Features</h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Your vote directly influences platform development priorities. 
                Features with 80%+ approval move to development.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-gold">
                View All Proposals
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="implemented" className="space-y-6">
            <h3 className="font-serif text-2xl font-bold mb-6">Successfully Implemented Features</h3>
            <div className="grid gap-6">
              {implemented.map((feature, i) => (
                <Card key={i} className="p-6 bg-gradient-to-br from-emerald/5 to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald/20">
                      <CheckCircle className="h-6 w-6 text-emerald" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg">{feature.title}</h4>
                        <Badge className="bg-emerald/10 text-emerald">{feature.date}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm mb-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Vote className="h-4 w-4" />
                          {feature.votes} votes
                        </span>
                        <span className="flex items-center gap-1 text-emerald">
                          <TrendingUp className="h-4 w-4" />
                          {feature.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* How It Works */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 via-gold/5 to-emerald/5">
          <h3 className="font-serif text-2xl font-bold text-center mb-8">How Participatory Design Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold mb-2">Propose</h4>
              <p className="text-sm text-muted-foreground">Submit your feature ideas and improvements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold mb-2">Discuss</h4>
              <p className="text-sm text-muted-foreground">Community reviews and refines the proposal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold mb-2">Vote</h4>
              <p className="text-sm text-muted-foreground">Members vote on implementation priority</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold mb-2">Build</h4>
              <p className="text-sm text-muted-foreground">Approved features enter development</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
