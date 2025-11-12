
import React from 'react';
import { WHATSAPP_LINK, ADDRESS, GOOGLE_MAPS_LINK, GOOGLE_MAPS_EMBED_LINK } from '../constants';

const Location: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto mb-12 font-orbitron">
          Chega de sofrer com celular quebrado. <span className="text-green-400" style={{ textShadow: '0 0 10px #22c55e' }}>Resolva seu problema AGORA!</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden border-2 border-blue-500/50">
            <iframe
              src={GOOGLE_MAPS_EMBED_LINK}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Play Celulares"
            ></iframe>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-xl text-gray-300">Esperamos por você na Play Celulares.</p>
            <h3 className="text-2xl font-bold text-white my-4">{ADDRESS}</h3>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors duration-300"
            >
              ABRIR NO GOOGLE MAPS
            </a>
            
            <div className="my-8 flex justify-center lg:justify-start">
               <img 
                 src="https://picsum.photos/seed/finalcta/400/150" // Placeholder for Gemini_Generated_Image_ejf0kzejf0kzejf0.jpg
                 alt="Entre em contato pelo WhatsApp"
                 className="rounded-lg"
               />
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md mx-auto lg:mx-0 block bg-green-500 text-black font-bold text-2xl py-5 px-10 rounded-lg hover:bg-green-400 hover:scale-105 transform transition-all duration-300 animate-subtle-pulse"
            >
              CHAMAR TÉCNICO NO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;