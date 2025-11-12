
import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheckIcon } from './icons/FeatureIcons';

const Guarantee: React.FC = () => {
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
        className={`py-20 px-4 bg-black transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gray-900 rounded-lg p-8 md:p-12 border-2 border-green-500/50 shadow-[0_0_25px_rgba(34,197,94,0.3)] flex flex-col md:flex-row items-center gap-8">
          <div className="text-green-400 flex-shrink-0">
            <ShieldCheckIcon className="w-24 h-24 md:w-32 md:h-32" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
              Sua Satisfação ou Seu Dinheiro de Volta? <br/> <span className="text-green-400">Melhor: A Nossa Garantia!</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Não somos aventureiros. Usamos apenas peças de alta qualidade e confiamos nos nossos técnicos. Por isso, TODOS os nossos serviços de troca de tela e reparos têm <strong>90 dias de garantia total</strong>. Se o problema voltar (o que é raro), a gente resolve sem custo e sem pergunta.
            </p>
            <p className="text-sm text-gray-500">
              Obs: A garantia cobre defeitos de fabricação da peça e do serviço, não cobrindo novos danos por mau uso (quedas, água, etc.).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;