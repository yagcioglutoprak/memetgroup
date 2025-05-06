'use client';

import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Shop Owner",
    content: "The Memet Group team completely transformed my commercial space. The quality of their work is exceptional and the attention to detail remarkable. I highly recommend their services for any commercial renovation project.",
    rating: 5
  },
  {
    id: 2,
    name: "Thomas Laurent",
    role: "Restaurant Manager",
    content: "Professionalism and efficiency are the words that define Memet Group. They renovated our restaurant while respecting our tight schedule and budget. The result exceeded our expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Hotel Manager",
    content: "We called on Memet Group for the renovation of our reception hall and several rooms. Their responsiveness and technical expertise were decisive in the success of this project.",
    rating: 4
  },
  {
    id: 4,
    name: "Jean Moreau",
    role: "Building Owner",
    content: "Memet Group's plumbing services are of impeccable quality. Fast intervention, accurate diagnosis and sustainable solutions. I now call on them for all my properties.",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideContainerRef = useRef(null);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    if (slideContainerRef.current) {
      slideContainerRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);
  
  // Auto advance
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">What <span className="text-primary">Our Clients</span> Say</h2>
        
        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              ref={slideContainerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg 
                            key={i}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300 stroke-1'}`}
                          >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <p className="mb-6 text-gray-700 italic">"{testimonial.content}"</p>
                    
                    <div className="flex justify-end">
                      <div className="w-24 h-1 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md text-primary border border-gray-200 z-10 hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md text-primary border border-gray-200 z-10 hover:bg-primary hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? 'bg-primary w-6' : 'bg-gray-300'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 