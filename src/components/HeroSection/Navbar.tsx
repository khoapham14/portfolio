import { useState } from "react";
import Logo from '../../assets/logo_white.svg';
import "./Navbar.css";
import "../Global.css";

function Navbar() {

  //Function to scroll to html element
  function scrollToElement(element: string) {
    const el = document.getElementById(element);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="navbar">
      <div className="logo-container"><img src={Logo} className="logo" /></div>
      <div className="nav-links-container">
        <div onClick={() => scrollToElement("projects")}>Projects</div>
        <div onClick={() => scrollToElement("about")}>About</div>
        <div onClick={() => scrollToElement("contact")}>Contact</div>
        <div onClick={() => scrollToElement("credits")}>Credits</div>
      </div>
    </div>
  );
}

export default Navbar;
