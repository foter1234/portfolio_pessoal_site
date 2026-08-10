import { Reveal } from './Reveal';
import { experiences } from '../data/experience';
import { education, institutions } from '../data/education';

export function Experience() {
  return (
    <section id="experiencia" className="container section exp-section">
      <div className="exp-col">
        <Reveal>
          <div className="section-head">
            <span className="kicker">05 — EXPERIÊNCIA</span>
            <h2 className="section-title">Onde trabalhei</h2>
          </div>
        </Reveal>
        <div className="exp-list">
          {experiences.map((e, i) => (
            <Reveal key={e.cargo + e.periodo} delay={i * 0.08}>
              <div className="exp-card">
                <div className="exp-head">
                  <strong className="exp-role">{e.cargo}</strong>
                  <span className="exp-period">{e.periodo}</span>
                </div>
                <span className="exp-company">{e.empresa}</span>
                <span className="exp-desc">{e.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="exp-col">
        <Reveal>
          <div className="section-head">
            <span className="kicker">06 — FORMAÇÃO</span>
            <h2 className="section-title">Formação</h2>
          </div>
        </Reveal>
        <div className="exp-list">
          {education.map((f) => (
            <Reveal key={f.curso}>
              <div className="edu-card">
                <div className="exp-head">
                  <strong className="edu-course">{f.curso}</strong>
                  {f.status && <span className="edu-status">{f.status}</span>}
                </div>
                <span className="edu-meta">{f.instituicao} · {f.periodo}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="cert-grid">
          {institutions.map((c, i) => (
            <div key={i} className="cert-slot">
              {c.imagem
                ? <img src={c.imagem} alt={c.titulo} loading="lazy" />
                : <span>{c.titulo}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
