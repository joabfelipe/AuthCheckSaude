import React from 'react';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#000', margin: '2rem' }}>
        Auto Check Saúde - Site Funcionando!
      </h1>
      
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Há mais de 50 anos cuidando do seu veículo em São Paulo
        </p>
        
        <button 
          style={{
            backgroundColor: '#FFD700',
            color: '#000',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
          onClick={() => window.open('https://wa.me/5511940630515?text=Olá!%20Gostaria%20de%20agendar%20um%20check-up', '_blank')}
        >
          Agendar Check-up
        </button>
        
        <button 
          style={{
            backgroundColor: 'transparent',
            color: '#000',
            border: '2px solid #000',
            padding: '1rem 2rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick={() => window.open('https://wa.me/5511940630515?text=Olá!%20Preciso%20de%20um%20orçamento', '_blank')}
        >
          Solicitar Orçamento
        </button>
      </div>
      
      <section style={{ padding: '3rem 1rem', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>
          Nossos Serviços
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>Sistema Elétrico</h3>
            <p>Nossa especialidade há 50+ anos</p>
            <button 
              style={{
                backgroundColor: '#FFD700',
                color: '#000',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '20px',
                cursor: 'pointer',
                width: '100%'
              }}
              onClick={() => window.open('https://wa.me/5511940630515?text=Gostaria%20de%20orçamento%20para%20sistema%20elétrico', '_blank')}
            >
              Solicitar Orçamento
            </button>
          </div>
          
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>Injeção Eletrônica</h3>
            <p>Diagnóstico com equipamentos modernos</p>
            <button 
              style={{
                backgroundColor: '#FFD700',
                color: '#000',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '20px',
                cursor: 'pointer',
                width: '100%'
              }}
              onClick={() => window.open('https://wa.me/5511940630515?text=Gostaria%20de%20orçamento%20para%20injeção%20eletrônica', '_blank')}
            >
              Solicitar Orçamento
            </button>
          </div>
          
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>Reparação de Motor</h3>
            <p>Serviços completos de motor</p>
            <button 
              style={{
                backgroundColor: '#FFD700',
                color: '#000',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '20px',
                cursor: 'pointer',
                width: '100%'
              }}
              onClick={() => window.open('https://wa.me/5511940630515?text=Gostaria%20de%20orçamento%20para%20reparação%20de%20motor', '_blank')}
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Contato</h2>
        <p style={{ marginBottom: '1rem' }}>Av. do Cursino, 2012 - Jardim da Saúde, São Paulo - SP</p>
        <p style={{ marginBottom: '2rem' }}>(11) 4063-0515</p>
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
          onClick={() => window.open('https://wa.me/5511940630515?text=Olá!%20Vi%20o%20site%20da%20Auto%20Check%20Saúde', '_blank')}
        >
          💬 Falar no WhatsApp
        </button>
      </section>
    </div>
  );
};

export default Home;