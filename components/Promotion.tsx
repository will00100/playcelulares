
import React, { useState, useEffect, useRef } from 'react';
import { WHATSAPP_LINK } from '../constants';

const Promotion: React.FC = () => {
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
      className={`py-24 px-4 bg-cover bg-center text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://picsum.photos/seed/campaign/1200/600')" }} // Placeholder for "campanha.jpg"
    >
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-yellow-400 uppercase tracking-widest font-orbitron">Oferta da Semana (Tempo Limitado)</h3>
        <h2 className="text-4xl md:text-6xl font-black my-4 text-white uppercase font-orbitron">
          Promoção Troca de Tela Samsung
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-white mb-8">
          Consulte seu modelo e ganhe a <span className="text-green-400">película de brinde</span> HOJE!
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-black font-bold text-xl py-4 px-10 rounded-lg hover:bg-green-400 hover:scale-105 transform transition-all duration-300 animate-subtle-pulse"
        >
          RESGATAR MINHA OFERTA
        </a>
      </div>
    </section>
  );
};

export default Promotion;
