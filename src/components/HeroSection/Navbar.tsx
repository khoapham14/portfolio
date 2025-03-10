import { useState, useEffect } from "react";
import Logo from "../../assets/logo_white.svg";
import Hamburger from "../../assets/hamburger_menu.svg";
import "./Navbar.css";
import "../Global.css";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Function to scroll to html element
  function scrollToElement(element: string) {
    const el = document.getElementById(element);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function openNav() {
    document.getElementById("mobileNav")!.style.height = "100%";
  }

  function closeNav() {
    document.getElementById("mobileNav")!.style.height = "0%";
  }

  //function to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // console.log(windowWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={Logo} className="logo" />
      </div>
      {windowWidth > 1000 ? (
        <div className="nav-links-container">
          <div className="nav-link" onClick={() => scrollToElement("projects")}>Projects</div>
          <div className="nav-link" onClick={() => scrollToElement("about")}>About</div>
          <div className="nav-link" onClick={() => scrollToElement("contact")}>Contact</div>
          <div className="nav-link" onClick={() => scrollToElement("credits")}>Credits</div>
        </div>
      ) : (
        <>
          <div className="hamburger" onClick={openNav}>
            <img src={Hamburger} className="hamburger-icon" />
          </div>
          <div className="mobileNav" id="mobileNav">
            <div className="close-btn" onClick={closeNav}>X</div>
            <div className="nav-links-container">
              <div className="nav-link" onClick={() => {scrollToElement("projects"); closeNav();}}>Projects</div>
              <div className="nav-link" onClick={() => {scrollToElement("about"); closeNav();}}>About</div>
              <div className="nav-link" onClick={() => {scrollToElement("contact"); closeNav();}}>Contact</div>
              <div className="nav-link" onClick={() => {scrollToElement("credits"); closeNav();}}>Credits</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
