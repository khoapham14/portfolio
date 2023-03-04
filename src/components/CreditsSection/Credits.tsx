import "./Credits.css";
import MapMarker from "../../assets/map_marker.svg";

// Function to scroll to top of page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Credits() {
  return (
    <div className="credits">
      <div className="credits-text-container">
        <div className="credits-header">Credits</div>
        <div className="credits-subtext">
          <ul>
            <li>Space background from Wallpaper Cave</li>
            <li>
              Inspired by various portfolios on Awwwards, mainly Peter Arendt,
              Martin Briceno & Jean Mazouni
            </li>
            <li>Tutorials from DesignCourse and FullstackJunkie</li>
            <li>
              Everybody I have worked with and learnt from at AUT and Sysdoc
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
