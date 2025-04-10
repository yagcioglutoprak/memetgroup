import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Memet Group Renovation Services"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl bg-white/30 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-800">
            Solutions de rénovation <span className="text-primary">professionnelles</span>
          </h1>
          
          <p className="text-lg mb-6 font-medium text-gray-700">
            Transformation d'espaces commerciaux et résidentiels avec expertise et précision.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium shadow-sm hover:shadow-md">
              Devis gratuit
            </Link>
            <Link href="#services" className="px-6 py-3 border border-gray-800 text-gray-800 rounded-xl hover:bg-gray-800/10 transition-colors">
              Nos services
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap gap-3 justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-gray-800 font-medium">15+ ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-gray-800 font-medium">Projets garantis</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-xl shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-gray-800 font-medium">Qualité supérieure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 