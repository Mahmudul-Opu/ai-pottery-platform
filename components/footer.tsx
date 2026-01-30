"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, ArrowUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    brand: "MritiShilpa",
    tagline: "মৃৎশিল্প",
    description: "Empowering Bangladeshi pottery artisans through AI-powered digital marketplace. Preserving heritage, enabling sustainable entrepreneurship.",
    quickLinks: "Quick Links",
    links: {
      home: "Home",
      artisans: "Artisans",
      pottery: "Pottery Gallery",
      about: "About Us",
      research: "Research",
      contact: "Contact",
    },
    forArtisans: "For Artisans",
    artisanLinks: {
      register: "Register as Artisan",
      dashboard: "Artisan Dashboard",
      uploadProduct: "Upload Product",
      analytics: "View Analytics",
      support: "Get Support",
    },
    resources: "Resources",
    resourceLinks: {
      howItWorks: "How It Works",
      aiFeatures: "AI Features",
      userGuide: "User Guide",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    contact: "Contact Us",
    address: "Mirpur-2, Dhaka, Bangladesh",
    phone: "+880 1XXX-XXXXXX",
    email: "contact@mritishilpa.com",
    followUs: "Follow Us",
    newsletter: "Newsletter",
    newsletterDesc: "Subscribe for updates",
    copyright: "MritiShilpa. All rights reserved.",
    madeWith: "Made with",
    forBangladesh: "for Bangladesh",
    backToTop: "Back to Top",
    bengaliText: "বাংলাদেশের ঐতিহ্যবাহী মৃৎশিল্প",
  },
  bn: {
    brand: "মৃৎশিল্প",
    tagline: "MritiShilpa",
    description: "এআই-চালিত ডিজিটাল মার্কেটপ্লেসের মাধ্যমে বাংলাদেশি মৃৎশিল্প কারিগরদের ক্ষমতায়ন। ঐতিহ্য সংরক্ষণ, টেকসই উদ্যোক্তা সক্ষম করা।",
    quickLinks: "দ্রুত লিঙ্ক",
    links: {
      home: "হোম",
      artisans: "শিল্পীরা",
      pottery: "মৃৎশিল্প গ্যালারি",
      about: "আমাদের সম্পর্কে",
      research: "গবেষণা",
      contact: "যোগাযোগ",
    },
    forArtisans: "শিল্পীদের জন্য",
    artisanLinks: {
      register: "শিল্পী হিসেবে নিবন্ধন করুন",
      dashboard: "শিল্পী ড্যাশবোর্ড",
      uploadProduct: "পণ্য আপলোড করুন",
      analytics: "বিশ্লেষণ দেখুন",
      support: "সহায়তা পান",
    },
    resources: "রিসোর্স",
    resourceLinks: {
      howItWorks: "এটি কীভাবে কাজ করে",
      aiFeatures: "এআই বৈশিষ্ট্য",
      userGuide: "ব্যবহারকারী গাইড",
      faq: "প্রশ্নোত্তর",
      privacy: "গোপনীয়তা নীতি",
      terms: "সেবার শর্তাবলী",
    },
    contact: "যোগাযোগ করুন",
    address: "মিরপুর-২, ঢাকা, বাংলাদেশ",
    phone: "+৮৮০ ১XXX-XXXXXX",
    email: "contact@mritishilpa.com",
    followUs: "আমাদের অনুসরণ করুন",
    newsletter: "নিউজলেটার",
    newsletterDesc: "আপডেটের জন্য সাবস্ক্রাইব করুন",
    copyright: "মৃৎশিল্প। সর্বস্বত্ব সংরক্ষিত।",
    madeWith: "তৈরি করা হয়েছে",
    forBangladesh: "বাংলাদেশের জন্য",
    backToTop: "উপরে ফিরে যান",
    bengaliText: "বাংলাদেশের ঐতিহ্যবাহী মৃৎশিল্প",
  },
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-primary via-gold to-emerald" />

      {/* Bengali Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 right-0 h-64 font-bengali text-[15rem] font-bold leading-none text-center text-background/10 overflow-hidden">
          {t.bengaliText}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6 text-foreground" fill="currentColor">
                  <ellipse cx="20" cy="22" rx="15" ry="12" />
                  <ellipse cx="20" cy="14" rx="10" ry="6" opacity="0.7" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-background">{t.brand}</span>
                <span className="block text-xs text-background/60 font-bengali">{t.tagline}</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              {t.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-background mb-4">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {Object.entries(t.links).map(([key, value]) => (
                <li key={key}>
                  <Link
                    href={`#${key}`}
                    className="text-sm text-background/70 hover:text-gold transition-colors"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Artisans */}
          <div>
            <h4 className="font-serif text-lg font-bold text-background mb-4">{t.forArtisans}</h4>
            <ul className="space-y-3">
              {Object.entries(t.artisanLinks).map(([key, value]) => (
                <li key={key}>
                  <Link
                    href="#"
                    className="text-sm text-background/70 hover:text-gold transition-colors"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-bold text-background mb-4">{t.resources}</h4>
            <ul className="space-y-3">
              {Object.entries(t.resourceLinks).map(([key, value]) => (
                <li key={key}>
                  <Link
                    href="#"
                    className="text-sm text-background/70 hover:text-gold transition-colors"
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-background mb-4">{t.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">{t.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm text-background/70">{t.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a
                  href={`mailto:${t.email}`}
                  className="text-sm text-background/70 hover:text-gold transition-colors"
                >
                  {t.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} {t.copyright}
            </p>
            <p className="text-sm text-background/60 flex items-center gap-1">
              {t.madeWith}{" "}
              <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />{" "}
              {t.forBangladesh}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-background/60 hover:text-gold hover:bg-background/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              {t.backToTop}
            </Button>
          </div>
        </div>
      </div>

      {/* Large Bengali Text at Bottom */}
      <div className="py-8 border-t border-background/10">
        <div className="container mx-auto px-4">
          <div className="font-bengali text-6xl sm:text-8xl lg:text-9xl font-bold text-center text-background/5 leading-none">
            মৃৎশিল্প
          </div>
        </div>
      </div>
    </footer>
  )
}
