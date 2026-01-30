"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  MessageSquare, 
  Star,
  ThumbsUp,
  ThumbsDown,
  Send,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  BarChart3
} from "lucide-react"

interface FeedbackLoopProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    title: "Feedback Loop",
    subtitle: "Your Voice Drives Improvement",
    description: "Share your experiences, report issues, and help us continuously improve the platform for everyone.",
    sendFeedback: "Send Feedback",
    rating: "Rate Your Experience",
    recentFeedback: "Recent Community Feedback",
    resolved: "Resolved",
    inProgress: "In Progress",
    categories: {
      bug: "Bug Report",
      feature: "Feature Request",
      improvement: "Improvement",
      praise: "Praise"
    },
    stats: {
      submitted: "Feedback Submitted",
      resolved: "Issues Resolved",
      responseTime: "Avg Response Time"
    }
  },
  bn: {
    title: "ফিডব্যাক লুপ",
    subtitle: "আপনার মতামত উন্নতি চালিত করে",
    description: "আপনার অভিজ্ঞতা শেয়ার করুন, সমস্যা রিপোর্ট করুন এবং সবার জন্য প্ল্যাটফর্ম ক্রমাগত উন্নত করতে সাহায্য করুন।",
    sendFeedback: "ফিডব্যাক পাঠান",
    rating: "আপনার অভিজ্ঞতা মূল্যায়ন করুন",
    recentFeedback: "সাম্প্রতিক কমিউনিটি ফিডব্যাক",
    resolved: "সমাধান হয়েছে",
    inProgress: "চলছে",
    categories: {
      bug: "বাগ রিপোর্ট",
      feature: "ফিচার অনুরোধ",
      improvement: "উন্নতি",
      praise: "প্রশংসা"
    },
    stats: {
      submitted: "ফিডব্যাক জমা দেওয়া",
      resolved: "সমস্যা সমাধান",
      responseTime: "গড় প্রতিক্রিয়া সময়"
    }
  }
}

export function FeedbackLoopSection({ language }: FeedbackLoopProps) {
  const t = translations[language]
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")

  const recentFeedback = [
    {
      id: 1,
      type: "improvement",
      user: "Kamal Das",
      message: "Product upload process could be faster with bulk upload feature",
      votes: 45,
      status: "in-progress",
      date: "2 days ago",
      response: "Great suggestion! We're working on bulk upload for Q1 2026."
    },
    {
      id: 2,
      type: "bug",
      user: "Rina Begum",
      message: "Mobile view has alignment issues on the dashboard",
      votes: 32,
      status: "resolved",
      date: "1 week ago",
      response: "Fixed in latest update v2.1.3"
    },
    {
      id: 3,
      type: "praise",
      user: "Abdul Karim",
      message: "The AI caption generator has increased my sales by 40%!",
      votes: 89,
      status: "acknowledged",
      date: "3 days ago",
      response: "Thank you! Stories like yours motivate our team."
    },
    {
      id: 4,
      type: "feature",
      user: "Maya Rani",
      message: "Need video support for product demonstrations",
      votes: 67,
      status: "in-progress",
      date: "5 days ago",
      response: "Video support scheduled for Q2 2026 release."
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "bug": return <AlertCircle className="h-5 w-5 text-rose-500" />
      case "feature": return <Lightbulb className="h-5 w-5 text-gold" />
      case "improvement": return <TrendingUp className="h-5 w-5 text-primary" />
      case "praise": return <Star className="h-5 w-5 text-emerald" />
      default: return <MessageSquare className="h-5 w-5" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "resolved":
        return <Badge className="bg-emerald/10 text-emerald"><CheckCircle className="mr-1 h-3 w-3" /> {t.resolved}</Badge>
      case "in-progress":
        return <Badge className="bg-primary/10 text-primary"><BarChart3 className="mr-1 h-3 w-3" /> {t.inProgress}</Badge>
      case "acknowledged":
        return <Badge className="bg-gold/10 text-gold">Acknowledged</Badge>
      default:
        return null
    }
  }

  return (
    <section id="feedback-loop" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-emerald text-white">
            <MessageSquare className="mr-2 h-4 w-4" />
            User-Centered Design
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
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-transparent">
            <div className="font-serif text-4xl font-bold text-primary mb-2">850+</div>
            <div className="text-muted-foreground">{t.stats.submitted}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-emerald/10 to-transparent">
            <div className="font-serif text-4xl font-bold text-emerald mb-2">92%</div>
            <div className="text-muted-foreground">{t.stats.resolved}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-gold/10 to-transparent">
            <div className="font-serif text-4xl font-bold text-gold mb-2">&lt;24h</div>
            <div className="text-muted-foreground">{t.stats.responseTime}</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Feedback Form */}
          <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-primary/5 to-transparent">
            <h3 className="font-serif text-2xl font-bold mb-6">{t.sendFeedback}</h3>
            
            {/* Rating */}
            <div className="mb-6">
              <Label className="mb-3 block">{t.rating}</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star 
                      className={`h-8 w-8 ${star <= rating ? 'fill-gold text-gold' : 'text-muted'}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Category Selection */}
            <div className="mb-6">
              <Label className="mb-3 block">Feedback Type</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: "bug", label: t.categories.bug, color: "rose-500" },
                  { key: "feature", label: t.categories.feature, color: "gold" },
                  { key: "improvement", label: t.categories.improvement, color: "primary" },
                  { key: "praise", label: t.categories.praise, color: "emerald" }
                ].map((cat) => (
                  <Button
                    key={cat.key}
                    variant="outline"
                    size="sm"
                    className="justify-start"
                  >
                    {getIcon(cat.key)}
                    <span className="ml-2">{cat.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <div className="mb-6">
              <Label htmlFor="feedback" className="mb-3 block">Your Feedback</Label>
              <Textarea
                id="feedback"
                placeholder="Tell us what's on your mind..."
                rows={6}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="resize-none"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-emerald" size="lg">
              <Send className="mr-2 h-5 w-5" />
              Submit Feedback
            </Button>
          </Card>

          {/* Recent Feedback */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-serif text-2xl font-bold">{t.recentFeedback}</h3>
            
            <div className="space-y-4">
              {recentFeedback.map((item) => (
                <Card key={item.id} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-muted">
                      {getIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{item.user}</span>
                            <span className="text-sm text-muted-foreground">• {item.date}</span>
                          </div>
                          {getStatusBadge(item.status)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <span className="text-sm font-semibold">{item.votes}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{item.message}</p>
                      
                      {item.response && (
                        <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary">
                          <div className="flex items-start gap-2">
                            <Badge className="bg-primary/10 text-primary">Team Response</Badge>
                          </div>
                          <p className="text-sm mt-2">{item.response}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* UCD Cycle Visualization */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-emerald/5 via-primary/5 to-gold/5">
          <h3 className="font-serif text-2xl font-bold text-center mb-8">User-Centered Design Cycle</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold mb-2">1. Gather Feedback</h4>
              <p className="text-sm text-muted-foreground">Users share experiences and suggestions</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold mb-2">2. Analyze Data</h4>
              <p className="text-sm text-muted-foreground">Team reviews and prioritizes feedback</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold mb-2">3. Implement</h4>
              <p className="text-sm text-muted-foreground">Solutions are designed and developed</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-bold mb-2">4. Measure Impact</h4>
              <p className="text-sm text-muted-foreground">Track improvements and iterate</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
