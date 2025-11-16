
import React, { useState, useEffect, useRef } from 'react';
import { AppleIcon, SamsungIcon, MotorolaIcon, XiaomiIcon, LgIcon, AsusIcon } from './icons/BrandIcons';

const Brands: React.FC = () => {
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

  const brands = [
    { name: 'Apple', icon: <AppleIcon /> },
    { name: 'Samsung', icon: <SamsungIcon /> },
    { name: 'Motorola', icon: <MotorolaIcon /> },
    { name: 'Xiaomi', icon: <XiaomiIcon /> },
    { name: 'LG', icon: <LgIcon /> },
    { name: 'Asus', icon: <AsusIcon /> },
  ];

  return (
    <section 
        ref={sectionRef}
        className={`py-20 px-4 bg-gray-900 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">Dominamos as Principais Marcas do Mercado</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Seja iPhone ou Android, nossa equipe está pronta para consertar. Somos especialistas multimarcas.</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.name} className="text-gray-500 hover:text-white transition-colors duration-300" title={brand.name}>
              {brand.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
