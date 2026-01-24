import React from 'react';
import { CheckCircle, Award, Users, BookOpen, Calendar, Star } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const stats = [
    { number: '50+', label: 'Anos de Experiência', icon: Calendar },
    { number: '8', label: 'Especialidades', icon: Award },
    { number: '98%', label: 'Clientes Satisfeitos', icon: Users },
    { number: '100%', label: 'Garantia nos Serviços', icon: CheckCircle }
  ];

  const certifications = [
    'CETESB - Campanha Ar Limpo (década de 80)',
    'ASE - Certificação pioneira',
    'ABNT - Normas técnicas',
    'Fabricantes: MTE Thomson, Valeo, Delphi, Magneti Marelli'
  ];

  const partnerships = [
    'SENAI - Centro Paula Souza',
    'SEBRAE - Gestão e Empreendedorismo', 
    'PUC - Cursos de Especialização',
    'Sindirepa - Sindicato do Setor',
    'Universidade do Mecânico',
    'TV Oficina Brasil - Centro de Treinamento'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Nossa História</h1>
            <p className="body-large text-text-secondary mb-8">
              {mockData.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20">
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

      {/* História Detalhada */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">História e Inovação</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Uma jornada de mais de 5 décadas dedicada à excelência em reparação automotiva
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="product-card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-wash rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Calendar size={20} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-3">Década de 60 - Os Primórdios</h3>
                    <p className="body-medium text-text-secondary">
                      Nosso fundador iniciou jovem como lavrador e, junto da família, fez cursos de eletricidade 
                      e eletrônica por correspondência. Chegou até o 2º ano de engenharia elétrica. No final da 
                      década de 60, deixou Registro-SP e veio para São Paulo, abrindo uma oficina de auto elétrica.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="product-card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-wash rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Star size={20} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-3">Década de 70 - Expansão e Oportunidade</h3>
                    <p className="body-medium text-text-secondary">
                      Durante a crise do petróleo, vislumbrou uma oportunidade: entrar na área de carburação e 
                      regulagem de motores. Dedicou-se intensamente aos estudos através de diversos cursos 
                      disponíveis no mercado, sempre em busca do aperfeiçoamento técnico.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="product-card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-wash rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Award size={20} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-3">Década de 80 - Pioneirismo Ambiental</h3>
                    <p className="body-medium text-text-secondary">
                      Quando a CETESB lançou a campanha "Ar Limpo", fomos pioneiros em aderir e conseguir a 
                      certificação como oficina capacitada. Também fomos um dos primeiros a ser aprovado 
                      na certificação ASE, sempre conscientes do papel profissional na educação ambiental.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="product-card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-wash rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <BookOpen size={20} className="text-accent-text" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-3">Décadas de 90 e 2000 - Modernização</h3>
                    <p className="body-medium text-text-secondary">
                      Criação do centro automotivo "Auto Check Saúde", em homenagem ao bairro. Intensificamos 
                      os cursos de gestão no SEBRAE e PUC, implantamos rede integrada de comunicação e informática. 
                      No ano 2000, adquirimos nossa sede própria atual devido à grande demanda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Nossa Missão</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {mockData.about.mission}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

      {/* Certificações */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">Certificações e Prêmios</h2>
              <p className="body-large text-text-secondary mb-8">
                Desde nossa fundação, sempre participamos e credenciamos nossa equipe em centenas 
                de cursos técnicos, sendo agraciados com diversos prêmios ao longo dos anos.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <Award size={20} className="text-accent-text mr-3 flex-shrink-0 mt-0.5" />
                    <span className="body-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="heading-2 mb-6">Parcerias e Educação</h2>
              <p className="body-large text-text-secondary mb-8">
                Mantemos parcerias estratégicas com as principais instituições de ensino e 
                entidades do setor automotivo para constante atualização.
              </p>
              <div className="space-y-4">
                {partnerships.map((partner, index) => (
                  <div key={index} className="flex items-start">
                    <Users size={20} className="text-accent-text mr-3 flex-shrink-0 mt-0.5" />
                    <span className="body-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centro de Treinamento */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2 mb-6">Centro de Treinamento</h2>
            <div className="bg-gradient-to-br from-accent-primary/10 to-accent-strong/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-strong rounded-2xl flex items-center justify-center">
                  <BookOpen size={32} className="text-white" />
                </div>
              </div>
              <h3 className="heading-2 mb-4 text-accent-text">TV Oficina Brasil</h3>
              <p className="body-large text-text-secondary mb-6">
                Nossa sede possui uma sala de recepção da TV Oficina Brasil, aberta para todos os 
                profissionais que desejam assistir palestras, cursos e atualizar conhecimentos sobre 
                reparação automotiva.
              </p>
              <p className="body-medium text-text-secondary">
                Mantemos também uma biblioteca abastecida com informações didáticas e parcerias 
                com as principais entidades do setor automotivo brasileiro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;