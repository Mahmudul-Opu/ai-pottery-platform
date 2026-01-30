import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lightbulb, Lock, Settings, Info, CheckCircle } from 'lucide-react';

export default function AITransparencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="text-emerald-700 hover:text-emerald-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ethical & Explainable AI
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Transparent AI practices grounded in ethical principles, cultural sensitivity, 
            and user control. Research prototype designed with human-centered values.
          </p>
        </div>
      </section>

      {/* Ethical Principles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ethical AI Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI implementation follows established ethical guidelines for responsible AI in cultural contexts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-emerald-200">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-7 w-7 text-emerald-700" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center">Cultural Preservation</h3>
                <p className="text-gray-700 text-sm">
                  AI recommendations respect traditional pottery patterns and techniques. No generation of 
                  culturally inappropriate or inauthentic designs that could undermine craft heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-7 w-7 text-amber-700" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center">Transparency</h3>
                <p className="text-gray-700 text-sm">
                  All AI-generated content clearly labeled. Users understand when interacting with AI vs. 
                  human-created content. No hidden automation or deceptive AI practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200">
              <CardContent className="pt-6">
                <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-7 w-7 text-emerald-700" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-center">User Control</h3>
                <p className="text-gray-700 text-sm">
                  Artisans maintain full creative control. AI serves as optional assistant, not decision-maker. 
                  All AI suggestions require explicit approval before implementation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How AI Works */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="h-6 w-6 text-emerald-700" />
                <CardTitle>How Our AI Works</CardTitle>
              </div>
              <CardDescription>Session-based recommendations with minimal data collection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="bg-emerald-700 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                    Session-Based Pattern Recognition
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Our AI analyzes browsing patterns <strong>within your current session only</strong>. 
                    If you view multiple terracotta water vessels, the system suggests similar regional 
                    styles from the same tradition.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>No persistent tracking:</strong> Recommendations reset when you close your browser. 
                    We do not build long-term user profiles or track behavior across sessions.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="bg-amber-700 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                    Cultural Context Generation
                  </h4>
                  <p className="text-gray-700 mb-3">
                    AI assists artisans by suggesting cultural context for their pottery based on:
                  </p>
                  <ul className="text-gray-700 space-y-1 mb-3 ml-4">
                    <li>• Traditional pottery techniques documented in our database</li>
                    <li>• Regional pottery styles and historical patterns</li>
                    <li>• Artisan-provided information about their village and craft tradition</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    <strong>Artisan approval required:</strong> AI suggestions are previews only. Artisans 
                    review, edit, and approve all content before it becomes visible to buyers.
                  </p>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="bg-emerald-700 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
                    Design Assistant Workflow
                  </h4>
                  <p className="text-gray-700 mb-3">
                    For pottery customization, AI suggests pattern variations based on:
                  </p>
                  <ul className="text-gray-700 space-y-1 mb-3 ml-4">
                    <li>• Traditional motifs from the artisan's region</li>
                    <li>• Historical pattern combinations documented in our cultural database</li>
                    <li>• Buyer preferences expressed during browsing (session-only)</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    <strong>Preview-based control:</strong> All designs generated as previews. Artisans 
                    decide which variations align with their creative vision and cultural authenticity standards.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  Realistic Performance Framing
                </h5>
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> We do not claim high accuracy percentages (e.g., "95% accuracy") 
                  for our AI systems. Recommendation effectiveness varies based on browsing patterns, cultural 
                  context complexity, and individual preferences. Our research evaluation documents actual 
                  performance with appropriate methodological limitations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Data */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Lock className="h-6 w-6 text-amber-700" />
                <CardTitle>Privacy & Data Protection</CardTitle>
              </div>
              <CardDescription>Minimal data collection with user consent and control</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-emerald-700">What We Collect</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Session browsing patterns</strong> — which pottery styles you view during your visit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Interaction feedback</strong> — optional "Was this helpful?" responses to improve recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Product views (artisan side)</strong> — aggregated counts to show artisans buyer interest</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-red-700">What We Do NOT Collect</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                      <span><strong>Personal identification</strong> — no name, email, phone, or address without explicit consent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                      <span><strong>Cross-session tracking</strong> — no cookies or persistent identifiers for behavior tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                      <span><strong>Third-party sharing</strong> — no data sold or shared with external advertisers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                      <span><strong>Sensitive information</strong> — no financial data, biometrics, or location tracking</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Research Ethics:</strong> As a research prototype, data collection serves academic 
                  evaluation purposes only. All participants provide informed consent. Artisan data protected 
                  with appropriate anonymization when used in research publications.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Explainability Examples */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Info className="h-6 w-6 text-emerald-700" />
                <CardTitle>Explainability in Action</CardTitle>
              </div>
              <CardDescription>How we make AI decisions transparent to users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Example 1 */}
                <div className="border-l-4 border-emerald-700 pl-4 py-3 bg-emerald-50">
                  <p className="font-semibold mb-2">Recommendation Explanation</p>
                  <div className="bg-white p-3 rounded text-sm text-gray-700 mb-2">
                    "You viewed terracotta water vessels from Kurigram. Here are similar traditional 
                    styles from the same region."
                  </div>
                  <p className="text-xs text-gray-600">
                    <strong>Why this works:</strong> User understands recommendation is based on their 
                    browsing behavior, not opaque algorithmic decision.
                  </p>
                </div>

                {/* Example 2 */}
                <div className="border-l-4 border-amber-700 pl-4 py-3 bg-amber-50">
                  <p className="font-semibold mb-2">AI-Generated Content Label</p>
                  <div className="bg-white p-3 rounded text-sm text-gray-700 mb-2">
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mb-2">
                      <Lightbulb className="h-3 w-3" /> AI-Assisted Description
                    </span>
                    <br />
                    "This traditional water pot uses age-old techniques passed down through generations..."
                  </div>
                  <p className="text-xs text-gray-600">
                    <strong>Why this works:</strong> Clear visual indicator distinguishes AI-assisted content 
                    from artisan-written descriptions.
                  </p>
                </div>

                {/* Example 3 */}
                <div className="border-l-4 border-emerald-700 pl-4 py-3 bg-emerald-50">
                  <p className="font-semibold mb-2">Design Suggestion Rationale</p>
                  <div className="bg-white p-3 rounded text-sm text-gray-700 mb-2">
                    "This pattern combines traditional Rajshahi motifs common in your region's pottery. 
                    You can approve, modify, or reject this suggestion."
                  </div>
                  <p className="text-xs text-gray-600">
                    <strong>Why this works:</strong> Artisan understands why the pattern was suggested and 
                    has clear control options.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Control Options */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Settings className="h-6 w-6 text-amber-700" />
                <CardTitle>Personalization Controls</CardTitle>
              </div>
              <CardDescription>Optional AI features you can enable or disable</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">AI Design Suggestions</h4>
                    <p className="text-sm text-gray-600">Get pattern recommendations based on traditional styles</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Enabled</span>
                    <div className="w-12 h-6 bg-emerald-600 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Session-Based Recommendations</h4>
                    <p className="text-sm text-gray-600">See pottery suggestions based on your browsing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Enabled</span>
                    <div className="w-12 h-6 bg-emerald-600 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">AI Cultural Context Assistance</h4>
                    <p className="text-sm text-gray-600">Get help writing cultural descriptions for your pottery</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Enabled</span>
                    <div className="w-12 h-6 bg-emerald-600 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> These controls represent research prototype functionality. In production, 
                  users would have full access to enable/disable AI features through their account settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Research Evidence</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Learn more about our user-centered design process and usability evaluation
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/ucd-process">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
                View UCD Process
              </Button>
            </Link>
            <Link href="/evaluation">
              <Button size="lg" variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-50">
                View Evaluation Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
