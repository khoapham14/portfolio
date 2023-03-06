import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./Projects.css";
import Nothing_Card from "../../assets/Nothing.png";
import CT_Card from "../../assets/CubeTimer.png";
import SysdocCat_Card from "../../assets/SysdocCAT.png";
import styled from "styled-components";

export interface ProjectOverlayProps {
  projectTitle: string;
  projectType: string;
  projectTechStack: string;
  projectDescription: string;
}
function ProjectOverlay(props: ProjectOverlayProps) {
  return (
    <>
      {/* <div className="project-card-overlay"> */}
      <div>
        <div className="project-card-details">
          <div className="project-title">{props.projectTitle}</div>
          <div className="project-details-container">
            <div className="project-details">
              TYPE
              <div className="project-details-text">{props.projectType}</div>
            </div>
            <div className="project-details">
              TECHSTACK
              <div className="project-details-text">{props.projectTechStack}</div>
            </div>
            <div className="project-details">
              DESCRIPTION
              <div className="project-details-text">{props.projectDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOverlay;
