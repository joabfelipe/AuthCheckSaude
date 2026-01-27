import React from 'react';
import './App.css';

function App() {
  const whatsappNumber = '5511958489220'; // Novo número do WhatsApp

  return (
    <div className="App">
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'white',
        padding: '1rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_health-checkup-4/artifacts/bhmlr1za_images.jfif" 
              alt="Auto Check Saúde"
              style={{ width: '32px', height: '48px', objectFit: 'contain' }}
            />
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#000' }}>
              Auto Check Saúde
            </span>
          </div>
          
          <button 
            style={{
              backgroundColor: '#FFD700',
              color: '#000',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20falar%20sobre%20os%20serviços`, '_blank')}
          >
            💬 Falar no WhatsApp
          </button>
        </div>
      </header>

      <main style={{ marginTop: '80px' }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(to bottom right, #fff9c4, #ffffff)',
          padding: '4rem 1rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <h1 style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#000',
                  marginBottom: '1.5rem',
                  lineHeight: '1.1'
                }}>
                  Tradição e Excelência em Reparação Automotiva
                </h1>
                <p style={{
                  fontSize: '1.3rem',
                  color: '#555',
                  marginBottom: '2rem',
                  maxWidth: '800px',
                  margin: '0 auto 2rem'
                }}>
                  Desde o final da década de 60 cuidando do seu veículo em São Paulo. 
                  Especialistas certificados com tecnologia de ponta e atendimento personalizado.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                  <button 
                    style={{
                      backgroundColor: '#FFD700',
                      color: '#000',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '25px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20agendar%20um%20check-up%20para%20meu%20veículo`, '_blank')}
                  >
                    📋 Agendar Check-up
                  </button>
                  <button 
                    style={{
                      backgroundColor: 'transparent',
                      color: '#000',
                      border: '2px solid #000',
                      padding: '1rem 2rem',
                      borderRadius: '25px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Preciso%20de%20um%20orçamento%20para%20meu%20veículo`, '_blank')}
                  >
                    💰 Solicitar Orçamento
                  </button>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>🏆</span>
                    <span style={{ fontWeight: '600' }}>Certificações Delphi</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>👨‍🔧</span>
                    <span style={{ fontWeight: '600' }}>Técnicos Especializados</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>✅</span>
                    <span style={{ fontWeight: '600' }}>Garantia Total</span>
                  </div>
                </div>
              </div>

              {/* Foto real da oficina */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
                  <img 
                    src="/images/foto1.jpg"
                    alt="Fachada da Auto Check Saúde"
                    style={{ width: '100%', maxWidth: '500px', height: '350px', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Nossa Sede Própria</h3>
                    <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>Av. do Cursino, 2012 - São Paulo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria de Fotos da Oficina */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#000' }}>
              Nossa Oficina
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: '250px' }}>
                <img 
                  src="/images/foto2.jpg"
                  alt="Interior da oficina"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: '2rem 1rem 1rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}>
                  Área de Trabalho
                </div>
              </div>
              
              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: '250px' }}>
                <img 
                  src="/images/foto3.jpg"
                  alt="Equipamentos modernos"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: '2rem 1rem 1rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}>
                  Equipamentos Modernos
                </div>
              </div>
              
              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: '250px' }}>
                <img 
                  src="/images/foto4.jpg"
                  alt="Equipe especializada"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: '2rem 1rem 1rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}>
                  Equipe Técnica
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Completos */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#000' }}>
              Nossos Serviços Especializados
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>⚡ Sistema Elétrico</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>Nossa especialidade original desde a década de 60. Diagnóstico completo e reparos precisos.</p>
                <button 
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20orçamento%20para%20sistema%20elétrico`, '_blank')}
                >
                  Solicitar Orçamento
                </button>
              </div>
              
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>🔧 Injeção Eletrônica</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>Técnicos certificados Delphi. Diagnóstico avançado com equipamentos de última geração.</p>
                <button 
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20orçamento%20para%20injeção%20eletrônica`, '_blank')}
                >
                  Solicitar Orçamento
                </button>
              </div>
              
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>🚗 Motor</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>Reparos completos, retífica e usinagem com precisão. Experiência em todas as marcas.</p>
                <button 
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20orçamento%20para%20reparação%20de%20motor`, '_blank')}
                >
                  Solicitar Orçamento
                </button>
              </div>
              
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>❄️ Ar-condicionado</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>Manutenção completa do sistema de climatização. Carga de gás e limpeza.</p>
                <button 
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20orçamento%20para%20ar-condicionado`, '_blank')}
                >
                  Solicitar Orçamento
                </button>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>🔧 Câmbio</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>Manutenção e reparo de câmbio manual e automático. Diagnóstico preciso.</p>
                <button 
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20orçamento%20para%20câmbio`, '_blank')}
                >
                  Solicitar Orçamento
                </button>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>🛞 Freios</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>Sistema de freios completo. Pastilhas, discos, cilindros e fluidos.</p>
                <button 
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20orçamento%20para%20freios`, '_blank')}
                >
                  Solicitar Orçamento
                </button>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>🔧 Suspensão</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>Amortecedores, molas, buchas e todo o sistema de suspensão.</p>
                <button 
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20orçamento%20para%20suspensão`, '_blank')}
                >
                  Solicitar Orçamento
                </button>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>🏆 Outros Serviços</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>Arrefecimento, velas, lubrificação, escapamento, rodas e pneus.</p>
                <button 
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Gostaria%20de%20saber%20sobre%20outros%20serviços%20disponíveis`, '_blank')}
                >
                  Consultar Disponibilidade
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Certificados e Premiações */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#000' }}>
              Certificações e Premiações
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Reconhecimentos que comprovam nossa excelência técnica e compromisso com a qualidade.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img 
                  src="/certificates/autocheck_certificado_delphi_2008.jpg"
                  alt="Certificado Delphi"
                  style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>Delphi 2008</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Injeção Eletrônica</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img 
                  src="/certificates/autocheck_certificado_GM_2005.jpg"
                  alt="Certificado GM"
                  style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>General Motors</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Certificação 2005</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img 
                  src="/certificates/autocheck_certificado_sindirepa_2009.jpg"
                  alt="Certificado Sindirepa"
                  style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>Sindirepa</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Associação 2009</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img 
                  src="/awards/Autocheck_premio_top_2011.jpg"
                  alt="Prêmio Top 2011"
                  style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>Prêmio Top</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Destaque 2011</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img 
                  src="/certificates/autocheck_certificado_fiat_2010.jpg"
                  alt="Certificado Fiat"
                  style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>Fiat</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Certificação 2010</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img 
                  src="/certificates/autocheck_certificado_sebrae_2003.jpg"
                  alt="Certificado SEBRAE"
                  style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
                />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>SEBRAE</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Capacitação 2003</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', backgroundColor: '#FFD700', padding: '2rem', borderRadius: '20px', marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#000', margin: '0 0 1rem' }}>
                💯 Mais de 20 Certificações
              </h3>
              <p style={{ color: '#000', fontSize: '1.1rem', margin: 0 }}>
                Magneti Marelli, Bosch, Goodyear, CETESB, ASE e muito mais!
              </p>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#000' }}>
              O que Nossos Clientes Dizem
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                <span style={{ color: '#FFD700', fontSize: '1.5rem' }}>⭐</span>
                <span style={{ color: '#FFD700', fontSize: '1.5rem' }}>⭐</span>
                <span style={{ color: '#FFD700', fontSize: '1.5rem' }}>⭐</span>
                <span style={{ color: '#FFD700', fontSize: '1.5rem' }}>⭐</span>
                <span style={{ color: '#FFD700', fontSize: '1.5rem' }}>⭐</span>
              </div>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000' }}>4,7</span>
              <span style={{ color: '#666' }}>142 avaliações no Google</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '15px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                    <span style={{ color: '#000', fontWeight: 'bold' }}>EQ</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: 0, color: '#000' }}>Estanis Q.</p>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: '#666' }}>Google • 2025</p>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', color: '#555' }}>
                  "Renato e time são gente fina demais, super competentes e atenciosos."
                </p>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#4285f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>G</span>
                  </div>
                </div>
              </div>
              
              <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '15px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                    <span style={{ color: '#000', fontWeight: 'bold' }}>SM</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: 0, color: '#000' }}>Sergio M.</p>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: '#666' }}>Google • 2025</p>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', color: '#555' }}>
                  "Oficina de qualidade com aplicação de peças de primeira linha."
                </p>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#4285f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>G</span>
                  </div>
                </div>
              </div>
              
              <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '15px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                    <span style={{ color: '#000', fontWeight: 'bold' }}>JJ</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: 0, color: '#000' }}>Jones J.</p>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: '#666' }}>Google • 2025</p>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', color: '#555' }}>
                  "Ótimo lugar para deixar seu carro em mãos de profissionais qualificados!"
                </p>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#4285f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>G</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#000' }}>
              Pronto para Cuidar do Seu Veículo?
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Entre em contato conosco e agende seu atendimento. Estamos na região da Saúde, 
              São Paulo, há mais de 50 anos cuidando de veículos com qualidade e confiança.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>Endereço</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Av. do Cursino, 2012<br />
                  Jardim da Saúde, São Paulo - SP
                </p>
              </div>
              
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>WhatsApp</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  <button 
                    style={{ color: '#FFD700', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}
                    onClick={() => window.open('https://wa.me/5511940630515?text=Olá!%20Gostaria%20de%20falar%20sobre%20os%20serviços', '_blank')}
                  >
                    (11) 4063-0515
                  </button>
                </p>
              </div>
              
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕒</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>Horário</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Segunda a Sexta: 8h às 19h<br />
                  Sábado: 8h às 14h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
            
            <button 
              style={{
                backgroundColor: '#FFD700',
                color: '#000',
                border: 'none',
                padding: '1.5rem 3rem',
                borderRadius: '30px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
              }}
              onClick={() => window.open('https://wa.me/5511940630515?text=Olá!%20Vi%20o%20site%20da%20Auto%20Check%20Saúde%20e%20gostaria%20de%20conversar', '_blank')}
            >
              💬 Falar no WhatsApp Agora
            </button>
          </div>
        </section>
      </main>

      {/* Botão Flutuante */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000
      }}>
        <button
          onClick={() => window.open('https://wa.me/5511940630515?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20falar%20sobre%20os%20serviços', '_blank')}
          style={{
            backgroundColor: '#FFD700',
            color: '#000',
            border: 'none',
            padding: '1rem',
            borderRadius: '50%',
            fontSize: '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          💬
        </button>
      </div>

      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ marginBottom: '1rem' }}>
            © 2025 Auto Check Saúde. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
            Há mais de 50 anos cuidando da saúde do seu veículo em São Paulo
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;