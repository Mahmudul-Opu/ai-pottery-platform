import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Lightbulb, RefreshCw, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function UCDProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="text-emerald-700 hover:text-emerald-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Human-Centered Design Process
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our iterative User-Centered Design methodology grounded in contextual inquiry, 
            participatory design, and continuous usability evaluation.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border-2 border-emerald-200 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Observe</h3>
              <p className="text-gray-600 text-sm">Contextual inquiry with artisans and buyers</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-amber-200 text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Design</h3>
              <p className="text-gray-600 text-sm">Iterative prototyping with user feedback</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-emerald-200 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Evaluate</h3>
              <p className="text-gray-600 text-sm">Usability testing and refinement cycles</p>
            </div>
          </div>

          {/* Phase 1: Contextual Inquiry */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <CardTitle>Contextual Inquiry</CardTitle>
              </div>
              <CardDescription>Ethnographic research in artisan communities and buyer contexts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-700" />
                    Research with Artisan Communities
                  </h4>
                  <div className="bg-amber-50 p-4 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <strong>Location:</strong> Three pottery villages in rural Bangladesh (Kurigram, Rajshahi, Tangail)
                    </p>
                    <p className="text-gray-700">
                      <strong>Methods:</strong> Semi-structured interviews, observational studies of pottery-making 
                      process, work environment documentation
                    </p>
                    <p className="text-gray-700">
                      <strong>Key Findings:</strong>
                    </p>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Limited access to digital tools; primary communication via mobile phones</li>
                      <li>• Strong oral tradition; visual communication preferred over text-heavy interfaces</li>
                      <li>• Pricing challenges due to intermediary exploitation and lack of market visibility</li>
                      <li>• Pride in cultural heritage but concern about craft preservation for future generations</li>
                      <li>• Desire for direct connection with buyers who value traditional craftsmanship</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      <strong>Observational Notes:</strong> Artisans demonstrated sophisticated tacit knowledge 
                      about clay properties, firing techniques, and traditional patterns. However, they struggled 
                      to articulate this knowledge in formats suitable for online marketplaces. This informed our 
                      decision to use AI-assisted caption generation while maintaining artisan control.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-700" />
                    Research with Buyer Communities
                  </h4>
                  <div className="bg-emerald-50 p-4 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <strong>Location:</strong> Urban areas (Dhaka, Chittagong) and diaspora communities (online interviews)
                    </p>
                    <p className="text-gray-700">
                      <strong>Methods:</strong> In-depth interviews, shopping behavior observation, analysis of 
                      existing craft marketplace interactions
                    </p>
                    <p className="text-gray-700">
                      <strong>Key Findings:</strong>
                    </p>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Strong interest in authentic, culturally-significant pottery but difficulty verifying authenticity</li>
                      <li>• Willingness to pay premium prices when artisan stories and cultural context provided</li>
                      <li>• Frustration with generic e-commerce platforms lacking cultural narrative</li>
                      <li>• Desire to support artisan livelihoods directly, bypassing intermediaries</li>
                      <li>• Interest in customization but uncertainty about traditional design constraints</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      <strong>Observed Behaviors:</strong> Buyers spent significant time researching pottery origins 
                      and artisan backgrounds when available. This validated our hypothesis that cultural context 
                      significantly influences purchasing decisions for traditional crafts.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 2: Design Iterations */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <CardTitle>Design Iterations</CardTitle>
              </div>
              <CardDescription>Iterative refinement based on participatory design sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Iteration 1 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-emerald-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Iteration 1
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Initial Prototype</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
                      <h5 className="font-semibold mb-2 text-red-700">❌ Initial Design</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Text-heavy product upload form</li>
                        <li>• English-only interface</li>
                        <li>• Complex multi-step registration</li>
                        <li>• Generic e-commerce layout</li>
                      </ul>
                    </div>
                    <div className="border-2 border-emerald-300 rounded-lg p-4 bg-emerald-50">
                      <h5 className="font-semibold mb-2 text-emerald-700">✓ After Feedback</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Icon-based upload with visual guidance</li>
                        <li>• Bilingual support (Bangla/English)</li>
                        <li>• Simplified one-page registration</li>
                        <li>• Cultural aesthetic with terracotta colors</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Rationale:</strong> Artisan feedback revealed that text-heavy forms created barriers 
                    for low-literacy users. Visual icons and Bangla language support significantly improved 
                    task completion rates in pilot testing.
                  </p>
                </div>

                {/* Iteration 2 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Iteration 2
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">AI Feature Integration</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
                      <h5 className="font-semibold mb-2 text-red-700">❌ Initial Design</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Automated AI pattern suggestions</li>
                        <li>• No explanation of AI recommendations</li>
                        <li>• Black-box design generation</li>
                        <li>• High accuracy claims (95%+)</li>
                      </ul>
                    </div>
                    <div className="border-2 border-emerald-300 rounded-lg p-4 bg-emerald-50">
                      <h5 className="font-semibold mb-2 text-emerald-700">✓ After Feedback</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Optional AI assistance with artisan control</li>
                        <li>• Transparent explanation of suggestions</li>
                        <li>• Preview-based workflow with approve/reject</li>
                        <li>• Realistic framing as "design assistant"</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Rationale:</strong> Artisans expressed concern about losing creative control to AI. 
                    Repositioning AI as an optional assistant rather than autonomous designer increased trust 
                    and adoption. Transparency about AI limitations aligned with ethical AI principles.
                  </p>
                </div>

                {/* Iteration 3 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-emerald-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Iteration 3
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Navigation & Information Architecture</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
                      <h5 className="font-semibold mb-2 text-red-700">❌ Initial Design</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Text-based menu navigation</li>
                        <li>• Product listings without artisan context</li>
                        <li>• Separate sections for cultural info</li>
                        <li>• Standard category filters only</li>
                      </ul>
                    </div>
                    <div className="border-2 border-emerald-300 rounded-lg p-4 bg-emerald-50">
                      <h5 className="font-semibold mb-2 text-emerald-700">✓ After Feedback</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Icon + text hybrid navigation</li>
                        <li>• Integrated artisan stories with products</li>
                        <li>• Cultural context embedded throughout</li>
                        <li>• Region and tradition-based filtering</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Rationale:</strong> Buyer research showed that cultural narrative significantly 
                    influenced purchasing decisions. Integrating artisan stories directly with products (rather 
                    than separating them) increased engagement and emotional connection with crafts.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold mb-2">Participatory Design Sessions</h5>
                <p className="text-sm text-gray-700">
                  Design decisions emerged from 8 co-design workshops with artisan and buyer representatives. 
                  Low-fidelity paper prototypes and interactive mockups facilitated feedback collection. 
                  All iterations validated through task-based usability testing before implementation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Phase 3: Usability Testing */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <CardTitle>Usability Testing & Validation</CardTitle>
              </div>
              <CardDescription>Empirical evaluation of final prototype effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Following iterative refinement, we conducted formal usability testing with 35 participants 
                (15 artisans, 20 buyers) to validate design decisions and measure platform effectiveness.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-emerald-700 mb-1">87%</div>
                  <p className="text-sm text-gray-600">Artisan Task Completion</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-amber-700 mb-1">95%</div>
                  <p className="text-sm text-gray-600">Buyer Task Completion</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-emerald-700 mb-1">76.9</div>
                  <p className="text-sm text-gray-600">Average SUS Score</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Detailed usability metrics, testing methodology, and qualitative findings are documented 
                in our comprehensive evaluation report.
              </p>

              <Link href="/evaluation">
                <Button className="bg-emerald-700 hover:bg-emerald-800">
                  View Full Evaluation Report <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ethical AI & Transparency</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Learn how we implement ethical AI principles and explainable recommendations
          </p>
          <Link href="/ai-transparency">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
              View AI Transparency <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
