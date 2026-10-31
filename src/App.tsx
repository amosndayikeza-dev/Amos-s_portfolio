import { MotionConfig } from 'framer-motion';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Journey } from '@/components/sections/Journey';
import { Navbar } from '@/components/sections/Navbar';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export function App() {
  return (
    // reducedMotion="user" turns off movement when the visitor prefers reduced motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent-700 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
