import { Reveal } from './Reveal';
import { VideoPlayer } from './VideoPlayer';
import { events } from '../data/events';

export function Events() {
  if (events.length === 0) return null;

  return (
    <section id="eventos" className="container section events-section">
      <Reveal>
        <div className="section-head">
          <span className="kicker">04 — EVENTOS</span>
          <h2 className="section-title">Eventos realizados com a Teora</h2>
          <p className="section-lead">Projetos que saíram da tela: organização, presença digital e registro dos eventos que ajudei a colocar de pé.</p>
        </div>
      </Reveal>
      <div className="events-grid">
        {events.map((ev, i) => (
          <Reveal key={ev.titulo} delay={i * 0.06}>
            <article className="event-card">
              <div className="event-media">
                {ev.video
                  ? <VideoPlayer src={ev.video} poster={ev.capa} label={ev.badge} alt={'Registro do evento ' + ev.titulo} />
                  : ev.capa
                    ? <img src={ev.capa} alt={'Registro do evento ' + ev.titulo} loading="lazy" />
                    : <span className="placeholder-label">[ registro — {ev.titulo} ]</span>}
              </div>
              <div className="event-body">
                <strong className="event-name">{ev.titulo}</strong>
                <p className="event-desc">{ev.desc}</p>
                <div className="project-tags">
                  {ev.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
