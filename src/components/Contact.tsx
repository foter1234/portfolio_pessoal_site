import type { FormEvent } from 'react';
import { FiExternalLink, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { profile } from '../data/profile';

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const assunto = encodeURIComponent('Contato via portfólio — ' + data.get('nome'));
    const corpo = encodeURIComponent(String(data.get('mensagem')) + '\n\n' + data.get('email'));
    window.location.href = 'mailto:' + profile.email + '?subject=' + assunto + '&body=' + corpo;
  }

  return (
    <section id="contato" className="container section contact-section">
      <Reveal>
        <div className="contact-info">
          <span className="kicker">07 — CONTATO</span>
          <h2 className="section-title">Vamos construir algo juntos?</h2>
          <p>Aberto a oportunidades, freelas e parcerias — de sites e sistemas a automações e integrações com IA. Estou em {profile.localizacao} e atendo remoto.</p>
          <div className="contact-channels">
            <a href={'mailto:' + profile.email}><FiMail aria-hidden="true" /> {profile.email}</a>
            <a href={'https://wa.me/' + profile.whatsapp} target="_blank" rel="noreferrer"><FiPhone aria-hidden="true" /> {profile.telefone} · WhatsApp</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            {profile.site && <a href={profile.site} target="_blank" rel="noreferrer"><FiExternalLink aria-hidden="true" /> Site pessoal</a>}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="nome" className="form-input" placeholder="Nome" aria-label="Nome" required />
          <input name="email" type="email" className="form-input" placeholder="Email" aria-label="Email" required />
          <textarea name="mensagem" className="form-input" placeholder="Mensagem" aria-label="Mensagem" rows={5} required />
          <button type="submit" className="form-submit">Enviar mensagem</button>
        </form>
      </Reveal>
    </section>
  );
}
