
import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { WhatsAppIcon } from './icons/SocialIcons';

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre em contato pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-400 hover:scale-110 transform transition-all duration-300 animate-subtle-pulse"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;