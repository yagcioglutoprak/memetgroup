'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Fragment } from 'react';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          {(t('about.title') as string).split('Memet Group').map((part, index) => 
            index === 0 ? 
              <span key={index}>{part}</span> : 
              <Fragment key={`fragment-${index}`}>
                <span className="text-primary">Memet Group</span>{part}
              </Fragment>
          )}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
            <Image 
              src="/images/about_us.png" 
              alt="Memet Group Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t('about.subtitle')}</h3>
            <p className="mb-3 text-gray-600">
              {t('about.p1')}
            </p>
            <p className="mb-6 text-gray-600">
              {t('about.p2')}
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white shadow-sm rounded-xl p-4 flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">{t('about.expertTeam')}</h4>
                  <p className="text-sm text-gray-600">{t('about.expertTeamDesc')}</p>
                </div>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl p-4 flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Quality Assured</h4>
                  <p className="text-sm text-gray-600">We never compromise on quality of work</p>
                </div>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl p-4 flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Transparent Pricing</h4>
                  <p className="text-sm text-gray-600">Clear estimates with no hidden costs</p>
                </div>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl p-4 flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Timely Completion</h4>
                  <p className="text-sm text-gray-600">Projects delivered as per schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 