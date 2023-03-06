import { useState, useRef, useEffect } from "react";
import "./Projects.css";
import Nothing_Card from "../../assets/Nothing.png";
import CT_Card from "../../assets/CubeTimer.png";
import SysdocCat_Card from "../../assets/SysdocCAT.png";
import styled from "styled-components";
import ProjectOverlay, { ProjectOverlayProps } from "./ProjectOverlay";

function Projects() {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const HorizontalSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
  `;

  const BumperSection = styled.section`
    text-align: center;
    padding: 128px 16px;
    background-color: #efefef;
  `;

  const CardsContainer = styled.div`
    position: relative;
    height: 100%;
    padding: 0 0 0 0;
    margin-right: 5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  `;

  const TallOuterContainer = styled.div.attrs(({ dynamicHeight }: any) => ({
    style: { height: `${dynamicHeight}px` },
  }))`
    position: relative;
    width: 100%;
  `;

  const StickyInnerContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
  `;

  const HorizontalTranslateContainer = styled.div.attrs(
    ({ translateX }: any) => ({
      style: { transform: `translateX(${translateX}px)` },
    })
  )`
    position: absolute;
    height: 100%;
    will-change: transform;
  `;

  const calcDynamicHeight = (objectWidth: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  };

  const handleDynamicHeight = (ref: any, setDynamicHeight: any) => {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  };

  const applyScrollListener = (ref: any, setTranslateX: any) => {
    window.addEventListener("scroll", () => {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    });
  };

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  const sysdocCATProps: ProjectOverlayProps = {
    projectTitle: "COMPETENCY ASSESSMENT TOOL",
    projectType: "Web Application",
    projectTechStack: "React, TypeScript, Node.js, Express, MongoDB",
    projectDescription:
      "A Sharepoint-based tool for the assessment of competencies of employees in the company.",
  };

  const nothingProps: ProjectOverlayProps = {
    projectTitle: "NOTHING",
    projectType: "E-Commerce",
    projectTechStack: "ReactJS, Node.js, Express, MongoDB, Heroku, Stripe",
    projectDescription: "A simple e-commerce website, made as a practice project.",
  };

  const cubeTimerProps: ProjectOverlayProps = {
    projectTitle: "CUBE TIMER",
    projectType: "Web Application",
    projectTechStack: "ReactJS, Bootstrap, HTML, CSS",
    projectDescription: "A web application for timing Rubik's Cube solves.",
  };

  return (
    <div id="projects">
      <div className="projects-header" >
        Projects
      </div>
      <HorizontalSection>
        {/* @ts-ignore */}
        <TallOuterContainer dynamicHeight={dynamicHeight}>
          <StickyInnerContainer ref={containerRef}>
            <HorizontalTranslateContainer
              translateX={translateX}
              ref={objectRef}
            >
              <CardsContainer>
                <div className="project-card-container">
                  <ProjectOverlay {...sysdocCATProps} />
                  <div
                    className="project-card"
                    style={{ backgroundImage: `url(${SysdocCat_Card})` }}
                  />
                </div>
                <div className="project-card-container">
                  <ProjectOverlay {...nothingProps} />
                  <div
                    className="project-card"
                    style={{ backgroundImage: `url(${Nothing_Card})` }}
                  />
                </div>

                <div className="project-card-container">
                  <ProjectOverlay {...cubeTimerProps} />
                  <div
                    className="project-card"
                    style={{ backgroundImage: `url(${CT_Card})` }}
                  />
                </div>
              </CardsContainer>
            </HorizontalTranslateContainer>
          </StickyInnerContainer>
        </TallOuterContainer>
      </HorizontalSection>
    </div>
  );
}

export default Projects;
