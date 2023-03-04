import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./Pages.css";
import Hero from "./HeroSection/Hero";
import Projects from "./ProjectSection/Projects";
import About from "./AboutSection/About";
import Contact from './ContactSection/Contact';
import Credits from './CreditsSection/Credits';

function Portfolio() {
  const [count, setCount] = useState(0);

  return (
    <div className="portfolio-container">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Credits />
    </div>
  );
}

export default Portfolio;
