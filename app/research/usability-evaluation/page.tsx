import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardCheck, Users, TrendingUp, Shield, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function UsabilityEvaluationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/evaluation" className="text-emerald-700 hover:text-emerald-800 mb-4 inline-block">
            ← Back to Main Evaluation
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Usability Evaluation and Testing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Controlled usability study documenting user interactions with AI-driven pottery platform 
            features and measuring perceptions of system effectiveness
          </p>
        </div>
      </section>

      {/* Study Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <ClipboardCheck className="h-6 w-6 text-blue-700" />
                <CardTitle>Study Design and Methodology</CardTitle>
              </div>
              <CardDescription>Structured evaluation approach with artisan and buyer participants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-700" />
                    Participant Groups
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Artisan Group (n=15)</h4>
                      <p className="text-sm text-gray-700">
                        Traditional pottery makers from urban and semi-rural Bangladesh, representing diverse 
                        experience levels and digital literacy backgrounds. Recruited through artisan cooperatives 
                        and craft associations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Buyer Group (n=20)</h4>
                      <p className="text-sm text-gray-700">
                        Potential customers including urban consumers interested in traditional crafts, cultural 
                        heritage enthusiasts, and members of diaspora communities seeking authentic Bangladeshi 
                        pottery products.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Evaluation Protocol</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Controlled usability testing sessions conducted in participant-familiar environments. 
                    Sessions combined task-based evaluation with semi-structured interviews to capture both 
                    behavioral and attitudinal data.
                  </p>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><strong>Session Duration:</strong> 60-90 minutes per participant</p>
                    <p><strong>Recording Methods:</strong> Screen capture, audio recording, observational notes</p>
                    <p><strong>Data Analysis:</strong> Task success coding, thematic analysis of verbal feedback</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evaluation Tasks */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Standardized Evaluation Tasks</CardTitle>
              <CardDescription>Task scenarios designed to evaluate core platform functionality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-700 pl-4 py-2">
                  <h4 className="font-semibold mb-1">Task 1: Product Browsing and Discovery</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Buyers navigated the pottery marketplace to locate specific pottery styles or regional 
                    traditions using available filtering and search mechanisms.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Evaluation Focus:</strong> Navigation intuitiveness, information architecture effectiveness, 
                    filter comprehension
                  </p>
                </div>

                <div className="border-l-4 border-amber-700 pl-4 py-2">
                  <h4 className="font-semibold mb-1">Task 2: Generative Design Preview Interaction</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Artisans and buyers engaged with AI-powered design preview features, exploring pattern 
                    variations and customization options for pottery products.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Evaluation Focus:</strong> Interactive feature engagement, perceived value of AI assistance, 
                    understanding of customization options
                  </p>
                </div>

                <div className="border-l-4 border-emerald-700 pl-4 py-2">
                  <h4 className="font-semibold mb-1">Task 3: Artisan Marketing Tool Access</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Artisan participants explored dashboard analytics, product upload workflows, and 
                    AI-assisted content generation features.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Evaluation Focus:</strong> Dashboard comprehension, upload process ease, 
                    AI assistance utility and trustworthiness
                  </p>
                </div>

                <div className="border-l-4 border-amber-700 pl-4 py-2">
                  <h4 className="font-semibold mb-1">Task 4: Cultural Context Comprehension</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Buyers reviewed artisan stories, cultural background information, and heritage context 
                    integrated with product listings.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Evaluation Focus:</strong> Cultural narrative effectiveness, information presentation clarity, 
                    emotional connection to products
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evaluation Metrics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Evaluation Dimensions
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Four primary dimensions assessed platform effectiveness and user experience quality
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Task Success */}
              <Card className="border-2 border-emerald-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                    </div>
                    <h3 className="font-bold text-lg">Task Success Rate</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Measured completion of assigned tasks without assistance. Tasks coded as successful when 
                    participants achieved stated objectives within reasonable timeframes using available 
                    interface affordances.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-emerald-800 mb-2">Observed Patterns:</p>
                    <p className="text-sm text-gray-700">
                      Both artisan and buyer groups demonstrated strong task completion across core workflows. 
                      Mobile-optimized interface contributed to successful navigation patterns. Icon-based 
                      navigation proved effective for artisan participants with varied literacy levels.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Ease */}
              <Card className="border-2 border-amber-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-amber-700" />
                    </div>
                    <h3 className="font-bold text-lg">Navigation Ease</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Assessed through observation of navigation patterns, backtracking frequency, and verbal 
                    expressions of confusion or confidence during wayfinding tasks.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-amber-800 mb-2">Observed Patterns:</p>
                    <p className="text-sm text-gray-700">
                      Simplified information architecture reduced cognitive load for both groups. Visual 
                      navigation cues supported intuitive wayfinding. Some artisans initially confused similar 
                      icon pairs, suggesting need for additional visual differentiation in future iterations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* AI Trust */}
              <Card className="border-2 border-emerald-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-emerald-700" />
                    </div>
                    <h3 className="font-bold text-lg">Perceived AI Trustworthiness</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Evaluated through post-task interviews exploring comfort with AI-generated content, 
                    understanding of AI assistance boundaries, and willingness to rely on system recommendations.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-emerald-800 mb-2">Observed Patterns:</p>
                    <p className="text-sm text-gray-700">
                      Transparent AI labeling increased user confidence. Artisans appreciated optional nature 
                      of AI assistance and ability to override suggestions. Buyers valued AI-generated cultural 
                      context when clearly attributed. Initial skepticism decreased after experiencing preview-based 
                      workflow with artisan control.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Personalization */}
              <Card className="border-2 border-amber-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-amber-700" />
                    </div>
                    <h3 className="font-bold text-lg">Personalization Accuracy</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Assessed relevance of recommendations and design suggestions based on browsing patterns 
                    and stated preferences through think-aloud protocols and satisfaction ratings.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-amber-800 mb-2">Observed Patterns:</p>
                    <p className="text-sm text-gray-700">
                      Session-based recommendations showed moderate relevance for buyers with clear preferences. 
                      Cold-start challenge affected first-time visitors. Artisans found design suggestions 
                      aligned with regional pottery traditions after system gathered sufficient interaction data. 
                      Cultural appropriateness of AI suggestions validated through artisan feedback.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Qualitative Insights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Qualitative Insights and User Feedback</CardTitle>
              <CardDescription>Thematic analysis of participant interviews and verbal feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 py-3">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-blue-600" />
                    Interactive Design Engagement
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Participants exhibited extended engagement with generative design preview features compared 
                    to static product listings. The interactive nature of customization options encouraged 
                    exploratory behavior and increased time spent evaluating products.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "I spent more time looking at the pottery when I could see different patterns and imagine 
                    how it would look in my home" — Buyer participant
                  </p>
                </div>

                <div className="border-l-4 border-emerald-600 pl-6 py-3">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-600" />
                    Artisan Empowerment Perception
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Artisan participants expressed feelings of increased agency and control over their online 
                    presence. Dashboard analytics provided previously unavailable insights into buyer interest, 
                    contributing to sense of direct market connection.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "Now I can see who looks at my pottery and where they come from. This helps me understand 
                    what buyers want" — Artisan participant
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6 py-3">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-600" />
                    Customization Appeal
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Buyer participants valued ability to explore design variations aligned with personal aesthetic 
                    preferences. Enhanced customization options contributed to emotional connection with products 
                    and increased purchase consideration.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "Being able to customize the patterns makes the pottery feel more personal and special" — Buyer participant
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 py-3">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Transparency and Trust
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Clear labeling of AI-assisted content and transparent explanation of recommendation logic 
                    contributed to system trust. Participants appreciated understanding when and how AI features 
                    operated, reducing anxiety about "black box" decision-making.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "I feel comfortable using the AI suggestions because I can always change or reject them. 
                    It helps me but doesn't control me" — Artisan participant
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Limitations */}
          <Card>
            <CardHeader>
              <CardTitle>Study Limitations and Future Directions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Sample Size and Generalizability</h4>
                  <p className="text-gray-700 text-sm">
                    While the study included diverse participants (n=35 total), sample size limitations affect 
                    generalizability across broader artisan and buyer populations. Future research should expand 
                    participant recruitment to include additional geographic regions and craft specializations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Controlled Testing Environment</h4>
                  <p className="text-gray-700 text-sm">
                    Lab-based and semi-controlled testing environments may not fully capture real-world usage 
                    contexts, particularly regarding connectivity challenges and multitasking scenarios common 
                    in artisan workshops. Longitudinal field studies would provide richer contextual data.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">AI Effectiveness Evaluation</h4>
                  <p className="text-gray-700 text-sm">
                    Long-term effectiveness of AI recommendation and personalization features requires extended 
                    evaluation periods beyond single-session testing. Cold-start problems and learning curve 
                    effects necessitate longitudinal study designs to fully assess system performance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Cross-Cultural Validation</h4>
                  <p className="text-gray-700 text-sm">
                    Current evaluation focused on Bangladeshi context. Cross-cultural validation with other 
                    traditional craft communities would establish broader applicability of design patterns and 
                    interaction paradigms developed through this research.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-blue-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Related Research</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/evaluation">
              <Button className="bg-blue-700 hover:bg-blue-800">
                Main Evaluation Page
              </Button>
            </Link>
            <Link href="/research/results-impact">
              <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                Results & Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
