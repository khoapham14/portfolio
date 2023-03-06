import "./Contact.css";
import "../Global.css";

function Contact() {
  return (
    <div className="contact hidden" id="contact">
      <div className="contact-cta">
        Got a job for me?
        <div className="contact-header">Get in touch</div>
      </div>

      <div className="contact-text-container">
        <div className="contact-subtext">
          Email
          <div className="contact-details">cody.pham14@gmail.com</div>
        </div>
        <div className="contact-subtext">
          LinkedIn
          <div className="contact-details">in/khoa-pham-9773261ba/</div>
        </div>
        <div className="contact-subtext">
          Github
          <div className="contact-details">github.com/khoapham14</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
