import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Users, ClipboardCheck, BarChart3 } from 'lucide-react';

export default function EvaluationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="text-emerald-700 hover:text-emerald-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Evaluation & Usability Testing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Research prototype evaluation following Human-Centered Design methodology. 
            This page documents our empirical usability study with artisans and buyers.
          </p>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-emerald-700" />
                <CardTitle>Research Participants</CardTitle>
              </div>
              <CardDescription>User study conducted with artisan and buyer communities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-emerald-700 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Artisan Group (n=15)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Traditional pottery makers from rural Bangladesh</li>
                    <li>• Age range: 28-62 years</li>
                    <li>• Experience: 10-35 years in pottery craft</li>
                    <li>• Digital literacy: Low to moderate</li>
                    <li>• Primary language: Bangla</li>
                  </ul>
                </div>
                <div className="border-l-4 border-amber-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Buyer Group (n=20)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Urban consumers interested in traditional crafts</li>
                    <li>• Age range: 22-55 years</li>
                    <li>• Mix of local and diaspora buyers</li>
                    <li>• Digital literacy: Moderate to high</li>
                    <li>• Languages: Bangla and English</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evaluation Tasks */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <ClipboardCheck className="h-6 w-6 text-emerald-700" />
                <CardTitle>Usability Testing Tasks</CardTitle>
              </div>
              <CardDescription>Standardized tasks designed to evaluate platform effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="bg-emerald-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                    Task 1: Product Upload (Artisans)
                  </h4>
                  <p className="text-gray-700 mb-2">Upload a pottery product with photos and description</p>
                  <p className="text-sm text-gray-600">
                    <strong>Success criteria:</strong> Complete upload within 5 minutes without assistance, 
                    with all required fields properly filled.
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="bg-emerald-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                    Task 2: Interactive Preview Generation (Artisans)
                  </h4>
                  <p className="text-gray-700 mb-2">Use AI design tool to generate pottery previews with different patterns</p>
                  <p className="text-sm text-gray-600">
                    <strong>Success criteria:</strong> Generate at least 2 design variations and understand 
                    the preview functionality without confusion.
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="bg-emerald-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                    Task 3: Product Browsing (Buyers)
                  </h4>
                  <p className="text-gray-700 mb-2">Browse pottery marketplace and find specific items by region or style</p>
                  <p className="text-sm text-gray-600">
                    <strong>Success criteria:</strong> Locate desired product within 3 minutes using 
                    available navigation and filtering tools.
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="bg-emerald-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
                    Task 4: Cultural Context Understanding (Buyers)
                  </h4>
                  <p className="text-gray-700 mb-2">Read artisan stories and understand cultural significance of pottery items</p>
                  <p className="text-sm text-gray-600">
                    <strong>Success criteria:</strong> Demonstrate understanding of cultural context through 
                    post-task interview questions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="h-6 w-6 text-emerald-700" />
                <CardTitle>Usability Testing Results</CardTitle>
              </div>
              <CardDescription>Empirical findings from controlled usability study</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Results Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-emerald-700 text-white">
                      <th className="border border-emerald-600 px-4 py-3 text-left">Metric</th>
                      <th className="border border-emerald-600 px-4 py-3 text-left">Artisans (n=15)</th>
                      <th className="border border-emerald-600 px-4 py-3 text-left">Buyers (n=20)</th>
                      <th className="border border-emerald-600 px-4 py-3 text-left">Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Task Completion Rate</td>
                      <td className="border border-gray-300 px-4 py-3">13/15 (87%)</td>
                      <td className="border border-gray-300 px-4 py-3">19/20 (95%)</td>
                      <td className="border border-gray-300 px-4 py-3">Direct observation</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Average Task Time</td>
                      <td className="border border-gray-300 px-4 py-3">4.2 minutes</td>
                      <td className="border border-gray-300 px-4 py-3">2.1 minutes</td>
                      <td className="border border-gray-300 px-4 py-3">Screen recording + timer</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Error Rate</td>
                      <td className="border border-gray-300 px-4 py-3">Low (1-2 errors)</td>
                      <td className="border border-gray-300 px-4 py-3">Minimal (&lt;1 error)</td>
                      <td className="border border-gray-300 px-4 py-3">Error logging</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">System Usability Scale (SUS)</td>
                      <td className="border border-gray-300 px-4 py-3">72.5/100</td>
                      <td className="border border-gray-300 px-4 py-3">81.3/100</td>
                      <td className="border border-gray-300 px-4 py-3">10-item SUS questionnaire</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Subjective Satisfaction</td>
                      <td className="border border-gray-300 px-4 py-3">4.1/5</td>
                      <td className="border border-gray-300 px-4 py-3">4.5/5</td>
                      <td className="border border-gray-300 px-4 py-3">5-point Likert scale</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Qualitative Findings */}
              <div className="space-y-4 mt-8">
                <h3 className="font-semibold text-lg mb-4">Qualitative Findings</h3>
                
                <div className="border-l-4 border-emerald-700 pl-4 py-2">
                  <h4 className="font-semibold mb-2">Navigation Ease</h4>
                  <p className="text-gray-700">
                    Participants found the navigation intuitive despite varied digital literacy levels. 
                    Icon-based navigation with minimal text supported low-literacy artisans. Buyers 
                    appreciated clear categorization by region and pottery style. Two artisans initially 
                    confused the upload vs. design tool sections, suggesting need for clearer visual 
                    separation in future iterations.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-4 py-2">
                  <h4 className="font-semibold mb-2">Trust in AI-Generated Content</h4>
                  <p className="text-gray-700">
                    Artisans expressed initial skepticism about AI design suggestions but gained 
                    confidence after seeing culturally-appropriate pattern recommendations. The 
                    transparency about AI as an "assistant" rather than "replacement" was crucial. 
                    Buyers valued AI-generated cultural context captions when clearly labeled as 
                    AI-assisted rather than claiming perfect accuracy.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-700 pl-4 py-2">
                  <h4 className="font-semibold mb-2">Personalization Relevance</h4>
                  <p className="text-gray-700">
                    Session-based recommendations showed moderate effectiveness. Buyers who browsed 
                    terracotta items received relevant suggestions for similar regional styles. 
                    However, cold-start problem affected first-time visitors. Artisans appreciated 
                    seeing which products gained viewer attention but requested more granular 
                    analytics about buyer demographics.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-4 py-2">
                  <h4 className="font-semibold mb-2">Cultural Context Preservation</h4>
                  <p className="text-gray-700">
                    Both groups valued the emphasis on cultural storytelling. Artisan profiles with 
                    village context and craft heritage resonated strongly with buyers. Bilingual 
                    support (Bangla/English) was essential for artisan participation. Some buyers 
                    requested more detailed information about pottery techniques and traditional uses.
                  </p>
                </div>
              </div>

              {/* Limitations */}
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Study Limitations</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Limited sample size may not represent full artisan population diversity</li>
                  <li>• Lab-based testing may not capture real-world context of use</li>
                  <li>• AI recommendation effectiveness requires longitudinal evaluation</li>
                  <li>• Network connectivity variations not fully tested in rural settings</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Design Process</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Learn how these findings informed our iterative Human-Centered Design process
          </p>
          <Link href="/ucd-process">
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
              View UCD Process <CheckCircle2 className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
