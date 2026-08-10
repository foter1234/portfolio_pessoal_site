export interface Event {
  titulo: string;
  desc: string;
  /** Vídeo do evento (public/eventos/). */
  video?: string;
  /** Frame de capa exibido antes do play. */
  capa?: string;
  /** Etiqueta sobre o vídeo. */
  badge?: string;
  tags: string[];
}

export const events: Event[] = [
  {
    titulo: '36ª Corrida do Trabalhador',
    desc: 'Corrida ciclística e pedestre de Nova Andradina — MS. Cuidei da frente digital do evento: a página oficial, o minigame para o público e o registro do dia.',
    video: '/eventos/evento-corrida.mp4',
    capa: '/eventos/evento-corrida-capa.jpg',
    badge: 'VÍDEO · 36ª CORRIDA',
    tags: ['Evento', 'Web', 'Marketing Digital']
  },
  {
    titulo: 'Ação Solidária',
    desc: 'Ação social acompanhada de ponta a ponta pela Teora — da divulgação nas redes ao registro em vídeo do dia do evento.',
    video: '/eventos/evento-acao-solidaria.mp4',
    capa: '/eventos/evento-acao-solidaria-capa.jpg',
    badge: 'VÍDEO · AÇÃO SOLIDÁRIA',
    tags: ['Evento', 'Marketing Digital', 'Social']
  }
];
