import "./Contact.css";
import "../Global.css";


function Contact() {

  // Function to open URL in new window
  function openInNewTab(url: string) {
    var win = window.open(url, "_blank");
    win?.focus();
  }

  return (
    <div className="contact hidden" id="contact">
      <div className="contact-cta">
        Got a job for me?
        <div className="contact-header">
          <a href="mailto:cody.pham14@gmail.com">Get in touch</a>
        </div>
      </div>

      <div className="contact-text-container">
        <div className="contact-subtext">
          Email
          <div className="contact-details">cody.pham14@gmail.com</div>
        </div>
        <div className="contact-subtext" onClick={() => openInNewTab("https://www.linkedin.com/in/khoa-pham-14nz/")}>
          LinkedIn
          <div className="contact-details">linkedin.com/in/khoa-pham-14nz</div>
        </div>
        <div className="contact-subtext" onClick={() => openInNewTab("https://github.com/khoapham14")}>
          Github
          <div className="contact-details">github.com/khoapham14</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
