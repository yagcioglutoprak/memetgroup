import Image from 'next/image';

export default function About() {
  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">À propos de <span className="text-primary">Memet Group</span></h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
            <Image 
              src="/images/about_us.png" 
              alt="L'équipe Memet Group"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Notre histoire et notre mission</h3>
            <p className="mb-3 text-gray-600">
              Né de l'expérience de la marque Memet, notre groupe apporte la même qualité et attention aux détails au secteur de la rénovation et des services techniques.
            </p>
            <p className="mb-6 text-gray-600">
              Notre équipe combine des années d'expertise en rénovation commerciale, aménagement de magasins, plomberie et services généraux pour des solutions adaptées à chaque besoin.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-primary mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
                <h4 className="font-semibold mb-1">Expertise technique</h4>
                <p className="text-sm text-gray-600">Certifications et expérience pour tous types de projets.</p>
              </div>
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-primary mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h4 className="font-semibold mb-1">Service abordable</h4>
                <p className="text-sm text-gray-600">Excellent rapport qualité-prix sans compromis.</p>
              </div>
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-primary mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h4 className="font-semibold mb-1">Délais respectés</h4>
                <p className="text-sm text-gray-600">Engagement à respecter les calendriers établis.</p>
              </div>
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-primary mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <h4 className="font-semibold mb-1">Satisfaction client</h4>
                <p className="text-sm text-gray-600">Notre priorité: dépasser vos attentes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 