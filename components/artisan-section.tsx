"use client"

import { useState } from "react"
import { MapPin, Clock, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArtisanSectionProps {
  language: "en" | "bn"
}

const artisans = [
  {
    id: 1,
    name: "Abdul Karim",
    nameBn: "আব্দুল করিম",
    location: "Mirpur-2, Dhaka",
    locationBn: "মিরপুর-২, ঢাকা",
    type: "Terracotta household pots and storage jars",
    typeBn: "টেরাকোটা গৃহস্থালি পাত্র এবং স্টোরেজ জার",
    experience: 20,
    image: "https://images.pexels.com/photos/30564670/pexels-photo-30564670.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Abdul Karim is a pottery craftsman based in Mirpur-2, Dhaka, working primarily with terracotta clay. His practice focuses on producing everyday household pottery using traditional shaping and firing techniques.",
    bioBn: "আব্দুল করিম মিরপুর-২, ঢাকায় অবস্থিত একজন মৃৎশিল্প কারিগর, প্রাথমিকভাবে টেরাকোটা মাটি দিয়ে কাজ করেন।",
    quote: "Every pot tells a story of our ancestors.",
    quoteBn: "প্রতিটি পাত্র আমাদের পূর্বপুরুষদের গল্প বলে।",
  },
  {
    id: 2,
    name: "Rahima Begum",
    nameBn: "রহিমা বেগম",
    location: "Mirpur-2, Dhaka",
    locationBn: "মিরপুর-২, ঢাকা",
    type: "Decorative flower vases and small clay items",
    typeBn: "সজ্জাসংক্রান্ত ফুলদানি এবং ছোট মাটির আইটেম",
    experience: 12,
    image: "https://images.pexels.com/photos/30564679/pexels-photo-30564679.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Rahima Begum creates decorative pottery items intended for home décor and small-scale gifting. Her work reflects simple forms and surface treatments adapted from traditional pottery practices.",
    bioBn: "রহিমা বেগম ঘরের সাজসজ্জা এবং ছোট আকারের উপহারের জন্য সজ্জাসংক্রান্ত মৃৎশিল্প আইটেম তৈরি করেন।",
    quote: "Clay is my canvas, tradition is my guide.",
    quoteBn: "মাটি আমার ক্যানভাস, ঐতিহ্য আমার পথপ্রদর্শক।",
  },
  {
    id: 3,
    name: "Md. Salim Miah",
    nameBn: "মো. সেলিম মিয়া",
    location: "Mirpur-2, Dhaka",
    locationBn: "মিরপুর-২, ঢাকা",
    type: "Clay plates and serving bowls",
    typeBn: "মাটির প্লেট এবং পরিবেশন বাটি",
    experience: 15,
    image: "https://images.pexels.com/photos/30564678/pexels-photo-30564678.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Md. Salim Miah produces functional clay plates and bowls designed for everyday household use. His pottery emphasizes durability and usability while following conventional hand-forming techniques.",
    bioBn: "মো. সেলিম মিয়া দৈনন্দিন গৃহস্থালি ব্যবহারের জন্য ডিজাইন করা কার্যকরী মাটির প্লেট এবং বাটি উৎপাদন করেন।",
    quote: "Utility and beauty can coexist in clay.",
    quoteBn: "মাটিতে উপযোগিতা এবং সৌন্দর্য সহাবস্থান করতে পারে।",
  },
  {
    id: 4,
    name: "Jahanara Khatun",
    nameBn: "জাহানারা খাতুন",
    location: "Mirpur-2, Dhaka",
    locationBn: "মিরপুর-২, ঢাকা",
    type: "Hand-painted decorative clay items",
    typeBn: "হাতে আঁকা সজ্জাসংক্রান্ত মাটির আইটেম",
    experience: 10,
    image: "https://images.pexels.com/photos/30564682/pexels-photo-30564682.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Jahanara Khatun specializes in decorative pottery enhanced with basic hand-painted patterns. Her work represents a contemporary adaptation of traditional clay forms for interior decoration.",
    bioBn: "জাহানারা খাতুন মৌলিক হাতে আঁকা প্যাটার্ন সহ সজ্জাসংক্রান্ত মৃৎশিল্পে বিশেষজ্ঞ।",
    quote: "Colors bring life to ancient forms.",
    quoteBn: "রং প্রাচীন ফর্মগুলোতে জীবন নিয়ে আসে।",
  },
  {
    id: 5,
    name: "Nurul Islam",
    nameBn: "নুরুল ইসলাম",
    location: "Mirpur-2, Dhaka",
    locationBn: "মিরপুর-২, ঢাকা",
    type: "Water pots and storage vessels",
    typeBn: "জলের পাত্র এবং স্টোরেজ পাত্র",
    experience: 18,
    image: "https://images.pexels.com/photos/30564672/pexels-photo-30564672.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Nurul Islam focuses on producing larger clay vessels intended for water storage and household utility. His pottery follows established terracotta techniques widely practiced in Bangladesh.",
    bioBn: "নুরুল ইসলাম জল সঞ্চয় এবং গৃহস্থালি উপযোগিতার জন্য বড় মাটির পাত্র উৎপাদনে মনোনিবেশ করেন।",
    quote: "Water tastes sweeter in clay.",
    quoteBn: "মাটির পাত্রে জল মিষ্টি লাগে।",
  },
  {
    id: 6,
    name: "Ayesha Akter",
    nameBn: "আয়েশা আক্তার",
    location: "Mirpur-2, Dhaka",
    locationBn: "মিরপুর-২, ঢাকা",
    type: "Small decorative bowls and gift items",
    typeBn: "ছোট সজ্জাসংক্রান্ত বাটি এবং উপহার আইটেম",
    experience: 8,
    image: "https://images.pexels.com/photos/30564668/pexels-photo-30564668.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Ayesha Akter creates small pottery items mainly for decorative and gifting purposes. Her work reflects emerging participation of women artisans in urban craft-based production.",
    bioBn: "আয়েশা আক্তার প্রধানত সজ্জাসংক্রান্ত এবং উপহারের উদ্দেশ্যে ছোট মৃৎশিল্প আইটেম তৈরি করেন।",
    quote: "Small pieces carry big dreams.",
    quoteBn: "ছোট টুকরো বড় স্বপ্ন বহন করে।",
  },
  {
    id: 7,
    name: "Shafiqul Rahman",
    nameBn: "শফিকুল রহমান",
    location: "Mirpur-2, Dhaka",
    locationBn: "মিরপুর-২, ঢাকা",
    type: "Traditional clay lamps and ritual items",
    typeBn: "ঐতিহ্যবাহী মাটির বাতি এবং আচার-অনুষ্ঠানের আইটেম",
    experience: 22,
    image: "https://images.pexels.com/photos/29357899/pexels-photo-29357899.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Shafiqul Rahman produces traditional clay lamps and ceremonial pottery used during cultural and religious events. His work preserves functional forms that remain relevant in local traditions.",
    bioBn: "শফিকুল রহমান সাংস্কৃতিক ও ধর্মীয় অনুষ্ঠানে ব্যবহৃত ঐতিহ্যবাহী মাটির বাতি এবং অনুষ্ঠানিক মৃৎশিল্প উৎপাদন করেন।",
    quote: "Light from clay illuminates our heritage.",
    quoteBn: "মাটির আলো আমাদের ঐতিহ্যকে আলোকিত করে।",
  },
  {
    id: 8,
    name: "Fatema Begum",
    nameBn: "ফাতেমা বেগম",
    location: "Mirpur-2, Dhaka",
    locationBn: "মিরপুর-২, ঢাকা",
    type: "Clay planters and garden pots",
    typeBn: "মাটির প্ল্যান্টার এবং বাগানের পাত্র",
    experience: 9,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ancient_pottery_making_art.jpg/640px-Ancient_pottery_making_art.jpg",
    bio: "Fatema Begum crafts clay planters and garden pots designed for indoor and outdoor use. Her pottery practice emphasizes simplicity of form and practical usability.",
    bioBn: "ফাতেমা বেগম ইনডোর এবং আউটডোর ব্যবহারের জন্য ডিজাইন করা মাটির প্ল্যান্টার এবং বাগানের পাত্র তৈরি করেন।",
    quote: "Plants and clay are natural partners.",
    quoteBn: "গাছ এবং মাটি প্রাকৃতিক সঙ্গী।",
    attribution: "Image: Ancient pottery making art, CC-BY-SA 4.0, via Wikimedia Commons",
  },
]

const translations = {
  en: {
    title: "Meet Our Artisans",
    subtitle: "Stories of Heritage & Craftsmanship",
    description: "Each artisan brings generations of knowledge and unique traditions to their craft. Connect directly with the creators.",
    yearsExp: "years experience",
    viewProfile: "View Profile",
    viewAll: "View All Artisans",
  },
  bn: {
    title: "আমাদের শিল্পীদের সাথে পরিচিত হন",
    subtitle: "ঐতিহ্য ও কারুশিল্পের গল্প",
    description: "প্রতিটি শিল্পী তাদের কারুশিল্পে প্রজন্মের জ্ঞান এবং অনন্য ঐতিহ্য নিয়ে আসেন। সরাসরি সৃষ্টিকর্তাদের সাথে সংযোগ করুন।",
    yearsExp: "বছরের অভিজ্ঞতা",
    viewProfile: "প্রোফাইল দেখুন",
    viewAll: "সব শিল্পী দেখুন",
  },
}

export function ArtisanSection({ language }: ArtisanSectionProps) {
  const t = translations[language]
  const [selectedArtisan, setSelectedArtisan] = useState(artisans[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSelectArtisan = (artisan: typeof artisans[0]) => {
    if (artisan.id === selectedArtisan.id) return
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedArtisan(artisan)
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <section id="artisans" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            {t.title}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Featured Artisan Display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Main Featured Card */}
          <div className={`relative transition-all duration-300 ${isTransitioning ? "opacity-50 scale-98" : "opacity-100 scale-100"}`}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              {/* Image */}
              <img
                src={selectedArtisan.image || "/placeholder.svg"}
                alt={language === "bn" ? selectedArtisan.nameBn : selectedArtisan.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-card mb-2">
                      {language === "bn" ? selectedArtisan.nameBn : selectedArtisan.name}
                    </h3>
                    <div className="flex items-center gap-2 text-card/80 text-sm mb-3">
                      <MapPin className="h-4 w-4" />
                      {language === "bn" ? selectedArtisan.locationBn : selectedArtisan.location}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 backdrop-blur-sm">
                      <Clock className="h-4 w-4 text-gold" />
                      <span className="text-sm text-card">
                        {selectedArtisan.experience} {t.yearsExp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Badge */}
              <div className="absolute top-6 right-6 max-w-xs">
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <Quote className="h-5 w-5 text-gold mb-2" />
                  <p className="text-sm italic text-foreground/80">
                    "{language === "bn" ? selectedArtisan.quoteBn : selectedArtisan.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Attribution if exists */}
            {selectedArtisan.attribution && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                {selectedArtisan.attribution}
              </p>
            )}
          </div>

          {/* Artisan Details */}
          <div className={`flex flex-col justify-center transition-all duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}>
            <div className="space-y-6">
              <div>
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {language === "bn" ? selectedArtisan.typeBn : selectedArtisan.type}
                </span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "bn" ? selectedArtisan.bioBn : selectedArtisan.bio}
              </p>

              <Button className="group bg-gradient-to-r from-primary to-terracotta-dark hover:from-primary/90 hover:to-terracotta-dark/90 text-primary-foreground">
                {t.viewProfile}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Artisan Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4">
          {artisans.map((artisan) => (
            <button
              key={artisan.id}
              onClick={() => handleSelectArtisan(artisan)}
              className={`group relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                selectedArtisan.id === artisan.id
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-background scale-105"
                  : "hover:scale-105"
              }`}
            >
              <img
                src={artisan.image || "/placeholder.svg"}
                alt={language === "bn" ? artisan.nameBn : artisan.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 transition-all duration-300 ${
                selectedArtisan.id === artisan.id
                  ? "bg-gold/30"
                  : "bg-foreground/0 group-hover:bg-foreground/20"
              }`} />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-xs text-card font-medium truncate">
                  {language === "bn" ? artisan.nameBn : artisan.name}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group bg-transparent">
            {t.viewAll}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
