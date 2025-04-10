'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-2'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-20 w-24 -my-2">
            <Image  
              src="/icons/memet kebab black bcg rgb.svg"
              alt="Memet Group Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['À propos', 'Services', 'Pourquoi nous', 'Témoignages', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-medium text-dark hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <Link href="#contact" className="hidden md:flex btn btn-primary">
          Devis gratuit
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 flex flex-col space-y-4">
            {['À propos', 'Services', 'Pourquoi nous', 'Témoignages', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="font-medium text-dark hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="btn btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 