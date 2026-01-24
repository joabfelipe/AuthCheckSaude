import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { mockData, generateWhatsAppLink } from '../data/mock';

const HowItWorks = () => {
  const handleSchedule = () => {
    const whatsappLink = generateWhatsAppLink(
      'agendamento',
      'Olá! Gostaria de agendar um serviço. Podem me explicar como funciona o processo?'
    );
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Como Funciona</h1>
            <p className="body-large text-text-secondary">
              Processo simples, transparente e eficiente para cuidar do seu veículo 
              com a qualidade que você merece.
            </p>
          </div>
        </div>
      </section>

      {/* Processo Detalhado */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {mockData.process.map((step, index) => (
              <div key={index} className="relative">
                {/* Linha conectora */}
                {index < mockData.process.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-accent-primary/30 hidden md:block"></div>
                )}
                
                <div className="flex flex-col md:flex-row items-start md:items-center mb-16">
                  {/* Número do passo */}
                  <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-strong rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{step.step}</span>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="product-card">
                      <h3 className="heading-2 mb-4 text-accent-text">{step.title}</h3>
                      <p className="body-large text-text-secondary">{step.description}</p>
                      
                      {/* Detalhes extras para cada etapa */}
                      {step.step === 1 && (
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-accent-wash rounded-lg p-4">
                            <h4 className="font-semibold text-accent-text mb-2">Horários</h4>
                            <p className="body-small">{mockData.company.workingHours}</p>
                          </div>
                          <div className="bg-accent-wash rounded-lg p-4">
                            <h4 className="font-semibold text-accent-text mb-2">Contato</h4>
                            <p className="body-small">WhatsApp, telefone ou pessoalmente</p>
                          </div>
                        </div>
                      )}
                      
                      {step.step === 2 && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-accent-text mb-3">O que inclui:</h4>
                          <ul className="space-y-2">
                            <li className="body-medium flex items-center">
                              <ArrowRight size={16} className="text-accent-text mr-2" />
                              Diagnóstico eletrônico completo
                            </li>
                            <li className="body-medium flex items-center">
                              <ArrowRight size={16} className="text-accent-text mr-2" />
                              Inspeção visual detalhada
                            </li>
                            <li className="body-medium flex items-center">
                              <ArrowRight size={16} className="text-accent-text mr-2" />
                              Orçamento transparente e detalhado
                            </li>
                          </ul>
                        </div>
                      )}
                      
                      {step.step === 3 && (
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-accent-wash rounded-lg p-4">
                            <h4 className="font-semibold text-accent-text mb-2">Qualidade</h4>
                            <p className="body-small">Peças originais e garantia nos serviços</p>
                          </div>
                          <div className="bg-accent-wash rounded-lg p-4">
                            <h4 className="font-semibold text-accent-text mb-2">Prazo</h4>
                            <p className="body-small">Cumprimento rigoroso dos prazos acordados</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens do Processo */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Por que Nosso Processo é Diferente?</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Combinamos experiência, tecnologia e atendimento personalizado para 
              oferecer a melhor experiência em serviços automotivos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="product-card text-center">
              <h3 className="heading-3 mb-3 text-accent-text">Transparência</h3>
              <p className="body-medium text-text-secondary">
                Orçamentos claros, sem surpresas. Você sabe exatamente o que está pagando.
              </p>
            </div>
            
            <div className="product-card text-center">
              <h3 className="heading-3 mb-3 text-accent-text">Agilidade</h3>
              <p className="body-medium text-text-secondary">
                Diagnósticos rápidos e prazos cumpridos para você não ficar sem seu veículo.
              </p>
            </div>
            
            <div className="product-card text-center">
              <h3 className="heading-3 mb-3 text-accent-text">Qualidade</h3>
              <p className="body-medium text-text-secondary">
                Equipamentos modernos, peças originais e profissionais qualificados.
              </p>
            </div>
            
            <div className="product-card text-center">
              <h3 className="heading-3 mb-3 text-accent-text">Garantia</h3>
              <p className="body-medium text-text-secondary">
                Todos os serviços acompanham garantia para sua total tranquilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Perguntas Frequentes</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="product-card">
              <h3 className="heading-3 mb-3 text-accent-text">
                Quanto tempo demora um diagnóstico?
              </h3>
              <p className="body-medium text-text-secondary">
                Normalmente entre 30 minutos a 2 horas, dependendo da complexidade do problema. 
                Diagnósticos simples são mais rápidos, enquanto investigações mais profundas podem levar mais tempo.
              </p>
            </div>
            
            <div className="product-card">
              <h3 className="heading-3 mb-3 text-accent-text">
                O orçamento é gratuito?
              </h3>
              <p className="body-medium text-text-secondary">
                Sim! Oferecemos orçamentos gratuitos para todos os serviços. Você só paga se aprovar 
                e decidir realizar o serviço conosco.
              </p>
            </div>
            
            <div className="product-card">
              <h3 className="heading-3 mb-3 text-accent-text">
                Que tipos de pagamento aceitam?
              </h3>
              <p className="body-medium text-text-secondary">
                Aceitamos dinheiro, cartão de débito, cartão de crédito e PIX. 
                Também oferecemos parcelamento para serviços de maior valor.
              </p>
            </div>
            
            <div className="product-card">
              <h3 className="heading-3 mb-3 text-accent-text">
                Trabalham com todas as marcas?
              </h3>
              <p className="body-medium text-text-secondary">
                Sim, atendemos veículos de todas as marcas e modelos, desde carros nacionais 
                até veículos importados. Nossa equipe tem experiência diversificada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2 mb-4">Pronto para Começar?</h2>
            <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e dê o primeiro passo para manter seu veículo 
              sempre em perfeitas condições.
            </p>
            <button 
              onClick={handleSchedule}
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Agendar Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;