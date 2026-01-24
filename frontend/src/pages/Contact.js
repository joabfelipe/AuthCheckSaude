import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { mockData, generateWhatsAppLink, submitContactForm } from '../data/mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Redirecionar para WhatsApp após 2 segundos
        setTimeout(() => {
          window.open(result.whatsappLink, '_blank');
        }, 2000);
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const whatsappLink = generateWhatsAppLink(
      'contato',
      'Olá! Gostaria de falar sobre os serviços da oficina. Podem me atender?'
    );
    window.open(whatsappLink, '_blank');
  };

  const services = [
    'Check-up Preventivo',
    'Usinagem Automotiva', 
    'Manutenção Geral',
    'Reparo de Motor',
    'Diagnóstico Eletrônico',
    'Outro Serviço'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Entre em Contato</h1>
            <p className="body-large text-text-secondary mb-8">
              Estamos prontos para atender você! Entre em contato conosco para agendar 
              serviços, tirar dúvidas ou solicitar um orçamento personalizado.
            </p>
            <button 
              onClick={handleWhatsAppDirect}
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Falar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h2 className="heading-2 mb-8">Nossas Informações</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-wash rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Endereço</h3>
                    <p className="body-medium text-text-secondary">
                      {mockData.company.address}
                    </p>
                    <p className="body-small text-text-muted mt-1">
                      Região da Vila da Saúde, São Paulo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-wash rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Telefone</h3>
                    <a 
                      href={`tel:${mockData.company.phone}`}
                      className="body-medium text-accent-text hover:underline"
                    >
                      {mockData.company.phone}
                    </a>
                    <p className="body-small text-text-muted mt-1">
                      Ligue e agende seu serviço
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-wash rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">E-mail</h3>
                    <a 
                      href={`mailto:${mockData.company.email}`}
                      className="body-medium text-accent-text hover:underline"
                    >
                      {mockData.company.email}
                    </a>
                    <p className="body-small text-text-muted mt-1">
                      Envie sua mensagem
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-wash rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Horário de Funcionamento</h3>
                    <p className="body-medium text-text-secondary">
                      {mockData.company.workingHours}
                    </p>
                    <p className="body-small text-text-muted mt-1">
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contato Rápido */}
              <div className="mt-12 product-card">
                <h3 className="heading-3 mb-4 text-accent-text">Contato Rápido</h3>
                <p className="body-medium text-text-secondary mb-6">
                  Para atendimento mais ágil, entre em contato diretamente via WhatsApp.
                </p>
                <button 
                  onClick={handleWhatsAppDirect}
                  className="btn-primary w-full"
                >
                  <MessageCircle size={18} />
                  Abrir WhatsApp
                </button>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div>
              <div className="product-card">
                <h2 className="heading-2 mb-6">Envie sua Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block body-medium font-semibold mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block body-medium font-semibold mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block body-medium font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block body-medium font-semibold mb-2">
                      Assunto / Serviço de Interesse
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
                    >
                      <option value="">Selecione o assunto</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block body-medium font-semibold mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent resize-none"
                      placeholder="Descreva o que você precisa ou conte mais detalhes sobre seu veículo..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                  
                  <p className="body-small text-text-muted text-center">
                    Após enviar, você será redirecionado para nosso WhatsApp para finalizar o contato.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Nossa Localização</h2>
            <p className="body-large text-text-secondary">
              Estamos localizados na região da Vila da Saúde, em São Paulo, 
              com fácil acesso e estacionamento disponível.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-3 mb-6">Como Chegar</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-accent-text mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="body-medium font-semibold">De Transporte Público</p>
                    <p className="body-small text-text-secondary">
                      Estação Saúde (Linha Azul do Metrô) - 10 minutos a pé
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-accent-text mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="body-medium font-semibold">De Carro</p>
                    <p className="body-small text-text-secondary">
                      Av. do Cursino, 2012 - Fácil acesso pela Radial Leste
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-accent-text mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="body-medium font-semibold">Estacionamento</p>
                    <p className="body-small text-text-secondary">
                      Vagas disponíveis na própria oficina
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent-wash rounded-2xl p-8 text-center">
              <MapPin size={48} className="text-accent-text mx-auto mb-6" />
              <h3 className="heading-3 mb-4">Auto Check Saúde</h3>
              <p className="body-medium text-text-secondary mb-4">
                {mockData.company.address}
              </p>
              <p className="body-small text-text-muted mb-6">
                Referência: Próximo ao Hospital do Servidor Público
              </p>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(mockData.company.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;