import { useState, useRef, useEffect } from "react";
import "../Global.css";
import "./Projects.css";
import Nothing_Desktop from "../../assets/Nothing_Old.png";
import Nothing_Mobile from "../../assets/Nothing_Old_Mobile.svg";
import CT_Desktop from "../../assets/CubeTimer.png";
import CT_Mobile from "../../assets/CubeTimer_Mobile.svg";
import SysdocCat_Desktop from "../../assets/SysdocCAT.png";
import SysdocCat_Mobile from "../../assets/SysdocCAT_Mobile.svg";
import WeAreUs_Desktop from "../../assets/WeAreUs.png";
import WeAreUs_Mobile from "../../assets/WeAreUs_Mobile.png";
import styled from "styled-components";
import ProjectOverlay, { ProjectOverlayProps } from "./ProjectOverlay";

function Projects() {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const HorizontalSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
  `;

  const CardsContainer = styled.div`
    position: relative;
    height: auto;
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

  //function to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const sysdocCATProps: ProjectOverlayProps = {
    projectTitle: "SYSDOC CAT",
    projectType: "Web Application",
    projectTechStack:
      "React, Typescript, Sharepoint, FluentUI, Chartjs, PowerBI",
    projectDescription:
      "A tool for employees and managers to assess competencies.",
  };

  const nothingProps: ProjectOverlayProps = {
    projectTitle: "NOTHING",
    projectType: "E-Commerce",
    projectTechStack:
      "ReactJS, Node.js, ExpressJS, MongoDB, Heroku, Stripe, Firebase Auth",
    projectDescription:
      "A simple e-commerce website, made as a practice project.",
  };

  const cubeTimerProps: ProjectOverlayProps = {
    projectTitle: "CUBE TIMER",
    projectType: "Web Application",
    projectTechStack: "ReactJS, Bootstrap, HTML, CSS",
    projectDescription: "A web application for timing Rubik's Cube solves.",
  };

  const weAreUsProps: ProjectOverlayProps = {
    projectTitle: "We Are Us MVP",
    projectType: "Website",
    projectTechStack: "ReactJS, Strapi, Stripe, MySQL, Nodejs",
    projectDescription: "A website for a New Zealand based startup.",
  };

  return (
    <div id="projects">
      <div className="projects-header hidden">Projects</div>
      <div className="hidden">
        {windowWidth > 1000 ? (
          <HorizontalSection>
            {/* @ts-ignore */}
            <TallOuterContainer dynamicHeight={dynamicHeight}>
              <StickyInnerContainer ref={containerRef}>
                {/* @ts-ignore */}
                <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
                  <CardsContainer>
                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://www.sysdoc.com/our-products/competency-assessment-tool",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...sysdocCATProps} />
                      <div
                        className="project-card"
                        style={{
                          backgroundImage: `url(${SysdocCat_Desktop})`,
                        }}
                      />
                    </div>
                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://shielded-inlet-26000.herokuapp.com/",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...nothingProps} />

                      <div
                        className="project-card"
                        style={{ backgroundImage: `url(${Nothing_Desktop})` }}
                      />
                    </div>

                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://khoapham14.github.io/simplict/",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...cubeTimerProps} />
                      <div
                        className="project-card"
                        style={{ backgroundImage: `url(${CT_Desktop})` }}
                      />
                    </div>

                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://github.com/LyleBranzuela/weareus-mvp-website",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...weAreUsProps} />
                      <div
                        className="project-card"
                        style={{ backgroundImage: `url(${WeAreUs_Desktop})` }}
                      />
                    </div>
                  </CardsContainer>
                </HorizontalTranslateContainer>
              </StickyInnerContainer>
            </TallOuterContainer>
          </HorizontalSection>
        ) : (
          <HorizontalSection>
            {/* @ts-ignore */}
            <TallOuterContainer dynamicHeight={dynamicHeight}>
              <StickyInnerContainer ref={containerRef}>
                {/* @ts-ignore */}
                <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
                  <CardsContainer>
                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://www.sysdoc.com/our-products/competency-assessment-tool",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...sysdocCATProps} />
                      {windowWidth < 500 ? (
                        <div
                          className="project-card"
                          style={{
                            backgroundImage: `url(${SysdocCat_Mobile})`,
                          }}
                        />
                      ) : (
                        <div
                          className="project-card"
                          style={{
                            backgroundImage: `url(${SysdocCat_Desktop})`,
                          }}
                        />
                      )}
                    </div>
                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://shielded-inlet-26000.herokuapp.com/",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...nothingProps} />
                      {windowWidth < 500 ? (
                        <div
                          className="project-card"
                          style={{ backgroundImage: `url(${Nothing_Mobile})` }}
                        />
                      ) : (
                        <div
                          className="project-card"
                          style={{ backgroundImage: `url(${Nothing_Desktop})` }}
                        />
                      )}
                    </div>

                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://khoapham14.github.io/simplict/",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...cubeTimerProps} />
                      {windowWidth < 500 ? (
                        <div
                          className="project-card"
                          style={{ backgroundImage: `url(${CT_Mobile})` }}
                        />
                      ) : (
                        <div
                          className="project-card"
                          style={{ backgroundImage: `url(${CT_Desktop})` }}
                        />
                      )}
                    </div>

                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://github.com/LyleBranzuela/weareus-mvp-website",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...weAreUsProps} />
                      {windowWidth < 500 ? (
                        <div
                          className="project-card"
                          style={{ backgroundImage: `url(${WeAreUs_Mobile})` }}
                        />
                      ) : (
                        <div
                          className="project-card"
                          style={{ backgroundImage: `url(${WeAreUs_Desktop})` }}
                        />
                      )}
                    </div>
                  </CardsContainer>
                </HorizontalTranslateContainer>
              </StickyInnerContainer>
            </TallOuterContainer>
          </HorizontalSection>
        )}
      </div>
    </div>
  );
}

export default Projects;
