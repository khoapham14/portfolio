import "./Credits.css";
import "../Global.css";
import { creditProps } from "./CreditsBlockProps";
import CreditsBlock from "./CreditsBlock";

// Function to scroll to top of page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Credits() {
  return (
    <div className="credits hidden" id="credits">
      <div className="credits-text-container">
        <div className="credits-header">Special thanks to:</div>
        <div className="credits-subtext">
          {creditProps &&
            creditProps.map((creds) => {
              return <CreditsBlock {...creds} />;
            })}
        </div>
      </div>

      <div className="credits-end-container">
        <div className="credits-end-text">
          Have a great day!
          <br />
          <button className="credits-button" onClick={scrollToTop}>
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
}

export default Credits;
