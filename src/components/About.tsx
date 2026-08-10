import { Reveal } from './Reveal';
import { timeline } from '../data/timeline';
import { differentials } from '../data/experience';

export function About() {
  return (
    <section id="sobre" className="container section about">
      <Reveal>
        <div className="about-intro">
          <span className="kicker">01 — SOBRE</span>
          <h2 className="section-title">Programando desde os 14 anos</h2>
          <p>Entrei no Instituto Federal de Mato Grosso do Sul aos 14 anos para cursar Técnico em Informática, e foi lá que a programação deixou de ser curiosidade e virou ofício. Concluí o técnico em 2023 e hoje curso Sistemas de Informação na UEMS.</p>
          <p>No caminho, o interesse foi se abrindo: desenvolvimento web e de software, automações, inteligência artificial, integração de APIs e, com elas, soluções digitais inteiras — não só a tela, mas o que faz a tela funcionar.</p>
          <p>Boa parte do que sei veio de projetos próprios e de trabalhos para clientes reais. Sou cofundador da <strong>Teora Solutions</strong>, onde levo esses projetos do primeiro rascunho ao que vai para o ar — incluindo eventos como a <strong>Corrida do Trabalhador</strong> e uma <strong>ação solidária</strong>, em que a parte digital e a organização caminharam juntas.</p>
          <div className="about-tags" aria-label="Diferenciais">
            {differentials.map((d) => (
              <span key={d.titulo} className="about-tag">{d.titulo}</span>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="timeline">
        {timeline.map((t, i) => (
          <Reveal key={t.ano} delay={i * 0.08}>
            <div className="timeline-item">
              <div className="timeline-rail">
                <span className="timeline-dot" aria-hidden="true" />
                <span className="timeline-line" aria-hidden="true" />
              </div>
              <div className="timeline-body">
                <span className="timeline-year">{t.ano}</span>
                <strong className="timeline-title">{t.titulo}</strong>
                <span className="timeline-desc">{t.desc}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
