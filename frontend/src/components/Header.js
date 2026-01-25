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
      <div className="flex items-center justify-between w-full px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif" 
              alt="Auto Check Saúde"
              className="w-10 h-14 object-contain"
            />
            <span className="font-bold text-lg text-text-primary hidden sm:block">
              {mockData.company.name}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link ${
                item.current ? 'active' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={`tel:${mockData.company.phone}`}
            className="flex items-center space-x-1 text-text-secondary hover:text-text-primary transition-colors"
          >
            <Phone size={16} />
            <span className="text-sm font-medium">{mockData.company.phone}</span>
          </a>
          <button
            onClick={handleWhatsAppContact}
            className="btn-primary"
          >
            Agendar Agora
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
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
        <div className="md:hidden mt-4 px-4 pb-4 border-t border-border-light">
          <nav className="flex flex-col space-y-2 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-left ${
                  item.current ? 'active' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-border-light space-y-3">
            <a
              href={`tel:${mockData.company.phone}`}
              className="flex items-center space-x-2 text-text-secondary"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">{mockData.company.phone}</span>
            </a>
            <button
              onClick={handleWhatsAppContact}
              className="btn-primary w-full"
            >
              Agendar Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;