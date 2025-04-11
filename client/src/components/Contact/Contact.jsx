import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">We’re Here to Help</span>
          <span className="secondaryText">
            Have questions or need support? Reach out anytime — we’re always
            ready to assist you and provide the best rental experience possible.
          </span>
        </div>

        {/* right side */}

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
