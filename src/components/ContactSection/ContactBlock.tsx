import "./Contact.css";
import "../Global.css";

export interface ContactBlockProps {
  contactType: string;
  contactInfo: string;
  onContactClick: () => any;
}

function ContactBlock(props: ContactBlockProps) {
  return (
    <>
      <div className="contact-subtext" onClick={() => props.onContactClick()}>
        {props.contactType}
        <div className="contact-details">{props.contactInfo}</div>
      </div>
    </>
  );
}

export default ContactBlock;
