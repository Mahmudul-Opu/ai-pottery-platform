"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Search, Menu, Globe, User, LogIn, UserPlus, X } from "lucide-react"

interface NavigationProps {
  language: "en" | "bn"
  setLanguage: (lang: "en" | "bn") => void
}

const translations = {
  en: {
    brand: "MritiShilpa",
    tagline: "মৃৎশিল্প",
    home: "Home",
    artisans: "Artisans",
    pottery: "Pottery",
    designTool: "Design Tool",
    communityForum: "Community Forum",
    research: "Research",
    evaluation: "Evaluation",
    ucdProcess: "UCD Process",
    contextualInquiry: "Contextual Inquiry",
    usabilityEvaluation: "Usability Evaluation",
    participatoryDesign: "Participatory Design",
    resultsImpact: "Results vs Impact",
    contributions: "Research Contributions",
    aiTransparency: "AI Transparency",
    about: "About",
    contact: "Contact",
    search: "Search pottery...",
    login: "Login",
    signup: "Sign Up",
    language: "Language",
    english: "English",
    bangla: "বাংলা",
    loginTitle: "Welcome Back",
    loginDesc: "Sign in to access your account",
    signupTitle: "Join MritiShilpa",
    signupDesc: "Create an account to start exploring",
    email: "Email",
    password: "Password",
    name: "Full Name",
    artisanOrBuyer: "I am a...",
    buyer: "Buyer",
    artisan: "Artisan",
    continueBtn: "Continue",
  },
  bn: {
    brand: "মৃৎশিল্প",
    tagline: "MritiShilpa",
    home: "হোম",
    artisans: "শিল্পীরা",
    pottery: "মৃৎশিল্প",
    designTool: "ডিজাইন টুল",
    communityForum: "কমিউনিটি ফোরাম",
    research: "গবেষণা",
    evaluation: "মূল্যায়ন",
    ucdProcess: "UCD প্রক্রিয়া",
    contextualInquiry: "প্রাসঙ্গিক তদন্ত",
    usabilityEvaluation: "ব্যবহারযোগ্যতা মূল্যায়ন",
    participatoryDesign: "অংশগ্রহণমূলক ডিজাইন",
    resultsImpact: "ফলাফল বনাম প্রভাব",
    contributions: "গবেষণা অবদান",
    aiTransparency: "AI স্বচ্ছতা",
    about: "সম্পর্কে",
    contact: "যোগাযোগ",
    search: "মৃৎশিল্প খুঁজুন...",
    login: "লগইন",
    signup: "সাইন আপ",
    language: "ভাষা",
    english: "English",
    bangla: "বাংলা",
    loginTitle: "স্বাগতম",
    loginDesc: "আপনার অ্যাকাউন্টে সাইন ইন করুন",
    signupTitle: "মৃৎশিল্পে যোগ দিন",
    signupDesc: "অন্বেষণ শুরু করতে একটি অ্যাকাউন্ট তৈরি করুন",
    email: "ইমেইল",
    password: "পাসওয়ার্ড",
    name: "পুরো নাম",
    artisanOrBuyer: "আমি একজন...",
    buyer: "ক্রেতা",
    artisan: "শিল্পী",
    continueBtn: "চালিয়ে যান",
  },
}

export function Navigation({ language, setLanguage }: NavigationProps) {
  const t = translations[language]
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [userType, setUserType] = useState<"buyer" | "artisan">("buyer")

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-terracotta-dark rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  className="w-6 h-6 lg:w-8 lg:h-8 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M20 4c-8.8 0-16 7.2-16 16 0 6.6 4 12.3 9.7 14.7.3.1.6-.1.7-.4v-2.8c-4-.9-4.8-1.9-4.8-1.9-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3.2-.4-6.5-1.6-6.5-7.1 0-1.6.6-2.9 1.4-3.9-.1-.4-.6-1.9.1-3.9 0 0 1.2-.4 3.9 1.5 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.8 3.9-1.5 3.9-1.5.8 2 .3 3.5.1 3.9.9 1 1.4 2.3 1.4 3.9 0 5.5-3.3 6.7-6.5 7.1.5.4 1 1.3 1 2.6v3.8c0 .3.3.5.7.4C32 32.3 36 26.6 36 20c0-8.8-7.2-16-16-16z" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-gold/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl lg:text-2xl font-bold text-foreground tracking-tight">
                {t.brand}
              </span>
              <span className="text-xs text-muted-foreground font-bengali hidden sm:block">
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {t.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/artisan"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {t.artisans}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/pottery"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {t.pottery}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/design-tool"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {t.designTool}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/community-forum"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {t.communityForum}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
            
            {/* Research Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group flex items-center gap-1">
                  {t.research}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card w-64">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/evaluation" className="w-full">
                    {t.evaluation}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/ucd-process" className="w-full">
                    {t.ucdProcess}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/research/contextual-inquiry" className="w-full">
                    {t.contextualInquiry}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/research/usability-evaluation" className="w-full">
                    {t.usabilityEvaluation}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/research/participatory-design" className="w-full">
                    {t.participatoryDesign}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/research/results-impact" className="w-full">
                    {t.resultsImpact}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/research/contributions" className="w-full">
                    {t.contributions}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/ai-transparency" className="w-full">
                    {t.aiTransparency}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {t.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {t.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              {isSearchOpen ? (
                <div className="flex items-center gap-2 animate-scale-in">
                  <Input
                    type="search"
                    placeholder={t.search}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 lg:w-64 h-9 bg-secondary/50 border-border focus:border-gold"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                    className="h-9 w-9"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close search</span>
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="h-9 w-9 hover:bg-secondary"
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Open search</span>
                </Button>
              )}
            </div>

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-secondary">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">{t.language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card">
                <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
                  {t.english}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("bn")} className="cursor-pointer">
                  {t.bangla}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Dialog */}
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex items-center gap-2 hover:bg-secondary"
                >
                  <LogIn className="h-4 w-4" />
                  {t.login}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl">{t.loginTitle}</DialogTitle>
                  <DialogDescription>{t.loginDesc}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">{t.email}</Label>
                    <Input id="login-email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">{t.password}</Label>
                    <Input id="login-password" type="password" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t.continueBtn}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Signup Dialog */}
            <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-terracotta-dark hover:from-primary/90 hover:to-terracotta-dark/90 text-primary-foreground shadow-md"
                >
                  <UserPlus className="h-4 w-4" />
                  {t.signup}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl">{t.signupTitle}</DialogTitle>
                  <DialogDescription>{t.signupDesc}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">{t.name}</Label>
                    <Input id="signup-name" type="text" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">{t.email}</Label>
                    <Input id="signup-email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">{t.password}</Label>
                    <Input id="signup-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label>{t.artisanOrBuyer}</Label>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant={userType === "buyer" ? "default" : "outline"}
                        onClick={() => setUserType("buyer")}
                        className={`flex-1 ${userType === "buyer" ? "bg-primary text-primary-foreground" : "bg-transparent"}`}
                      >
                        <User className="h-4 w-4 mr-2" />
                        {t.buyer}
                      </Button>
                      <Button
                        type="button"
                        variant={userType === "artisan" ? "default" : "outline"}
                        onClick={() => setUserType("artisan")}
                        className={`flex-1 ${userType === "artisan" ? "bg-emerald text-accent-foreground" : "bg-transparent"}`}
                      >
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
                        </svg>
                        {t.artisan}
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-terracotta-dark hover:from-primary/90 hover:to-terracotta-dark/90 text-primary-foreground">
                    {t.continueBtn}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder={t.search}
                      className="pl-10 bg-secondary/50"
                    />
                  </div>

                  {/* Mobile Nav Links */}
                  <div className="flex flex-col gap-4">
                    <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                      {t.home}
                    </Link>
                    <Link href="/artisan" className="text-lg font-medium hover:text-primary transition-colors">
                      {t.artisans}
                    </Link>
                    <Link href="/pottery" className="text-lg font-medium hover:text-primary transition-colors">
                      {t.pottery}
                    </Link>
                    <Link href="/design-tool" className="text-lg font-medium hover:text-primary transition-colors">
                      {t.designTool}
                    </Link>
                    <Link href="/community-forum" className="text-lg font-medium hover:text-primary transition-colors">
                      {t.communityForum}
                    </Link>
                    
                    {/* Mobile Research Section */}
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">{t.research}</p>
                      <div className="flex flex-col gap-2 pl-4">
                        <Link href="/evaluation" className="text-sm hover:text-primary transition-colors">
                          {t.evaluation}
                        </Link>
                        <Link href="/ucd-process" className="text-sm hover:text-primary transition-colors">
                          {t.ucdProcess}
                        </Link>
                        <Link href="/research/contextual-inquiry" className="text-sm hover:text-primary transition-colors">
                          {t.contextualInquiry}
                        </Link>
                        <Link href="/research/usability-evaluation" className="text-sm hover:text-primary transition-colors">
                          {t.usabilityEvaluation}
                        </Link>
                        <Link href="/research/participatory-design" className="text-sm hover:text-primary transition-colors">
                          {t.participatoryDesign}
                        </Link>
                        <Link href="/research/results-impact" className="text-sm hover:text-primary transition-colors">
                          {t.resultsImpact}
                        </Link>
                        <Link href="/research/contributions" className="text-sm hover:text-primary transition-colors">
                          {t.contributions}
                        </Link>
                        <Link href="/ai-transparency" className="text-sm hover:text-primary transition-colors">
                          {t.aiTransparency}
                        </Link>
                      </div>
                    </div>
                    
                    <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                      {t.about}
                    </Link>
                    <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                      {t.contact}
                    </Link>
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => {
                        setLoginOpen(true)
                      }}
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      {t.login}
                    </Button>
                    <Button
                      className="w-full justify-start bg-gradient-to-r from-primary to-terracotta-dark text-primary-foreground"
                      onClick={() => {
                        setSignupOpen(true)
                      }}
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      {t.signup}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
