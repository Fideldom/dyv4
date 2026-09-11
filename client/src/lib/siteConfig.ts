/* DYLANDE — Navy Precision: dados editáveis separados da interface para facilitar a personalização real.
  O número de WhatsApp e o email existem apenas aqui — nenhum outro ficheiro deve escrever estes valores
  directamente, para evitar o número ficar espalhado e desalinhado pelo código (ver SiteLayout, Contact
  e WhatsAppButton, que importam tudo daqui). */
export const siteConfig = {
  contact: {
    email: "geral.dylande@gmail.com",
    phone: "+244 928 271 370",
    phone1: " +244 923 705 159",
    phone2: "+244 951 657 129",
    whatsapp: "244928271370",
    location: "Localização: Zango III, Icolo e Brngo-Angola · Seg–Sex, 08h–17h",
  },
  /* Canal dedicado ao programa de revendedores — número e mensagem próprios, independentes do contacto geral. */
  reseller: {
    whatsapp: "244928271370",
    whatsappMessage: "Olá, gostaria de me tornar revendedor. O que é necessário fazer?",
    loginUrl: "https://dylande.com/revendedor.html",
  },
  /* Mensagem pré-preenchida do WhatsApp, ajustada ao contexto de cada rota (secção 47 do briefing). */
  whatsappMessages: {
    default: "Olá, gostaria de conhecer as soluções da DYLANDE.",
    "/software": "Olá, gostaria de conhecer melhor um dos softwares da DYLANDE.",
    "/parceiros": "Olá, vi a página de parceiros da DYLANDE e gostaria de saber mais.",
    "/servicos": "Olá, gostaria de falar sobre um serviço de TI.",
    "/solucoes": "Olá, gostaria de perceber qual a solução certa para a minha operação.",
    "/certificacoes": "Olá, vi as certificações da DYLANDE e gostaria de saber mais.",
    "/contacto": "Olá, gostaria de solicitar uma proposta à DYLANDE.",
  } as Record<string, string>,
  stats: [
    ["+50", "Soluções desenvolvidas"],
    ["+30", "Clientes atendidos"],
    ["+5", "Anos de experiência"],
    ["24/7", "Suporte e acompanhamento"],
  ],
  catalog: {
    status: "demonstrativo",
    productName: "Núcleo Gestão",
    category: "GESTÃO EMPRESARIAL",
    description: "Operações, indicadores e equipas ligados numa visão única para decidir com mais contexto.",
    features: ["Operações num só lugar", "Indicadores accionáveis"],
  },
  portfolio: {
    status: "em atualização",
    note: "Os projetos reais da DYLANDE serão adicionados assim que os respetivos detalhes forem disponibilizados.",
  },
  testimonials: {
    status: "aguarda conteúdo real",
    note: "Esta área está preparada para receber testemunhos reais, com autorização dos respetivos clientes.",
  },
} as const;

export const heroSlides = [
  { image: "/assets/dylande-hero.webp", label: "Tecnologia para negócios em movimento", accent: "transforma" },
  { image: "/assets/dylande-dashboard.webp", label: "Sistemas para operações com mais controlo", accent: "organiza" },
  { image: "/assets/dylande-team.webp", label: "Parceria próxima para decisões concretas", accent: "aproxima" },
] as const;
