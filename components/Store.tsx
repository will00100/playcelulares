
import React, { useState } from 'react';

const storeImages = [
  { src: 'https://picsum.photos/seed/store1/800/600', alt: 'Técnico e cliente sorrindo' }, // PROMOÇÃO IMPERDIVEL! (2).jpg
  { src: 'https://picsum.photos/seed/store2/800/600', alt: 'Técnico em close-up com a placa' }, // Gemini_Generated_Image_xhck6vxhck6vxhck (1).jpg
  { src: 'https://picsum.photos/seed/store3/800/600', alt: 'Atendente no balcão da loja' }, // grok-video-...mp4 frame
  { src: 'https://picsum.photos/seed/store4/800/600', alt: 'Ambiente agradável da loja' }, // Gemini_Generated_Image_zlwsuzlwsuzlwsuz.jpg
];

const Store: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? storeImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === storeImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-orbitron">Nossa Estrutura em <span className="text-green-400">Uberaba</span></h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg border-2 border-blue-500/30">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {storeImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-full flex-shrink-0"
                />
              ))}
            </div>
          </div>
          <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition">
            &#10094;
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Store;
