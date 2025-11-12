
import React, { useState, useEffect, useRef } from 'react';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="relative text-center md:text-left">
     <div className="flex justify-center md:justify-start items-center mb-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-black font-orbitron text-3xl font-bold shadow-[0_0_15px_theme(colors.green.500)]">
            {step}
        </div>
        <h3 className="text-2xl font-bold ml-4 font-orbitron">{title}</h3>
     </div>
    <p className="text-gray-300 md:pl-20">{description}</p>
  </div>
);

const Process: React.FC = () => {
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
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-orbitron">Nosso Processo em <span className="text-green-400">3 Passos Simples</span></h2>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-12 md:space-y-0">
          <ProcessStep
            step="1"
            title="Orçamento Grátis"
            description="Você chama no WhatsApp, descreve o problema e recebe um pré-orçamento gratuito na hora."
          />
          <ProcessStep
            step="2"
            title="Reparo Expresso"
            description="Você traz o aparelho na nossa loja (ou solicita coleta) e realizamos o reparo na sua frente em tempo recorde."
          />
          <ProcessStep
            step="3"
            title="Cliente Satisfeito"
            description="Você sai com seu celular novo, com garantia e pronto para usar, sem dor de cabeça."
          />
        </div>
      </div>
    </section>
  );
};

export default Process;