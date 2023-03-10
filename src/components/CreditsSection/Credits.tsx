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
          <div className="credits-title">
            <strong>csstricks & codepen </strong>
            <div className="credits-desc">For cool CSS tricks and code snippets</div>
          </div>

          <div className="credits-title">
            <strong>Wallpaper Flare</strong>
            <div className="credits-desc">For the space background picture</div>
          </div>

          {/* <div className="credits-title">
            <strong>DALL-E</strong>
            <div className="credits-desc">For </div>
          </div> */}

          <div className="credits-title">
            <strong>Awwwards</strong>
            <div className="credits-desc">
              For inspirational portfolios, especially Peter Arendt, Martin
              Briceno & Jean Mazouni
            </div>
          </div>

          <div className="credits-title">
            <strong>
              Fireship, Hyperplexed, DesignCourse & FullstackJunkie
            </strong>
            <div className="credits-desc">For their great tutorials on Youtube</div>
          </div>
        </div>
      </div>

      <div className="credits-end-container">
        <div className="credits-end-text">
          Thank you for stopping by !<br />
          <button className="credits-button" onClick={scrollToTop}>
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
}

export default Credits;
