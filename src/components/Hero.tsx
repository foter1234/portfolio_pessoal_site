import { FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export function Hero() {
  return (
    <motion.header
      id="hero"
      className="container hero"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="hero-left">
        <div className="hero-status">
          <span className="hero-dot" aria-hidden="true" />
          {profile.status}
          <span className="hero-place"><FiMapPin aria-hidden="true" /> {profile.localizacao}</span>
        </div>
        <h1 className="hero-name">{profile.nome}</h1>
        <p className="hero-role">{profile.cargo} <span>·</span> {profile.stack}</p>
        <p className="hero-summary">{profile.resumo}</p>
        <div className="hero-actions">
          <a href="#contato" className="btn-primary">Entrar em contato</a>
          <a href={profile.github} className="btn-social btn-github" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
          <a href={profile.linkedin} className="btn-social btn-linkedin" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-photo-wrap">
        <div className="hero-photo-glow" aria-hidden="true" />
        <div className="hero-photo">
          {profile.foto
            ? <img src={profile.foto} alt={'Foto de ' + profile.nome} />
            : <span className="placeholder-label">[ foto profissional ]</span>}
        </div>
      </div>
    </motion.header>
  );
}
