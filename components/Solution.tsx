
import React, { useState, useEffect, useRef } from 'react';
import { ScreenRepairIcon, BatteryChargingIcon, ChipIcon, CleanIcon, UsbIcon, CameraIcon, SpeakerIcon, AccessoriesIcon } from './icons/ServiceIcons';

interface ServiceItemProps {
  icon: React.ReactNode;
  name: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, name }) => (
  <div className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
    <div className="text-green-400">{icon}</div>
    <span className="text-gray-200">{name}</span>
  </div>
);

const Solution: React.FC = () => {
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

  const services = [
    { icon: <ScreenRepairIcon className="w-8 h-8"/>, name: "Troca de Tela (iPhone, Samsung, Motorola, Xiaomi)" },
    { icon: <BatteryChargingIcon className="w-8 h-8"/>, name: "Troca de Bateria" },
    { icon: <ChipIcon className="w-8 h-8"/>, name: "Reparo Avançado de Placa-Mãe" },
    { icon: <CleanIcon className="w-8 h-8"/>, name: "Limpeza e Desoxidação (Reparo de celular molhado)" },
    { icon: <UsbIcon className="w-8 h-8"/>, name: "Troca de Conector de Carga" },
    { icon: <CameraIcon className="w-8 h-8"/>, name: "Reparo de Câmera (Frontal e Traseira)" },
    { icon: <SpeakerIcon className="w-8 h-8"/>, name: "Troca de Alto-falante e Microfone" },
    { icon: <AccessoriesIcon className="w-8 h-8"/>, name: "Venda de Acessórios Premium (Cabos, Fones, Carregadores)" },
  ];

  return (
    <section 
        ref={sectionRef}
        className={`py-20 px-4 bg-gray-900 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4 font-orbitron" style={{ textShadow: '0 0 10px #22c55e' }}>
          A Solução Rápida e Confiável de Uberaba
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Na Play Celulares, seu problema é resolvido na hora. Somos especialistas em todas as marcas e usamos componentes da mais alta qualidade para garantir que seu aparelho saia daqui como novo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;