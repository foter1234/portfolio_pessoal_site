export interface Tech { nome: string; icone: string; }
export interface TechCategory { nome: string; itens: Tech[]; destaque?: boolean }

// `icone` é a chave usada em components/TechIcon.tsx.
// `destaque: true` marca as categorias com as tecnologias principais.
export const technologies: TechCategory[] = [
  {
    nome: 'FRONTEND',
    destaque: true,
    itens: [
      { nome: 'HTML', icone: 'html' },
      { nome: 'CSS', icone: 'css' },
      { nome: 'JavaScript', icone: 'javascript' },
      { nome: 'React', icone: 'react' }
    ]
  },
  {
    nome: 'BACKEND & APIs',
    destaque: true,
    itens: [
      { nome: 'Node.js', icone: 'node' },
      { nome: 'Python', icone: 'python' },
      { nome: 'Java', icone: 'java' },
      { nome: 'APIs', icone: 'api' }
    ]
  },
  {
    nome: 'DADOS',
    destaque: true,
    itens: [
      { nome: 'SQL', icone: 'sql' },
      { nome: 'Supabase', icone: 'supabase' }
    ]
  },
  {
    nome: 'AUTOMAÇÕES',
    destaque: true,
    itens: [
      { nome: 'Selenium', icone: 'selenium' },
      { nome: 'Playwright', icone: 'playwright' },
      { nome: 'Automações', icone: 'automacao' }
    ]
  },
  {
    nome: 'INTELIGÊNCIA ARTIFICIAL',
    destaque: true,
    itens: [
      { nome: 'IA aplicada', icone: 'ia' },
      { nome: 'Integração de APIs de IA', icone: 'robot' }
    ]
  },
  {
    nome: 'FERRAMENTAS',
    itens: [
      { nome: 'Git', icone: 'git' },
      { nome: 'GitHub', icone: 'github' },
      { nome: 'Linux', icone: 'linux' }
    ]
  }
];

export interface SkillGroup { nome: string; itens: string[]; }

export const softSkills: SkillGroup = {
  nome: 'SOFT SKILLS',
  itens: ['Liderança', 'Comunicação', 'Trabalho em equipe', 'Organização', 'Resolução de problemas', 'Aprendizado rápido', 'Criatividade', 'Pensamento analítico', 'Gestão de projetos']
};

export const languages: SkillGroup = {
  nome: 'IDIOMAS',
  itens: ['Português — Nativo', 'Inglês — Intermediário']
};
