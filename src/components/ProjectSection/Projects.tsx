import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./Projects.css";
import Nothing_Card from "../../assets/Nothing.png";
import CT_Card from "../../assets/CubeTimer.png";
import SysdocCat_Card from "../../assets/SysdocCAT.png";
import styled from "styled-components";

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
    padding: 0 0 0 150px;
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

  return (
    <>
      <div className="projects-header" id="projects">
        Projects
      </div>
      <HorizontalSection>


      <TallOuterContainer dynamicHeight={dynamicHeight}>
        <StickyInnerContainer ref={containerRef}>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            <CardsContainer>
              <div
                className="project-card"
                style={{ backgroundImage: `url(${Nothing_Card})` }}
              >
              </div>

              <div
                className="project-card"
                style={{ backgroundImage: `url(${CT_Card})` }}
              >
              </div>

              <div
                className="project-card"
                style={{ backgroundImage: `url(${SysdocCat_Card})` }}
              >
              </div>
            </CardsContainer>
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
      </TallOuterContainer>
      </HorizontalSection>
    </>
  );
}

export default Projects;
