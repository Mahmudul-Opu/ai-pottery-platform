"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Sparkles, 
  Globe, 
  Brain,
  Zap,
  Users,
  TrendingUp,
  Languages,
  Eye,
  Boxes,
  MapPin,
  Rocket,
  Calendar,
  CheckCircle,
  Clock,
  Target
} from "lucide-react";

export default function FutureResearchPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en");

  const content = {
    en: {
      title: "Future Enhancements",
      subtitle: "Roadmap for Advanced AI & Research Expansion",
      
      // Timeline
      timeline: {
        title: "Development Roadmap",
        current: "Current Phase",
        planned: "Planned",
        future: "Future Vision"
      },

      // Phase 1: Current
      phase1: {
        title: "Phase 1: Foundation (Current)",
        status: "✅ Completed",
        features: [
          "Basic AI Marketing Tools",
          "Educational Support System",
          "Community Engagement Platform",
          "Cash on Delivery Prototype",
          "Bilingual Support (EN/BN)",
          "Initial Usability Research"
        ]
      },

      // Phase 2: Advanced AI
      phase2: {
        title: "Phase 2: Advanced AI Personalization",
        status: "🚀 Planned for Q3 2024",
        description: "Enhance AI capabilities with personalized recommendations and smarter content generation",
        features: [
          {
            name: "Smart Product Recommendations",
            desc: "AI analyzes customer preferences and browsing patterns",
            icon: Brain,
            progress: 15
          },
          {
            name: "Personalized Marketing Content",
            desc: "Generate custom social media posts based on artisan style",
            icon: Sparkles,
            progress: 20
          },
          {
            name: "Price Optimization AI",
            desc: "Suggest optimal pricing based on market demand and costs",
            icon: TrendingUp,
            progress: 10
          },
          {
            name: "Customer Behavior Analytics",
            desc: "Understand buying patterns to improve sales strategies",
            icon: Target,
            progress: 25
          }
        ]
      },

      // Phase 3: Multi-Language
      phase3: {
        title: "Phase 3: Multi-Language Expansion",
        status: "🌍 Planned for Q4 2024",
        description: "Expand language support to reach more artisans and customers globally",
        features: [
          {
            name: "Regional Languages",
            desc: "Add Hindi, Urdu, Tamil, Telugu, Gujarati",
            icon: Languages,
            progress: 5
          },
          {
            name: "International Markets",
            desc: "Support for Spanish, French, Arabic, Chinese",
            icon: Globe,
            progress: 0
          },
          {
            name: "Voice Input/Output",
            desc: "Audio-based interface for low-literacy users",
            icon: Zap,
            progress: 10
          },
          {
            name: "Cultural Customization",
            desc: "Region-specific UI adaptations and content",
            icon: Users,
            progress: 8
          }
        ]
      },

      // Phase 4: AR/3D
      phase4: {
        title: "Phase 4: AR & 3D Visualization",
        status: "🔮 Future Vision (2025+)",
        description: "Immersive technology for better product visualization and virtual try-before-buy",
        features: [
          {
            name: "3D Product Scanning",
            desc: "Capture pottery in 3D using smartphone camera",
            icon: Eye,
            progress: 0
          },
          {
            name: "AR Try-Before-Buy",
            desc: "See pottery in your home before purchasing",
            icon: Boxes,
            progress: 0
          },
          {
            name: "Virtual Pottery Workshop",
            desc: "Learn pottery making in virtual reality",
            icon: Sparkles,
            progress: 0
          },
          {
            name: "AI-Assisted 3D Design",
            desc: "Generate custom pottery designs with AI",
            icon: Brain,
            progress: 0
          }
        ]
      },

      // Phase 5: Global Expansion
      phase5: {
        title: "Phase 5: Global Market Integration",
        status: "🌏 Future Vision (2025+)",
        description: "Cross-border logistics, international payments, and global marketplace features",
        features: [
          {
            name: "International Shipping",
            desc: "Partner with DHL, FedEx for worldwide delivery",
            icon: MapPin,
            progress: 0
          },
          {
            name: "Multi-Currency Support",
            desc: "Accept payments in 50+ currencies",
            icon: TrendingUp,
            progress: 0
          },
          {
            name: "Export Documentation AI",
            desc: "Auto-generate customs and export paperwork",
            icon: Rocket,
            progress: 0
          },
          {
            name: "Global Artisan Network",
            desc: "Connect artisans from 20+ countries",
            icon: Users,
            progress: 0
          }
        ]
      },

      // Research Goals
      research: {
        title: "Research Goals & Objectives",
        goal1: {
          title: "Human-Centered AI",
          desc: "Ensure AI transparency, user control, and cultural sensitivity in all features"
        },
        goal2: {
          title: "Digital Inclusion",
          desc: "Design for low digital literacy users with visual-first, simple interfaces"
        },
        goal3: {
          title: "Economic Empowerment",
          desc: "Measure impact on artisan income, sales, and business growth"
        },
        goal4: {
          title: "Ethical AI Practices",
          desc: "Study responsible AI deployment in developing economies"
        }
      },

      // Timeline
      timelineSteps: {
        step1: "Current: Foundation & Research (2024 Q1-Q2)",
        step2: "Next: Advanced AI Tools (2024 Q3)",
        step3: "Then: Multi-Language & Voice (2024 Q4)",
        step4: "Future: AR/VR & Global Markets (2025+)"
      },

      // Call to Action
      cta: {
        title: "Join Our Research Journey",
        description: "This is a research prototype. Your feedback helps shape the future of AI-powered artisan marketplaces.",
        button: "Provide Feedback"
      }
    },
    bn: {
      title: "ভবিষ্যৎ উন্নতি",
      subtitle: "উন্নত AI এবং গবেষণা সম্প্রসারণের রোডম্যাপ",

      // Timeline
      timeline: {
        title: "উন্নয়ন রোডম্যাপ",
        current: "বর্তমান পর্যায়",
        planned: "পরিকল্পিত",
        future: "ভবিষ্যৎ দৃষ্টিভঙ্গি"
      },

      // Phase 1
      phase1: {
        title: "পর্যায় ১: ভিত্তি (বর্তমান)",
        status: "✅ সম্পন্ন",
        features: [
          "মৌলিক AI মার্কেটিং টুল",
          "শিক্ষামূলক সহায়তা সিস্টেম",
          "কমিউনিটি এনগেজমেন্ট প্ল্যাটফর্ম",
          "ক্যাশ অন ডেলিভারি প্রোটোটাইপ",
          "দ্বিভাষিক সহায়তা (EN/BN)",
          "প্রাথমিক ব্যবহারযোগ্যতা গবেষণা"
        ]
      },

      // Phase 2
      phase2: {
        title: "পর্যায় ২: উন্নত AI ব্যক্তিগতকরণ",
        status: "🚀 ২০২৪ Q3 এর জন্য পরিকল্পিত",
        description: "ব্যক্তিগত সুপারিশ এবং স্মার্ট কন্টেন্ট জেনারেশনের সাথে AI ক্ষমতা বাড়ান",
        features: [
          {
            name: "স্মার্ট পণ্য সুপারিশ",
            desc: "AI গ্রাহক পছন্দ এবং ব্রাউজিং প্যাটার্ন বিশ্লেষণ করে",
            icon: Brain,
            progress: 15
          },
          {
            name: "ব্যক্তিগত মার্কেটিং কন্টেন্ট",
            desc: "কুমোর শৈলীর উপর ভিত্তি করে কাস্টম সোশ্যাল মিডিয়া পোস্ট তৈরি করুন",
            icon: Sparkles,
            progress: 20
          },
          {
            name: "মূল্য অপটিমাইজেশন AI",
            desc: "বাজার চাহিদা এবং খরচের উপর ভিত্তি করে সর্বোত্তম মূল্য সুপারিশ করুন",
            icon: TrendingUp,
            progress: 10
          },
          {
            name: "গ্রাহক আচরণ বিশ্লেষণ",
            desc: "বিক্রয় কৌশল উন্নত করতে ক্রয় প্যাটার্ন বুঝুন",
            icon: Target,
            progress: 25
          }
        ]
      },

      // Phase 3
      phase3: {
        title: "পর্যায় ৩: বহু-ভাষা সম্প্রসারণ",
        status: "🌍 ২০২৪ Q4 এর জন্য পরিকল্পিত",
        description: "বিশ্বব্যাপী আরও কুমোর এবং গ্রাহকদের কাছে পৌঁছাতে ভাষা সমর্থন প্রসারিত করুন",
        features: [
          {
            name: "আঞ্চলিক ভাষা",
            desc: "হিন্দি, উর্দু, তামিল, তেলুগু, গুজরাটি যোগ করুন",
            icon: Languages,
            progress: 5
          },
          {
            name: "আন্তর্জাতিক বাজার",
            desc: "স্প্যানিশ, ফরাসি, আরবি, চীনা সমর্থন",
            icon: Globe,
            progress: 0
          },
          {
            name: "ভয়েস ইনপুট/আউটপুট",
            desc: "নিম্ন-সাক্ষরতা ব্যবহারকারীদের জন্য অডিও-ভিত্তিক ইন্টারফেস",
            icon: Zap,
            progress: 10
          },
          {
            name: "সাংস্কৃতিক কাস্টমাইজেশন",
            desc: "অঞ্চল-নির্দিষ্ট UI অভিযোজন এবং কন্টেন্ট",
            icon: Users,
            progress: 8
          }
        ]
      },

      // Phase 4
      phase4: {
        title: "পর্যায় ৪: AR এবং 3D ভিজুয়ালাইজেশন",
        status: "🔮 ভবিষ্যৎ দৃষ্টিভঙ্গি (২০২৫+)",
        description: "ভাল পণ্য দৃশ্যায়ন এবং ভার্চুয়াল কেনার আগে ব্যবহারের জন্য নিমগ্ন প্রযুক্তি",
        features: [
          {
            name: "3D পণ্য স্ক্যানিং",
            desc: "স্মার্টফোন ক্যামেরা ব্যবহার করে 3D-তে মাটির পাত্র ক্যাপচার করুন",
            icon: Eye,
            progress: 0
          },
          {
            name: "AR কেনার আগে ব্যবহার",
            desc: "কেনার আগে আপনার বাড়িতে মাটির পাত্র দেখুন",
            icon: Boxes,
            progress: 0
          },
          {
            name: "ভার্চুয়াল মাটির পাত্র কর্মশালা",
            desc: "ভার্চুয়াল রিয়েলিটিতে মাটির পাত্র তৈরি শিখুন",
            icon: Sparkles,
            progress: 0
          },
          {
            name: "AI-সহায়ক 3D ডিজাইন",
            desc: "AI দিয়ে কাস্টম মাটির পাত্র ডিজাইন তৈরি করুন",
            icon: Brain,
            progress: 0
          }
        ]
      },

      // Phase 5
      phase5: {
        title: "পর্যায় ৫: গ্লোবাল মার্কেট ইন্টিগ্রেশন",
        status: "🌏 ভবিষ্যৎ দৃষ্টিভঙ্গি (২০২৫+)",
        description: "আন্তঃসীমান্ত লজিস্টিক, আন্তর্জাতিক পেমেন্ট, এবং গ্লোবাল মার্কেটপ্লেস বৈশিষ্ট্য",
        features: [
          {
            name: "আন্তর্জাতিক শিপিং",
            desc: "বিশ্বব্যাপী ডেলিভারির জন্য DHL, FedEx এর সাথে অংশীদার",
            icon: MapPin,
            progress: 0
          },
          {
            name: "মাল্টি-কারেন্সি সাপোর্ট",
            desc: "৫০+ মুদ্রায় পেমেন্ট গ্রহণ করুন",
            icon: TrendingUp,
            progress: 0
          },
          {
            name: "রপ্তানি ডকুমেন্টেশন AI",
            desc: "স্বয়ংক্রিয়ভাবে কাস্টমস এবং রপ্তানি কাগজপত্র তৈরি করুন",
            icon: Rocket,
            progress: 0
          },
          {
            name: "গ্লোবাল কুমোর নেটওয়ার্ক",
            desc: "২০+ দেশ থেকে কুমোরদের সংযুক্ত করুন",
            icon: Users,
            progress: 0
          }
        ]
      },

      // Research Goals
      research: {
        title: "গবেষণা লক্ষ্য এবং উদ্দেশ্য",
        goal1: {
          title: "মানব-কেন্দ্রিক AI",
          desc: "সমস্ত বৈশিষ্ট্যে AI স্বচ্ছতা, ব্যবহারকারী নিয়ন্ত্রণ, এবং সাংস্কৃতিক সংবেদনশীলতা নিশ্চিত করুন"
        },
        goal2: {
          title: "ডিজিটাল অন্তর্ভুক্তি",
          desc: "ভিজ্যুয়াল-প্রথম, সহজ ইন্টারফেসের সাথে নিম্ন ডিজিটাল সাক্ষরতা ব্যবহারকারীদের জন্য ডিজাইন করুন"
        },
        goal3: {
          title: "অর্থনৈতিক ক্ষমতায়ন",
          desc: "কুমোর আয়, বিক্রয়, এবং ব্যবসা বৃদ্ধির উপর প্রভাব পরিমাপ করুন"
        },
        goal4: {
          title: "নৈতিক AI অনুশীলন",
          desc: "উন্নয়নশীল অর্থনীতিতে দায়িত্বশীল AI স্থাপন অধ্যয়ন করুন"
        }
      },

      // Timeline
      timelineSteps: {
        step1: "বর্তমান: ভিত্তি এবং গবেষণা (২০২৪ Q1-Q2)",
        step2: "পরবর্তী: উন্নত AI টুলস (২০২৪ Q3)",
        step3: "তারপর: বহু-ভাষা এবং ভয়েস (২০২৪ Q4)",
        step4: "ভবিষ্যৎ: AR/VR এবং গ্লোবাল মার্কেট (২০২৫+)"
      },

      // CTA
      cta: {
        title: "আমাদের গবেষণা যাত্রায় যোগ দিন",
        description: "এটি একটি গবেষণা প্রোটোটাইপ। আপনার প্রতিক্রিয়া AI-চালিত কুমোর মার্কেটপ্লেসের ভবিষ্যৎ গঠনে সাহায্য করে।",
        button: "প্রতিক্রিয়া প্রদান করুন"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-purple-900 mb-2">{t.title}</h1>
            <p className="text-lg text-purple-700">{t.subtitle}</p>
          </div>
          <Button
            onClick={() => setLanguage(language === "en" ? "bn" : "en")}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Globe className="h-5 w-5" />
            {language === "en" ? "বাংলা" : "English"}
          </Button>
        </div>

        {/* Timeline Progress */}
        <Card className="mb-12 bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              {t.timeline.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[t.timelineSteps.step1, t.timelineSteps.step2, t.timelineSteps.step3, t.timelineSteps.step4].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  {index === 0 ? (
                    <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                  ) : index === 1 ? (
                    <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Rocket className="h-8 w-8 text-purple-600 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className={`font-semibold ${index === 0 ? 'text-green-900' : index === 1 ? 'text-blue-900' : 'text-purple-900'}`}>
                      {step}
                    </p>
                    <Progress value={index === 0 ? 100 : index === 1 ? 20 : 0} className="mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Phase 1: Current (Completed) */}
        <Card className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-green-900 text-2xl">{t.phase1.title}</CardTitle>
              <Badge className="bg-green-600 text-white text-lg px-4 py-2">{t.phase1.status}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.phase1.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-green-200">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Phase 2: Advanced AI */}
        <Card className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-blue-900 text-2xl">{t.phase2.title}</CardTitle>
              <Badge className="bg-blue-600 text-white text-lg px-4 py-2">{t.phase2.status}</Badge>
            </div>
            <CardDescription className="text-lg">{t.phase2.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.phase2.features.map((feature, index) => (
                <Card key={index} className="bg-white border-blue-200">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{language === "en" ? "Progress" : "অগ্রগতি"}</span>
                        <span className="font-semibold text-blue-900">{feature.progress}%</span>
                      </div>
                      <Progress value={feature.progress} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Phase 3: Multi-Language */}
        <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-purple-900 text-2xl">{t.phase3.title}</CardTitle>
              <Badge className="bg-purple-600 text-white text-lg px-4 py-2">{t.phase3.status}</Badge>
            </div>
            <CardDescription className="text-lg">{t.phase3.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.phase3.features.map((feature, index) => (
                <Card key={index} className="bg-white border-purple-200">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-purple-600 mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{language === "en" ? "Progress" : "অগ্রগতি"}</span>
                        <span className="font-semibold text-purple-900">{feature.progress}%</span>
                      </div>
                      <Progress value={feature.progress} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Phase 4: AR/3D */}
        <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-indigo-900 text-2xl">{t.phase4.title}</CardTitle>
              <Badge className="bg-indigo-600 text-white text-lg px-4 py-2">{t.phase4.status}</Badge>
            </div>
            <CardDescription className="text-lg">{t.phase4.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.phase4.features.map((feature, index) => (
                <Card key={index} className="bg-white border-indigo-200">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-indigo-600 mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
                    <Badge variant="outline" className="text-xs">
                      {language === "en" ? "Future Vision" : "ভবিষ্যৎ দৃষ্টিভঙ্গি"}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Phase 5: Global Expansion */}
        <Card className="mb-8 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-orange-900 text-2xl">{t.phase5.title}</CardTitle>
              <Badge className="bg-orange-600 text-white text-lg px-4 py-2">{t.phase5.status}</Badge>
            </div>
            <CardDescription className="text-lg">{t.phase5.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.phase5.features.map((feature, index) => (
                <Card key={index} className="bg-white border-orange-200">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
                    <Badge variant="outline" className="text-xs">
                      {language === "en" ? "Future Vision" : "ভবিষ্যৎ দৃষ্টিভঙ্গি"}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Goals */}
        <Card className="mb-8 bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
          <CardHeader>
            <CardTitle className="text-teal-900 text-2xl flex items-center gap-2">
              <Target className="h-7 w-7" />
              {t.research.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-900 flex items-center gap-2">
                    <Brain className="h-6 w-6" />
                    {t.research.goal1.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{t.research.goal1.desc}</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-900 flex items-center gap-2">
                    <Users className="h-6 w-6" />
                    {t.research.goal2.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{t.research.goal2.desc}</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-900 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    {t.research.goal3.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{t.research.goal3.desc}</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-900 flex items-center gap-2">
                    <Sparkles className="h-6 w-6" />
                    {t.research.goal4.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{t.research.goal4.desc}</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
          <CardContent className="p-12 text-center">
            <Rocket className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{t.cta.description}</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              {t.cta.button}
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
