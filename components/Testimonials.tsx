
import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  { name: "Maria J.", location: "Jardim Uberaba", text: "Levei meu iPhone 11 com a tela acabada. Saí em 40 minutos com ele zerado. Preço justo e atendimento top. Recomendo!", rating: 5 },
  { name: "João C.", location: "Centro", text: "Honestidade 100%. Achei que tinha que trocar a bateria, mas era só o conector. Economizei e o serviço foi rápido. Virou referência!", rating: 5 },
  { name: "Ana P.", location: "Fabrício", text: "Atendimento nota 1000! Me explicaram tudo com paciência. Rápido no Whats, rápido na loja. Parabéns!", rating: 5 },
  { name: "Ricardo M.", location: "Santa Maria", text: "Meu celular caiu na piscina no fim de semana. Levei na Play Celulares na segunda e eles conseguiram salvar. Recuperaram minhas fotos e meu aparelho. Serviço impecável.", rating: 5 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);


const TestimonialCard: React.FC<Testimonial> = ({ name, location, text, rating }) => (
  <div className="bg-gray-900 p-6 rounded-lg border border-blue-500/30 h-full flex flex-col">
    <StarRating rating={rating} />
    <p className="text-gray-300 my-4 flex-grow">"{text}"</p>
    <div className="font-bold text-white">
      - {name}, <span className="font-normal text-gray-400">{location}</span>
    </div>
  </div>
);


const Testimonials: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  setIsVisible(true);
                  observer.unobserve(entry.target);
              }
          },
          { threshold: 0.1 }
      );
  
      const currentRef = sectionRef.current;
      if (currentRef) {
          observer.observe(currentRef);
      }
  
      return () => {
          if (currentRef) {
              observer.unobserve(currentRef);
          }
      };
    }, []);

  return (
    <section 
        ref={sectionRef}
        className={`py-20 px-4 bg-gray-900 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-orbitron">Nossos Clientes de <span className="text-blue-400">Uberaba Aprovam</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;