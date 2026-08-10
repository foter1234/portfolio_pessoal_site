import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-note">© {year} {profile.nome} — feito com React + Vite</span>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub aria-hidden="true" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin aria-hidden="true" /></a>
          <a href={'mailto:' + profile.email} aria-label="Email"><FiMail aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
