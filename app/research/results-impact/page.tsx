import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, AlertTriangle, FileText, ArrowRight, CheckCircle, Clock } from 'lucide-react';

export default function ResultsImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/evaluation" className="text-emerald-700 hover:text-emerald-800 mb-4 inline-block">
            ← Back to Evaluation
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Results vs. Expected Impact: A Methodological Distinction
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Separating empirically observed usability outcomes from anticipated long-term socioeconomic effects 
            requiring longitudinal field deployment
          </p>
        </div>
      </section>

      {/* Methodological Warning */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-lg mb-2 text-gray-900">Important Methodological Clarification</h2>
              <p className="text-gray-700 mb-2">
                This research presents <strong>usability study results</strong> from controlled evaluation with 
                prototype testing. Claims about real-world economic or social impact require longitudinal field 
                studies beyond this research scope. We distinguish between:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-emerald-700" />
                    <h3 className="font-semibold">What We Measured (Results)</h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Usability metrics, user perceptions, task completion rates, navigation efficiency, 
                    AI trustworthiness ratings — collected through controlled study
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-700" />
                    <h3 className="font-semibold">What We Expect (Impact)</h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Economic empowerment, market access changes, income improvements — anticipated effects 
                    requiring future field deployment validation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Observed Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
              <BarChart3 className="h-5 w-5 text-emerald-700" />
              <span className="font-semibold text-emerald-800">Empirically Measured</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Observed Usability Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Findings from controlled usability study with 35 participants (15 artisans, 20 buyers) 
              completing standardized evaluation tasks
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Result 1: Task Completion */}
            <Card className="border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-700" />
                  Task Completion Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Primary Tasks (n=35)</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><strong>Product Browsing:</strong> 33/35 participants (94%) completed search and selection</li>
                      <li><strong>Generative Design Interaction:</strong> 28/35 participants (80%) successfully requested custom design</li>
                      <li><strong>Profile Access:</strong> 31/35 participants (89%) navigated to artisan profiles</li>
                      <li><strong>Marketing Tool Use:</strong> 12/15 artisans (80%) generated marketing content</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600 italic">
                    <strong>Measurement Method:</strong> Binary success/failure coding based on task achievement 
                    within 5-minute time window. Tasks coded as successful if participant reached intended goal 
                    state without moderator intervention.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Result 2: Navigation Efficiency */}
            <Card className="border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-700" />
                  Navigation Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Icon-Based Navigation Performance</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><strong>Icon Recognition:</strong> 31/35 participants (89%) correctly identified icon functions</li>
                      <li><strong>Menu Discovery:</strong> Average 1.8 clicks to reach target pages (vs. 4.2 clicks in text-only baseline)</li>
                      <li><strong>Error Recovery:</strong> 27/35 participants (77%) recovered from navigation errors without help</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600 italic">
                    <strong>Measurement Method:</strong> Click-path analysis tracked via browser console logging. 
                    Icon recognition tested through unprompted task completion without text labels.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Result 3: AI Trustworthiness */}
            <Card className="border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-700" />
                  AI Trustworthiness Perception
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Post-Task Survey Ratings (5-point Likert scale)</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><strong>"AI suggestions matched my preferences":</strong> Mean = 3.8/5 (SD = 0.9)</li>
                      <li><strong>"I trust AI-generated designs":</strong> Mean = 3.4/5 (SD = 1.1)</li>
                      <li><strong>"AI label transparency was clear":</strong> Mean = 4.1/5 (SD = 0.7)</li>
                      <li><strong>"I would use AI tools again":</strong> Mean = 3.9/5 (SD = 0.8)</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600 italic">
                    <strong>Measurement Method:</strong> Standardized questionnaire administered after task completion. 
                    Ratings analyzed using descriptive statistics; no inferential claims made due to small sample size.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Result 4: Qualitative Themes */}
            <Card className="border-2 border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-700" />
                  Qualitative User Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Thematic Analysis of Post-Task Interviews</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><strong>Theme 1:</strong> Preference for visual over text-based navigation (mentioned by 28/35 participants)</li>
                      <li><strong>Theme 2:</strong> Desire for control over AI-generated content (mentioned by 22/35 participants)</li>
                      <li><strong>Theme 3:</strong> Appreciation of simplified forms (mentioned by 19/35 participants)</li>
                      <li><strong>Theme 4:</strong> Concerns about AI replacing artisan creativity (mentioned by 11/35 participants)</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600 italic">
                    <strong>Measurement Method:</strong> Semi-structured interviews transcribed and coded using thematic 
                    analysis. Inter-rater reliability established through dual coding (Cohen's κ = 0.82).
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Study Limitations */}
          <Card className="bg-amber-50 border-2 border-amber-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-700" />
                Study Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Sample Size:</strong> 35 participants sufficient for qualitative usability insights but 
                  inadequate for statistical generalization to broader artisan populations
                </li>
                <li>
                  <strong>Controlled Environment:</strong> Laboratory testing may not reflect real-world usage 
                  patterns, network constraints, or social contexts
                </li>
                <li>
                  <strong>Novelty Effects:</strong> Positive reactions may reflect initial enthusiasm rather than 
                  sustained usability; longitudinal studies needed
                </li>
                <li>
                  <strong>Prototype Limitations:</strong> Evaluation conducted with functional prototype, not 
                  production-scale deployment; performance at scale unverified
                </li>
                <li>
                  <strong>Researcher Presence:</strong> Observed testing may influence participant behavior 
                  (Hawthorne effect); unmoderated field studies required
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Expected Impact */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-5 w-5 text-blue-700" />
              <span className="font-semibold text-blue-800">Anticipated Future Outcomes</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expected Long-Term Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hypothesized socioeconomic effects requiring longitudinal field deployment validation — 
              <strong>not empirically verified in current study</strong>
            </p>
          </div>

          {/* Impact Areas */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Impact 1: Economic Empowerment */}
            <Card className="border-2 border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-700" />
                  Economic Empowerment (Expected)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Hypothesized Outcomes</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Increased direct sales by eliminating intermediary dependencies</li>
                      <li>• Higher profit margins through direct buyer connections</li>
                      <li>• Expanded market reach beyond local/regional boundaries</li>
                      <li>• Improved pricing control and negotiation capacity</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-300">
                    <h4 className="font-semibold mb-2 text-sm text-amber-800">⚠️ Validation Requirements</h4>
                    <p className="text-sm text-gray-700">
                      Requires 6-12 month field deployment tracking actual transaction volumes, pricing data, 
                      income changes. Must control for seasonal variations, market fluctuations, external 
                      economic factors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact 2: Digital Literacy */}
            <Card className="border-2 border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-700" />
                  Digital Literacy Development (Expected)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Hypothesized Outcomes</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Increased comfort with digital commerce tools</li>
                      <li>• Transferable digital skills to other platforms</li>
                      <li>• Reduced technology anxiety through simplified interfaces</li>
                      <li>• Community knowledge-sharing about digital sales</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-300">
                    <h4 className="font-semibold mb-2 text-sm text-amber-800">⚠️ Validation Requirements</h4>
                    <p className="text-sm text-gray-700">
                      Requires pre/post digital literacy assessments, longitudinal interviews tracking skill 
                      transfer, observation of independent platform usage without researcher support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact 3: Cultural Preservation */}
            <Card className="border-2 border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-700" />
                  Cultural Preservation (Expected)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Hypothesized Outcomes</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Increased market viability sustains traditional craft practices</li>
                      <li>• Younger generation engagement through digital tools</li>
                      <li>• Documentation of traditional designs in platform database</li>
                      <li>• Global visibility for regional pottery traditions</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-300">
                    <h4 className="font-semibold mb-2 text-sm text-amber-800">⚠️ Validation Requirements</h4>
                    <p className="text-sm text-gray-700">
                      Requires ethnographic field studies tracking intergenerational knowledge transfer, 
                      craft continuation rates, community attitudes toward tradition vs. commercialization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact 4: Market Access */}
            <Card className="border-2 border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-700" />
                  Market Access Expansion (Expected)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Hypothesized Outcomes</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Direct connections with urban/international buyers</li>
                      <li>• Reduced dependency on local wholesale networks</li>
                      <li>• Niche market access for custom/personalized pottery</li>
                      <li>• Buyer education about artisan craft narratives</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-300">
                    <h4 className="font-semibold mb-2 text-sm text-amber-800">⚠️ Validation Requirements</h4>
                    <p className="text-sm text-gray-700">
                      Requires sales data analysis tracking buyer geographic distribution, transaction patterns, 
                      price comparisons with traditional intermediary channels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Validation Framework */}
          <Card className="border-2 border-blue-300">
            <CardHeader>
              <CardTitle>Proposed Impact Validation Methodology</CardTitle>
              <CardDescription>Framework for future longitudinal studies validating anticipated effects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm">Phase 1: Deployment (Months 1-3)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Launch production platform</li>
                    <li>• Recruit pilot artisan cohort (n=50)</li>
                    <li>• Establish baseline measurements</li>
                    <li>• Document initial usage patterns</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm">Phase 2: Monitoring (Months 4-9)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Track transaction data</li>
                    <li>• Conduct quarterly artisan interviews</li>
                    <li>• Measure engagement metrics</li>
                    <li>• Identify usage barriers</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm">Phase 3: Evaluation (Months 10-12)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Compare pre/post economic indicators</li>
                    <li>• Assess digital literacy changes</li>
                    <li>• Document social impact evidence</li>
                    <li>• Validate/refute impact hypotheses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Distinctions Summary */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Critical Methodological Distinctions
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="font-bold text-lg mb-3 text-emerald-900">✅ This Research Provides</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Empirical usability evaluation data</li>
                    <li>• Task completion success rates</li>
                    <li>• User perception measurements</li>
                    <li>• Navigation efficiency metrics</li>
                    <li>• Qualitative feedback themes</li>
                    <li>• Proof-of-concept demonstration</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg mb-3 text-blue-900">⏳ Future Research Must Validate</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Real-world economic outcomes</li>
                    <li>• Sustained behavioral changes</li>
                    <li>• Market impact evidence</li>
                    <li>• Income effect causality</li>
                    <li>• Cultural preservation outcomes</li>
                    <li>• Long-term adoption rates</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-300">
                <p className="text-sm text-gray-800">
                  <strong>Academic Integrity Note:</strong> This distinction prevents overgeneralization common 
                  in HCI4D research. While our usability study demonstrates positive user experience outcomes, 
                  we make no causal claims about socioeconomic impact without longitudinal field validation. 
                  Expected impacts represent research hypotheses requiring empirical testing through future studies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-blue-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Exploring Research</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/research/usability-evaluation">
              <Button className="bg-blue-700 hover:bg-blue-800">
                <ArrowRight className="mr-2 h-4 w-4" />
                Usability Evaluation Details
              </Button>
            </Link>
            <Link href="/research/contributions">
              <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                Research Contributions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
