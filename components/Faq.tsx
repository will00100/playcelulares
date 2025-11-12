
import React, { useState, useEffect, useRef } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const faqs: FaqItemProps[] = [
    { question: "O orçamento é pago?", answer: "Não! O orçamento na Play Celulares é 100% gratuito e feito na hora, sem compromisso." },
    { question: "Quanto tempo demora o conserto?", answer: "Nós somos \"Consertos na Hora\". A maioria dos reparos, como troca de tela e bateria, é feita em menos de 1 hora, na sua frente." },
    { question: "Vocês usam peças originais?", answer: "Trabalhamos com as melhores linhas de peças do mercado (Qualidade OEM/Originais e Primeira Linha Premium). Oferecemos opções para seu bolso, sempre com garantia e transparência." },
    { question: "Vocês buscam meu aparelho?", answer: "Sim! Temos serviço de coleta e entrega em Uberaba (consultar taxa). Você não precisa nem sair de casa." },
    { question: "Meu celular molhou. O que eu faço?", answer: "NÃO tente carregar! Desligue o aparelho imediatamente e traga para a Play Celulares. Quanto antes você trouxer, maiores as chances de recuperação." },
    { question: "Onde fica a loja?", answer: "Estamos na Av. José Solé Filho, 185 - Jardim Uberaba. É fácil de achar e temos local para estacionar." },
];

const FaqItem: React.FC<{ item: FaqItemProps }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-5 px-6"
      >
        <span className="text-lg font-semibold text-white">{item.question}</span>
        <span className={`transform transition-transform duration-300 text-green-400 text-2xl ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? '-' : '+'}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="p-6 pt-0 text-gray-300">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
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
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-orbitron">Ainda tem dúvidas? <span className="text-green-400">A gente responde na lata.</span></h2>
        <div className="bg-gray-900 rounded-lg border border-blue-500/20">
            {faqs.map((faq, index) => (
                <FaqItem key={index} item={faq} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;