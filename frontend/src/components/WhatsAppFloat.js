import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../data/mock';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappLink = generateWhatsAppLink(
      'site', 
      'Olá! Vi o site da Auto Check Saúde e gostaria de conversar sobre os serviços para meu veículo.'
    );
    window.open(whatsappLink, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-accent-primary rounded-full animate-pulse opacity-75"></div>
        
        <button
          onClick={handleWhatsAppClick}
          className="relative bg-gradient-to-r from-accent-primary to-accent-strong text-black font-semibold py-4 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center space-x-3"
        >
          <MessageCircle size={24} className="flex-shrink-0" />
          <span className="hidden sm:block text-sm font-medium whitespace-nowrap">
            Falar no WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;