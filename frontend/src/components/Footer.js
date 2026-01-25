import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Wrench } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const whatsappLink = generateWhatsAppLink('informações', 'Olá! Gostaria de mais informações sobre os serviços da oficina.');
    window.open(whatsappLink, '_blank');
  };

  return (
    <footer className="bg-white border-t border-border-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Empresa */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif" 
                alt="Auto Check Saúde"
                className="w-10 h-14 object-contain"
              />
              <span className="font-bold text-xl text-text-primary">
                {mockData.company.name}
              </span>
            </div>
            <p className="text-text-secondary mb-6 max-w-md">
              {mockData.company.tagline}
            </p>
            <p className="body-small mb-4">
              Há mais de 25 anos cuidando da "saúde" do seu veículo com serviços especializados 
              em usinagem, manutenção preventiva e reparos de motor. Qualidade e confiança garantidas.
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="btn-primary flex items-center"
            >
              <MessageCircle size={18} />
              Fale Conosco
            </button>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="heading-3 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-accent-text transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-text-secondary hover:text-accent-text transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-text-secondary hover:text-accent-text transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-text-secondary hover:text-accent-text transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-text-secondary hover:text-accent-text transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-text-secondary hover:text-accent-text transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="heading-3 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent-text mt-1 flex-shrink-0" />
                <span className="body-small">{mockData.company.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent-text flex-shrink-0" />
                <a
                  href={`tel:${mockData.company.phone}`}
                  className="body-small hover:text-accent-text transition-colors"
                >
                  {mockData.company.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent-text flex-shrink-0" />
                <a
                  href={`mailto:${mockData.company.email}`}
                  className="body-small hover:text-accent-text transition-colors"
                >
                  {mockData.company.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent-text mt-1 flex-shrink-0" />
                <span className="body-small">{mockData.company.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="body-small mb-4 md:mb-0">
              © {currentYear} {mockData.company.name}. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => alert('Política de Privacidade - Em desenvolvimento')}
                className="body-small hover:text-accent-text transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => alert('Termos de Uso - Em desenvolvimento')}
                className="body-small hover:text-accent-text transition-colors cursor-pointer"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;