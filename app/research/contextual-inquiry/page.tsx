import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, AlertCircle, Image, Wifi, Users, FileText, Eye, Lightbulb } from 'lucide-react';

export default function ContextualInquiryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/ucd-process" className="text-emerald-700 hover:text-emerald-800 mb-4 inline-block">
            ← Back to UCD Process
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contextual Inquiry and User Research Findings
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Ethnographic investigation of pottery artisan communities in Bangladesh to inform 
            platform design through direct observation and semi-structured interviews
          </p>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8 border-2 border-emerald-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-emerald-700" />
                <CardTitle>Research Methodology</CardTitle>
              </div>
              <CardDescription>Field research approach and participant engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Research Approach</h3>
                  <p className="text-gray-700 mb-4">
                    This contextual inquiry phase employed semi-structured interviews and direct observational 
                    studies to understand the lived experiences, constraints, and needs of small-scale pottery 
                    artisans in Bangladesh. The research focused on identifying digital literacy levels, current 
                    marketing practices, technology access patterns, and barriers to online commerce participation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Research Sites</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Urban pottery workshops (Dhaka, Chittagong)</li>
                        <li>• Semi-rural artisan communities (Kurigram, Tangail)</li>
                        <li>• Traditional pottery villages (Rajshahi region)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Data Collection Methods</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Semi-structured interviews (60-90 minutes)</li>
                        <li>• Direct observation of work practices</li>
                        <li>• Contextual task walkthroughs</li>
                        <li>• Photo documentation of workspace</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Participant Profile</h3>
                  <p className="text-gray-700 mb-3">
                    Participants included small-scale pottery artisans engaged in traditional terracotta 
                    production, ranging from individual craftspeople to small family-run workshops. Selection 
                    criteria prioritized diversity in age, experience level, geographic location (urban vs. 
                    semi-rural), and prior exposure to digital technologies.
                  </p>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><strong>Age Range:</strong> 28-62 years</p>
                    <p><strong>Experience:</strong> 10-35 years in pottery craft</p>
                    <p><strong>Digital Exposure:</strong> Varied from minimal smartphone use to moderate social media engagement</p>
                    <p><strong>Education Levels:</strong> Primary to secondary education, with varying literacy in Bangla</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Findings */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Key Research Findings
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Seven critical insights emerged from contextual inquiry that directly informed platform design decisions
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Finding 1 */}
              <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="h-7 w-7 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    Mobile-First Usage Patterns
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Artisans primarily accessed digital tools through mobile devices rather than desktop computers. 
                    Smartphones served as the primary or only digital access point, used for communication, 
                    social media, and limited e-commerce activities. Desktop interfaces were largely unfamiliar.
                  </p>
                </CardContent>
              </Card>

              {/* Finding 2 */}
              <Card className="border-2 border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="h-7 w-7 text-amber-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    Complex Interface Barriers
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Artisans demonstrated difficulty navigating complex digital interfaces with multiple nested 
                    menus, unclear navigation hierarchies, and unfamiliar interaction patterns. Multi-step 
                    processes requiring sustained attention across several screens frequently led to task abandonment.
                  </p>
                </CardContent>
              </Card>

              {/* Finding 3 */}
              <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-7 w-7 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    Text-Heavy Forms as Barriers
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Forms requiring extensive text input created significant barriers, particularly for artisans 
                    with lower literacy levels or those more comfortable with oral communication. Long descriptive 
                    fields were often left incomplete or filled with minimal information.
                  </p>
                </CardContent>
              </Card>

              {/* Finding 4 */}
              <Card className="border-2 border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Image className="h-7 w-7 text-amber-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    Visual Communication Preference
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Artisans strongly preferred icon-based navigation, visual imagery, and photographic 
                    representations over text-based instructions. Visual communication aligned more closely 
                    with traditional craft knowledge transmission methods within artisan communities.
                  </p>
                </CardContent>
              </Card>

              {/* Finding 5 */}
              <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-7 w-7 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    Limited Digital Marketing Knowledge
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Most artisans possessed minimal understanding of digital marketing concepts, SEO, or 
                    online branding strategies. Traditional marketing relied on local networks, word-of-mouth, 
                    and physical market presence, with limited translation to digital contexts.
                  </p>
                </CardContent>
              </Card>

              {/* Finding 6 */}
              <Card className="border-2 border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Wifi className="h-7 w-7 text-amber-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    Inconsistent Internet Connectivity
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Semi-rural and rural artisans experienced frequent connectivity interruptions, slower 
                    network speeds, and data cost concerns. Internet access was often intermittent rather 
                    than continuous, requiring platforms to support offline or low-bandwidth scenarios.
                  </p>
                </CardContent>
              </Card>

              {/* Finding 7 */}
              <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-7 w-7 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    Desire for Autonomy & Control
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Despite limited technical expertise, artisans expressed strong desire for autonomy in 
                    managing their online presence and direct control over product representation. Concerns 
                    about intermediary exploitation motivated interest in direct-to-buyer platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Design Implications */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="h-6 w-6 text-amber-700" />
                <CardTitle>Design Implications and Platform Decisions</CardTitle>
              </div>
              <CardDescription>How research findings directly informed platform architecture</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-700 pl-6 py-3">
                  <h4 className="font-semibold text-lg mb-2">Simplicity and Minimalism</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Finding-Driven Decision:</strong> Complex interface barriers and text-heavy form 
                    difficulties necessitated radical simplification of user flows and input requirements.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Implementation:</strong> Single-page upload forms, reduced required fields to 
                    essential minimum (photo, name, description, price), elimination of multi-step wizards 
                    in favor of unified interfaces.
                  </p>
                </div>

                <div className="border-l-4 border-amber-700 pl-6 py-3">
                  <h4 className="font-semibold text-lg mb-2">Visual Communication Primacy</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Finding-Driven Decision:</strong> Visual communication preference and icon-based 
                    navigation success patterns required deprioritization of text in favor of imagery.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Implementation:</strong> Icon-based navigation system, visual step-by-step 
                    guidance, prominent use of product photography, pictographic task instructions, AI-assisted 
                    image caption generation to reduce text input burden.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-700 pl-6 py-3">
                  <h4 className="font-semibold text-lg mb-2">Mobile-First Architecture</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Finding-Driven Decision:</strong> Mobile-first usage patterns and smartphone as 
                    primary access point demanded mobile-optimized design as baseline, not adaptation.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Implementation:</strong> Touch-optimized interaction targets, thumb-zone navigation 
                    placement, responsive layouts optimized for small screens first, vertical scrolling over 
                    horizontal navigation, mobile-appropriate information density.
                  </p>
                </div>

                <div className="border-l-4 border-amber-700 pl-6 py-3">
                  <h4 className="font-semibold text-lg mb-2">Accessibility and Inclusive Design</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Finding-Driven Decision:</strong> Varied literacy levels and digital literacy gaps 
                    required platform to accommodate diverse user capabilities without creating stigma.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Implementation:</strong> Bilingual interface (Bangla/English), large touch targets, 
                    high contrast ratios, screen reader compatibility, progressive disclosure of complexity, 
                    contextual help without overwhelming users.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-700 pl-6 py-3">
                  <h4 className="font-semibold text-lg mb-2">Low-Bandwidth Optimization</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Finding-Driven Decision:</strong> Inconsistent connectivity and data cost concerns 
                    necessitated aggressive performance optimization and offline-capable features.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Implementation:</strong> Compressed image formats, lazy loading, minimal external 
                    dependencies, lightweight frameworks, session persistence to prevent data loss during 
                    connectivity interruptions, progressive enhancement approach.
                  </p>
                </div>

                <div className="border-l-4 border-amber-700 pl-6 py-3">
                  <h4 className="font-semibold text-lg mb-2">AI-Assisted Content Creation</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Finding-Driven Decision:</strong> Limited digital marketing knowledge and text input 
                    barriers required intelligent assistance while preserving artisan autonomy.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Implementation:</strong> AI-generated product descriptions as starting points 
                    (editable by artisans), automated cultural context suggestions, pattern recognition for 
                    category assignment, natural language generation from minimal inputs, with mandatory 
                    artisan review and approval.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Ethics */}
          <Card>
            <CardHeader>
              <CardTitle>Research Ethics and Participant Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                All research activities followed established ethical guidelines for human subjects research. 
                Artisan participants provided informed consent prior to interviews and observations, with 
                clear explanation of research purposes, data usage, and publication intentions. Participants 
                received fair compensation for their time and contributions. Research was conducted in 
                participants' native language (Bangla) with bilingual facilitation where needed.
              </p>
              <p className="text-gray-700">
                Contextual inquiry findings were validated through member checking, where preliminary analysis 
                was shared with participant representatives to confirm accurate interpretation of cultural 
                context and lived experiences. This iterative validation process ensured research fidelity 
                and respectful representation of artisan communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-emerald-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Research Exploration</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/ucd-process">
              <Button className="bg-emerald-700 hover:bg-emerald-800">
                View Full UCD Process
              </Button>
            </Link>
            <Link href="/research/participatory-design">
              <Button variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-50">
                Participatory Design
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
