export interface Experience { cargo: string; empresa: string; periodo: string; desc: string; }

export const experiences: Experience[] = [
  { cargo: 'Cofundador', empresa: 'Teora Solutions', periodo: 'atual', desc: 'Desenvolvimento web, sistemas, automações, inteligência artificial e marketing digital para clientes.' },
  { cargo: 'Operador de Empilhadeira', empresa: 'Corfio / Eletrocal', periodo: '02/2024 — 03/2026', desc: 'Operação de empilhadeira.' }
];

export interface Differential { titulo: string; }

// Diferenciais destacados na seção "Sobre".
export const differentials: Differential[] = [
  { titulo: 'Desenvolvimento Web' },
  { titulo: 'Automação' },
  { titulo: 'Marketing Digital' },
  { titulo: 'Sistemas completos' }
];
