"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  Globe
} from "lucide-react"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en")

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In <span className="gold-foil">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-gold/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Our team is here to help
                    </p>
                    <a href="mailto:info@mritishilpa.com" className="text-sm text-primary hover:underline">
                      info@mritishilpa.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-emerald/10 to-accent/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald/20">
                    <Phone className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Mon-Fri from 9am to 6pm
                    </p>
                    <a href="tel:+8801712345678" className="text-sm text-emerald hover:underline">
                      +880 1712-345678
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-gold/10 to-primary/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold/20">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Dhamrai, Dhaka<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-rose-500/10 to-rose-500/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-rose-500/20">
                    <Clock className="h-6 w-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Working Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8">
              <h2 className="font-serif text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-gold hover:from-primary/90 hover:to-gold/90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </form>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">How do I track my order?</h3>
                <p className="text-sm text-muted-foreground">
                  Once your order ships, you'll receive a tracking number via email. 
                  You can also check your order status in your account dashboard.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">What is your return policy?</h3>
                <p className="text-sm text-muted-foreground">
                  We accept returns within 7 days of delivery. Items must be unused 
                  and in original packaging. Contact us to initiate a return.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">How can I become an artisan partner?</h3>
                <p className="text-sm text-muted-foreground">
                  We're always looking to work with talented artisans! Click on the 
                  "Artisan Portal" button and fill out the application form.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Do you ship internationally?</h3>
                <p className="text-sm text-muted-foreground">
                  Currently, we ship within Bangladesh. International shipping is 
                  coming soon. Sign up for our newsletter to stay updated.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}
