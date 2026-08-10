import { Reveal } from './Reveal';
import { stats } from '../data/stats';

export function Stats() {
  return (
    <section id="estatisticas" className="stats-band" aria-label="Estatísticas">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <Reveal key={s.rotulo} delay={i * 0.06}>
            <div className="stat">
              <span className="stat-value">{s.valor}</span>
              <span className="stat-label">{s.rotulo}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
