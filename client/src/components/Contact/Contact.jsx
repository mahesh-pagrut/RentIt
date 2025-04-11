import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

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

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexColCenter row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>012 123 124 155</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
          </div>
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
