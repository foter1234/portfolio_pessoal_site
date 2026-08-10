import { lazy, Suspense } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';

const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })));
const Technologies = lazy(() => import('./components/Technologies').then((m) => ({ default: m.Technologies })));
const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })));
const Events = lazy(() => import('./components/Events').then((m) => ({ default: m.Events })));
const Experience = lazy(() => import('./components/Experience').then((m) => ({ default: m.Experience })));
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Technologies />
          <Projects />
          <Events />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
