import { useState, useEffect} from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./Global.css";
import Hero from "./HeroSection/Hero";
import Projects from "./ProjectSection/Projects";
import About from "./AboutSection/About";
import Contact from './ContactSection/Contact';
import Credits from './CreditsSection/Credits';

function Portfolio() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => { observer.observe(element); });
  }, []);


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
