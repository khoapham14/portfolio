import { useState } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import "../Global.css";
import MapMarker from "../../assets/map_marker.svg";

export interface HeroProps {
  scrollPos: number;
}

// Function to scroll to a div
function scrollToElement(element: string) {
  const el = document.getElementById(element);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function Hero(props: HeroProps) {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-container">
        <div className="hero-text-container">
          <div className="hero-greeting">Hi, I'm Khoa (or Cody).</div>
          <div className="hero-header">Welcome to my website!</div>
          <div className="hero-subtext">
            I’m a Software Developer from Vietnam. Most recently an Intermediate
            Fullstack Developer @ Compono Australia.
          </div>
          <div className="hero-misc">
            <button
              className="hero-button"
              onClick={() => scrollToElement("projects")}
            >
              My Work
            </button>
            <div className="location-container">
              <img src={MapMarker} className="map-marker" /> Auckland, New
              Zealand
            </div>
          </div>
        </div>
        <div
          className="circle"
          id="circle"
          style={
            props.scrollPos && props.scrollPos > 0
              ? {
                  position: "fixed",
                  height: "5rem",
                  width: "5rem",
                }
              : {
                position: "static",
                height: "8rem",
                width: "8rem",
              }
          }
        />
      </div>
    </div>
  );
}

export default Hero;
