import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./Projects.css";
import Nothing_Card from "../../assets/Nothing.png";
import CT_Card from "../../assets/CubeTimer.png";
import SysdocCat_Card from "../../assets/SysdocCAT.png";

function Projects() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="projects-header" id="projects">Projects</div>
      <div className="projects-carousel">
        <div
          className="project-card"
          style={{ backgroundImage: `url(${Nothing_Card})` }}
        >
          {/* <div className="project-card-overlay"></div> */}
        </div>

        <div
          className="project-card"
          style={{ backgroundImage: `url(${CT_Card})` }}
        >
          {/* <div className="project-card-overlay"></div> */}
        </div>

        <div
          className="project-card"
          style={{ backgroundImage: `url(${SysdocCat_Card})` }}
        >
          {/* <div className="project-card-overlay"></div> */}
        </div>
      </div>
    </>
  );
}

export default Projects;
