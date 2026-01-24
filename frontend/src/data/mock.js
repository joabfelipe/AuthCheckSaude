// Mock data para Auto Check Saúde - Oficina Mecânica
export const mockData = {
  company: {
    name: 'Auto Check Saúde',
    tagline: 'Cuidando da saúde do seu veículo com excelência técnica',
    phone: '(11) 4063-0515',
    whatsapp: '5511940630515',
    email: 'contato@autochecksaude.com.br',
    address: 'Av. do Cursino, 2012 - Vila da Saúde, São Paulo - SP',
    workingHours: 'Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h'
  },
  
  hero: {
    title: 'A Saúde do Seu Veículo em Primeiro Lugar',
    subtitle: 'Check-ups preventivos, diagnósticos precisos e reparos de qualidade. Mantenha seu veículo sempre em perfeito estado com nossos serviços especializados.',
    primaryCTA: 'Agendar Check-up',
    secondaryCTA: 'Falar com Especialista'
  },
  
  benefits: [
    {
      title: 'Diagnóstico Preciso e Preventivo',
      description: 'Identificamos problemas antes que se tornem grandes reparos, utilizando equipamentos modernos e experiência técnica.',
      icon: 'Search'
    },
    {
      title: 'Atendimento Técnico Especializado',
      description: 'Nossa equipe qualificada oferece soluções personalizadas para cada tipo de veículo e necessidade.',
      icon: 'Users'
    },
    {
      title: 'Serviços de Alta Qualidade',
      description: 'Usinagem de precisão, peças certificadas e equipamentos de última geração para resultados superiores.',
      icon: 'CheckCircle'
    },
    {
      title: 'Agilidade e Confiabilidade',
      description: 'Processos otimizados, prazos cumpridos e garantia em todos os serviços realizados.',
      icon: 'Clock'
    }
  ],
  
  services: [
    {
      id: 1,
      title: 'Check-up Automotivo Completo',
      description: 'Revisão preventiva abrangente do seu veículo com diagnóstico eletrônico, análise de fluidos e inspeção geral.',
      benefits: ['Diagnóstico eletrônico completo', 'Análise de fluidos e filtros', 'Inspeção de freios e suspensão', 'Relatório técnico detalhado'],
      target: 'Ideal para manutenção preventiva regular',
      price: 'A partir de R$ 150'
    },
    {
      id: 2,
      title: 'Serviços de Usinagem Automotiva',
      description: 'Usinagem de precisão para motores e componentes, incluindo retífica de blocos, cabeçotes e peças especiais.',
      benefits: ['Retífica de motor completa', 'Usinagem de cabeçotes', 'Brunimento de cilindros', 'Balanceamento de conjuntos'],
      target: 'Para reparos de motor e recondicionamento',
      price: 'Sob orçamento'
    },
    {
      id: 3,
      title: 'Manutenção Preventiva',
      description: 'Serviços regulares de manutenção para manter seu veículo sempre em perfeito funcionamento.',
      benefits: ['Troca de óleo e filtros', 'Alinhamento e balanceamento', 'Revisão de freios', 'Manutenção do ar-condicionado'],
      target: 'Manutenção regular conforme manual do fabricante',
      price: 'A partir de R$ 80'
    },
    {
      id: 4,
      title: 'Reparo de Motor',
      description: 'Reparos especializados em motores com diagnóstico avançado e soluções técnicas de alta qualidade.',
      benefits: ['Diagnóstico de falhas', 'Reparo de componentes internos', 'Teste de compressão', 'Garantia nos serviços'],
      target: 'Para veículos com problemas de motor identificados',
      price: 'Orçamento personalizado'
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