import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/', current: location.pathname === '/' },
    { name: 'Sobre', href: '/sobre', current: location.pathname === '/sobre' },
    { name: 'Serviços', href: '/servicos', current: location.pathname === '/servicos' },
    { name: 'Como Funciona', href: '/como-funciona', current: location.pathname === '/como-funciona' },
    { name: 'Contato', href: '/contato', current: location.pathname === '/contato' },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' },
  ];

  const handleWhatsAppContact = () => {
    const whatsappLink = generateWhatsAppLink('check-up automotivo', 'Olá! Gostaria de agendar um check-up para meu veículo. Podem me ajudar?');
    window.open(whatsappLink, '_blank');
  };

  return (
    <header className="nav-header">
      <div className="flex items-center justify-between w-full px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-primary to-accent-strong rounded-lg flex items-center justify-center">
              <Wrench size={18} className="text-white" />
            </div>
            <span className="font-semibold text-lg text-text-primary">
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