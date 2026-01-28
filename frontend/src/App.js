import React from 'react';
import './App.css';

function App() {
  // WhatsApp oficial da Auto Check Saúde
  const whatsappNumber = '5511940630515';
  const phoneDisplay = '(11) 4063-0515';
  const phoneTel = '+551140630515';
  const mapQuery = 'Auto Check Saúde, Av. do Cursino, 2012 - Jardim da Saúde, São Paulo - SP, 04132-001';
  const currentYear = new Date().getFullYear();

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      {/* Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#fff',
          padding: '1rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="acs-header-inner">
          <div className="acs-brand">
            <img
              src="/logo.svg"
              alt="Auto Check Saúde"
              style={{ height: '44px', width: 'auto' }}
            />
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#000',
                  lineHeight: 1.1
                }}
              >
                Auto Check Saúde
              </h1>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                Oficina mecânica - Desde a década de 60
              </p>
            </div>
          </div>

          <div className="acs-header-cta">
            <button
              onClick={() => openWhatsApp('Olá! Gostaria de agendar uma avaliação para meu carro.')}
              style={{
                backgroundColor: '#FFD700',
                color: '#000',
                border: 'none',
                padding: '0.9rem 1.4rem',
                borderRadius: '25px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255,215,0,0.25)',
                fontSize: '1rem'
              }}
            >
              Agendar Avaliação
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #000 0%, #333 100%)',
            color: 'white',
            padding: '5rem 1rem'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="acs-hero-grid">
            <div style={{ textAlign: 'center' }}>
              <h1
                style={{
                  fontSize: 'clamp(2.1rem, 6vw, 3rem)',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  lineHeight: 1.15
                }}
              >
                Tradição e Tecnologia em Reparação Automotiva
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
                  marginBottom: '2rem',
                  color: '#ccc',
                  lineHeight: 1.6
                }}
              >
                Mais de 50 anos cuidando do seu carro com excelência. Especialistas em sistema elétrico,
                injeção eletrônica e mecânica geral. Certificada Delphi e com sede própria.
              </p>

              <div className="acs-hero-cta">
                <button
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
                  }}
                  onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento.')}
                >
                  💬 Solicitar Orçamento
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '2px solid #FFD700',
                    padding: '1rem 2rem',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                  onClick={() => (window.location.href = '#servicos')}
                >
                  🔧 Ver Serviços
                </button>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1.5rem'
                }}
              >
                <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(255,215,0,0.1)', borderRadius: '15px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFD700' }}>50+</div>
                  <div style={{ color: '#ccc' }}>Anos de Experiência</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(255,215,0,0.1)', borderRadius: '15px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFD700' }}>142</div>
                  <div style={{ color: '#ccc' }}>Avaliações Google</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(255,215,0,0.1)', borderRadius: '15px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFD700' }}>4,7⭐</div>
                  <div style={{ color: '#ccc' }}>Nota Média</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/foto2.jpg"
                alt="Auto Check Saúde - Oficina"
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  height: 'clamp(220px, 55vw, 350px)',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.9rem, 4.5vw, 2.5rem)', marginBottom: '2rem', color: '#000' }}>
              Nossa Estrutura e Equipamentos
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1rem, 2.6vw, 1.2rem)',
                color: '#666',
                marginBottom: '3rem',
                maxWidth: '800px',
                margin: '0 auto 3rem'
              }}
            >
              Sede própria na região da Saúde, equipada com tecnologia de ponta e ambiente profissional
              para cuidar do seu veículo.
            </p>

            <div className="acs-grid-photos">
              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: 'clamp(200px, 55vw, 250px)' }}>
                <img src="/images/foto1.jpg" alt="Auto Check Saúde - Fachada" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    padding: '2rem 1rem 1rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Sede Própria
                </div>
              </div>

              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: 'clamp(200px, 55vw, 250px)' }}>
                <img src="/images/foto2.jpg" alt="Equipamentos modernos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    padding: '2rem 1rem 1rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Tecnologia de Ponta
                </div>
              </div>

              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: 'clamp(200px, 55vw, 250px)' }}>
                <img src="/images/foto3.jpg" alt="Área de trabalho" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    padding: '2rem 1rem 1rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Área Técnica
                </div>
              </div>

              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: 'clamp(200px, 55vw, 250px)' }}>
                <img src="/images/foto4.jpg" alt="Equipe especializada" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    padding: '2rem 1rem 1rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Equipe Técnica
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Completos */}
        <section id="servicos" style={{ padding: '4rem 1rem', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.9rem, 4.5vw, 2.5rem)', marginBottom: '3rem', color: '#000' }}>
              Nossos Serviços Especializados
            </h2>

            <div className="acs-grid-services">
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
                  onClick={() => openWhatsApp('Gostaria de orçamento para sistema elétrico')}
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
                  onClick={() => openWhatsApp('Gostaria de orçamento para injeção eletrônica')}
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
                  onClick={() => openWhatsApp('Gostaria de orçamento para reparação de motor')}
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
                  onClick={() => openWhatsApp('Gostaria de orçamento para ar-condicionado')}
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
                  onClick={() => openWhatsApp('Gostaria de orçamento para câmbio')}
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
                  onClick={() => openWhatsApp('Gostaria de orçamento para freios')}
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
                  onClick={() => openWhatsApp('Gostaria de orçamento para suspensão')}
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
                  onClick={() => openWhatsApp('Gostaria de saber sobre outros serviços disponíveis')}
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
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.9rem, 4.5vw, 2.5rem)', marginBottom: '3rem', color: '#000' }}>
              Certificações e Premiações
            </h2>
            <p style={{ textAlign: 'center', fontSize: 'clamp(1rem, 2.6vw, 1.2rem)', color: '#666', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Reconhecimentos que comprovam nossa excelência técnica e compromisso com a qualidade.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img src="/certificates/autocheck_certificado_delphi_2008.jpg" alt="Certificado Delphi" style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>Delphi 2008</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Injeção Eletrônica</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img src="/certificates/autocheck_certificado_GM_2005.jpg" alt="Certificado GM" style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>General Motors</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Certificação 2005</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                {/* Atenção: em produção (Vercel/Linux) o caminho é case-sensitive */}
                <img src="/certificates/Autocheck_certificado_sindirepa_2009.jpg" alt="Certificado Sindirepa" style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>Sindirepa</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Associação 2009</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img src="/awards/Autocheck_premio_top_2011.jpg" alt="Prêmio Top 2011" style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>Prêmio Top</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Destaque 2011</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img src="/certificates/autocheck_certificado_fiat_2010.jpg" alt="Certificado Fiat" style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>Fiat</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Certificação 2010</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px' }}>
                <img src="/certificates/autocheck_certificado_sebrae_2003.jpg" alt="Certificado SEBRAE" style={{ width: '100%', maxWidth: '150px', height: '120px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', margin: '0.5rem 0' }}>SEBRAE</h3>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Capacitação 2003</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', backgroundColor: '#FFD700', padding: '2rem', borderRadius: '20px', marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#000', margin: '0 0 1rem' }}>💯 Mais de 20 Certificações</h3>
              <p style={{ color: '#000', fontSize: '1.1rem', margin: 0 }}>Magneti Marelli, Bosch, Goodyear, CETESB, ASE e muito mais!</p>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.5rem)', marginBottom: '2rem', color: '#000' }}>O que Nossos Clientes Dizem</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
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

            <div className="acs-grid-testimonials">
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                    <span style={{ color: '#000', fontWeight: 'bold' }}>EQ</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: 0, color: '#000' }}>Estanis Quevedo</p>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: '#666' }}>Google • 2025</p>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', color: '#555' }}>
                  "Renato e time são gente fina demais, super competentes e atenciosos. Trabalho de qualidade com preços justos."
                </p>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#4285f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>G</span>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                    <span style={{ color: '#000', fontWeight: 'bold' }}>SM</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: 0, color: '#000' }}>Sergio Marques</p>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: '#666' }}>Google • 2025</p>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', color: '#555' }}>
                  "Oficina de qualidade com aplicação de peças de primeira linha. Experiência e conhecimento técnico excelente."
                </p>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#4285f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>G</span>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#FFD700', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                    <span style={{ color: '#000', fontWeight: 'bold' }}>JJ</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: 0, color: '#000' }}>Jones Jesus</p>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: '#666' }}>Google • 2025</p>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', color: '#555' }}>
                  "Ótimo lugar para deixar seu carro em mãos de profissionais qualificados! Recomendo muito."
                </p>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#4285f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>G</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '1rem' }}>📱 Centro de Treinamento TV Oficina Brasil</h3>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                Nossa sede possui sala de recepção da TV Oficina Brasil, aberta para todos os profissionais
                que desejam assistir palestras e atualizar conhecimentos sobre reparação automotiva.
              </p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section style={{ padding: '4rem 1rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.5rem)', marginBottom: '2rem', color: '#000' }}>Entre em Contato Conosco</h2>
            <p style={{ fontSize: 'clamp(1rem, 2.6vw, 1.2rem)', color: '#666', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Estamos na região da Saúde, São Paulo, há mais de 50 anos. Entre em contato para agendar seu atendimento ou solicitar orçamento.
            </p>

            <div className="acs-grid-contact" style={{ marginBottom: '3rem' }}>
              <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>Endereço</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Av. do Cursino, 2012
                  <br />
                  Jardim da Saúde, São Paulo - SP
                  <br />
                  CEP: 04132-001
                </p>
                <button className="acs-link-btn" onClick={openMaps}>
                  🗺️ Abrir no Google Maps
                </button>
              </div>

              <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>WhatsApp</h3>
                <button
                  style={{
                    color: '#000',
                    textDecoration: 'underline',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                  onClick={() => openWhatsApp('Olá! Gostaria de falar sobre os serviços.')}
                >
                  (11) 95848-9220
                </button>
                <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>Clique para conversar diretamente</p>
              </div>

              <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☎️</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>Telefone</h3>
                <a
                  href={`tel:${phoneTel}`}
                  style={{
                    display: 'inline-block',
                    color: '#000',
                    textDecoration: 'underline',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                >
                  {phoneDisplay}
                </a>
                <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>Ligação direta (horário comercial)</p>
              </div>

              <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕒</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>Horário</h3>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                  Segunda a Sexta: 8h às 19h
                  <br />
                  Sábado: 8h às 14h
                  <br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className="acs-contact-cta-grid">
              <div>
                <button
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#000',
                    border: 'none',
                    padding: '1.2rem 1.6rem',
                    borderRadius: '30px',
                    fontSize: 'clamp(1.05rem, 3vw, 1.3rem)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
                    marginBottom: '1rem',
                    width: '100%'
                  }}
                  onClick={() => openWhatsApp('Olá! Vi o site da Auto Check Saúde e gostaria de conversar.')}
                >
                  💬 Falar no WhatsApp Agora
                </button>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>Resposta rápida e atendimento personalizado</p>
              </div>

              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <img
                  src="/images/foto5.jpg"
                  alt="Equipe Auto Check Saúde"
                  style={{ width: '100%', maxWidth: '460px', height: 'clamp(200px, 55vw, 250px)', objectFit: 'cover', borderRadius: '15px' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}
                >
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Nossa Equipe</h4>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>Profissionais certificados</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Botão Flutuante */}
      <div className="acs-fab">
        <button
          onClick={() => openWhatsApp('Olá! Vi o site e gostaria de falar sobre os serviços.')}
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
            justifyContent: 'center',
            animation: 'pulse 2s infinite'
          }}
          aria-label="Falar no WhatsApp"
        >
          💬
        </button>
      </div>

      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="acs-grid-footer" style={{ marginBottom: '2rem' }}>
            <div>
              <h3 style={{ color: '#FFD700', fontSize: '1.3rem', marginBottom: '1rem' }}>Auto Check Saúde</h3>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>
                Tradição de mais de 50 anos em reparação automotiva. Especialistas em sistema elétrico e injeção eletrônica.
              </p>
            </div>

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '1.1rem', marginBottom: '1rem' }}>Principais Serviços</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', fontSize: '0.9rem' }}>
                <li>• Sistema Elétrico</li>
                <li>• Injeção Eletrônica</li>
                <li>• Motor e Câmbio</li>
                <li>• Ar-condicionado</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '1.1rem', marginBottom: '1rem' }}>Contato</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0.5rem 0' }}>📱 (11) 95848-9220</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0.5rem 0' }}>☎️ {phoneDisplay}</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0.5rem 0' }}>📍 Av. do Cursino, 2012</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0.5rem 0' }}>Jardim da Saúde - São Paulo</p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #333', paddingTop: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>© {currentYear} Auto Check Saúde. Todos os direitos reservados.</p>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>Sede própria • Certificações Delphi, GM, Fiat, SEBRAE • TV Oficina Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
