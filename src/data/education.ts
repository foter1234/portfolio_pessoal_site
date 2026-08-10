export interface Education { curso: string; instituicao: string; periodo: string; status?: string; }

export const education: Education[] = [
  { curso: 'Sistemas de Informação', instituicao: 'UEMS', periodo: '2024 — atual', status: 'Cursando' },
  { curso: 'Técnico em Informática', instituicao: 'IFMS', periodo: '2021 — 2023', status: 'Concluído' }
];

export interface Institution { titulo: string; imagem?: string; }

export const institutions: Institution[] = [
  { titulo: 'IFMS', imagem: '/instituicoes/ifms.jpg' },
  { titulo: 'UEMS', imagem: '/instituicoes/uems.jpg' },
  { titulo: 'UEMS', imagem: '/instituicoes/logo-uems.png' }
];
