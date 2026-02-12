"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Filter, 
  Heart, 
  ShoppingCart, 
  Star,
  MapPin,
  User,
  Eye
} from "lucide-react"

export default function PotteryPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en")

  const products = [
    {
      id: 1,
      name: "Terracotta Martaban Storage Jar",
      artisan: "রহিম মিয়া",
      village: "Dhamrai",
      price: 250,
      rating: 4.8,
      reviews: 24,
      image: "/Terracotta Martaban (Storage Jar).png",
      category: "Storage",
      aiGenerated: false,
      priceType: "Artisan-set price"
    },
    {
      id: 2,
      name: "Clay Cup and Saucer Set",
      artisan: "করিম শেখ",
      village: "Shimulia",
      price: 150,
      rating: 4.9,
      reviews: 31,
      image: "/Clay Cup and Saucer.png",
      category: "Utility",
      aiGenerated: false,
      priceType: "Artisan-set price"
    },
    {
      id: 3,
      name: "Traditional Serving Pot (Handi)",
      artisan: "সুলতান মিয়া",
      village: "Manikganj",
      price: 200,
      rating: 4.7,
      reviews: 18,
      image: "/Serving Pot (Handi).png",
      category: "Cooking",
      aiGenerated: false,
      priceType: "Artisan-set price"
    },
    {
      id: 4,
      name: "Terracotta Pitcher",
      artisan: "আব্দুল করিম",
      village: "Dhamrai",
      price: 150,
      rating: 4.6,
      reviews: 15,
      image: "/Terracotta Pitcher or Jug.png",
      category: "Water Pots",
      aiGenerated: false,
      priceType: "Artisan-set price"
    },
    {
      id: 5,
      name: "Terracotta Sigree Incense Burner",
      artisan: "জসিম উদ্দিন",
      village: "Shimulia",
      price: 200,
      rating: 4.5,
      reviews: 12,
      image: "/Terracotta Sigree  Incense Burner.png",
      category: "Decorative",
      aiGenerated: false,
      priceType: "Artisan-set price"
    },
    {
      id: 6,
      name: "Clay Coffee Mug",
      artisan: "মোখলেস মিয়া",
      village: "Manikganj",
      price: 100,
      rating: 4.9,
      reviews: 28,
      image: "/Clay Coffee Mug.png",
      category: "Utility",
      aiGenerated: false,
      priceType: "Artisan-set price"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Discover Authentic <span className="gold-foil">Pottery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Browse our collection of handcrafted pottery made by skilled Bangladeshi artisans
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for pottery, artisans, or villages..." 
                  className="pl-10 h-12"
                />
              </div>
              <Button size="lg" className="bg-gradient-to-r from-primary to-gold">
                <Filter className="mr-2 h-5 w-5" />
                Filter
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid w-full grid-cols-7 max-w-4xl mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="water-pots">Water Pots</TabsTrigger>
              <TabsTrigger value="vases">Vases</TabsTrigger>
              <TabsTrigger value="bowls">Bowls</TabsTrigger>
              <TabsTrigger value="cooking">Cooking</TabsTrigger>
              <TabsTrigger value="planters">Planters</TabsTrigger>
              <TabsTrigger value="ai">AI Designs</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                      {product.aiGenerated && (
                        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-primary to-gold">
                          AI Enhanced
                        </Badge>
                      )}
                    </div>
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-1">{product.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{product.artisan}</span>
                          <MapPin className="h-4 w-4 ml-1" />
                          <span>{product.village}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <span className="font-semibold">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>

                      <div className="pt-2">
                        <div>
                          <span className="font-serif text-2xl font-bold text-emerald block">
                            ৳{product.price.toLocaleString()}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {product.priceType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-gold/10 rounded-xl p-8 mb-6 text-center">
                <h3 className="font-serif text-2xl font-bold mb-3">AI-Enhanced Pottery</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These products feature AI-generated captions, keywords, and design suggestions 
                  to help artisans showcase their work to a global audience.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.aiGenerated).map((product) => (
                  <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-primary to-gold">
                        AI Enhanced
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif font-bold text-lg mb-2">{product.name}</h3>
                      <div className="text-sm text-muted-foreground mb-3">
                        by {product.artisan} • {product.village}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xl font-bold text-emerald">
                          ৳{product.price.toLocaleString()}
                        </span>
                        <Button size="sm" className="bg-gradient-to-r from-emerald to-emerald-dark">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}
