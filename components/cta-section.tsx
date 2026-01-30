"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Send, CheckCircle2, Star, Users } from "lucide-react"

interface CTASectionProps {
  language: "en" | "bn"
}

const translations = {
  en: {
    title: "Ready to Get Started?",
    subtitle: "Join the movement to preserve heritage and empower artisans",
    joinArtisans: "Join 15+ empowered artisans",
    startFree: "Start for Free",
    newsletter: "Stay Updated",
    newsletterDesc: "Get the latest updates on new pottery, artisan stories, and platform features.",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    subscribed: "Subscribed!",
    contact: "Contact Us",
    contactDesc: "Have questions? We'd love to hear from you.",
    namePlaceholder: "Your name",
    messagePlaceholder: "Your message...",
    sendMessage: "Send Message",
    testimonials: "What People Say",
    testimonialsList: [
      {
        quote: "This platform helped me reach customers I never thought possible.",
        author: "Abdul Karim",
        role: "Artisan",
      },
      {
        quote: "The AI suggestions made browsing pottery so much easier and personal.",
        author: "Sarah Ahmed",
        role: "Buyer",
      },
      {
        quote: "Finally, a platform that respects our traditions while using modern tech.",
        author: "Rahima Begum",
        role: "Artisan",
      },
    ],
  },
  bn: {
    title: "শুরু করতে প্রস্তুত?",
    subtitle: "ঐতিহ্য সংরক্ষণ এবং শিল্পীদের ক্ষমতায়নের আন্দোলনে যোগ দিন",
    joinArtisans: "১৫+ ক্ষমতায়িত শিল্পীদের সাথে যোগ দিন",
    startFree: "বিনামূল্যে শুরু করুন",
    newsletter: "আপডেট থাকুন",
    newsletterDesc: "নতুন মৃৎশিল্প, শিল্পীদের গল্প এবং প্ল্যাটফর্ম বৈশিষ্ট্য সম্পর্কে সর্বশেষ আপডেট পান।",
    emailPlaceholder: "আপনার ইমেইল লিখুন",
    subscribe: "সাবস্ক্রাইব করুন",
    subscribed: "সাবস্ক্রাইব হয়েছে!",
    contact: "যোগাযোগ করুন",
    contactDesc: "প্রশ্ন আছে? আমরা আপনার কথা শুনতে চাই।",
    namePlaceholder: "আপনার নাম",
    messagePlaceholder: "আপনার বার্তা...",
    sendMessage: "বার্তা পাঠান",
    testimonials: "মানুষ কি বলছে",
    testimonialsList: [
      {
        quote: "এই প্ল্যাটফর্ম আমাকে এমন গ্রাহকদের কাছে পৌঁছাতে সাহায্য করেছে যা আমি কখনও সম্ভব মনে করিনি।",
        author: "আব্দুল করিম",
        role: "শিল্পী",
      },
      {
        quote: "এআই পরামর্শগুলি মৃৎশিল্প ব্রাউজিংকে অনেক সহজ এবং ব্যক্তিগত করেছে।",
        author: "সারা আহমেদ",
        role: "ক্রেতা",
      },
      {
        quote: "অবশেষে, একটি প্ল্যাটফর্ম যা আমাদের ঐতিহ্যকে সম্মান করে আধুনিক প্রযুক্তি ব্যবহার করে।",
        author: "রহিমা বেগম",
        role: "শিল্পী",
      },
    ],
  },
}

export function CTASection({ language }: CTASectionProps) {
  const t = translations[language]
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contact form submission
    console.log("Contact form submitted:", contactForm)
    setContactForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-gold/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-emerald to-emerald-dark hover:from-emerald/90 hover:to-emerald-dark/90 text-accent-foreground shadow-lg shadow-emerald/25 text-lg px-8"
            >
              <Users className="mr-2 h-5 w-5" />
              {t.joinArtisans}
            </Button>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-gold to-primary hover:from-gold/90 hover:to-primary/90 text-gold-foreground shadow-lg shadow-gold/25 text-lg px-8"
            >
              {t.startFree}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-center text-foreground mb-8">
            {t.testimonials}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonialsList.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 shadow-lg magnetic-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-terracotta-dark flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter & Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div className="bg-card rounded-3xl border border-border p-6 lg:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
                <Mail className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">{t.newsletter}</h3>
                <p className="text-sm text-muted-foreground">{t.newsletterDesc}</p>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribed}
                  className={`${
                    isSubscribed
                      ? "bg-emerald text-accent-foreground"
                      : "bg-gradient-to-r from-emerald to-emerald-dark text-accent-foreground"
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      {t.subscribed}
                    </>
                  ) : (
                    t.subscribe
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl border border-border p-6 lg:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-primary flex items-center justify-center">
                <Send className="h-5 w-5 text-gold-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">{t.contact}</h3>
                <p className="text-sm text-muted-foreground">{t.contactDesc}</p>
              </div>
            </div>

            <form onSubmit={handleContact} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">{t.namePlaceholder}</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">{t.messagePlaceholder}</Label>
                <Textarea
                  id="contact-message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gold to-primary hover:from-gold/90 hover:to-primary/90 text-gold-foreground"
              >
                <Send className="mr-2 h-4 w-4" />
                {t.sendMessage}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
