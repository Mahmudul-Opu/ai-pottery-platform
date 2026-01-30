import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter, Noto_Sans_Bengali } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/contexts/AuthContext'
import { ThemeProvider } from '@/components/theme-provider'
import AccessibilityTools from '@/components/accessibility-tools'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: '--font-bengali',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'MritiShilpa - AI-Driven Bangladeshi Pottery Platform',
  description: 'Empowering Bangladeshi pottery artisans through AI-powered digital marketplace. Preserving heritage, enabling sustainable entrepreneurship.',
  keywords: ['Bangladeshi pottery', 'artisan crafts', 'terracotta', 'AI marketplace', 'cultural heritage', 'handmade pottery'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${notoBengali.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div id="main-content">
              {children}
            </div>
            <AccessibilityTools />
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
