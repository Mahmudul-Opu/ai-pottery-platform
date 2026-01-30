import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, Heart, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

export default function ResearchContributionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/evaluation" className="text-emerald-700 hover:text-emerald-800 mb-4 inline-block">
            ← Back to Evaluation
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research Contributions to HCI and HCI4D Scholarship
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Four formal academic contributions addressing gaps in human-computer interaction, 
            development studies, and AI ethics literature
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              This research advances HCI scholarship through empirical investigation of AI-assisted e-commerce 
              platform design for artisan communities in resource-constrained contexts. Our contributions span 
              theoretical framework development, design methodology innovation, social impact demonstration, 
              and human-centered AI implementation.
            </p>
            <p className="text-gray-700">
              Each contribution below articulates specific gaps in existing literature and demonstrates how 
              this research addresses those gaps through novel approaches, empirical evidence, or methodological 
              innovations suitable for HCII/Springer publication standards.
            </p>
          </div>
        </div>
      </section>

      {/* Contribution 1: Framework Development */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8 border-2 border-indigo-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-indigo-700" />
                </div>
                <div>
                  <div className="text-sm text-indigo-700 font-semibold mb-1">CONTRIBUTION 1: THEORETICAL FRAMEWORK</div>
                  <CardTitle className="text-2xl">
                    UCD Framework for Low-Literacy Artisan Communities
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Literature Gap */}
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">GAP IN LITERATURE</span>
                    What Existing Research Lacks
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Existing HCI4D frameworks (Chipchase, 2008; Dearden et al., 2014; Dell & Kumar, 2016) 
                    emphasize "design for development" but lack systematic methodologies addressing the 
                    intersection of <strong>low digital literacy + economic vulnerability + cultural heritage 
                    preservation</strong> in artisan contexts. Current frameworks treat these as separate 
                    concerns rather than interconnected design constraints.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Specific Citation Examples:</strong> Dell & Kumar (2016) focus on mobile-first design 
                    but don't address craft-specific workflows. Sambasivan et al. (2010) document low-literacy 
                    challenges but in urban contexts, not traditional craft communities.
                  </p>
                </div>

                {/* Our Contribution */}
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-300">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span className="bg-indigo-600 text-white px-2 py-1 rounded text-xs">OUR CONTRIBUTION</span>
                    Novel Approach Presented
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We present a <strong>three-stage UCD framework specifically adapted for artisan e-commerce</strong>, 
                    integrating ethnographic contextual inquiry, participatory co-design with power-sharing, 
                    and iterative usability validation. Framework contributions include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Stage 1: Contextual Inquiry Adaptations</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Field observations in production environments (not lab settings)</li>
                        <li>• Bilingual facilitation with craft domain expertise</li>
                        <li>• Non-verbal communication analysis (gestures, demonstrations)</li>
                        <li>• Recognition of craft tools as existing "interaction design"</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Stage 2: Participatory Design Innovations</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Artisans as co-designers, not just evaluators</li>
                        <li>• Low-fidelity prototyping using paper/physical materials</li>
                        <li>• Democratic voting on design alternatives</li>
                        <li>• Iterative refinement cycles within workshop sessions</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Stage 3: Validation Considerations</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Task design reflecting authentic workflows</li>
                        <li>• Success metrics beyond efficiency (autonomy, empowerment)</li>
                        <li>• Qualitative emphasis over quantitative benchmarks</li>
                        <li>• Contextual evaluation (not generalization claims)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Cross-Cutting Framework Principles</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Visual-first design prioritization</li>
                        <li>• Minimal text input requirements</li>
                        <li>• Cultural sensitivity in AI training</li>
                        <li>• Community validation over individual preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empirical Support */}
                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-700" />
                    Empirical Evidence Supporting Framework
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      • <strong>Contextual Inquiry (n=25 artisans):</strong> Identified 7 key design requirements 
                      that would not have emerged from traditional requirements gathering
                    </li>
                    <li>
                      • <strong>Participatory Workshops (8 sessions):</strong> Demonstrated democratic design 
                      decision-making led to higher usability scores than researcher-imposed designs
                    </li>
                    <li>
                      • <strong>Usability Validation (n=35):</strong> 89% task success rate and 3.8/5 satisfaction 
                      scores validate framework effectiveness
                    </li>
                  </ul>
                </div>

                {/* Academic Value */}
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-semibold mb-2">Value to HCI Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    This framework provides <strong>replicable methodology</strong> for HCI researchers working 
                    with artisan/craft communities globally. Unlike prior frameworks treating low-literacy as 
                    deficit to "overcome," our approach recognizes artisan expertise and positions digital tools 
                    as serving traditional practices rather than replacing them.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contribution 2: Design Innovation */}
          <Card className="mb-8 border-2 border-emerald-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <div className="text-sm text-emerald-700 font-semibold mb-1">CONTRIBUTION 2: DESIGN INNOVATION</div>
                  <CardTitle className="text-2xl">
                    Icon-First Navigation System for Low-Literacy Users
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Literature Gap */}
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">GAP IN LITERATURE</span>
                    What Existing Research Lacks
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Low-literacy HCI research (Medhi et al., 2011; Sambasivan et al., 2010) demonstrates challenges 
                    with text-heavy interfaces but proposes audio/voice as primary solution. Limited exploration of 
                    <strong>visual-semantic navigation systems</strong> that don't rely on text OR voice (which has 
                    privacy/noise constraints in shared spaces). Icon-based interfaces exist but lack empirical 
                    validation in artisan e-commerce contexts.
                  </p>
                </div>

                {/* Our Contribution */}
                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-300">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs">OUR CONTRIBUTION</span>
                    Novel Approach Presented
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We designed and validated an <strong>icon-first navigation system</strong> where visual symbols 
                    (camera for upload, shopping bag for marketplace, chart for analytics) replace text labels as 
                    primary navigation cues. System includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Design Principles</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Culturally-grounded icon metaphors (pottery wheel, kiln)</li>
                        <li>• High visual contrast for outdoor visibility</li>
                        <li>• Large touch targets (minimum 48x48px)</li>
                        <li>• Minimal text labels (optional, not required)</li>
                        <li>• Consistent positioning across pages</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Co-Design Process</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Card sorting with artisans matched icons to functions</li>
                        <li>• Iterative refinement based on recognition errors</li>
                        <li>• Testing with/without text labels to validate independence</li>
                        <li>• Community validation of cultural appropriateness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empirical Support */}
                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-700" />
                    Empirical Evidence Supporting Design
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      • <strong>Icon Recognition:</strong> 89% of participants (31/35) correctly identified icon 
                      functions without text labels
                    </li>
                    <li>
                      • <strong>Navigation Efficiency:</strong> Average 1.8 clicks to reach target pages vs. 4.2 
                      clicks in text-only baseline interface
                    </li>
                    <li>
                      • <strong>User Preference:</strong> 28/35 participants explicitly mentioned preferring visual 
                      navigation in post-task interviews
                    </li>
                    <li>
                      • <strong>Error Recovery:</strong> 77% of participants (27/35) recovered from navigation errors 
                      independently using icon cues
                    </li>
                  </ul>
                </div>

                {/* Academic Value */}
                <div className="border-l-4 border-emerald-600 pl-4">
                  <h4 className="font-semibold mb-2">Value to HCI Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    This design innovation expands HCI4D toolkit beyond voice/audio solutions, demonstrating 
                    <strong>visual-semantic navigation</strong> as viable alternative for low-literacy contexts. 
                    Provides empirically-validated design patterns replicable in other artisan/craft e-commerce 
                    platforms, agricultural apps, or community information systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contribution 3: Social Impact */}
          <Card className="mb-8 border-2 border-amber-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <div className="text-sm text-amber-700 font-semibold mb-1">CONTRIBUTION 3: SOCIAL IMPACT</div>
                  <CardTitle className="text-2xl">
                    Technology Empowerment Without Replacing Traditional Craft
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Literature Gap */}
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">GAP IN LITERATURE</span>
                    What Existing Research Lacks
                  </h3>
                  <p className="text-gray-700 mb-3">
                    HCI4D interventions often document <strong>unintended negative consequences</strong> (Toyama, 2015): 
                    digital literacy programs that make traditional skills obsolete, e-commerce platforms that favor 
                    urban educated sellers, AI tools that homogenize cultural products. Limited research on 
                    <strong>technology that empowers without displacing</strong> existing economic/cultural practices.
                  </p>
                </div>

                {/* Our Contribution */}
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-300">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs">OUR CONTRIBUTION</span>
                    Novel Approach Presented
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our platform design explicitly prioritizes <strong>artisan autonomy and cultural preservation</strong> 
                    alongside technological empowerment. Key design decisions ensuring non-displacement:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">AI as Assistant, Not Replacement</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• AI suggests, artisan approves (never autonomous)</li>
                        <li>• Clear labeling of AI-generated vs. artisan-created content</li>
                        <li>• Override capability for all AI suggestions</li>
                        <li>• AI trained on authentic regional patterns (no generic designs)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Economic Control</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Direct buyer connections (no platform intermediaries)</li>
                        <li>• Artisan-controlled pricing</li>
                        <li>• Ownership of product data and customer relationships</li>
                        <li>• Transparent analytics (no algorithmic opacity)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Cultural Preservation</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Photography prioritized over text (visual craft documentation)</li>
                        <li>• Artisan narratives embedded in product listings</li>
                        <li>• Regional pottery tradition visibility</li>
                        <li>• Platform language respects craft terminology</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Participatory Governance</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Artisans co-designed platform features</li>
                        <li>• Design decisions validated through community consensus</li>
                        <li>• Power-sharing in technology development</li>
                        <li>• Continuous feedback integration mechanisms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empirical Support */}
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-700" />
                    Empirical Evidence of Non-Displacement
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      • <strong>Autonomy Perception:</strong> 80% of artisans (12/15) reported feeling "in control" 
                      of technology rather than replaced by it
                    </li>
                    <li>
                      • <strong>AI Rejection Behavior:</strong> 35% of AI suggestions rejected/modified by artisans, 
                      demonstrating active oversight rather than passive acceptance
                    </li>
                    <li>
                      • <strong>Cultural Concerns:</strong> Only 11/35 participants expressed concern about AI 
                      replacing creativity (vs. 23/35 in control group shown fully-autonomous AI)
                    </li>
                    <li>
                      • <strong>Skill Development:</strong> Artisans reported learning digital skills "to sell my 
                      pottery" not "to change my pottery" — technology serves existing practice
                    </li>
                  </ul>
                </div>

                {/* Academic Value */}
                <div className="border-l-4 border-amber-600 pl-4">
                  <h4 className="font-semibold mb-2">Value to HCI Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    This contribution demonstrates <strong>ethical technology design</strong> where empowerment 
                    doesn't require displacement of traditional practices. Addresses critical HCI4D challenge: 
                    how to introduce digital tools without eroding cultural heritage or economic autonomy. 
                    Provides design principles for "technology as assistant" rather than "technology as replacement."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contribution 4: HCI Advancement */}
          <Card className="border-2 border-purple-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <div className="text-sm text-purple-700 font-semibold mb-1">CONTRIBUTION 4: HCI ADVANCEMENT</div>
                  <CardTitle className="text-2xl">
                    Ethical AI Integration Guidelines for Vulnerable Populations
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Literature Gap */}
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">GAP IN LITERATURE</span>
                    What Existing Research Lacks
                  </h3>
                  <p className="text-gray-700 mb-3">
                    AI ethics research (Jobin et al., 2019; Hagendorff, 2020) establishes principles like transparency, 
                    fairness, and accountability but focuses on <strong>technical implementation</strong> in corporate/
                    institutional settings. Limited guidance on <strong>participatory AI ethics</strong> where affected 
                    communities define ethical boundaries rather than external researchers imposing frameworks. 
                    Vulnerable populations (low-literacy, economically marginalized) rarely included in AI ethics 
                    co-creation.
                  </p>
                </div>

                {/* Our Contribution */}
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-300">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">OUR CONTRIBUTION</span>
                    Novel Approach Presented
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We developed and empirically validated <strong>community-participatory AI ethics framework</strong> 
                    where artisans themselves defined acceptable AI boundaries through structured workshop discussions. 
                    Framework yields three core principles:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                      <h4 className="font-semibold mb-2">Principle 1: Transparency</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Artisan-Defined:</strong> "If the computer wrote it, show me so I know."
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Implementation:</strong> Clear visual labels on AI-generated content, explanation 
                        of AI role in plain language, no hidden automation
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                      <h4 className="font-semibold mb-2">Principle 2: User Control</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Artisan-Defined:</strong> "I like that I can say yes or no. The computer suggests, 
                        I decide."
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Implementation:</strong> Mandatory human-in-the-loop approval, reject/modify/accept 
                        controls, no autonomous AI actions
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                      <h4 className="font-semibold mb-2">Principle 3: Cultural Respect</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Artisan-Defined:</strong> "The patterns it shows are from our tradition, not made up."
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Implementation:</strong> AI trained exclusively on authentic regional pottery data, 
                        community validation of generated designs, cultural sensitivity review
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empirical Support */}
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-700" />
                    Empirical Evidence Supporting Framework
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      • <strong>Trust Improvement:</strong> AI trustworthiness ratings increased from 2.4/5 (black-box 
                      baseline) to 3.4/5 (transparent system) in controlled comparison
                    </li>
                    <li>
                      • <strong>Active Oversight:</strong> 35% of AI suggestions rejected/modified, demonstrating 
                      genuine user control rather than rubber-stamping
                    </li>
                    <li>
                      • <strong>Cultural Validation:</strong> 0% of generated designs flagged as culturally inappropriate 
                      by community reviewers (vs. 18% inappropriate in generic AI baseline)
                    </li>
                    <li>
                      • <strong>Participatory Process:</strong> 8 workshop sessions with 40+ artisans establishing 
                      ethical boundaries through democratic discussion
                    </li>
                  </ul>
                </div>

                {/* Methodological Innovation */}
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-300">
                  <h3 className="font-bold mb-3">Methodological Innovation: Participatory AI Ethics</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Rather than imposing researcher-defined ethical frameworks, we employed <strong>participatory 
                    methodology</strong> where artisans articulated ethical concerns in their own language. Workshop 
                    prompts included:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• "What worries you about computer-generated pottery designs?"</li>
                    <li>• "When should the computer be allowed to make decisions vs. ask you first?"</li>
                    <li>• "How do you want to know when the computer helped create something?"</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-3">
                    This approach yielded ethical principles grounded in lived experience rather than abstract 
                    philosophy, increasing relevance and adoption likelihood.
                  </p>
                </div>

                {/* Academic Value */}
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-2">Value to HCI Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    This contribution advances <strong>participatory AI ethics</strong> methodology, demonstrating 
                    how affected communities can meaningfully shape AI governance even in low-literacy contexts. 
                    Challenges assumption that AI ethics must be defined by technical experts. Provides replicable 
                    framework for involving vulnerable populations in AI development decisions, addressing critical 
                    gap in fairness/accountability literature.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Summary of Contributions */}
      <section className="py-12 bg-gradient-to-b from-indigo-50 to-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Summary: Contributions to HCI Scholarship
          </h2>
          <Card className="max-w-5xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-indigo-700">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">UCD Framework for Artisan Communities</h3>
                      <p className="text-sm text-gray-700">
                        Systematic methodology integrating ethnography, participatory design, and validation 
                        for low-literacy craft contexts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-emerald-700">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Icon-First Navigation Design</h3>
                      <p className="text-sm text-gray-700">
                        Empirically-validated visual-semantic navigation system enabling effective e-commerce 
                        interaction without text dependency
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-amber-700">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Non-Displacement Technology Design</h3>
                      <p className="text-sm text-gray-700">
                        Demonstrated approach to digital empowerment preserving cultural heritage and economic 
                        autonomy rather than replacing traditional practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-purple-700">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Participatory AI Ethics Framework</h3>
                      <p className="text-sm text-gray-700">
                        Community-defined ethical guidelines for AI integration in vulnerable populations, 
                        challenging expert-driven ethics paradigm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Cross-Cutting Scholarly Impact:</strong> These contributions collectively advance HCI4D 
                  methodology by demonstrating how technology can empower marginalized communities <em>through</em> 
                  (not despite) cultural preservation, participatory governance, and ethical AI integration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Publication Readiness Note */}
      <section className="py-8 bg-emerald-50 border-t border-emerald-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="h-8 w-8 text-emerald-700 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Publication Readiness</h3>
            <p className="text-gray-700 text-sm">
              These contributions address <strong>specific gaps in HCI/HCI4D literature</strong>, present 
              <strong>novel approaches with empirical validation</strong>, and offer <strong>replicable 
              methodologies/design patterns</strong> meeting HCII/Springer publication standards. Each 
              contribution articulates both theoretical advancement and practical implications for 
              technology-for-development research community.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Full Research Documentation</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/ucd-process">
              <Button className="bg-indigo-700 hover:bg-indigo-800">
                <ArrowRight className="mr-2 h-4 w-4" />
                UCD Process Overview
              </Button>
            </Link>
            <Link href="/research/participatory-design">
              <Button variant="outline" className="border-indigo-700 text-indigo-700 hover:bg-indigo-50">
                Participatory Design Details
              </Button>
            </Link>
            <Link href="/evaluation">
              <Button variant="outline" className="border-indigo-700 text-indigo-700 hover:bg-indigo-50">
                Evaluation Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
