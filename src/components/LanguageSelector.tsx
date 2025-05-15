'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-1">
        {/* Bouton Polonais */}
        <button
          onClick={() => setLanguage('pl')}
          className={`relative py-1 px-2 rounded-full transition-all duration-200 flex items-center gap-1 ${
            language === 'pl' 
              ? 'bg-primary text-white font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Changer la langue en polonais"
        >
          <span className="w-5 h-5 flex-shrink-0 rounded-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10">
              <rect width="16" height="5" fill="#fff"/>
              <rect width="16" height="5" y="5" fill="#dc143c"/>
            </svg>
          </span>
          <span className="font-medium text-xs">PL</span>
        </button>
        
        {/* Bouton Anglais */}
        <button
          onClick={() => setLanguage('en')}
          className={`relative py-1 px-2 rounded-full transition-all duration-200 flex items-center gap-1 ${
            language === 'en' 
              ? 'bg-primary text-white font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Changer la langue en anglais"
        >
          <span className="w-5 h-5 flex-shrink-0 rounded-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
              <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
              <clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath>
              <g clipPath="url(#a)">
                <path d="M0 0v30h60V0z" fill="#012169"/>
                <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
                <path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
              </g>
            </svg>
          </span>
          <span className="font-medium text-xs">EN</span>
        </button>
        
        {/* Bouton Allemand */}
        <button
          onClick={() => setLanguage('de')}
          className={`relative py-1 px-2 rounded-full transition-all duration-200 flex items-center gap-1 ${
            language === 'de' 
              ? 'bg-primary text-white font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Changer la langue en allemand"
        >
          <span className="w-5 h-5 flex-shrink-0 rounded-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10">
              <rect width="16" height="3" fill="#000"/>
              <rect width="16" height="3" y="3" fill="#D00"/>
              <rect width="16" height="3" y="6" fill="#FFCE00"/>
            </svg>
          </span>
          <span className="font-medium text-xs">DE</span>
        </button>
      </div>
    </div>
  );
} 