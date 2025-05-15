'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pl' | 'de';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.whyUs': 'Why Us',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'cta.freeQuote': 'Free Quote',
    
    // Hero
    'hero.title': 'Professional renovation solutions',
    'hero.subtitle': 'Transforming commercial and residential spaces with expertise and precision.',
    'hero.cta.quote': 'Free Quote',
    'hero.cta.services': 'Our Services',
    'hero.trust.experience': '15+ years of experience',
    'hero.trust.guaranteed': 'Guaranteed projects',
    'hero.trust.quality': 'Superior quality',
    
    // About
    'about.title': 'About Memet Group',
    'about.subtitle': 'Our Story and Mission',
    'about.p1': 'Born from the experience of the Memet brand, our group brings the same quality and attention to detail to the renovation and technical services sector.',
    'about.p2': 'Our team combines years of expertise in commercial renovation, store design, plumbing, and general services to provide solutions tailored to each need.',
    
    // Footer
    'footer.description': 'Professional renovation, layout, and maintenance solutions for your commercial and residential spaces.',
    'footer.copyright': 'All rights reserved.',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
  },
  pl: {
    // Header
    'nav.about': 'O nas',
    'nav.services': 'Usługi',
    'nav.whyUs': 'Dlaczego my',
    'nav.testimonials': 'Referencje',
    'nav.contact': 'Kontakt',
    'cta.freeQuote': 'Darmowa wycena',
    
    // Hero
    'hero.title': 'Profesjonalne rozwiązania remontowe',
    'hero.subtitle': 'Przekształcamy przestrzenie komercyjne i mieszkalne z wiedzą i precyzją.',
    'hero.cta.quote': 'Darmowa wycena',
    'hero.cta.services': 'Nasze usługi',
    'hero.trust.experience': 'Ponad 15 lat doświadczenia',
    'hero.trust.guaranteed': 'Gwarantowane projekty',
    'hero.trust.quality': 'Najwyższa jakość',
    
    // About
    'about.title': 'O Memet Group',
    'about.subtitle': 'Nasza historia i misja',
    'about.p1': 'Zrodzony z doświadczenia marki Memet, nasza grupa wnosi tę samą jakość i dbałość o szczegóły do sektora renowacji i usług technicznych.',
    'about.p2': 'Nasz zespół łączy wieloletnie doświadczenie w renowacji komercyjnej, projektowaniu sklepów, hydraulice i usługach ogólnych, aby zapewnić rozwiązania dostosowane do każdej potrzeby.',
    
    // Footer
    'footer.description': 'Profesjonalne rozwiązania w zakresie renowacji, aranżacji i konserwacji dla Twoich przestrzeni komercyjnych i mieszkalnych.',
    'footer.copyright': 'Wszelkie prawa zastrzeżone.',
    'footer.terms': 'Warunki korzystania',
    'footer.privacy': 'Polityka prywatności',
    'footer.legal': 'Nota prawna',
  },
  de: {
    // Header
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.whyUs': 'Warum wir',
    'nav.testimonials': 'Referenzen',
    'nav.contact': 'Kontakt',
    'cta.freeQuote': 'Kostenloser Kostenvoranschlag',
    
    // Hero
    'hero.title': 'Professionelle Renovierungslösungen',
    'hero.subtitle': 'Wir transformieren Gewerbe- und Wohnräume mit Fachwissen und Präzision.',
    'hero.cta.quote': 'Kostenloser Kostenvoranschlag',
    'hero.cta.services': 'Unsere Dienstleistungen',
    'hero.trust.experience': 'Mehr als 15 Jahre Erfahrung',
    'hero.trust.guaranteed': 'Garantierte Projekte',
    'hero.trust.quality': 'Überlegene Qualität',
    
    // About
    'about.title': 'Über Memet Group',
    'about.subtitle': 'Unsere Geschichte und Mission',
    'about.p1': 'Die Memet Group ist aus der Erfahrung der Marke Memet entstanden und bringt die gleiche Qualität und Liebe zum Detail in den Bereich der Renovierung und technischen Dienstleistungen.',
    'about.p2': 'Unser Team kombiniert jahrelange Expertise in der gewerblichen Renovierung, Ladengestaltung, Sanitär und allgemeinen Dienstleistungen, um maßgeschneiderte Lösungen für jeden Bedarf anzubieten.',
    
    // Footer
    'footer.description': 'Professionelle Renovierungs-, Layout- und Wartungslösungen für Ihre Gewerbe- und Wohnräume.',
    'footer.copyright': 'Alle Rechte vorbehalten.',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.legal': 'Rechtliche Hinweise',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl');

  // Charge la langue depuis localStorage au chargement de la page
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'pl' || storedLanguage === 'de')) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Sauvegarde la langue dans localStorage quand elle change
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Fonction pour obtenir une traduction
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 