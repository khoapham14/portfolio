import "./Credits.css"

export interface CreditsBlockProps {
  title: string;
  description: string;
}

function CreditsBlock(props: CreditsBlockProps) {
  return (
    <div className="credits-title">
      <strong>{props.title}</strong>
      <div className="credits-desc">
        {props.description}
      </div>
    </div>
  );
}

export default CreditsBlock;
