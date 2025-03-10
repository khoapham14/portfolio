import { useState, useEffect } from "react";
import "./Global.css";
import Hero from "./HeroSection/Hero";
import Projects from "./ProjectSection/Projects";
import About from "./AboutSection/About";
import Contact from "./ContactSection/Contact";
import Credits from "./CreditsSection/Credits";

function Portfolio() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  // function to move circle to cursor position
  const moveCircle = (e: MouseEvent) => {
    const circle = document.getElementById("circle") as HTMLElement;
    circle.style.left = e.clientX + "px";
    circle.style.top = e.clientY + "px";
  };

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("Scroll Position: ", JSON.stringify(scrollPosition));
    if (scrollPosition.y > 0) {
      document.addEventListener("mousemove", moveCircle);
    } else {
      document.removeEventListener("mousemove", moveCircle);
    }

    return () => {
      document.removeEventListener("mousemove", moveCircle);
    };
  }, [scrollPosition]);

  return (
    <div className="portfolio-container">
      <Hero scrollPos={scrollPosition.y} />
      <Projects />
      <About />
      <Contact />
      <Credits />
    </div>
  );
}

export default Portfolio;
