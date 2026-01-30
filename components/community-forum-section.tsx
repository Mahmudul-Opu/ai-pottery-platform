"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { 
  MessageSquare, 
  Users, 
  ThumbsUp,
  MessageCircle,
  TrendingUp,
  Clock,
  Pin,
  Star,
  Heart,
  Share2
} from "lucide-react"

interface CommunityForumProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    title: "Community Forum",
    subtitle: "Connect, Learn, and Grow Together",
    description: "A vibrant space for artisans, buyers, and enthusiasts to share knowledge, ask questions, and collaborate on preserving pottery heritage.",
    joinCommunity: "Join the Community",
    categories: "Categories",
    trending: "Trending Discussions",
    recentTopics: "Recent Topics",
    stats: {
      members: "Active Members",
      discussions: "Discussions",
      responses: "Avg Response Time"
    }
  },
  bn: {
    title: "কমিউনিটি ফোরাম",
    subtitle: "একসাথে সংযুক্ত হন, শিখুন এবং বৃদ্ধি পান",
    description: "জ্ঞান ভাগাভাগি, প্রশ্ন জিজ্ঞাসা এবং মৃৎশিল্প ঐতিহ্য সংরক্ষণে সহযোগিতার জন্য শিল্পী, ক্রেতা এবং উৎসাহীদের একটি প্রাণবন্ত স্থান।",
    joinCommunity: "কমিউনিটিতে যোগ দিন",
    categories: "বিভাগসমূহ",
    trending: "জনপ্রিয় আলোচনা",
    recentTopics: "সাম্প্রতিক বিষয়",
    stats: {
      members: "সক্রিয় সদস্য",
      discussions: "আলোচনা",
      responses: "গড় প্রতিক্রিয়া সময়"
    }
  }
}

export function CommunityForumSection({ language }: CommunityForumProps) {
  const t = translations[language]

  const categories = [
    { name: "Techniques & Tips", icon: "🎨", posts: 145, color: "from-primary/20 to-primary/5" },
    { name: "Design Inspiration", icon: "✨", posts: 89, color: "from-gold/20 to-gold/5" },
    { name: "Business & Marketing", icon: "📈", posts: 67, color: "from-emerald/20 to-emerald/5" },
    { name: "Material Sourcing", icon: "🏺", posts: 52, color: "from-rose-500/20 to-rose-500/5" }
  ]

  const discussions = [
    {
      id: 1,
      title: "Best clay sources in Dhamrai region?",
      author: "Kamal Das",
      avatar: "KD",
      category: "Material Sourcing",
      replies: 24,
      likes: 45,
      time: "2 hours ago",
      isPinned: true,
      tags: ["clay", "sourcing", "dhamrai"]
    },
    {
      id: 2,
      title: "Traditional glazing techniques for terracotta",
      author: "Rina Begum",
      avatar: "RB",
      category: "Techniques & Tips",
      replies: 18,
      likes: 67,
      time: "5 hours ago",
      isPinned: false,
      tags: ["glazing", "terracotta", "traditional"]
    },
    {
      id: 3,
      title: "How to photograph pottery for online sales?",
      author: "Abdul Karim",
      avatar: "AK",
      category: "Business & Marketing",
      replies: 31,
      likes: 89,
      time: "1 day ago",
      isPinned: false,
      tags: ["photography", "marketing", "sales"]
    },
    {
      id: 4,
      title: "Fusion designs: Blending modern with traditional",
      author: "Maya Rani",
      avatar: "MR",
      category: "Design Inspiration",
      replies: 42,
      likes: 123,
      time: "2 days ago",
      isPinned: false,
      tags: ["fusion", "design", "innovation"]
    }
  ]

  return (
    <section id="community-forum" className="py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-gradient-to-r from-emerald to-accent text-white">
            <Users className="mr-2 h-4 w-4" />
            Join the Conversation
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
            <div className="font-serif text-4xl font-bold text-primary mb-2">1,250+</div>
            <div className="text-muted-foreground">{t.stats.members}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-emerald/10 to-transparent">
            <div className="font-serif text-4xl font-bold text-emerald mb-2">450+</div>
            <div className="text-muted-foreground">{t.stats.discussions}</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-gold/10 to-transparent">
            <div className="font-serif text-4xl font-bold text-gold mb-2">&lt; 2hrs</div>
            <div className="text-muted-foreground">{t.stats.responses}</div>
          </Card>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold mb-6">{t.categories}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, i) => (
              <Card key={i} className={`p-6 bg-gradient-to-br ${category.color} hover:shadow-xl transition-all duration-300 cursor-pointer group`}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h4 className="font-bold text-lg mb-2">{category.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span>{category.posts} posts</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trending Discussions */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl font-bold">{t.recentTopics}</h3>
              <Button variant="outline" size="sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                {t.trending}
              </Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-gold flex items-center justify-center text-white font-bold">
                      {discussion.avatar}
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {discussion.isPinned && <Pin className="h-4 w-4 text-gold" />}
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                              {discussion.title}
                            </h4>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="font-medium">{discussion.author}</span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">{discussion.category}</Badge>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{discussion.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        {discussion.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 text-sm">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span>{discussion.replies} replies</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-rose-500 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>{discussion.likes} likes</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-emerald transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card className="p-6 bg-gradient-to-br from-gold/10 to-transparent">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-gold" />
                <h4 className="font-bold">Top Contributors</h4>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Kamal Das", posts: 89, badge: "🏆" },
                  { name: "Rina Begum", posts: 67, badge: "🥈" },
                  { name: "Abdul Karim", posts: 54, badge: "🥉" }
                ].map((contributor, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl">{contributor.badge}</span>
                    <div className="flex-1">
                      <div className="font-semibold">{contributor.name}</div>
                      <div className="text-xs text-muted-foreground">{contributor.posts} helpful posts</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Community Guidelines */}
            <Card className="p-6 bg-gradient-to-br from-emerald/10 to-transparent">
              <h4 className="font-bold mb-3">Community Guidelines</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-0.5">✓</span>
                  <span>Be respectful and supportive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-0.5">✓</span>
                  <span>Share knowledge freely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-0.5">✓</span>
                  <span>Stay on topic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald mt-0.5">✓</span>
                  <span>Celebrate diversity</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-emerald to-emerald-dark">
            <Users className="mr-2 h-5 w-5" />
            {t.joinCommunity}
          </Button>
        </div>
      </div>
    </section>
  )
}
