import React from 'react';
import { ArrowRight, CheckCircle, Clock, Search, Users, Star, MessageCircle, Award, BookOpen, MapPin, Shield } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../data/mock';

const Home = () => {
  const handleSchedule = (service = '') => {
    const whatsappLink = generateWhatsAppLink(service, `Olá! Vi o site da Auto Check Saúde e gostaria de ${service ? `solicitar orçamento para ${service}` : 'agendar um check-up para meu veículo'}.`);
    window.open(whatsappLink, '_blank');
  };

  const iconComponents = {
    Search,
    Users,
    CheckCircle,
    Clock,
    Award,
    BookOpen,
    Shield,
    MapPin
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="hero-title mb-6">
                Segurança & Qualidade em Reparação Automotiva em São Paulo
              </h1>
              <p className="hero-subtitle mb-8">
                Há mais de 50 anos cuidando do seu veículo com excelência técnica. 
                Seguimos normas da ABNT com profissionais constantemente treinados e capacitados.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button 
                  onClick={() => handleSchedule('check-up preventivo')}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>Agendar Check-up</span>
                </button>
                <button 
                  onClick={() => handleSchedule('orçamento')}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <span>Solicitar Orçamento</span>
                </button>
              </div>

              {/* Selos de Confiança */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Shield size={20} className="text-accent-primary" />
                  <span className="body-small font-medium">Diagnóstico Transparente</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Users size={20} className="text-accent-primary" />
                  <span className="body-small font-medium">Equipe Especializada</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <CheckCircle size={20} className="text-accent-primary" />
                  <span className="body-small font-medium">Garantia no Serviço</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent-primary/10 to-accent-strong/10 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-accent-primary to-accent-strong rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif" 
                        alt="Auto Check Saúde Logo"
                        className="w-16 h-20 object-contain"
                      />
                    </div>
                    <h3 className="heading-3 text-accent-text mb-2">50+ Anos</h3>
                    <p className="body-medium text-text-secondary">de Tradição em São Paulo</p>
                  </div>
                </div>
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-primary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-strong/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que Escolher Section */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Por que Escolher a Auto Check Saúde?</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Mais de duas décadas de experiência cuidando da saúde do seu veículo com 
              excelência técnica e atendimento diferenciado.
            </p>
          </div>
          
          <div className="ai-grid">
            {mockData.benefits.map((benefit, index) => {
              const IconComponent = iconComponents[benefit.icon];
              return (
                <div key={index} className="product-card card-hover-lift">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent-wash rounded-lg flex items-center justify-center mr-4">
                      <IconComponent size={24} className="text-accent-text" />
                    </div>
                    <h3 className="product-card-title">{benefit.title}</h3>
                  </div>
                  <p className="product-card-description">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principais Serviços */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Nossos Principais Serviços</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Soluções completas para manter seu veículo sempre em perfeito funcionamento, 
              desde manutenção preventiva até reparos complexos.
            </p>
          </div>
          
          <div className="ai-grid">
            {mockData.services.slice(0, 4).map((service) => (
              <div key={service.id} className="product-card card-hover-lift">
                <h3 className="product-card-title mb-3">{service.title}</h3>
                <p className="body-small text-text-secondary mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle size={16} className="text-accent-text mr-2 flex-shrink-0" />
                      <span className="body-small">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleSchedule(service.title.toLowerCase())}
                    className="btn-primary"
                  >
                    <MessageCircle size={16} />
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/servicos" className="btn-primary">
              Ver Todos os Serviços
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Como Funciona</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Processo simples e transparente para cuidar do seu veículo com qualidade e confiança.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {mockData.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-strong rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="heading-3 mb-4">{step.title}</h3>
                <p className="body-medium text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">O que Nossos Clientes Dizem</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nosso maior objetivo. 
              Veja alguns depoimentos de quem confia na Auto Check Saúde.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="product-card">
                <div className="stars mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star" />
                  ))}
                </div>
                <p className="body-medium mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-accent-text">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2 mb-4">Pronto para Cuidar do Seu Veículo?</h2>
            <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
              Não espere problemas aparecerem. Agende agora seu check-up preventivo e 
              mantenha seu veículo sempre em perfeitas condições.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => handleSchedule('check-up preventivo')}
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Agendar Check-up Agora
              </button>
              <a href="/contato" className="btn-secondary">
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;