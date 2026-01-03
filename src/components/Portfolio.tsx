import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Hero from './HeroSection/Hero';
import Projects from './ProjectSection/Projects';
import About from './AboutSection/About';
import Contact from './ContactSection/Contact';
import Credits from './CreditsSection/Credits';

function Portfolio() {
  // Set up intersection observer for fade-in animations
  useIntersectionObserver('.fade-in', { threshold: 0.1, once: true });

  return (
    <div className="min-h-screen bg-background">
      {/* Main Sections */}
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Credits />
    </div>
  );
}

export default Portfolio;
