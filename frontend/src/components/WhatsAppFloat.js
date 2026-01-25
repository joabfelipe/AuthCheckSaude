import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { generateWhatsAppLink } from '../data/mock';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão após rolar um pouco
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

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botão expandido com opções */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border border-border-light p-4 max-w-xs animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-text-primary">Como podemos ajudar?</h4>
            <button 
              onClick={toggleExpanded}
              className="text-text-muted hover:text-text-primary"
            >
              <X size={16} />
            </button>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => {
                const link = generateWhatsAppLink('check-up', 'Olá! Gostaria de agendar um check-up para meu veículo.');
                window.open(link, '_blank');
              }}
              className="w-full text-left text-sm text-text-secondary hover:text-accent-text py-2 px-3 rounded hover:bg-accent-wash transition-colors"
            >
              📋 Agendar Check-up
            </button>
            <button
              onClick={() => {
                const link = generateWhatsAppLink('orçamento', 'Olá! Preciso de um orçamento para meu veículo.');
                window.open(link, '_blank');
              }}
              className="w-full text-left text-sm text-text-secondary hover:text-accent-text py-2 px-3 rounded hover:bg-accent-wash transition-colors"
            >
              💰 Solicitar Orçamento
            </button>
            <button
              onClick={() => {
                const link = generateWhatsAppLink('emergência', 'Olá! Tenho um problema urgente com meu veículo.');
                window.open(link, '_blank');
              }}
              className="w-full text-left text-sm text-text-secondary hover:text-accent-text py-2 px-3 rounded hover:bg-accent-wash transition-colors"
            >
              🚨 Atendimento Urgente
            </button>
          </div>
        </div>
      )}

      {/* Botão principal */}
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-accent-primary rounded-full animate-pulse opacity-75"></div>
        
        {/* Botão */}
        <button
          onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
          className="relative bg-gradient-to-r from-accent-primary to-accent-strong text-black font-semibold py-4 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center space-x-3 group"
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