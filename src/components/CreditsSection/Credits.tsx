import "./Credits.css";
import "../Global.css";

// Function to scroll to top of page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Credits() {
  return (
    <div className="credits hidden" id="credits">
      <div className="credits-text-container">
        <div className="credits-header">Credits</div>
        <div className="credits-subtext">
          <ul>
            <li>
              Inspired by various portfolios on <strong>Awwwards</strong>, especially <strong>Peter Arendt,
              Martin Briceno & Jean Mazouni</strong>
            </li>
            <li>Tutorials from <strong>Fireship, DesignCourse & FullstackJunkie</strong></li>
            <li>
              Everybody I have worked with at <strong>AUT & Sysdoc</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="credits-end-container">
        <div className="credits-end-text">
          Thank you for stopping by !<br />
          <button className="credits-button" onClick={scrollToTop}>Back to top</button>
        </div>
      </div>
    </div>
  );
}

export default Credits;
