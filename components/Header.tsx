
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Logo: React.FC = () => (
  <div className="w-full max-w-sm md:max-w-md mx-auto p-4 bg-black/50 backdrop-blur-sm rounded-2xl border border-blue-500/50 shadow-[0_0_20px_theme(colors.blue.500)]">
    <div className="text-center">
      <div className="flex items-center justify-center space-x-2">
        <span className="font-orbitron text-5xl md:text-6xl font-bold text-green-400" style={{ textShadow: '0 0 10px #22c55e' }}>
          Play
        </span>
        <div className="bg-green-400 rounded-full p-2" style={{ boxShadow: '0 0 10px #22c55e' }}>
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 5.14A1 1 0 017.43.9l7.86 5.46a1 1 0 010 1.68l-7.86 5.46a1 1 0 01-1.56-1.13L7.64 10 5.87 6.27a1 1 0 01.43-1.13z" />
          </svg>
        </div>
      </div>
      <p className="font-orbitron text-3xl md:text-4xl text-white mt-1">celulares</p>
      <p className="text-white text-md md:text-lg mt-2 tracking-widest">Consertos na Hora</p>
    </div>
  </div>
);

const Header: React.FC = () => {
  return (
    <header 
      className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://picsum.photos/seed/techrepair/1200/800')" }} // Placeholder for "PROMOÇÃO IMPERDIVEL! (1).jpg"
    >
      <div className="max-w-4xl">
        <Logo />
        <h1 className="text-4xl md:text-6xl font-bold mt-8 text-white uppercase font-orbitron">
          Seu celular parou? <br className="hidden md:block" />
          <span className="text-green-400" style={{ textShadow: '0 0 10px #22c55e' }}>A gente resolve em minutos.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Serviço N°1 em Uberaba para conserto de celular. Rápido, com garantia e na sua frente.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-green-500 text-black font-bold text-xl py-4 px-10 rounded-lg hover:bg-green-400 hover:scale-105 transform transition-all duration-300 animate-subtle-pulse"
        >
          ORÇAMENTO GRÁTIS NO WHATSAPP
        </a>
      </div>
    </header>
  );
};

export default Header;