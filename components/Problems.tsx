
import React, { useState, useEffect, useRef } from 'react';
import { PhoneCrackIcon, BatteryEmptyIcon, WaterDropIcon, PowerOffIcon } from './icons/FeatureIcons';
import { WHATSAPP_NUMBER } from '../constants';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-gray-900 p-6 rounded-lg border border-blue-500/30 text-center hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
  >
    <div className="flex justify-center items-center mb-4 text-green-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 font-orbitron">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </a>
);

const Problems: React.FC = () => {
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

  const problems = [
    { icon: <PhoneCrackIcon className="w-12 h-12" />, title: "Tela Estilhaçada?", description: "Risco de se cortar e visualização impossível." },
    { icon: <BatteryEmptyIcon className="w-12 h-12" />, title: "Bateria Viciada?", description: "O celular vira um telefone fixo, sempre na tomada." },
    { icon: <WaterDropIcon className="w-12 h-12" />, title: "Caiu na Água?", description: "O desespero de perder fotos e contatos." },
    { icon: <PowerOffIcon className="w-12 h-12" />, title: "Parou de Ligar?", description: "A tela preta da morte. Calma, tem solução." },
  ];

  return (
    <section 
        ref={sectionRef}
        className={`py-20 px-4 bg-black transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Não passe por isso.</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">A gente entende a urgência e o transtorno que um celular quebrado causa no seu dia a dia.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const message = `Olá! Vim pelo site e meu problema é: ${problem.title}`;
            const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            return <ProblemCard key={index} {...problem} link={link} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
