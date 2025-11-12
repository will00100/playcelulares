
import React, { useState, useEffect, useRef } from 'react';
import { WHATSAPP_LINK } from '../constants';

interface DiffCardProps {
  title: string;
  description: string;
}

const DiffCard: React.FC<DiffCardProps> = ({ title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg border-2 border-green-500/30 transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_20px_theme(colors.green.500)]">
    <h3 className="text-2xl font-bold text-green-400 mb-3 font-orbitron">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Differentiators: React.FC = () => {
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

  const differentiators = [
    { title: "Honestidade Primeiro", description: "Nosso diagnóstico é 100% transparente. Se o problema for simples, diremos a verdade. Não trocamos peças desnecessariamente." },
    { title: "Conserto na Hora", description: "Tempo é dinheiro. Trocamos sua tela ou bateria em menos de 60 minutos na maioria dos casos. Você espera e leva na hora." },
    { title: "Técnicos Certificados", description: "Nossa equipe é formada por especialistas. Seu celular de R$ 5.000 não está na mão de amadores." },
    { title: "Garantia de Verdade", description: "Usamos as melhores peças e garantimos nosso serviço. Se algo der errado, a gente resolve sem enrolação." },
  ];

  return (
    <section 
        ref={sectionRef}
        className={`py-20 px-4 bg-black transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-orbitron">Por que escolher a <span className="text-green-400">Play Celulares?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((d, i) => (
            <DiffCard key={i} title={d.title} description={d.description} />
          ))}
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-transparent border-2 border-green-500 text-green-500 font-bold text-lg py-3 px-8 rounded-lg hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_theme(colors.green.500)] transform transition-all duration-300"
        >
          CONFIAR MEU CELULAR A ESPECIALISTAS
        </a>
      </div>
    </section>
  );
};

export default Differentiators;