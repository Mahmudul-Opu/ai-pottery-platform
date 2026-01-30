import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Shield, CheckCircle, Quote, Lightbulb, ArrowRight } from 'lucide-react';

export default function ParticipatoryDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/ucd-process" className="text-emerald-700 hover:text-emerald-800 mb-4 inline-block">
            ← Back to UCD Process
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Participatory Design and Artisan Involvement
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Positioning artisans as active co-designers in platform development, ensuring technology 
            serves community needs through collaborative design processes
          </p>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8 border-2 border-purple-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-purple-700" />
                <CardTitle>Artisans as Co-Designers</CardTitle>
              </div>
              <CardDescription>Moving beyond passive user participation to active design partnership</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                This research adopted participatory design methodology recognizing artisans not as passive 
                technology recipients but as expert stakeholders possessing deep domain knowledge essential 
                for effective platform design. Artisan participation extended beyond evaluation into active 
                co-creation, with design decisions emerging from collaborative workshops rather than imposed 
                by external technologists.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Participatory Design Principles</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Mutual Learning</p>
                      <p className="text-sm text-gray-700">
                        Researchers learned craft context while artisans gained digital design literacy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Democratic Decision-Making</p>
                      <p className="text-sm text-gray-700">
                        Design choices validated through artisan consensus rather than researcher preference
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Power Redistribution</p>
                      <p className="text-sm text-gray-700">
                        Artisans held decision authority over features affecting their work practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Iterative Validation</p>
                      <p className="text-sm text-gray-700">
                        Continuous feedback loops ensured alignment with evolving community needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Design Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Collaborative Design Journey
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              How artisan feedback directly shaped platform evolution across multiple development cycles
            </p>

            <div className="space-y-6">
              {/* Phase 1 */}
              <Card className="border-l-4 border-emerald-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center font-bold text-emerald-700">
                      1
                    </div>
                    <div>
                      <CardTitle>Initial Requirements Workshop</CardTitle>
                      <CardDescription>Establishing design priorities through artisan-led discussion</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Artisan-Identified Priorities:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Simple upload process requiring minimal text</li>
                        <li>• Visual representation of their pottery</li>
                        <li>• Direct communication with buyers</li>
                        <li>• Understanding buyer interest in their products</li>
                        <li>• Control over pricing and product information</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Design Response:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Developed single-page upload workflow</li>
                        <li>• Prioritized photography over text descriptions</li>
                        <li>• Eliminated intermediary contact systems</li>
                        <li>• Created simplified analytics dashboard</li>
                        <li>• Ensured artisan ownership of all product data</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 2 */}
              <Card className="border-l-4 border-amber-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center font-bold text-amber-700">
                      2
                    </div>
                    <div>
                      <CardTitle>Form Simplification Co-Design</CardTitle>
                      <CardDescription>Iterative refinement of input workflows based on artisan testing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Quote className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div className="bg-amber-50 p-4 rounded-lg flex-1">
                        <p className="text-gray-800 italic mb-2">
                          "The form had too many boxes to fill. I don't know what to write for 'product description' 
                          and 'marketing keywords'. Can't I just show the photo?"
                        </p>
                        <p className="text-sm text-gray-600">— Workshop participant, Tangail artisan</p>
                      </div>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Design Modification:</h4>
                      <p className="text-sm text-gray-700">
                        Reduced required fields from 15 to 4 essentials (photo, name, description, price). 
                        Introduced AI-assisted description generation as optional starting point. Replaced 
                        marketing terminology with plain language ("Tell buyers about your pottery" instead 
                        of "Enter product description").
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 3 */}
              <Card className="border-l-4 border-emerald-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center font-bold text-emerald-700">
                      3
                    </div>
                    <div>
                      <CardTitle>Visual Navigation Development</CardTitle>
                      <CardDescription>Icon design and navigation structure co-created with artisans</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Quote className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <div className="bg-emerald-50 p-4 rounded-lg flex-1">
                        <p className="text-gray-800 italic mb-2">
                          "I can understand pictures better than words. If you show me a camera icon, I know 
                          it's for photos. A shopping bag means selling."
                        </p>
                        <p className="text-sm text-gray-600">— Workshop participant, Kurigram artisan</p>
                      </div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Design Modification:</h4>
                      <p className="text-sm text-gray-700">
                        Transitioned from text-based menu to icon-first navigation. Conducted card sorting 
                        sessions where artisans matched icons to functions, identifying intuitive visual 
                        metaphors. Refined icon designs based on artisan feedback about cultural appropriateness 
                        and recognizability within their communities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 4 */}
              <Card className="border-l-4 border-purple-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center font-bold text-purple-700">
                      4
                    </div>
                    <div>
                      <CardTitle>AI-Assisted Tool Design</CardTitle>
                      <CardDescription>Establishing ethical boundaries for AI integration through participatory discussion</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Quote className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div className="bg-purple-50 p-4 rounded-lg flex-1">
                        <p className="text-gray-800 italic mb-2">
                          "If the computer makes my pottery designs, am I still an artisan? I want help, 
                          but I need to control what my pottery looks like."
                        </p>
                        <p className="text-sm text-gray-600">— Workshop participant, Rajshahi artisan</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Design Modification:</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Artisan concerns about AI autonomy led to fundamental repositioning of AI role. Instead 
                        of automated design generation, developed preview-based workflow requiring explicit 
                        artisan approval. Implemented reject/modify/accept controls for all AI suggestions.
                      </p>
                      <h4 className="font-semibold mb-2 text-sm">Ethical AI Framework Established:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Transparency:</strong> Clear labeling of all AI-generated content</li>
                        <li>• <strong>User Control:</strong> Mandatory artisan review before publication</li>
                        <li>• <strong>Override Capability:</strong> Artisans can reject any AI suggestion</li>
                        <li>• <strong>Cultural Sensitivity:</strong> AI trained on authentic regional pottery patterns</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Ethical AI Principles (Detailed) */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-6 w-6 text-purple-700" />
                <CardTitle>Ethical AI Implementation Principles</CardTitle>
              </div>
              <CardDescription>Community-validated guidelines for responsible AI integration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-purple-700" />
                    </div>
                    <h3 className="font-bold">Transparency</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    All AI-generated content carries clear attribution. Users understand when interacting 
                    with AI vs. human-created elements.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    "If the computer wrote it, show me so I know. I want to trust what I'm reading." — Artisan feedback
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center">
                      <Users className="h-4 w-4 text-amber-700" />
                    </div>
                    <h3 className="font-bold">User Control</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Artisans maintain final decision authority. AI serves as assistant, not autonomous 
                    decision-maker. All suggestions require explicit approval.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    "I like that I can say yes or no. The computer suggests, I decide." — Artisan feedback
                  </p>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center">
                      <Heart className="h-4 w-4 text-emerald-700" />
                    </div>
                    <h3 className="font-bold">Cultural Respect</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    AI trained exclusively on authentic pottery patterns from artisan communities. No 
                    generation of culturally inappropriate or inauthentic designs.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    "The patterns it shows are from our tradition, not made up." — Artisan feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Workshop Methodology */}
          <Card>
            <CardHeader>
              <CardTitle>Participatory Workshop Methodology</CardTitle>
              <CardDescription>Structured approach to collaborative design sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Workshop Structure</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Frequency:</strong> 8 sessions over 6-week period</p>
                    <p><strong>Duration:</strong> 2-3 hours per session</p>
                    <p><strong>Participants:</strong> 5-7 artisans per session (rotating cohorts)</p>
                    <p><strong>Facilitation:</strong> Bilingual researchers with craft domain knowledge</p>
                    <p><strong>Materials:</strong> Low-fidelity prototyping tools, paper sketches, interactive mockups</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Validation Process</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Design Proposals:</strong> Presented as multiple alternatives, not single solutions</p>
                    <p><strong>Voting:</strong> Democratic selection among design options</p>
                    <p><strong>Iteration:</strong> Rapid prototyping between sessions based on feedback</p>
                    <p><strong>Testing:</strong> Hands-on interaction with functional prototypes</p>
                    <p><strong>Documentation:</strong> Video recording, transcription, thematic coding</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-purple-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Exploring Research Process</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/research/contextual-inquiry">
              <Button className="bg-purple-700 hover:bg-purple-800">
                <ArrowRight className="mr-2 h-4 w-4" />
                Contextual Inquiry
              </Button>
            </Link>
            <Link href="/research/contributions">
              <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                Research Contributions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
