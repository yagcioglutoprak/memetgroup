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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-1' 
        : 'bg-gradient-to-b from-white/10 to-transparent py-2'
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
          {['About', 'Services', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-gray-700 hover:text-dark'}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <Link href="#contact" className="hidden md:flex btn btn-primary">
          Free Quote
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-700 hover:bg-black/10'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            {['About', 'Services', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="font-medium text-gray-800 hover:text-primary transition-colors block px-2 py-1 rounded"
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
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 