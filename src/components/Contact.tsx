'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/context/LanguageContext';

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    titleKey: 'contact.address',
    content: 'ul. Księcia Józefa Poniatowskiego 24/1A, 50-326 Wroclaw, Poland'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    titleKey: 'contact.phone',
    content: '+48 608 514 215'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    titleKey: 'contact.email',
    content: 'contact@memetgroup.pl'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    titleKey: 'contact.hours',
    contentKey: 'contact.hoursValue'
  }
];

export default function Contact() {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });

    if (form.current) {
      emailjs.sendForm('service_i2ws1ib', 'template_qfj35dq', form.current, 'IBO46TZZ1SuPTlnwx')
        .then(() => {
          setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
        }, (error) => {
          console.error('FAILED...', error);
          setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true });
        });
    } else {
      console.error("Form reference is not set.");
      setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true });
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-[#141a2b] text-gray-300">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('contact.title').toString().split(' ').map((word, index) => 
          index === 0 ? <span key={index}>{word} </span> : <span key={index} className="text-primary">{word}</span>
        )}</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-400">{t('contact.subtitle')}</h3>
            <p className="text-gray-300 mb-6 text-sm">
              {t('contact.description')}
            </p>
            
            <div className="space-y-5 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary mt-0.5 bg-[#1f263a] p-2 rounded-md">{info.icon}</div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-400">{t(info.titleKey)}</h4>
                    <p className="text-gray-300 text-sm">{info.contentKey ? t(info.contentKey) : info.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-3 text-gray-400">{t('contact.followUs')}</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-md bg-[#1f263a] text-white flex items-center justify-center hover:bg-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-md bg-[#1f263a] text-white flex items-center justify-center hover:bg-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-md bg-[#1f263a] text-white flex items-center justify-center hover:bg-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-5">{t('contact.form.title')}</h3>
            
            {formStatus.isSubmitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-4">
                <h4 className="font-medium mb-1">{t('contact.form.success')}</h4>
                <p className="text-sm">{t('contact.form.successDesc')}</p>
              </div>
            ) : formStatus.isError ? (
              <div className="bg-red-50 text-red-700 p-4 rounded-md mb-4">
                <h4 className="font-medium mb-1">{t('contact.form.error')}</h4>
                <p className="text-sm">{t('contact.form.errorDesc')}</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">{t('contact.form.name')} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.namePlaceholder').toString()}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">{t('contact.form.email')} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.emailPlaceholder').toString()}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phonePlaceholder').toString()}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1 text-gray-700">{t('contact.form.service')} *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-gray-900"
                    >
                      <option value="" className="text-gray-400">{t('contact.form.servicePlaceholder')}</option>
                      <option value="renovation">{t('contact.form.serviceRenovation')}</option>
                      <option value="shopfitting">{t('contact.form.serviceShopfitting')}</option>
                      <option value="plumbing">{t('contact.form.servicePlumbing')}</option>
                      <option value="handyman">{t('contact.form.serviceGeneral')}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">{t('contact.form.message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder={t('contact.form.messagePlaceholder').toString()}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 placeholder-gray-400"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full py-2.5 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {formStatus.isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                </button>
                
                <p className="text-xs text-gray-500">
                  {t('contact.form.required')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 