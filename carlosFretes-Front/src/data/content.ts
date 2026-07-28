import { ServiceCard, BenefitCard, Testimonial, FAQItem, CoverageAreaItem } from '../types';

export const HERO_CONTENT = {
  title: "Fretes e Pequenas Mudanças em Curitiba e Região",
  subtitle: "Atendimento direto, rápido e pontual em Curitiba e Região Metropolitana. Faça uma simulação em menos de 1 minuto.",
  whatsappNumber: "5541999999999",
  whatsappFormatted: "(41) 99999-9999",
  trustBadges: [
    "Atendimento Direto e Ágil",
    "Sem Custos Ocultos",
    "Mantas e Proteção Inclusas",
    "Avaliação 4.9/5 ★ de Clientes"
  ]
};

export const BENEFITS: BenefitCard[] = [
  {
    id: 'rapidez',
    title: 'Rapidez e Agilidade',
    description: 'Resposta imediata para orçamentos e disponibilidade para atendimentos ágeis ou com horário agendado.',
    iconName: 'Zap'
  },
  {
    id: 'seguranca',
    title: 'Cuidado com seus Bens',
    description: 'Uso de mantas acolchoadas, papelão e cintas de fixação para proteger seus móveis e eletrodomésticos durante todo o trajeto.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'pontualidade',
    title: 'Pontualidade Garantida',
    description: 'Respeito ao horário combinado de coleta e entrega, garantindo tranquilidade do início ao fim.',
    iconName: 'Clock'
  },
  {
    id: 'atendimento',
    title: 'Atendimento Direto',
    description: 'Você combina tudo diretamente, sem intermediários, sem ruído e sem complicação.',
    iconName: 'UserCheck'
  },
  {
    id: 'preco',
    title: 'Preço Claro e Honesto',
    description: 'Orçamento transparente calculado na hora com valor base a partir de R$ 220,00. Sem surpresas ou taxas extras escondidas.',
    iconName: 'BadgeCheck'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Qual a Origem e Destino?',
    description: 'Indique onde os itens serão coletados e para onde serão entregues em Curitiba ou Região.'
  },
  {
    step: '02',
    title: 'O que Vamos Transportar?',
    description: 'Selecione a categoria dos itens e se precisará de um ajudante adicional.'
  },
  {
    step: '03',
    title: 'Confira o Valor Estimado',
    description: 'Veja instantaneamente o valor estimado do seu frete (a partir de R$ 220,00).'
  },
  {
    step: '04',
    title: 'Combine no WhatsApp',
    description: 'Envie o resumo diretamente para o WhatsApp com 1 clique para agendar o serviço.'
  }
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'fretes_rapidos',
    title: 'Fretes Rápidos e Entregas Expressas',
    tag: 'Mais Solicitado',
    description: 'Transporte direto de caixas, compras, móveis avulsos ou volumes específicos entre bairros de Curitiba e RMC.',
    highlights: ['Atendimento rápido no mesmo dia', 'Proteção com mantas acolchoadas', 'Auxílio na carga e descarga incluso'],
    iconName: 'Truck',
    popular: true
  },
  {
    id: 'pequenas_mudancas',
    title: 'Pequenas Mudanças Residenciais',
    tag: 'Ideal para Apartamentos',
    description: 'Mudanças de estúdios, quitinetes e apartamentos. Acomodação organizada e segura no veículo.',
    highlights: ['Opção de ajudante adicional (+R$ 100)', 'Cuidado total com móveis e eletros', 'Atendimento a casas e prédios'],
    iconName: 'Home',
    popular: true
  },
  {
    id: 'moveis_eletros',
    title: 'Transporte de Móveis e Eletrodomésticos',
    tag: 'Cuidado Especial',
    description: 'Transporte de geladeiras, sofás, máquinas de lavar, camas, armários e mesas com fixação reforçada.',
    highlights: ['Mantas acolchoadas de proteção', 'Cintas de amarração resistentes', 'Cuidado individual com cada item'],
    iconName: 'Package'
  },
  {
    id: 'mudancas_comerciais',
    title: 'Fretes Comerciais e Escritórios',
    tag: 'Para Escritórios e Lojas',
    description: 'Transporte pontual de equipamentos, arquivos e mobiliário para pequenos estabelecimentos comerciais.',
    highlights: ['Emissão de recibo simples', 'Horários flexíveis de atendimento', 'Pontualidade rigorosa'],
    iconName: 'Building'
  },
  {
    id: 'viagens_intermunicipais',
    title: 'Viagens para Litoral e Cidades Próximas',
    tag: 'Região e Litoral',
    description: 'Transporte de Curitiba para Ponta Grossa, Paranaguá, Matinhos, Guaratuba, Campo Largo e cidades vizinhas.',
    highlights: ['Trajeto rodoviário seguro', 'Preço combinado fechado', 'Acompanhamento do percurso'],
    iconName: 'MapPin'
  },
  {
    id: 'eventos_e_feiras',
    title: 'Transporte para Eventos e Estandes',
    tag: 'Logística Pontual',
    description: 'Levamos e buscamos materiais, estruturas leves, suportes e equipamentos para eventos e feiras.',
    highlights: ['Agendamento rigoroso', 'Cuidados com itens sensíveis', 'Carga e descarga pontual'],
    iconName: 'Calendar'
  }
];

export const COVERAGE_AREAS: CoverageAreaItem[] = [
  {
    name: 'Curitiba (Todos os Bairros)',
    zone: 'Curitiba',
    details: 'Atendimento diário em todas as regiões da capital paranaense.',
    keyNeighborhoodsOrCities: ['Batel', 'Água Verde', 'Centro', 'Portão', 'Santa Felicidade', 'CIC', 'Boqueirão', 'Cajuru', 'Pinheirinho', 'Ecoville', 'Cabral', 'Juvevê', 'Xaxim', 'Rebouças', 'Capão Raso']
  },
  {
    name: 'Região Metropolitana (RMC)',
    zone: 'RMC',
    details: 'Coleta e entrega ágil em cidades vizinhas da Grande Curitiba.',
    keyNeighborhoodsOrCities: ['São José dos Pinhais', 'Colombo', 'Pinhais', 'Araucária', 'Campo Largo', 'Fazenda Rio Grande', 'Almirante Tamandaré', 'Piraquara', 'Quatro Barras', 'Campina Grande do Sul']
  },
  {
    name: 'Cidades Próximas & Litoral',
    zone: 'Cidades Próximas',
    details: 'Fretes de média e longa distância para o interior e praias.',
    keyNeighborhoodsOrCities: ['Ponta Grossa', 'Paranaguá', 'Matinhos (Caiobá)', 'Guaratuba', 'Morretes', 'Antonina', 'Lapa', 'Palmeira', 'Castro']
  }
];

export const DIFFERENTIALS = [
  {
    title: 'Proteção com Mantas e Cintas',
    description: 'Seus móveis são embalados e fixados de forma segura para evitar qualquer risco ou arranhão durante o trajeto.'
  },
  {
    title: 'Contato Direto com o Motorista',
    description: 'Sem intermediários. Você acerta todos os detalhes diretamente com quem fará o transporte dos seus bens.'
  },
  {
    title: 'Motorista Sempre Auxilia na Carga',
    description: 'Não se preocupe com o peso solto. O motorista participa ativamente da carga e descarga do seu frete.'
  },
  {
    title: 'Ajudante Adicional Quando Necessário',
    description: 'Caso precise de auxílio extra para móveis muito grandes ou pesados, você pode solicitar ajudantes adicionais.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Juliana Mendes',
    roleLocation: 'Batel → Água Verde, Curitiba',
    comment: 'Serviço super pontual e muito cuidadoso! Protegeu minha geladeira e o sofá com mantas e ajudou em cada detalhe. Recomendo demais!',
    rating: 5,
    date: 'Há 3 dias',
    serviceType: 'Pequena Mudança'
  },
  {
    id: 't2',
    name: 'Roberto Silveira',
    roleLocation: 'São José dos Pinhais → Centro, Curitiba',
    comment: 'Simulei no site e em menos de 2 minutos já estava alinhado no WhatsApp. O valor foi exatamente o do orçamento. Trabalho muito honesto.',
    rating: 5,
    date: 'Há 1 semana',
    serviceType: 'Frete Rápido'
  },
  {
    id: 't3',
    name: 'Fernanda & Marcos',
    roleLocation: 'Portão, Curitiba → Campo Largo',
    comment: 'Solicitamos o ajudante adicional e a mudança foi feita super rápido! Atendimento extremamente educado, atencioso e organizado.',
    rating: 5,
    date: 'Há 2 semanas',
    serviceType: 'Mudança Residencial'
  },
  {
    id: 't4',
    name: 'Ricardo Santos',
    roleLocation: 'CIC, Curitiba → Pinhais',
    comment: 'Serviço nota 10! Pontualidade britânica no horário marcado. Transportou nossas caixas com muito cuidado.',
    rating: 5,
    date: 'Há 3 semanas',
    serviceType: 'Frete Comercial'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como é calculado o valor do orçamento do frete?',
    answer: 'O orçamento é calculado considerando a distância entre as cidades e bairros informados, o porte da mudança, a necessidade de ajudantes e o tipo de acesso no local. A estimativa final é gerada instantaneamente no site.'
  },
  {
    id: 'faq-2',
    question: 'O motorista ajuda no carregamento e descarregamento?',
    answer: 'Sim! O motorista sempre participa do serviço e auxilia no carregamento e descarregamento dos seus pertences sem custo extra além do frete regular.'
  },
  {
    id: 'faq-3',
    question: 'Quando devo solicitar um ajudante adicional?',
    answer: 'Se você tiver móveis muito pesados (como sofás grandes, geladeiras side-by-side, guarda-roupas pesados) ou escadas longas, vale a pena solicitar 1 ou 2 ajudantes adicionais para agilizar o serviço.'
  },
  {
    id: 'faq-4',
    question: 'Qual é o valor mínimo do orçamento?',
    answer: 'O valor mínimo do orçamento é sempre de R$ 220,00, mesmo para trajetos curtos na mesma região. Esse valor garante a reserva e a mobilização inicial do veículo.'
  },
  {
    id: 'faq-5',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix, cartões de débito e crédito, além de pagamento em dinheiro no momento da entrega do serviço.'
  },
  {
    id: 'faq-6',
    question: 'Qual a região de atendimento?',
    answer: 'Atendemos todos os bairros de Curitiba, os 29 municípios da Região Metropolitana e viagens para o Litoral e interior.'
  }
];

export const DRIVER_PROFILE = {
  name: "Carlos",
  role: "Profissional de Fretes e Transporte",
  experienceYears: "Anos de atuação em Curitiba e Região Metropolitana",
  completedFreights: "Centenas de fretes e pequenas mudanças atendidos com dedicação",
  bio: "Prezo pelo respeito aos bens dos meus clientes e pela pontualidade nos horários combinados. Trabalho com veículo preparado, mantas acolchoadas de proteção, cintas reforçadas e um atendimento humano e amigável.",
  badges: ["Atendimento Próprio", "Mantas Acolchoadas", "Pontualidade e Cuidado", "Orçamento Transparente"]
};
