import "./Contact.css";
import "../Global.css";
import ContactBlock, { ContactBlockProps } from "./ContactBlock";
// Function to open URL in new window
function openInNewTab(url: string) {
  var win = window.open(url, "_blank");
  win?.focus();
}

function Contact() {
  const contactDetails: ContactBlockProps[] = [
    {
      contactType: "Email",
      contactInfo: "cody.pham14@gmail.com",
      onContactClick: () => {},
    },
    {
      contactType: "LinkedIn",
      contactInfo: "linkedin.com/in/khoa-pham-14nz",
      onContactClick: () =>
        openInNewTab("https://www.linkedin.com/in/khoa-pham-14nz/"),
    },
    {
      contactType: "GitHub",
      contactInfo: "github.com/khoapham14",
      onContactClick: () => openInNewTab("https://github.com/khoapham14"),
    },
  ];

  return (
    <div className="contact hidden" id="contact">
      <div className="contact-cta">
        Got a job for me?
        <div className="contact-header">
          <a href="mailto:cody.pham14@gmail.com">Get in touch</a>
        </div>
      </div>

      <div className="contact-text-container">
        {contactDetails &&
          contactDetails.map((x) => {
            return <ContactBlock {...x} />;
          })}
      </div>
    </div>
  );
}

export default Contact;
