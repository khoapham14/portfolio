import "./About.css";

export interface AboutBlockProps {
  duration: string;
  company: string;
  jobTitle: string;
  description: string;
  techStack: string;
}
function AboutBlock(props: AboutBlockProps) {
  return (
    <div className="experience-section">
      <div className="experience-title">{props.duration}</div>
      <div className="experience-details">
        <div className="experience-title">{props.company}</div>
        <div className="experience-subtitle">{props.jobTitle}</div>

        <div className="experience-info">
          <div>
            <div className="experience-info-title">What I've worked on:</div>
            <div className="experience-info-description">
              {props.description}
            </div>
          </div>
          <div>
            <div className="experience-info-title">What I've learnt:</div>
            <div className="experience-info-description">{props.techStack}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBlock;
