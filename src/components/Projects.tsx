import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { VideoPlayer } from './VideoPlayer';
import { projects } from '../data/projects';

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 8,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    });
  }

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, []);

  function slide(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.project-card') as HTMLElement | null;
    const passo = card ? card.offsetWidth + 20 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * passo, behavior: 'smooth' });
  }

  const vazio = projects.length === 0;

  return (
    <section id="projetos" className="container section projects-section">
      <Reveal>
        <div className="section-head">
          <span className="kicker">03 — PROJETOS</span>
          <h2 className="section-title">Projetos</h2>
          <p className="section-lead">Sites, sistemas e landing pages que construí para clientes reais — a maioria está no ar, é só abrir.</p>
        </div>
      </Reveal>
      <div className="carousel-shell">
        {!vazio && (
          <>
            <button type="button" className="carousel-btn prev" onClick={() => slide(-1)} disabled={edges.start} aria-label="Projetos anteriores">
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className="carousel-btn next" onClick={() => slide(1)} disabled={edges.end} aria-label="Próximos projetos">
              <FiChevronRight aria-hidden="true" />
            </button>
          </>
        )}
        <div className="projects-carousel" ref={trackRef} onScroll={updateEdges}>
          {projects.map((p) => (
            <article className="project-card" key={p.nome}>
              <div className={p.videoVertical ? 'project-image vertical' : 'project-image'}>
                {p.video
                  ? <VideoPlayer src={p.video} poster={p.imagem} label={p.videoBadge} alt={'Capa do projeto ' + p.nome} />
                  : p.imagem
                    ? <img src={p.imagem} alt={'Imagem do projeto ' + p.nome} loading="lazy" />
                    : <span className="placeholder-label">[ screenshot — {p.nome} ]</span>}
              </div>
              <div className="project-body">
                <div className="project-head">
                  <strong className="project-name">{p.nome}</strong>
                  <div className="project-links">
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>}
                    {p.deploy && <a href={p.deploy} target="_blank" rel="noreferrer"><FiExternalLink aria-hidden="true" /> Ver site</a>}
                  </div>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {vazio && (
        <Reveal>
          <div className="projects-empty">
            <span className="placeholder-label">[ projetos em preparação ]</span>
            <p>Estou selecionando os projetos que melhor representam meu trabalho — eles entram aqui em breve.</p>
          </div>
        </Reveal>
      )}
    </section>
  );
}
