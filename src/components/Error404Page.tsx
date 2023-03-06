import "./Global.css";
import {Link} from 'react-router-dom';

function Error404Page() {
  return (
    <div className="portfolio-container">
      <div className="error-404-header">
        404: Page Not Found
        <div className="error-404-desc">
          {" "}
          Uh oh! Looks like the page you're looking for doesn't exist. Click
          the button below to return to the main page. <br />
          <Link to={"/portfolio/"}><button className="error-404-button">Go back</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Error404Page;
