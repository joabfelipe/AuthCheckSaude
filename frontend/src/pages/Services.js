import React from 'react';
import { ArrowRight, CheckCircle, MessageCircle, Wrench, Cog, Settings, Zap } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../data/mock';

const Services = () => {
  const handleSchedule = (service) => {
    const whatsappLink = generateWhatsAppLink(
      service.toLowerCase(),
      `Olá! Gostaria de solicitar um orçamento para: ${service}. Podem me ajudar?`
    );
    window.open(whatsappLink, '_blank');
  };

  const serviceIcons = {
    1: Wrench,
    2: Cog,
    3: Settings,
    4: Zap
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Nossos Serviços</h1>
            <p className="body-large text-text-secondary">
              Soluções completas em serviços automotivos, desde manutenção preventiva até 
              reparos complexos de motor e usinagem de precisão.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {mockData.services.map((service, index) => {
              const IconComponent = serviceIcons[service.id] || Wrench;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Conteúdo */}
                  <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-strong rounded-lg flex items-center justify-center mr-4">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h2 className="heading-2">{service.title}</h2>
                    </div>
                    
                    <p className="body-large text-text-secondary mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle size={20} className="text-accent-text mr-3 flex-shrink-0 mt-0.5" />
                          <span className="body-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-accent-wash rounded-lg p-4 mb-6">
                      <p className="body-small text-accent-text mb-2">
                        <strong>Indicado para:</strong>
                      </p>
                      <p className="body-medium">{service.target}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="body-small text-text-muted mb-1">A partir de</p>
                        <p className="heading-3 text-accent-text">{service.price}</p>
                      </div>
                      <button
                        onClick={() => handleSchedule(service.title)}
                        className="btn-primary"
                      >
                        <MessageCircle size={18} />
                        Solicitar Orçamento
                      </button>
                    </div>
                  </div>
                  
                  {/* Visual/Card */}
                  <div className={isEven ? 'lg:pl-8' : 'lg:pr-8 lg:order-1'}>
                    <div className="bg-gradient-to-br from-accent-primary/10 to-accent-strong/10 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-accent-primary to-accent-strong rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <IconComponent size={40} className="text-white" />
                        </div>
                        <h3 className="heading-3 text-accent-text mb-2">{service.title}</h3>
                        <p className="body-small text-text-secondary">Serviço especializado</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Garantia e Qualidade */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Garantia e Qualidade em Todos os Serviços</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Trabalhamos seguindo as melhores práticas do mercado e oferecemos garantia 
              em todos os serviços realizados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="product-card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-strong rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={24} className="text-white" />
              </div>
              <h3 className="heading-3 mb-4">Garantia Total</h3>
              <p className="body-medium text-text-secondary">
                Todos os nossos serviços possuem garantia, demonstrando nossa confiança na qualidade.
              </p>
            </div>
            
            <div className="product-card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-strong rounded-full flex items-center justify-center mx-auto mb-6">
                <Cog size={24} className="text-white" />
              </div>
              <h3 className="heading-3 mb-4">Peças Originais</h3>
              <p className="body-medium text-text-secondary">
                Utilizamos apenas peças originais e de primeira linha para garantir durabilidade.
              </p>
            </div>
            
            <div className="product-card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-strong rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings size={24} className="text-white" />
              </div>
              <h3 className="heading-3 mb-4">Equipamentos Modernos</h3>
              <p className="body-medium text-text-secondary">
                Tecnologia de ponta para diagnósticos precisos e serviços de excelência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Peças e Componentes</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Além dos serviços, trabalhamos com peças originais e de primeira linha 
              para garantir a qualidade e durabilidade dos reparos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {mockData.parts.map((part, index) => (
              <div key={index} className="product-card text-center">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-primary to-accent-strong rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <p className="body-small font-medium">{part}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="body-medium text-text-secondary mb-6">
              <strong>E muito mais!</strong> Trabalhamos com diversas marcas e temos 
              acesso a uma ampla rede de fornecedores para encontrar a peça ideal para seu veículo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2 mb-4">Precisa de Algum Serviço?</h2>
            <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para solicitar um orçamento personalizado. 
              Nossa equipe está pronta para atender às suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => handleSchedule('orçamento personalizado')}
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Solicitar Orçamento
              </button>
              <a href="/contato" className="btn-secondary">
                Falar com Especialista
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;