import { useState } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import MapMarker from "../../assets/map_marker.svg";

// Function to scroll to a div
function scrollToElement(element: string) {
  const el = document.getElementById(element);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-text-container">
        <div className="hero-header">
          Hi, I'm Khoa. <br /> Welcome to my website!
          <div className="hero-subtext">
            I’m a software developer specializing in frontend development with
            ReactJS. Currently looking for the next step in my career.
          </div>
        </div>

        <div></div>
        <button
          className="hero-button"
          onClick={() => scrollToElement("projects")}
        >
          View Projects
        </button>
        <div className="location-container">
          <img src={MapMarker} className="map-marker" /> Auckland, New Zealand
        </div>
      </div>
    </div>
  );
}

export default Hero;
