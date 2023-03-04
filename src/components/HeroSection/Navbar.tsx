import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import "./Navbar.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar">
      <div className="logo-container"><img src={Logo} className="logo" /></div>
      <div className="nav-links-container">
        <div>Projects</div>
        <div>About</div>
        <div>Contact</div>
        <div>Credits</div>
      </div>
    </div>
  );
}

export default Navbar;
