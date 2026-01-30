import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Sparkles, Globe, Package, TrendingUp, Users } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function FuturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Rocket className="w-3 h-3 mr-1" />
            Future Research Direction
          </Badge>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            🚀 Future Enhancements & Research Direction
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Planned developments to advance human-AI collaboration, cultural preservation, and sustainable digital inclusion
          </p>
        </div>

        {/* Disclaimer */}
        <Card className="mb-12 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm text-blue-900 dark:text-blue-100 text-center">
              ℹ️ All features listed below are <strong>future work</strong> and <strong>not part of the current system</strong>. These directions represent ongoing research in human-centered AI for cultural heritage preservation.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Advanced AI Personalization */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>🤖 Advanced AI Personalization</CardTitle>
              <CardDescription>Next-generation recommendation systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">📊 Deep Learning Models</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Implement neural collaborative filtering for more accurate product recommendations based on browsing patterns, purchase history, and cultural preferences.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">🎨 Style-Based Clustering</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Group pottery by visual aesthetics using computer vision, helping customers discover items matching their taste.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">💬 Conversational AI</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Develop Bangla-English bilingual chatbot for customer support, respecting cultural communication norms.
                </p>
              </div>
              <Badge variant="outline" className="mt-3">Human-AI Collaboration</Badge>
            </CardContent>
          </Card>

          {/* Multilingual Expansion */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-3">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>🌍 International Language Support</CardTitle>
              <CardDescription>Global accessibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">🗣️ Additional Languages</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Expand to Hindi, Urdu, Arabic, French, Spanish for international customers while maintaining cultural authenticity.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">📖 Dialect Support</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Regional Bangla dialect recognition to better serve artisans from Sylhet, Chittagong, and other areas.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">🔊 Voice Interface</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Voice-based product upload and navigation for low-literacy artisans, supporting oral tradition.
                </p>
              </div>
              <Badge variant="outline" className="mt-3">Cultural Sensitivity</Badge>
            </CardContent>
          </Card>

          {/* AR Visualization */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-3">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>🥽 AR-Based Pottery Visualization</CardTitle>
              <CardDescription>Immersive shopping experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">📱 Virtual Placement</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Augmented reality feature allowing customers to visualize pottery items in their physical space before purchase.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">🔍 3D Product Views</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  360-degree interactive models showcasing intricate patterns and craftsmanship details.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">📐 Size Comparison</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Real-world scale visualization to help customers understand actual product dimensions.
                </p>
              </div>
              <Badge variant="outline" className="mt-3">Conceptual Research</Badge>
            </CardContent>
          </Card>

          {/* Global Marketplace */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>🌏 Cross-Border Marketplace</CardTitle>
              <CardDescription>International artisan network</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">✈️ Global Shipping Integration</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Partner with international logistics providers for worldwide pottery delivery with fragile item protection.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">💱 Multi-Currency Support</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Real-time currency conversion and international payment gateway integration (Stripe, PayPal, local methods).
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">🤝 Artisan Federation</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Connect pottery artisans from Bangladesh, India, Pakistan, Nepal to create South Asian craft network.
                </p>
              </div>
              <Badge variant="outline" className="mt-3">Sustainable Growth</Badge>
            </CardContent>
          </Card>

          {/* Blockchain for Authenticity */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-3">
                <span className="text-2xl">🔗</span>
              </div>
              <CardTitle>🔐 Blockchain Authenticity Verification</CardTitle>
              <CardDescription>Digital provenance tracking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">📜 Digital Certificates</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  NFT-based authenticity certificates recording artisan identity, creation date, and cultural origin.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">🛡️ Anti-Counterfeiting</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Immutable record preventing fake handmade claims and protecting artisan intellectual property.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">📊 Transparent Supply Chain</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Track pottery journey from creation to customer delivery, ensuring ethical sourcing.
                </p>
              </div>
              <Badge variant="outline" className="mt-3">Cultural Preservation</Badge>
            </CardContent>
          </Card>

          {/* AI Training Programs */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle>🎓 AI Literacy Training Programs</CardTitle>
              <CardDescription>Empowering artisan communities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">📱 Mobile Training Units</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Deploy mobile labs to rural pottery villages for hands-on AI tool training and digital skills development.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">👥 Peer Mentorship</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Establish experienced artisan mentors helping newcomers navigate digital platforms and AI marketing tools.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">📚 Visual Learning Materials</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Develop icon-based, video-first educational content respecting oral knowledge transmission traditions.
                </p>
              </div>
              <Badge variant="outline" className="mt-3">Digital Inclusion</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Research Impact Statement */}
        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold text-center mb-4">🎯 Research Impact Goals</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-orange-600">100K+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Artisans Empowered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">50+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Countries Reached</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">99%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Cultural Authenticity</p>
              </div>
            </div>
            <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
              These enhancements support our mission: preserving traditional crafts through ethical AI, 
              promoting economic sustainability for artisan communities, and advancing human-centered design research.
            </p>
          </CardContent>
        </Card>

        {/* Academic Note */}
        <div className="text-center mt-8 text-sm text-slate-500">
          <p>📖 For academic inquiries and research collaboration:</p>
          <p className="font-mono mt-1">research@mritishilpa-platform.edu</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
