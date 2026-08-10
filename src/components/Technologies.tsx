import { Reveal } from './Reveal';
import { TechIcon } from './TechIcon';
import { technologies, softSkills, languages } from '../data/technologies';

export function Technologies() {
  return (
    <section id="tecnologias" className="container section tech-section">
      <Reveal>
        <div className="section-head">
          <span className="kicker">02 — TECNOLOGIAS</span>
          <h2 className="section-title">Stack & ferramentas</h2>
          <p className="section-lead">O que uso no dia a dia para tirar um produto do papel — da interface ao banco, da automação à IA.</p>
        </div>
      </Reveal>
      <div className="tech-grid">
        {technologies.map((cat, i) => (
          <Reveal key={cat.nome} delay={i * 0.06}>
            <div className={cat.destaque ? 'tech-card destaque' : 'tech-card'}>
              <span className="tech-cat">{cat.nome}</span>
              <div className="tech-chips">
                {cat.itens.map((item) => (
                  <span key={item.nome} className={cat.destaque ? 'tech-chip principal' : 'tech-chip'}>
                    <span className="tech-chip-icon" aria-hidden="true"><TechIcon name={item.icone} /></span>
                    {item.nome}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="tech-grid tech-grid-soft">
        <Reveal>
          <div className="tech-card tech-card-wide">
            <span className="tech-cat">{softSkills.nome}</span>
            <div className="tech-chips">
              {softSkills.itens.map((item) => (
                <span key={item} className="tech-chip">{item}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="tech-card">
            <span className="tech-cat">{languages.nome}</span>
            <div className="tech-chips">
              {languages.itens.map((item) => (
                <span key={item} className="tech-chip">{item}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
