"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { 
  Target, 
  Heart, 
  Users, 
  Award,
  Sparkles,
  Globe,
  TrendingUp,
  Shield
} from "lucide-react"

export default function AboutPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en")

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gold-foil">MritiShilpa</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bridging centuries-old craftsmanship with cutting-edge AI technology 
              to empower Bangladeshi artisans and preserve our cultural heritage.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-gold/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower rural Bangladeshi artisans by connecting them directly with customers, 
                eliminating intermediaries, and using AI to enhance their market reach while 
                preserving traditional pottery-making techniques that have been passed down 
                through generations.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-emerald/10 to-accent/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-emerald/20">
                  <Heart className="h-6 w-6 text-emerald" />
                </div>
                <h2 className="font-serif text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading platform for authentic Bangladeshi pottery, where every 
                purchase directly supports artisan communities, preserves cultural heritage, 
                and demonstrates how technology can serve humanity while respecting tradition.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Artisan First</h3>
                <p className="text-sm text-muted-foreground">
                  Every decision prioritizes artisan empowerment and fair compensation
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-2xl bg-gold/10 mb-4">
                  <Award className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-bold text-lg mb-2">Authenticity</h3>
                <p className="text-sm text-muted-foreground">
                  100% handcrafted products with verified artisan stories
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-2xl bg-emerald/10 mb-4">
                  <Sparkles className="h-8 w-8 text-emerald" />
                </div>
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging AI to enhance traditional craftsmanship
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-2xl bg-rose-500/10 mb-4">
                  <Shield className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Eco-friendly practices and fair trade principles
                </p>
              </Card>
            </div>
          </div>

          {/* Our Impact */}
          <div className="bg-gradient-to-br from-primary/5 via-gold/5 to-emerald/5 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-serif text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Artisans Empowered</div>
              </div>
              <div>
                <div className="font-serif text-5xl font-bold text-emerald mb-2">100+</div>
                <div className="text-muted-foreground">Products Listed</div>
              </div>
              <div>
                <div className="font-serif text-5xl font-bold text-gold mb-2">5+</div>
                <div className="text-muted-foreground">Villages Connected</div>
              </div>
            </div>
          </div>

          {/* The Team */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-center mb-4">Research-Backed Platform</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              MritiShilpa is built on extensive HCI research and UCD principles, ensuring that 
              our platform truly serves the needs of both artisans and customers.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Data-Driven Insights</h3>
                <p className="text-sm text-muted-foreground">
                  AI analytics help artisans understand market trends and optimize their offerings
                </p>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-gold/5 to-transparent">
                <Globe className="h-8 w-8 text-gold mb-3" />
                <h3 className="font-bold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  Connecting local artisans with customers worldwide through digital platforms
                </p>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-emerald/5 to-transparent">
                <Users className="h-8 w-8 text-emerald mb-3" />
                <h3 className="font-bold mb-2">Community Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Participatory design ensures the platform meets real user needs
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}
