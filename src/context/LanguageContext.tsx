'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pl' | 'de';

type TranslationValue = string | string[];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => TranslationValue;
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
    'about.expertTeam': 'Expert Team',
    'about.expertTeamDesc': 'Skilled professionals with years of experience',
    
    // Services
    'services.title': 'Our Services',
    'services.renovation.title': 'Renovation',
    'services.renovation.description': 'Complete transformation of commercial and residential spaces with expertise and precision.',
    'services.renovation.features': ['Demolition', 'Construction', 'Painting', 'Finishing'],
    'services.shopfitting.title': 'Store Layout',
    'services.shopfitting.description': 'Design and installation of functional and visually appealing commercial spaces.',
    'services.shopfitting.features': ['Design', 'Manufacturing', 'Installation', 'Signage'],
    'services.plumbing.title': 'Plumbing',
    'services.plumbing.description': 'Installation and maintenance of plumbing systems for all types of buildings.',
    'services.plumbing.features': ['Installation', 'Repair', 'Unclogging', 'Maintenance'],
    'services.general.title': 'General Services',
    'services.general.description': 'Comprehensive solutions for all your maintenance and improvement needs.',
    'services.general.features': ['Electrical', 'Carpentry', 'Locksmithing', 'Cleaning'],
    'services.includedServices': 'Included Services',
    'services.requestQuote': 'Request a Quote',
    
    // Why Choose Us
    'whyUs.title': 'Why Choose Us',
    'whyUs.expertise.title': 'Professional Expertise',
    'whyUs.expertise.description': 'Our team has all the necessary certifications and technical experience to successfully complete your project, regardless of its scope.',
    'whyUs.pricing.title': 'Transparent Pricing',
    'whyUs.pricing.description': 'Our rates are clear, with no hidden fees. We offer excellent value for money for every service we provide.',
    'whyUs.service.title': 'Full Service',
    'whyUs.service.description': 'From design to implementation, we accompany you at every step to transform your vision into tangible reality.',
    'whyUs.documentation.title': 'Detailed Documentation',
    'whyUs.documentation.description': 'We provide detailed documentation of all work performed for your future reference and maintenance of your installations.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are at your service',
    'contact.description': 'Need a quote for your renovation or layout project? A question about our services? Contact us.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Opening Hours',
    'contact.hoursValue': 'Monday - Friday: 06:00 - 18:00',
    'contact.followUs': 'Follow us',
    'contact.form.title': 'Send us a message',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.successDesc': 'We will respond as soon as possible.',
    'contact.form.error': 'Failed to send message.',
    'contact.form.errorDesc': 'Please try again later or contact us directly.',
    'contact.form.name': 'Full name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'Your email address',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': 'Your phone number',
    'contact.form.service': 'Service',
    'contact.form.servicePlaceholder': 'Select a service',
    'contact.form.serviceRenovation': 'Renovation',
    'contact.form.serviceShopfitting': 'Store Layout',
    'contact.form.servicePlumbing': 'Plumbing',
    'contact.form.serviceGeneral': 'General Services',
    'contact.form.message': 'Your message',
    'contact.form.messagePlaceholder': 'Describe your needs here...',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.required': '* Required fields. By submitting this form, you agree to our privacy policy.',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    
    // Footer
    'footer.description': 'Professional renovation, layout, and maintenance solutions for your commercial and residential spaces.',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.serviceRenovation': 'Renovation',
    'footer.serviceLayout': 'Store Layout',
    'footer.servicePlumbing': 'Plumbing',
    'footer.serviceGeneral': 'General Services',
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
    'about.expertTeam': 'Eksperci',
    'about.expertTeamDesc': 'Wykwalifikowani specjaliści z wieloletnim doświadczeniem',
    
    // Services
    'services.title': 'Nasze Usługi',
    'services.renovation.title': 'Renowacja',
    'services.renovation.description': 'Kompleksowa transformacja przestrzeni komercyjnych i mieszkalnych z fachowością i precyzją.',
    'services.renovation.features': ['Rozbiórka', 'Budowa', 'Malowanie', 'Wykończenia'],
    'services.shopfitting.title': 'Aranżacja Sklepów',
    'services.shopfitting.description': 'Projektowanie i instalacja funkcjonalnych i wizualnie atrakcyjnych przestrzeni komercyjnych.',
    'services.shopfitting.features': ['Projektowanie', 'Produkcja', 'Instalacja', 'Oznakowanie'],
    'services.plumbing.title': 'Hydraulika',
    'services.plumbing.description': 'Instalacja i konserwacja systemów hydraulicznych dla wszystkich typów budynków.',
    'services.plumbing.features': ['Instalacja', 'Naprawa', 'Udrażnianie', 'Konserwacja'],
    'services.general.title': 'Usługi Ogólne',
    'services.general.description': 'Kompleksowe rozwiązania dla wszystkich Twoich potrzeb konserwacyjnych i modernizacyjnych.',
    'services.general.features': ['Elektryka', 'Stolarstwo', 'Ślusarstwo', 'Sprzątanie'],
    'services.includedServices': 'Usługi w cenie',
    'services.requestQuote': 'Poproś o wycenę',
    
    // Why Choose Us
    'whyUs.title': 'Dlaczego My',
    'whyUs.expertise.title': 'Profesjonalna Ekspertyza',
    'whyUs.expertise.description': 'Nasz zespół posiada wszystkie niezbędne certyfikaty i doświadczenie techniczne, aby pomyślnie zrealizować Twój projekt, niezależnie od jego zakresu.',
    'whyUs.pricing.title': 'Przejrzyste Ceny',
    'whyUs.pricing.description': 'Nasze stawki są jasne, bez ukrytych opłat. Oferujemy doskonały stosunek jakości do ceny za każdą świadczoną usługę.',
    'whyUs.service.title': 'Pełna Obsługa',
    'whyUs.service.description': 'Od projektu po realizację, towarzyszymy Ci na każdym kroku, aby przekształcić Twoją wizję w namacalną rzeczywistość.',
    'whyUs.documentation.title': 'Szczegółowa Dokumentacja',
    'whyUs.documentation.description': 'Zapewniamy szczegółową dokumentację wszystkich wykonanych prac dla Twojego przyszłego odniesienia i konserwacji instalacji.',
    
    // Contact
    'contact.title': 'Skontaktuj się z nami',
    'contact.subtitle': 'Jesteśmy do Twojej dyspozycji',
    'contact.description': 'Potrzebujesz wyceny dla swojego projektu renowacji lub aranżacji? Masz pytanie dotyczące naszych usług? Skontaktuj się z nami.',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'contact.hours': 'Godziny otwarcia',
    'contact.hoursValue': 'Poniedziałek - Piątek: 06:00 - 18:00',
    'contact.followUs': 'Śledź nas',
    'contact.form.title': 'Wyślij nam wiadomość',
    'contact.form.success': 'Wiadomość wysłana pomyślnie!',
    'contact.form.successDesc': 'Odpowiemy tak szybko, jak to możliwe.',
    'contact.form.error': 'Nie udało się wysłać wiadomości.',
    'contact.form.errorDesc': 'Spróbuj ponownie później lub skontaktuj się z nami bezpośrednio.',
    'contact.form.name': 'Imię i nazwisko',
    'contact.form.namePlaceholder': 'Twoje imię',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'Twój adres email',
    'contact.form.phone': 'Telefon',
    'contact.form.phonePlaceholder': 'Twój numer telefonu',
    'contact.form.service': 'Usługa',
    'contact.form.servicePlaceholder': 'Wybierz usługę',
    'contact.form.serviceRenovation': 'Renowacja',
    'contact.form.serviceShopfitting': 'Aranżacja Sklepu',
    'contact.form.servicePlumbing': 'Hydraulika',
    'contact.form.serviceGeneral': 'Usługi Ogólne',
    'contact.form.message': 'Twoja wiadomość',
    'contact.form.messagePlaceholder': 'Opisz swoje potrzeby tutaj...',
    'contact.form.send': 'Wyślij',
    'contact.form.sending': 'Wysyłanie...',
    'contact.form.required': '* Pola wymagane. Wysyłając ten formularz, wyrażasz zgodę na naszą politykę prywatności.',
    
    // Testimonials
    'testimonials.title': 'Co mówią nasi klienci',
    
    // Footer
    'footer.description': 'Profesjonalne rozwiązania w zakresie renowacji, aranżacji i konserwacji dla Twoich przestrzeni komercyjnych i mieszkalnych.',
    'footer.quickLinks': 'Szybkie linki',
    'footer.ourServices': 'Nasze usługi',
    'footer.serviceRenovation': 'Renowacja',
    'footer.serviceLayout': 'Aranżacja Sklepu',
    'footer.servicePlumbing': 'Hydraulika',
    'footer.serviceGeneral': 'Usługi Ogólne',
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
    'about.expertTeam': 'Experten-Team',
    'about.expertTeamDesc': 'Qualifizierte Fachkräfte mit jahrelanger Erfahrung',
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.renovation.title': 'Renovierung',
    'services.renovation.description': 'Komplette Transformation von Gewerbe- und Wohnräumen mit Fachwissen und Präzision.',
    'services.renovation.features': ['Abriss', 'Konstruktion', 'Malerei', 'Veredelung'],
    'services.shopfitting.title': 'Ladeneinrichtung',
    'services.shopfitting.description': 'Design und Installation funktionaler und visuell ansprechender Gewerbeflächen.',
    'services.shopfitting.features': ['Design', 'Herstellung', 'Installation', 'Beschilderung'],
    'services.plumbing.title': 'Sanitär',
    'services.plumbing.description': 'Installation und Wartung von Sanitärsystemen für alle Arten von Gebäuden.',
    'services.plumbing.features': ['Installation', 'Reparatur', 'Rohrreinigung', 'Wartung'],
    'services.general.title': 'Allgemeine Dienstleistungen',
    'services.general.description': 'Umfassende Lösungen für alle Ihre Wartungs- und Verbesserungsbedürfnisse.',
    'services.general.features': ['Elektrik', 'Schreinerei', 'Schlosserei', 'Reinigung'],
    'services.includedServices': 'Enthaltene Dienstleistungen',
    'services.requestQuote': 'Angebot anfordern',
    
    // Why Choose Us
    'whyUs.title': 'Warum uns wählen',
    'whyUs.expertise.title': 'Professionelle Expertise',
    'whyUs.expertise.description': 'Unser Team verfügt über alle notwendigen Zertifikate und technische Erfahrung, um Ihr Projekt erfolgreich abzuschließen, unabhängig von seinem Umfang.',
    'whyUs.pricing.title': 'Transparente Preise',
    'whyUs.pricing.description': 'Unsere Preise sind klar, ohne versteckte Gebühren. Wir bieten ein ausgezeichnetes Preis-Leistungs-Verhältnis für jeden Service, den wir anbieten.',
    'whyUs.service.title': 'Vollservice',
    'whyUs.service.description': 'Vom Design bis zur Umsetzung begleiten wir Sie bei jedem Schritt, um Ihre Vision in greifbare Realität zu verwandeln.',
    'whyUs.documentation.title': 'Detaillierte Dokumentation',
    'whyUs.documentation.description': 'Wir stellen detaillierte Dokumentation aller durchgeführten Arbeiten für Ihre zukünftige Referenz und Wartung Ihrer Anlagen zur Verfügung.',
    
    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Wir stehen zu Ihrer Verfügung',
    'contact.description': 'Benötigen Sie ein Angebot für Ihr Renovierungs- oder Einrichtungsprojekt? Haben Sie eine Frage zu unseren Dienstleistungen? Kontaktieren Sie uns.',
    'contact.address': 'Adresse',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.hours': 'Öffnungszeiten',
    'contact.hoursValue': 'Montag - Freitag: 06:00 - 18:00',
    'contact.followUs': 'Folgen Sie uns',
    'contact.form.title': 'Senden Sie uns eine Nachricht',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    'contact.form.successDesc': 'Wir werden so schnell wie möglich antworten.',
    'contact.form.error': 'Nachricht konnte nicht gesendet werden.',
    'contact.form.errorDesc': 'Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.namePlaceholder': 'Ihr Name',
    'contact.form.email': 'E-Mail',
    'contact.form.emailPlaceholder': 'Ihre E-Mail-Adresse',
    'contact.form.phone': 'Telefon',
    'contact.form.phonePlaceholder': 'Ihre Telefonnummer',
    'contact.form.service': 'Dienstleistung',
    'contact.form.servicePlaceholder': 'Wählen Sie eine Dienstleistung',
    'contact.form.serviceRenovation': 'Renovierung',
    'contact.form.serviceShopfitting': 'Ladeneinrichtung',
    'contact.form.servicePlumbing': 'Sanitär',
    'contact.form.serviceGeneral': 'Allgemeine Dienstleistungen',
    'contact.form.message': 'Ihre Nachricht',
    'contact.form.messagePlaceholder': 'Beschreiben Sie hier Ihre Bedürfnisse...',
    'contact.form.send': 'Senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.form.required': '* Pflichtfelder. Durch das Absenden dieses Formulars stimmen Sie unserer Datenschutzrichtlinie zu.',
    
    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    
    // Footer
    'footer.description': 'Professionelle Renovierungs-, Layout- und Wartungslösungen für Ihre Gewerbe- und Wohnräume.',
    'footer.quickLinks': 'Schnelle Links',
    'footer.ourServices': 'Unsere Dienstleistungen',
    'footer.serviceRenovation': 'Renovierung',
    'footer.serviceLayout': 'Ladeneinrichtung',
    'footer.servicePlumbing': 'Sanitär',
    'footer.serviceGeneral': 'Allgemeine Dienstleistungen',
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
  const t = (key: string): TranslationValue => {
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