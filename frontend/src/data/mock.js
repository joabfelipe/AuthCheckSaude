// Auto Check Saúde - Dados Reais da Empresa
export const mockData = {
  company: {
    name: 'Auto Check Saúde',
    tagline: 'Segurança & Qualidade em serviços de reparação automotiva',
    phone: '(11) 4063-0515',
    whatsapp: '5511940630515',
    email: 'contato@autochecksaude.com.br',
    address: 'Av. do Cursino, 2012 - Jardim da Saúde, São Paulo - SP, CEP 04132-001',
    workingHours: 'Segunda a Sexta: 8h às 19h | Sábado: 8h às 14h'
  },
  
  hero: {
    title: 'Segurança & Qualidade em Reparação Automotiva',
    subtitle: 'Seguimos normas da ABNT com profissionais constantemente treinados e capacitados. Estamos em constante aperfeiçoamento para atender suas expectativas na manutenção preventiva do seu automóvel, gerando segurança em sua mobilidade.',
    primaryCTA: 'Check-up Gratuito',
    secondaryCTA: 'Falar com Especialista'
  },
  
  benefits: [
    {
      title: 'Tradição e Experiência',
      description: 'Fundada ainda na década de 60, acumulamos mais de 5 décadas de experiência em reparação automotiva com especialidade em sistema elétrico.',
      icon: 'Award'
    },
    {
      title: 'Certificações e Qualidade',
      description: 'Certificados pela CETESB, ASE e diversos fabricantes. Seguimos rigorosamente as normas da ABNT em todos os procedimentos.',
      icon: 'CheckCircle'
    },
    {
      title: 'Profissionais Capacitados',
      description: 'Equipe constantemente treinada e atualizada através de cursos técnicos e parcerias com SENAI, SEBRAE, universidades e fabricantes.',
      icon: 'Users'
    },
    {
      title: 'Centro de Treinamento',
      description: 'Sede própria com sala de recepção da TV Oficina Brasil e biblioteca técnica para constante atualização profissional.',
      icon: 'BookOpen'
    }
  ],
  
  services: [
    {
      id: 1,
      title: 'Injeção Eletrônica',
      description: 'Diagnóstico e reparo completo do sistema de injeção eletrônica com equipamentos de última geração e profissionais especializados.',
      benefits: ['Diagnóstico eletrônico avançado', 'Limpeza de bicos injetores', 'Regulagem e calibragem', 'Teste de componentes'],
      target: 'Veículos com falhas no sistema de alimentação',
      price: 'Sob orçamento'
    },
    {
      id: 2,
      title: 'Motor',
      description: 'Serviços completos de motor incluindo retífica, usinagem, montagem e todos os reparos necessários.',
      benefits: ['Retífica completa', 'Usinagem de precisão', 'Montagem e regulagem', 'Teste de compressão'],
      target: 'Motores com desgaste ou problemas internos',
      price: 'Orçamento personalizado'
    },
    {
      id: 3,
      title: 'Sistema Elétrico',
      description: 'Nossa especialidade original. Diagnóstico e reparo completo do sistema elétrico automotivo.',
      benefits: ['Diagnóstico elétrico completo', 'Reparo de alternadores', 'Sistemas de ignição', 'Instalação de acessórios'],
      target: 'Problemas elétricos em geral',
      price: 'A partir de R$ 80'
    },
    {
      id: 4,
      title: 'Ar-condicionado',
      description: 'Manutenção e reparo completo do sistema de ar-condicionado automotivo com gás ecológico.',
      benefits: ['Carga de gás refrigerante', 'Limpeza do sistema', 'Troca de filtros', 'Reparo de compressores'],
      target: 'Sistemas de climatização',
      price: 'A partir de R$ 150'
    },
    {
      id: 5,
      title: 'Freios',
      description: 'Manutenção preventiva e corretiva do sistema de freios para sua segurança nas estradas.',
      benefits: ['Troca de pastilhas e lonas', 'Sangria do sistema', 'Reparo de cilindros', 'Regulagem completa'],
      target: 'Manutenção de segurança essencial',
      price: 'A partir de R$ 120'
    },
    {
      id: 6,
      title: 'Suspensão',
      description: 'Serviços completos de suspensão para conforto e estabilidade do seu veículo.',
      benefits: ['Amortecedores', 'Molas e barras', 'Buchas e pivôs', 'Alinhamento e balanceamento'],
      target: 'Conforto e dirigibilidade',
      price: 'Sob consulta'
    },
    {
      id: 7,
      title: 'Escapamento',
      description: 'Sistema completo de escapamento para redução de ruídos e emissões.',
      benefits: ['Catalisadores', 'Silenciosos', 'Tubulações', 'Sistemas anti-poluição'],
      target: 'Controle de emissões e ruído',
      price: 'Variável conforme sistema'
    },
    {
      id: 8,
      title: 'Arrefecimento',
      description: 'Manutenção do sistema de arrefecimento para evitar superaquecimento do motor.',
      benefits: ['Radiadores', 'Bombas d\'água', 'Termostatos', 'Mangueiras e abraçadeiras'],
      target: 'Prevenção de superaquecimento',
      price: 'A partir de R$ 90'
    }
  ],
  
  process: [
    {
      step: 1,
      title: 'Agendamento e Recepção',
      description: 'Entre em contato conosco e agende seu horário. Recebemos seu veículo e fazemos uma avaliação inicial.'
    },
    {
      step: 2,
      title: 'Diagnóstico e Orçamento',
      description: 'Realizamos diagnóstico completo com equipamentos modernos e apresentamos orçamento detalhado e transparente.'
    },
    {
      step: 3,
      title: 'Execução e Entrega',
      description: 'Executamos os serviços com qualidade e precision, testamos tudo e entregamos seu veículo em perfeitas condições.'
    }
  ],
  
  about: {
    mission: 'Proporcionar serviços automotivos de excelência, mantendo a "saúde" dos veículos com tecnologia, qualidade e atendimento diferenciado.',
    values: [
      'Compromisso com a qualidade técnica e satisfação do cliente',
      'Transparência em diagnósticos, orçamentos e prazos', 
      'Investimento constante em equipamentos e capacitação',
      'Garantia e responsabilidade em todos os serviços realizados'
    ],
    description: 'A Auto Check Saúde atua há mais de 25 anos no mercado automotivo, especializando-se em serviços de usinagem, manutenção preventiva e reparos de motores. Nossa equipe técnica altamente qualificada, aliada a equipamentos modernos, garante soluções eficientes e duradouras para manter a "saúde" do seu veículo sempre em dia.'
  },
  
  blogPosts: [
    {
      id: 1,
      title: 'A Importância da Manutenção Preventiva',
      excerpt: 'Descubra como a manutenção regular pode evitar grandes reparos e manter seu veículo sempre funcionando perfeitamente.',
      readTime: '5 min',
      category: 'Manutenção'
    },
    {
      id: 2,
      title: 'Sinais de que Seu Motor Precisa de Atenção',
      excerpt: 'Aprenda a identificar os primeiros sintomas de problemas no motor e quando procurar ajuda especializada.',
      readTime: '7 min',
      category: 'Diagnóstico'
    },
    {
      id: 3,
      title: 'Usinagem Automotiva: Quando é Necessária?',
      excerpt: 'Entenda os processos de usinagem e quando eles são recomendados para seu veículo.',
      readTime: '6 min',
      category: 'Usinagem'
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: 'Estanis Quevedo',
      text: 'Renato e time são gente fina demais, super competentes e atenciosos.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sergio Marques', 
      text: 'Oficina de qualidade com aplicação de peças de primeira linha.',
      rating: 5
    },
    {
      id: 3,
      name: 'Jones Jesus',
      text: 'Ótimo lugar para deixar seu carro em mãos de profissionais qualificados!',
      rating: 5
    }
  ]
};

// Função para simular agendamento via WhatsApp
export const generateWhatsAppLink = (service = '', message = '') => {
  const phone = mockData.company.whatsapp;
  const defaultMessage = message || `Olá! Gostaria de agendar um ${service || 'check-up automotivo'}. Poderia me ajudar com informações sobre horários disponíveis?`;
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

// Função para simular envio de formulário
export const submitContactForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Dados do formulário (MOCK):', formData);
      // Simulação de redirecionamento para WhatsApp após envio
      const whatsappMessage = `Olá! Enviei uma mensagem através do site. Nome: ${formData.name}, E-mail: ${formData.email}, Mensagem: ${formData.message}`;
      const whatsappLink = generateWhatsAppLink('', whatsappMessage);
      resolve({
        success: true,
        message: 'Mensagem enviada com sucesso! Você será redirecionado para o WhatsApp.',
        whatsappLink
      });
    }, 1000);
  });
};