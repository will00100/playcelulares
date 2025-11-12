
import React from 'react';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Header from './components/Header';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Differentiators from './components/Differentiators';
import Promotion from './components/Promotion';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import Location from './components/Location';
import Footer from './components/Footer';

const CircuitBoardBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 opacity-[0.03] overflow-hidden">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(1)">
          <path d="M 50 0 L 50 20 L 20 20 L 20 50 L 0 50 M 50 100 L 50 80 L 80 80 L 80 50 L 100 50" stroke="#00ff00" strokeWidth="1.5" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="#00ff00" />
          <circle cx="20" cy="20" r="2" fill="#00ff00" />
          <circle cx="80" cy="80" r="2" fill="#00ff00" />
          <circle cx="20" cy="80" r="1" fill="#00ff00" />
          <circle cx="80" cy="20" r="1" fill="#00ff00" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-black text-white relative overflow-x-hidden">
      <CircuitBoardBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Problems />
          <Solution />
          <Differentiators />
          <Promotion />
          <Process />
          <Testimonials />
          <Guarantee />
          <Faq />
          <Location />
        </main>
        <Footer />
      </div>
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;