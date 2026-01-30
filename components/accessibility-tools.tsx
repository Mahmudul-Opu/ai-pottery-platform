'use client';

import { useState, useEffect } from 'react';
import { Languages, Sun, Keyboard, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AccessibilityTools() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [highContrast, setHighContrast] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred_language') as 'en' | 'bn' | null;
    const savedContrast = localStorage.getItem('high_contrast') === 'true';
    
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedContrast) setHighContrast(savedContrast);
  }, []);

  // Apply high contrast mode
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('high_contrast', highContrast.toString());
  }, [highContrast]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'bn' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('preferred_language', newLanguage);
    
    // In production, this would trigger i18n language change
    document.documentElement.lang = newLanguage;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 left-6 z-50 bg-emerald-700 text-white w-14 h-14 rounded-full shadow-lg hover:bg-emerald-800 transition-all flex items-center justify-center"
        aria-label="Accessibility settings"
        aria-expanded={showPanel}
      >
        <Settings className="h-6 w-6" />
      </button>

      {/* Accessibility Panel */}
      {showPanel && (
        <div className="fixed bottom-24 left-6 z-50 bg-white rounded-lg shadow-xl border-2 border-emerald-200 p-6 w-80">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Accessibility Settings
          </h3>

          <div className="space-y-4">
            {/* Language Toggle */}
            <div className="border-b pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-emerald-700" />
                  <span className="font-semibold text-gray-900">Language</span>
                </div>
                <span className="text-sm text-gray-600">
                  {language === 'en' ? 'English' : 'বাংলা'}
                </span>
              </div>
              <Button
                onClick={toggleLanguage}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                size="sm"
              >
                Switch to {language === 'en' ? 'বাংলা (Bangla)' : 'English'}
              </Button>
              <p className="text-xs text-gray-500 mt-2">
                Toggle between English and Bangla interface
              </p>
            </div>

            {/* High Contrast */}
            <div className="border-b pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-amber-700" />
                  <span className="font-semibold text-gray-900">High Contrast</span>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full flex items-center px-1 cursor-pointer transition-colors ${
                    highContrast ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                  onClick={toggleHighContrast}
                  role="switch"
                  aria-checked={highContrast}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleHighContrast();
                    }
                  }}
                >
                  <div 
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      highContrast ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Increase color contrast for better readability
              </p>
            </div>

            {/* Keyboard Navigation Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Keyboard className="h-5 w-5 text-emerald-700" />
                <span className="font-semibold text-gray-900">Keyboard Navigation</span>
              </div>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 space-y-1">
                <div><kbd className="bg-white px-2 py-1 rounded border">Tab</kbd> Navigate forward</div>
                <div><kbd className="bg-white px-2 py-1 rounded border">Shift+Tab</kbd> Navigate backward</div>
                <div><kbd className="bg-white px-2 py-1 rounded border">Enter</kbd> Activate links/buttons</div>
                <div><kbd className="bg-white px-2 py-1 rounded border">Esc</kbd> Close dialogs</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <p className="text-xs text-gray-600">
              <strong>Note:</strong> All interactive elements include ARIA labels for screen reader compatibility. 
              Images have descriptive alt text in both English and Bangla.
            </p>
          </div>
        </div>
      )}

      {/* Skip to main content link (for keyboard navigation) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-emerald-700 focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* High Contrast CSS */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast body {
          background: #000000 !important;
          color: #FFFFFF !important;
        }

        .high-contrast .bg-white {
          background: #000000 !important;
          border: 2px solid #FFFFFF !important;
        }

        .high-contrast .bg-emerald-50,
        .high-contrast .bg-amber-50,
        .high-contrast .bg-blue-50,
        .high-contrast .bg-gray-50 {
          background: #1a1a1a !important;
          color: #FFFFFF !important;
        }

        .high-contrast .text-gray-600,
        .high-contrast .text-gray-700,
        .high-contrast .text-gray-800,
        .high-contrast .text-gray-900 {
          color: #FFFFFF !important;
        }

        .high-contrast .bg-emerald-700,
        .high-contrast .bg-emerald-600 {
          background: #00FF00 !important;
          color: #000000 !important;
        }

        .high-contrast .bg-amber-700,
        .high-contrast .bg-amber-600 {
          background: #FFFF00 !important;
          color: #000000 !important;
        }

        .high-contrast .border {
          border-color: #FFFFFF !important;
        }

        .high-contrast a {
          color: #00FFFF !important;
          text-decoration: underline !important;
        }

        /* Screen reader only class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
    </>
  );
}

// Language context provider for use across the app
export function useLanguage() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred_language') as 'en' | 'bn' | null;
    if (savedLanguage) setLanguage(savedLanguage);

    // Listen for language changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferred_language' && e.newValue) {
        setLanguage(e.newValue as 'en' | 'bn');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return language;
}

// Translation helper (simplified example)
export const translations = {
  en: {
    home: 'Home',
    artisans: 'Artisans',
    pottery: 'Pottery',
    about: 'About',
    contact: 'Contact',
    viewMore: 'View More',
    learnMore: 'Learn More',
  },
  bn: {
    home: 'হোম',
    artisans: 'কারিগর',
    pottery: 'মৃৎশিল্প',
    about: 'সম্পর্কে',
    contact: 'যোগাযোগ',
    viewMore: 'আরও দেখুন',
    learnMore: 'আরও জানুন',
  },
};

// Translation function
export function t(key: keyof typeof translations.en, lang: 'en' | 'bn' = 'en'): string {
  return translations[lang][key] || translations.en[key];
}
