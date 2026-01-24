import React from 'react';
import { CheckCircle, Award, Users, Wrench } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const stats = [
    { number: '25+', label: 'Anos de Experiência', icon: Award },
    { number: '5000+', label: 'Veículos Atendidos', icon: Wrench },
    { number: '98%', label: 'Clientes Satisfeitos', icon: Users },
    { number: '100%', label: 'Garantia nos Serviços', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Sobre a Auto Check Saúde</h1>
            <p className="body-large text-text-secondary mb-8">
              {mockData.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Nossa Missão</h2>
            <p className="body-large text-text-secondary leading-relaxed">
              {mockData.about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-strong rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="heading-2 text-accent-text mb-2">{stat.number}</div>
                  <p className="body-small text-text-secondary">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Nossos Valores</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Princípios que orientam nosso trabalho e definem nosso compromisso com a excelência.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockData.about.values.map((value, index) => (
              <div key={index} className="product-card">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-wash rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <CheckCircle size={16} className="text-accent-text" />
                  </div>
                  <p className="body-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">O que nos Diferencia</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-wash rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Wrench size={16} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Equipamentos Modernos</h3>
                    <p className="body-medium text-text-secondary">
                      Investimos constantemente em tecnologia de ponta para oferecer 
                      serviços de usinagem com precisão e qualidade superiores.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-wash rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Users size={16} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Equipe Especializada</h3>
                    <p className="body-medium text-text-secondary">
                      Profissionais altamente qualificados e em constante atualização 
                      técnica para atender todas as marcas e modelos de veículos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-wash rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Award size={16} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">Garantia Total</h3>
                    <p className="body-medium text-text-secondary">
                      Oferecemos garantia em todos os nossos serviços, demonstrando 
                      nossa confiança na qualidade do trabalho realizado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent-primary/10 to-accent-strong/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-strong rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench size={32} className="text-white" />
                </div>
                <h3 className="heading-2 mb-4 text-accent-text">25 Anos</h3>
                <p className="body-large text-text-secondary">
                  de dedicação à excelência em serviços automotivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;