import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Users, Lightbulb, CheckCircle } from 'lucide-react';

export default function ParticipatoryDesign() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Participatory Design Evidence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Design decisions shaped by artisan and buyer communities through co-design workshops 
            and iterative feedback
          </p>
        </div>

        {/* Artisan Voices */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-emerald-700" />
              <CardTitle>Artisan Voices in Design</CardTitle>
            </div>
            <CardDescription>Direct feedback from pottery makers that shaped platform features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Quote 1 */}
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-emerald-700">
                <Quote className="h-8 w-8 text-emerald-700 mb-3" />
                <p className="text-gray-800 italic mb-4">
                  "I don't read much English, but the pictures helped me understand how to upload my pottery. 
                  The Bangla language made me feel comfortable using this platform."
                </p>
                <p className="text-sm text-gray-600">
                  <strong>— Rahim Mia, 54</strong><br />
                  Potter from Kurigram, 32 years experience
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-sm text-gray-700">
                    <strong>Design Impact:</strong> Led to icon-based navigation and mandatory Bangla language support
                  </p>
                </div>
              </div>

              {/* Quote 2 */}
              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-amber-700">
                <Quote className="h-8 w-8 text-amber-700 mb-3" />
                <p className="text-gray-800 italic mb-4">
                  "I was worried the AI would replace my creativity. But when I saw it only suggests patterns 
                  and I can choose what I want, I felt better. It's like having an assistant, not a boss."
                </p>
                <p className="text-sm text-gray-600">
                  <strong>— Shahana Begum, 41</strong><br />
                  Potter from Rajshahi, 18 years experience
                </p>
                <div className="mt-4 pt-4 border-t border-emerald-200">
                  <p className="text-sm text-gray-700">
                    <strong>Design Impact:</strong> AI repositioned as optional assistant with artisan control
                  </p>
                </div>
              </div>

              {/* Quote 3 */}
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-emerald-700">
                <Quote className="h-8 w-8 text-emerald-700 mb-3" />
                <p className="text-gray-800 italic mb-4">
                  "Middlemen take most of the money. When I can talk directly to buyers and they see my village 
                  and my story, they understand why my pottery has value. This feels fair."
                </p>
                <p className="text-sm text-gray-600">
                  <strong>— Abdul Karim, 48</strong><br />
                  Potter from Tangail, 25 years experience
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-sm text-gray-700">
                    <strong>Design Impact:</strong> Direct artisan-buyer connection without intermediaries
                  </p>
                </div>
              </div>

              {/* Quote 4 */}
              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-amber-700">
                <Quote className="h-8 w-8 text-amber-700 mb-3" />
                <p className="text-gray-800 italic mb-4">
                  "I want to know who is looking at my pottery. When I see people from Dhaka and even foreign 
                  countries viewing my work, it makes me proud and gives me hope for my craft's future."
                </p>
                <p className="text-sm text-gray-600">
                  <strong>— Nurul Islam, 59</strong><br />
                  Potter from Kurigram, 35 years experience
                </p>
                <div className="mt-4 pt-4 border-t border-emerald-200">
                  <p className="text-sm text-gray-700">
                    <strong>Design Impact:</strong> Simple analytics dashboard showing viewer locations
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design Decision Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="h-6 w-6 text-amber-700" />
              <CardTitle>Design Decision Timeline</CardTitle>
            </div>
            <CardDescription>How user feedback directly changed platform features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Decision 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Bilingual Interface Implementation</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm font-semibold text-red-800 mb-1">❌ Initial Approach</p>
                      <p className="text-sm text-gray-700">English-only interface with assumption that users would adapt</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="text-sm font-semibold text-green-800 mb-1">✓ After Participatory Design</p>
                      <p className="text-sm text-gray-700">Full Bangla support with easy language toggle based on artisan feedback</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Feedback Source:</strong> 12 out of 15 artisans in pilot testing expressed discomfort with English-only interface. 
                    Co-design session revealed language as primary barrier to adoption.
                  </p>
                </div>
              </div>

              {/* Decision 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">AI Design Assistant Framework</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm font-semibold text-red-800 mb-1">❌ Initial Approach</p>
                      <p className="text-sm text-gray-700">Fully automated AI pattern generation with minimal artisan input</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="text-sm font-semibold text-green-800 mb-1">✓ After Participatory Design</p>
                      <p className="text-sm text-gray-700">Optional AI suggestions with artisan approval/rejection and preview-based workflow</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Feedback Source:</strong> Artisan co-design workshop revealed concerns about losing creative control. 
                    Repositioning as "assistant" rather than "replacement" increased trust and adoption willingness.
                  </p>
                </div>
              </div>

              {/* Decision 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Cultural Context Integration</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm font-semibold text-red-800 mb-1">❌ Initial Approach</p>
                      <p className="text-sm text-gray-700">Product listings focused on specifications (size, price) with cultural info in separate section</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="text-sm font-semibold text-green-800 mb-1">✓ After Participatory Design</p>
                      <p className="text-sm text-gray-700">Artisan stories and cultural context embedded directly with each product</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Feedback Source:</strong> Buyer interviews showed cultural narrative as primary purchase motivator. 
                    Separating cultural info from products reduced engagement; integration increased buyer connection.
                  </p>
                </div>
              </div>

              {/* Decision 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Simplified Upload Process</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm font-semibold text-red-800 mb-1">❌ Initial Approach</p>
                      <p className="text-sm text-gray-700">Multi-step form with 15+ fields and text-heavy instructions</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="text-sm font-semibold text-green-800 mb-1">✓ After Participatory Design</p>
                      <p className="text-sm text-gray-700">Single-page upload with icon guidance and only essential fields (photo, name, description, price)</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Feedback Source:</strong> Usability testing showed 80% of artisans abandoned multi-step form. 
                    Simplified version achieved 87% completion rate with reduced cognitive load.
                  </p>
                </div>
              </div>

              {/* Decision 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-emerald-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Accessible Analytics Dashboard</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm font-semibold text-red-800 mb-1">❌ Initial Approach</p>
                      <p className="text-sm text-gray-700">Complex business intelligence dashboard with advanced metrics and technical terminology</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="text-sm font-semibold text-green-800 mb-1">✓ After Participatory Design</p>
                      <p className="text-sm text-gray-700">Simple visualizations with plain language and actionable recommendations</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Feedback Source:</strong> Artisans requested "simple numbers that help me understand if buyers like my pottery." 
                    Focus shifted from advanced analytics to actionable insights with clear explanations.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Co-Design Workshop Summary */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="h-6 w-6 text-emerald-700" />
              <CardTitle>Co-Design Workshop Methodology</CardTitle>
            </div>
            <CardDescription>Structured participatory design process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Workshop Structure</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 8 co-design sessions over 6 weeks</li>
                  <li>• 5-7 participants per session</li>
                  <li>• Mix of artisans and buyers</li>
                  <li>• Bilingual facilitation</li>
                  <li>• Low-fidelity prototyping materials</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Feedback Methods</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Think-aloud protocol during tasks</li>
                  <li>• Paper prototype sketching</li>
                  <li>• Group discussion sessions</li>
                  <li>• Post-workshop surveys</li>
                  <li>• Follow-up interviews</li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Validation Process</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Rapid prototyping after each session</li>
                  <li>• A/B testing of design alternatives</li>
                  <li>• Task-based usability evaluation</li>
                  <li>• Iterative refinement cycles</li>
                  <li>• Final validation study (n=35)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Research Ethics:</strong> All participants provided informed consent. Artisan 
                participants received fair compensation for their time. Workshop discussions were recorded 
                with permission and transcribed for thematic analysis. Design decisions documented with 
                clear traceability to user feedback sources.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
