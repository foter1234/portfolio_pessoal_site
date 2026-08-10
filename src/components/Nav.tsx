const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#experiencia', label: 'Experiência' }
];

export function Nav() {
  return (
    <nav className="nav" aria-label="Navegação principal">
      <a href="#hero" className="nav-brand">lucas<span>.</span>dev</a>
      <div className="nav-links">
        <div className="nav-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>
        <a href="#contato" className="nav-cta">Contato</a>
      </div>
    </nav>
  );
}
