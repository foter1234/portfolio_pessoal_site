# Portfólio — Lucas Pereira Esteves

Portfólio pessoal em React + Vite + TypeScript, CSS puro, Framer Motion e React Icons.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção (gera dist/)
npm run preview  # pré-visualizar o build
```

## Estrutura

```
src/
  components/   # um componente por seção (Nav, Hero, About, ...)
  data/         # TODO o conteúdo editável fica aqui
  styles/       # global.css com variáveis de tema
public/         # imagens, vídeos, robots.txt, sitemap.xml, manifest, favicon
```

## Editar conteúdo

- **Dados pessoais, links e WhatsApp**: `src/data/profile.ts`
- **Projetos**: `src/data/projects.ts` — cada projeto aceita `nome`, `desc`, `tags`, `imagem`, `video`, `videoVertical`, `videoBadge`, `github` e `deploy`. A seção é um carrossel: os cards deslizam pelas setas das pontas, pelo arrasto/swipe ou pela roda do mouse.
- **Tecnologias**: `src/data/technologies.ts` — o campo `icone` de cada item aponta para uma chave do mapa em `src/components/TechIcon.tsx`; para incluir uma tecnologia nova, adicione o ícone lá e use a chave aqui.
- **Eventos (Teora)**: `src/data/events.ts` (vídeos e capas em `public/eventos/`)
- **Tecnologias, soft skills e idiomas**: `src/data/technologies.ts`
- **Experiência e diferenciais**: `src/data/experience.ts`
- **Formação e instituições**: `src/data/education.ts`
- **Estatísticas**: `src/data/stats.ts`
- **Trajetória (timeline do "Sobre")**: `src/data/timeline.ts`
- **Cores e fontes**: variáveis em `src/styles/global.css` (`:root`)

## Pendências para completar

- [ ] Colocar `curriculo.pdf` em `public/` (o botão "Baixar currículo" já aponta para `/curriculo.pdf`)
- [ ] Preencher `github` e `deploy` de cada projeto em `src/data/projects.ts` (os botões só aparecem quando têm link)
- [ ] Preencher `site` em `src/data/profile.ts` para exibir o link do site pessoal no contato
- [ ] Trocar `SEU-DOMINIO.com` pelo domínio real em `robots.txt`, `sitemap.xml` e `index.html`
- [ ] Gerar `og-image.png` (1200×630) para compartilhamento

## Já incluído

- SEO (meta tags, Open Graph, Schema.org, robots.txt, sitemap.xml)
- PWA preparado (manifest + theme-color)
- Code splitting (React.lazy por seção) e lazy loading de imagens/vídeos
- Acessibilidade: labels, aria-pressed nos filtros, `prefers-reduced-motion`
- Responsivo (breakpoints 1000px, 900px, 600px e 400px)
