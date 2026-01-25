import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  const handleWhatsAppContact = () => {
    const whatsappLink = generateWhatsAppLink('atendimento', 'Olá! Vi o site da Auto Check Saúde e gostaria de falar sobre os serviços para meu veículo.');
    window.open(whatsappLink, '_blank');
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif" 
                alt="Auto Check Saúde"
                className="w-8 h-12 object-contain"
              />
              <span className="font-bold text-lg text-text-primary hidden sm:block">
                {mockData.company.name}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${mockData.company.phone}`}
              className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">{mockData.company.phone}</span>
            </a>
            <button
              onClick={handleWhatsAppContact}
              className="btn-primary flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border-light bg-white">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-accent-wash transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            <div className="px-4 py-4 border-t border-border-light space-y-3">
              <a
                href={`tel:${mockData.company.phone}`}
                className="flex items-center space-x-2 text-text-secondary py-2"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">{mockData.company.phone}</span>
              </a>
              <button
                onClick={handleWhatsAppContact}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>Falar no WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;