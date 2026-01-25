import React from 'react';
import { ArrowRight, CheckCircle, Clock, Search, Users, Star, MessageCircle, Award, BookOpen } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../data/mock';

const Home = () => {
  const handleSchedule = (service = '') => {
    const whatsappLink = generateWhatsAppLink(service, `Olá! Gostaria de agendar ${service ? `um ${service}` : 'um serviço'} para meu veículo.`);
    window.open(whatsappLink, '_blank');
  };

  const iconComponents = {
    Search,
    Users,
    CheckCircle,
    Clock,
    Award,
    BookOpen
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {mockData.hero.title}
          </h1>
          <p className="hero-subtitle">
            {mockData.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => handleSchedule('check-up automotivo')}
              className="btn-primary"
            >
              <MessageCircle size={18} />
              {mockData.hero.primaryCTA}
            </button>
            <button 
              onClick={() => handleSchedule('consulta')}
              className="btn-secondary"
            >
              {mockData.hero.secondaryCTA}
            </button>
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
                  <span className="font-semibold text-accent-text">{service.price}</span>
                  <button
                    onClick={() => handleSchedule(service.title.toLowerCase())}
                    className="btn-secondary text-sm px-4 py-2"
                  >
                    Agendar
                    <ArrowRight size={14} />
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