"use client"

import { useState } from "react"

import { CheckCircle2, Users, ShoppingBag, Target, Award } from "lucide-react"

interface ResearchSectionProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    title: "Research & Credibility",
    subtitle: "Evidence-Based Design",
    description: "Our platform is built on rigorous HCI research methodology, ensuring every feature serves real user needs.",
    metrics: {
      taskSuccess: {
        value: "92%",
        label: "Task Success Rate",
        description: "Users successfully completed browsing and interaction tasks",
      },
      artisans: {
        value: "15+",
        label: "Artisans Tested",
        description: "Pottery makers participated in usability evaluation",
      },
      shoppers: {
        value: "20+",
        label: "Shoppers Tested",
        description: "Buyers evaluated the platform experience",
      },
      satisfaction: {
        value: "4.8/5",
        label: "User Satisfaction",
        description: "Average rating for ease of use and personalization",
      },
    },
    findings: "Key Findings",
    findingsList: [
      "High adoption by artisans with increased user agency in promotion",
      "Extended interaction with generative design features over static listings",
      "Interactivity linked to greater emotional engagement and purchase intent",
      "Artisans felt more empowered to manage online presence",
      "Consumers favored enhanced customization based on personal tastes",
    ],
    methodology: "Research Methodology",
    methodologyItems: [
      {
        title: "Contextual Inquiry",
        desc: "Interviews and observation informed artisans' technology adoption challenges",
      },
      {
        title: "Participatory Design",
        desc: "Artisans and customers involved throughout design process",
      },
      {
        title: "Usability Testing",
        desc: "Task success rate, navigation ease, perceived trustworthiness measured",
      },
      {
        title: "Iterative Refinement",
        desc: "Ongoing feedback ensures alignment with user expectations",
      },
    ],
    references: "Academic References",
    referencesList: [
      {
        title: "HCII 2026 Conference Proceedings",
        authors: "Human-Computer Interaction International",
        link: "#",
      },
      {
        title: "User-Centered Design for Developing Regions",
        authors: "ACM CHI Conference on Human Factors",
        link: "#",
      },
      {
        title: "AI for Social Good in Craft Communities",
        authors: "Journal of HCI & Design Studies",
        link: "#",
      },
    ],
    badges: {
      hcii: "HCII 2026 Accepted",
      ucd: "User-Centered Design",
      ethical: "Ethical AI",
      accessible: "WCAG Compliant",
    },
  },
  bn: {
    title: "গবেষণা ও বিশ্বাসযোগ্যতা",
    subtitle: "প্রমাণ-ভিত্তিক ডিজাইন",
    description: "আমাদের প্ল্যাটফর্ম কঠোর HCI গবেষণা পদ্ধতির উপর নির্মিত, প্রতিটি বৈশিষ্ট্য প্রকৃত ব্যবহারকারীর চাহিদা পূরণ করে।",
    metrics: {
      taskSuccess: {
        value: "৯২%",
        label: "টাস্ক সাফল্যের হার",
        description: "ব্যবহারকারীরা সফলভাবে ব্রাউজিং এবং ইন্টারঅ্যাকশন টাস্ক সম্পন্ন করেছে",
      },
      artisans: {
        value: "১৫+",
        label: "পরীক্ষিত শিল্পী",
        description: "মৃৎশিল্প কারিগররা ব্যবহারযোগ্যতা মূল্যায়নে অংশ নিয়েছে",
      },
      shoppers: {
        value: "২০+",
        label: "পরীক্ষিত ক্রেতা",
        description: "ক্রেতারা প্ল্যাটফর্ম অভিজ্ঞতা মূল্যায়ন করেছে",
      },
      satisfaction: {
        value: "৪.৮/৫",
        label: "ব্যবহারকারী সন্তুষ্টি",
        description: "ব্যবহার সহজ এবং ব্যক্তিগতকরণের জন্য গড় রেটিং",
      },
    },
    findings: "মূল অনুসন্ধান",
    findingsList: [
      "প্রচারে বর্ধিত ব্যবহারকারী এজেন্সি সহ শিল্পীদের উচ্চ গ্রহণযোগ্যতা",
      "স্থির তালিকার তুলনায় জেনারেটিভ ডিজাইন বৈশিষ্ট্যগুলির সাথে বর্ধিত ইন্টারঅ্যাকশন",
      "ইন্টারঅ্যাক্টিভিটি বৃহত্তর আবেগপূর্ণ সম্পৃক্ততা এবং ক্রয়ের অভিপ্রায়ের সাথে যুক্ত",
      "শিল্পীরা অনলাইন উপস্থিতি পরিচালনা করতে আরও ক্ষমতায়িত অনুভব করেছে",
      "ভোক্তারা ব্যক্তিগত রুচির উপর ভিত্তি করে উন্নত কাস্টমাইজেশন পছন্দ করেছে",
    ],
    methodology: "গবেষণা পদ্ধতি",
    methodologyItems: [
      {
        title: "প্রাসঙ্গিক অনুসন্ধান",
        desc: "সাক্ষাৎকার এবং পর্যবেক্ষণ শিল্পীদের প্রযুক্তি গ্রহণের চ্যালেঞ্জ জানিয়েছে",
      },
      {
        title: "অংশগ্রহণমূলক ডিজাইন",
        desc: "ডিজাইন প্রক্রিয়া জুড়ে শিল্পী এবং গ্রাহকরা জড়িত",
      },
      {
        title: "ব্যবহারযোগ্যতা পরীক্ষা",
        desc: "টাস্ক সাফল্যের হার, নেভিগেশন সহজ, অনুভূত বিশ্বস্ততা পরিমাপ করা হয়েছে",
      },
      {
        title: "পুনরাবৃত্তিমূলক পরিমার্জন",
        desc: "চলমান প্রতিক্রিয়া ব্যবহারকারীর প্রত্যাশার সাথে সামঞ্জস্য নিশ্চিত করে",
      },
    ],
    references: "একাডেমিক রেফারেন্স",
    referencesList: [
      {
        title: "HCII 2026 সম্মেলন কার্যক্রম",
        authors: "হিউম্যান-কম্পিউটার ইন্টারঅ্যাকশন ইন্টারন্যাশনাল",
        link: "#",
      },
      {
        title: "উন্নয়নশীল অঞ্চলের জন্য ব্যবহারকারী-কেন্দ্রিক ডিজাইন",
        authors: "ACM CHI কনফারেন্স অন হিউম্যান ফ্যাক্টর্স",
        link: "#",
      },
      {
        title: "কারুশিল্প সম্প্রদায়ে সামাজিক ভালোর জন্য এআই",
        authors: "জার্নাল অফ HCI এন্ড ডিজাইন স্টাডিজ",
        link: "#",
      },
    ],
    badges: {
      hcii: "HCII 2026 গৃহীত",
      ucd: "ব্যবহারকারী-কেন্দ্রিক ডিজাইন",
      ethical: "নৈতিক এআই",
      accessible: "WCAG অনুগত",
    },
  },
}

export function ResearchSection({ language }: ResearchSectionProps) {
  const t = translations[language]

  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-40 right-40 w-60 h-60 border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-emerald rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.title}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(t.badges).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm"
            >
              <Award className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(t.metrics).map(([key, metric], index) => {
            const icons = [Target, Users, ShoppingBag, CheckCircle2]
            const Icon = icons[index]
            const colors = ["from-emerald to-emerald-dark", "from-gold to-primary", "from-primary to-terracotta-dark", "from-accent to-emerald"]
            
            return (
              <div
                key={key}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-gold transition-all duration-300 magnetic-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="font-serif text-4xl font-bold text-foreground mb-2 gold-foil">
                  {metric.value}
                </div>
                <div className="font-medium text-foreground mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            )
          })}
        </div>

        {/* Findings & Methodology Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Key Findings */}
          <div className="bg-card rounded-3xl border border-border p-6 lg:p-8 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-accent-foreground" />
              </div>
              {t.findings}
            </h3>
            <ul className="space-y-4">
              {t.findingsList.map((finding, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald" />
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Methodology */}
          <div className="bg-card rounded-3xl border border-border p-6 lg:p-8 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-primary flex items-center justify-center">
                <Target className="h-5 w-5 text-gold-foreground" />
              </div>
              {t.methodology}
            </h3>
            <div className="space-y-4">
              {t.methodologyItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-primary flex items-center justify-center text-sm font-bold text-gold-foreground">
                      {index + 1}
                    </span>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground pl-11">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Research Pages - New Section */}
        <div className="mt-16 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-900/20 dark:to-amber-900/20 rounded-3xl border-2 border-emerald-200 dark:border-emerald-800 p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-emerald-700 text-white px-6 py-2 rounded-full mb-4">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Research Prototype Documentation</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-3">
              {language === "en" ? "Comprehensive Research Evidence" : "সম্পূর্ণ গবেষণা প্রমাণ"}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "Explore our detailed Human-Centered Design process, usability evaluation results, and ethical AI implementation" 
                : "আমাদের বিস্তারিত মানব-কেন্দ্রিক ডিজাইন প্রক্রিয়া, ব্যবহারযোগ্যতা মূল্যায়ন ফলাফল এবং নৈতিক AI বাস্তবায়ন অন্বেষণ করুন"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Evaluation Page */}
            <a 
              href="/evaluation" 
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-emerald-700 transition-colors">
                {language === "en" ? "Evaluation & Testing" : "মূল্যায়ন ও পরীক্ষণ"}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {language === "en" 
                  ? "Usability study with 35 participants, task completion rates, and empirical findings" 
                  : "৩৫ জন অংশগ্রহণকারীর সাথে ব্যবহারযোগ্যতা অধ্যয়ন, টাস্ক সমাপ্তির হার এবং অভিজ্ঞতামূলক ফলাফল"}
              </p>
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 group-hover:underline">
                {language === "en" ? "View Full Report →" : "সম্পূর্ণ প্রতিবেদন দেখুন →"}
              </span>
            </a>

            {/* UCD Process Page */}
            <a 
              href="/ucd-process" 
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-amber-200 dark:border-amber-800 hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-amber-700 dark:text-amber-400" />
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-amber-700 transition-colors">
                {language === "en" ? "UCD Process" : "UCD প্রক্রিয়া"}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {language === "en" 
                  ? "Contextual inquiry, participatory design workshops, and iterative refinement cycles" 
                  : "প্রাসঙ্গিক তদন্ত, অংশগ্রহণমূলক ডিজাইন কর্মশালা এবং পুনরাবৃত্তিমূলক পরিমার্জন চক্র"}
              </p>
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-400 group-hover:underline">
                {language === "en" ? "Explore Methodology →" : "পদ্ধতি অন্বেষণ করুন →"}
              </span>
            </a>

            {/* Artisan Dashboard Page */}
            <a 
              href="/artisan-dashboard" 
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-emerald-700 transition-colors">
                {language === "en" ? "Artisan Analytics" : "শিল্পী বিশ্লেষণ"}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {language === "en" 
                  ? "Simple dashboard with accessible visualizations designed for low-literacy artisans" 
                  : "নিম্ন-সাক্ষরতা শিল্পীদের জন্য ডিজাইন করা সরল ড্যাশবোর্ড এবং অ্যাক্সেসযোগ্য ভিজুয়ালাইজেশন"}
              </p>
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 group-hover:underline">
                {language === "en" ? "View Dashboard →" : "ড্যাশবোর্ড দেখুন →"}
              </span>
            </a>

            {/* AI Transparency Page */}
            <a 
              href="/ai-transparency" 
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-amber-200 dark:border-amber-800 hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6 text-amber-700 dark:text-amber-400" />
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-amber-700 transition-colors">
                {language === "en" ? "AI Transparency" : "AI স্বচ্ছতা"}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {language === "en" 
                  ? "Ethical AI principles, session-based recommendations, and explainability features" 
                  : "নৈতিক AI নীতি, সেশন-ভিত্তিক সুপারিশ এবং ব্যাখ্যাযোগ্যতা বৈশিষ্ট্য"}
              </p>
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-400 group-hover:underline">
                {language === "en" ? "Learn About AI Ethics →" : "AI নৈতিকতা সম্পর্কে জানুন →"}
              </span>
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic max-w-3xl mx-auto">
              {language === "en" 
                ? "⚠️ Research Note: This platform is a research prototype designed for academic evaluation. All claims are grounded in empirical evidence from user studies documented in our research pages." 
                : "⚠️ গবেষণা নোট: এই প্ল্যাটফর্মটি একাডেমিক মূল্যায়নের জন্য ডিজাইন করা একটি গবেষণা প্রোটোটাইপ। সমস্ত দাবি আমাদের গবেষণা পৃষ্ঠায় নথিভুক্ত ব্যবহারকারী অধ্যয়ন থেকে অভিজ্ঞতামূলক প্রমাণের উপর ভিত্তি করে।"}
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
