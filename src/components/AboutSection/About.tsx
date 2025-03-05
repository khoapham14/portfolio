import "../Global.css";
import "./About.css";
import AboutBlock from "./AboutBlock";
import { workHistory } from "./AboutBlockProps";

function About() {

  return (
    <>
      <div className="about hidden" id="about">
        <div className="about-header">About</div>
        {workHistory && workHistory.map((exp) => {
          return (
            <AboutBlock {...exp} />
          );
        })}
      </div>

      <div className="buzzwords hidden">
        <div className="buzzwords-left">
          <div className="about-header">
            I AM NOT A ROCKSTAR DEVELOPER
            <div className="experience-subtitle">
              However, I am confident that I know enough to pick up any required
              skills and contribute to a project. Here are some of my buzzwords
              that may (or may not) make me a good fit for your projects.
            </div>
          </div>
        </div>

        <div className="buzzwords-right">
          <div className="buzzwords-info">
            <div className="experience-info-title">Problem Solver</div>
            <div className="experience-info-description">
              I do not like problems (who does anyways?), so I will always try
              my best to identify & resolve them in a way that suits all
              parties.
            </div>
          </div>
          <div className="buzzwords-info">
            <div className="experience-info-title">Self Motivated</div>
            <div className="experience-info-description">
              I am able to quickly find inspiration and stay motiviated whenever
              I want to learn or do something new.
            </div>
          </div>
          <div className="buzzwords-info">
            <div className="experience-info-title">Adaptable</div>
            <div className="experience-info-description">
              I can quickly adapt to new environments and learn new
              technologies. I am also able to work with people from different
              teams & backgrounds.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
