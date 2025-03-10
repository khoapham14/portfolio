import { useState, useRef, useEffect } from "react";
import "../Global.css";
import "./Projects.css";
import {
  quayStProps,
  sysdocCATProps,
  nothingProps,
  portfolioProps,
  weAreUsProps,
  cubeTimerProps,
} from "./ProjectProps";
import QuaySt_Desktop from "../../assets/QuaySt.png";
import QuaySt_Mobile from "../../assets/QuaySt_Mobile.svg";
import Nothing_Desktop from "../../assets/Nothing_Old.png";
import Nothing_Mobile from "../../assets/Nothing_Old_Mobile.svg";
import CT_Desktop from "../../assets/CubeTimer.png";
import CT_Mobile from "../../assets/CubeTimer_Mobile.svg";
import Portfolio_Desktop from "../../assets/Portfolio.png";
import Portfolio_Mobile from "../../assets/Portfolio_Mobile.png";
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
    margin-right: 5rem;
    padding: 2.5rem 0 0 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 480px){
      padding: 0 0 0 0;
      margin-right: 10rem;
    }
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
    overflow: hidden;
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
      // console.log(windowWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

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
                <HorizontalTranslateContainer
                  // @ts-ignore
                  translateX={translateX}
                  ref={objectRef}
                >
                  <CardsContainer>
                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open("https://quaystreet.com/", "_blank")
                      }
                    >
                      <ProjectOverlay {...quayStProps} />
                      <div
                        className="project-card"
                        style={{
                          backgroundImage: `url(${QuaySt_Desktop})`,
                        }}
                      />
                    </div>

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

                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://github.com/khoapham14/portfolio/",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...portfolioProps} />
                      <div
                        className="project-card"
                        style={{ backgroundImage: `url(${Portfolio_Desktop})` }}
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
                <HorizontalTranslateContainer
                  // @ts-ignore
                  translateX={translateX as any}
                  ref={objectRef}
                >
                  <CardsContainer>
                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open("https://quaystreet.com/", "_blank")
                      }
                    >
                      <ProjectOverlay {...quayStProps} />
                      {windowWidth < 768 ? (
                        <div
                          className="project-card"
                          style={{
                            backgroundImage: `url(${QuaySt_Mobile})`,
                          }}
                        />
                      ) : (
                        <div
                          className="project-card"
                          style={{
                            backgroundImage: `url(${QuaySt_Desktop})`,
                          }}
                        />
                      )}
                    </div>

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
                      {windowWidth < 768 ? (
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
                      {windowWidth < 768 ? (
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
                      {windowWidth < 768 ? (
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
                      {windowWidth < 768 ? (
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

                    <div
                      className="project-card-container"
                      onClick={() =>
                        window.open(
                          "https://github.com/khoapham14/portfolio/",
                          "_blank"
                        )
                      }
                    >
                      <ProjectOverlay {...portfolioProps} />
                      {windowWidth < 768 ? (
                        <div
                          className="project-card"
                          style={{
                            backgroundImage: `url(${Portfolio_Mobile})`,
                          }}
                        />
                      ) : (
                        <div
                          className="project-card"
                          style={{
                            backgroundImage: `url(${Portfolio_Desktop})`,
                          }}
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
