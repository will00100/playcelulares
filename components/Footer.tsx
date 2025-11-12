
import React from 'react';
import { ADDRESS } from '../constants';

const SimpleLogo: React.FC = () => (
    <div className="flex items-center space-x-2">
      <span className="font-orbitron text-2xl font-bold text-green-400">
        Play
      </span>
      <p className="font-orbitron text-2xl text-white">celulares</p>
    </div>
);


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4">
      <div className="container mx-auto text-center text-gray-500">
        <div className="flex justify-center mb-4">
            <SimpleLogo />
        </div>
        <p>© {currentYear} Play Celulares Uberaba - Todos os direitos reservados.</p>
        <p>CNPJ: [Seu CNPJ]</p>
        <p>{ADDRESS}</p>
      </div>
    </footer>
  );
};

export default Footer;
