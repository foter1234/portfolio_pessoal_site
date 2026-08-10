export interface Project {
  /** Nome do projeto. */
  nome: string;
  /** Descrição do projeto. */
  desc: string;
  /** Categorias/tecnologias exibidas como etiquetas no card. */
  tags: string[];
  /** Imagem de capa (arquivos em public/projetos/). */
  imagem?: string;
  /** Vídeo de demonstração — aparece no lugar da imagem, com capa e botão de play. */
  video?: string;
  /** Marque true se o vídeo for vertical (gravado no celular). */
  videoVertical?: boolean;
  /** Etiqueta sobre o vídeo. Ex.: 'VÍDEO · DEMO' */
  videoBadge?: string;
  /** Links — deixe em branco para o botão não aparecer. */
  github?: string;
  deploy?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// COMO ADICIONAR UM PROJETO — copie um dos blocos abaixo e ajuste os campos.
// Imagens e vídeos ficam em public/projetos/.
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    nome: 'Olho de Odin',
    desc: 'CRM de prospecção inteligente: encontra leads no Google Maps, dispara mensagens em massa, acompanha follow-ups automáticos e deixa a IA responder — tudo em um só painel, com dashboard em tempo real.',
    tags: ['SaaS', 'Sistema', 'IA', 'Automações'],
    imagem: '/projetos/olho-de-odin.jpg'
  },
  {
    nome: 'Teora Solutions',
    desc: 'Site institucional da Teora — portfólio, cases, equipe e contato, com alternância entre tema claro e escuro.',
    tags: ['Site Institucional', 'Web'],
    imagem: '/projetos/teora-solutions.jpg',
    deploy: 'https://teorasolutions.com'
  },
  {
    nome: 'Teora Agendamentos',
    desc: 'Sistema de agendamentos para barbearias e salões: horários, serviços e confirmação em uma interface pensada para o balcão.',
    tags: ['Sistema', 'Web'],
    imagem: '/projetos/teora-agendamentos.webp',
    deploy: 'https://teor-agendamentos.vercel.app/'
  },
  {
    nome: '36ª Corrida do Trabalhador',
    desc: 'Página oficial da corrida ciclística e pedestre de Nova Andradina — MS, com QR codes dos realizadores e um jogo da memória em JavaScript para o público do evento.',
    tags: ['Sistema', 'Evento', 'JavaScript'],
    imagem: '/projetos/corrida-do-trabalhador.webp',
    deploy: 'https://corridadotrabalhador.vercel.app/'
  },
  {
    nome: 'Gmartins Refrigeração',
    desc: 'Agendamento de serviços e loja virtual integrados no mesmo site, para uma assistência que vende peças e atende em campo.',
    tags: ['E-commerce', 'Sistema', 'Web'],
    imagem: '/projetos/gmartins-refrigeracao.webp',
    deploy: 'https://gmartinsrefrigeracao.netlify.app'
  },
  {
    nome: 'Solar Tech',
    desc: 'Site institucional de energia solar com a promessa direta no hero: parar de pagar pela energia e passar a gerá-la.',
    tags: ['Site Institucional', 'Web'],
    imagem: '/projetos/solar-tech.webp',
    deploy: 'https://site-institucional-solar-tech.vercel.app/'
  },
  {
    nome: 'Inbracon',
    desc: 'Landing de engenharia e estruturas metálicas para o agro — projeto de colheita e ganho de espaço apresentados de forma técnica e direta.',
    tags: ['Landing Page', 'Web'],
    imagem: '/projetos/inbracon.webp',
    deploy: 'https://inbracon.com'
  },
  {
    nome: 'Crianças Felizes',
    desc: 'Landing page para associação sem fins lucrativos, construída em torno da causa e do convite à doação.',
    tags: ['Landing Page', 'Social', 'Web'],
    imagem: '/projetos/criancas-felizes.webp',
    deploy: 'https://associacaocriancasfelizes.netlify.app/'
  },
  {
    nome: 'Renova Odontologia',
    desc: 'Site para clínica especializada em implantes dentários em Salvador — BA, com agendamento de consulta pelo WhatsApp a qualquer hora.',
    tags: ['Landing Page', 'Web'],
    imagem: '/projetos/renova-odonto.jpg',
    deploy: 'https://renovaclinicaodontologica.com'
  },
  {
    nome: 'Descubra Seu Precatório',
    desc: 'Página de análise de precatórios para credores e advogados, com avaliação gratuita e conformidade com a LGPD em destaque.',
    tags: ['Landing Page', 'Web'],
    imagem: '/projetos/descubra-precatorio.jpg',
    deploy: 'https://descubraseuprecatorio.com/'
  },
  {
    nome: 'Advogadas da Saúde',
    desc: 'Landing de captação para escritório especializado em Direito da Saúde, com depoimentos, equipe e contato em um clique.',
    tags: ['Landing Page', 'Web'],
    imagem: '/projetos/advogadas-da-saude.jpg',
    deploy: 'https://advogadas-da-saude.vercel.app/'
  },
  {
    nome: 'Danilo Lima Advogados',
    desc: 'Site institucional para advogado especialista em Direito do Consumidor, com layout escuro de alto contraste e indicador de atendimento online.',
    tags: ['Site Institucional', 'Web'],
    imagem: '/projetos/danilo-lima.jpg',
    deploy: 'https://site-advogado-kappa.vercel.app/'
  },
  {
    nome: 'Almeida e Milani',
    desc: 'Landing page de advocacia especializada em direito trabalhista, com foco em autoridade e captação de clientes.',
    tags: ['Landing Page', 'Web'],
    imagem: '/projetos/almeida-milani.png',
    deploy: 'https://almeidaemilani.com'
  },
  {
    nome: 'Maicon Ambrosim',
    desc: 'Landing page de advocacia, assessoria e consultoria jurídica, com identidade em preto e dourado.',
    tags: ['Landing Page', 'Web'],
    imagem: '/projetos/maicon-ambrosim.png',
    deploy: 'https://site-maicon-ambrosim.vercel.app'
  },
  {
    nome: 'Wekson Lima Agro',
    desc: 'Landing para advogado especializado em dívidas do produtor rural, falando a língua de quem vive do campo.',
    tags: ['Landing Page', 'Web'],
    imagem: '/projetos/wekson-lima-agro.png',
    deploy: 'https://site-wekson-lima-agro.vercel.app'
  },
  {
    nome: 'Lawyer J.S',
    desc: 'Landing page em inglês para serviços jurídicos de advocacia internacional.',
    tags: ['Landing Page', 'Web'],
    imagem: '/projetos/lawyer-js.png',
    deploy: 'https://j-smith-esq-site.vercel.app'
  },
  {
    nome: 'Estética Premium',
    desc: 'Landing page de estética criada como experimento de conversão — autoridade, prova social e agendamento em um fluxo só.',
    tags: ['Landing Page', 'Experimento', 'Web'],
    imagem: '/projetos/estetica-premium.png',
    deploy: 'https://site-exemplo-estetico.netlify.app'
  }
];
