import React from 'react';
import { MessageCircle, CheckCircle, Users, Shield, Star } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../data/mock';

const Home = () => {
  const handleSchedule = (service = '') => {
    const whatsappLink = generateWhatsAppLink(service, `Olá! Vi o site da Auto Check Saúde e gostaria de ${service ? `solicitar orçamento para ${service}` : 'agendar um check-up para meu veículo'}.`);
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="inicio" className="py-32 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Segurança & Qualidade em Reparação Automotiva em São Paulo
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Há mais de 50 anos cuidando do seu veículo com excelência técnica. 
                Seguimos normas da ABNT com profissionais constantemente treinados e capacitados.
              </p>
              
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Shield size={20} className="text-yellow-500" />
                  <span className="text-sm font-medium">Diagnóstico Transparente</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Users size={20} className="text-yellow-500" />
                  <span className="text-sm font-medium">Equipe Especializada</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <CheckCircle size={20} className="text-yellow-500" />
                  <span className="text-sm font-medium">Garantia no Serviço</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif" 
                        alt="Auto Check Saúde Logo"
                        className="w-16 h-20 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">50+ Anos</h3>
                    <p className="text-gray-600">de Tradição em São Paulo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Por que Escolher a Auto Check Saúde?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Há mais de 50 anos de experiência cuidando da saúde do seu veículo com 
              excelência técnica e atendimento diferenciado na região de São Paulo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle size={24} className="text-yellow-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Nossos Principais Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para manter seu veículo sempre em perfeito funcionamento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle size={16} className="text-yellow-500 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleSchedule(service.title.toLowerCase())}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-full transition-colors"
                >
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Processo simples e transparente para cuidar do seu veículo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mockData.process.slice(0, 3).map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black text-2xl font-bold">{step.step}</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-black">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => handleSchedule('processo de atendimento')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-full flex items-center space-x-2 mx-auto transition-colors"
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">O que Nossos Clientes Dizem</h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-black">4,7</span>
              </div>
              <div className="text-gray-600">
                <span className="font-medium">142 avaliações</span> no Google
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mockData.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">Google • 2025</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              * Avaliações reais podem ser integradas ao Google Meu Negócio
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Pronto para Cuidar do Seu Veículo?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e agende seu atendimento. Estamos na região da Saúde, 
              São Paulo, há mais de 50 anos cuidando de veículos com qualidade e confiança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => handleSchedule('check-up preventivo')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-full flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={18} />
                <span>Agendar Check-up Agora</span>
              </button>
              <button 
                onClick={() => handleSchedule('orçamento personalizado')}
                className="bg-white hover:bg-gray-100 text-black font-semibold py-4 px-8 rounded-full border-2 border-black transition-colors"
              >
                <span>Solicitar Orçamento</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Endereço</h4>
                    <p className="text-gray-600">
                      {mockData.company.address}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Jardim da Saúde, próximo ao Hospital do Servidor Público
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">WhatsApp</h4>
                    <button
                      onClick={() => handleSchedule('contato direto')}
                      className="text-yellow-600 hover:underline font-medium"
                    >
                      {mockData.company.phone}
                    </button>
                    <p className="text-sm text-gray-500 mt-1">
                      Clique para conversar diretamente
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Horário</h4>
                    <p className="text-gray-600">
                      {mockData.company.workingHours}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Nossa Localização</h3>
              <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl">🗺️</span>
                  <p className="text-gray-600 font-medium mt-4">Mapa do Google</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Av. do Cursino, 2012<br />
                    Jardim da Saúde, São Paulo
                  </p>
                  <button
                    onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(mockData.company.address)}`, '_blank')}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full mt-4 transition-colors"
                  >
                    Abrir no Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;