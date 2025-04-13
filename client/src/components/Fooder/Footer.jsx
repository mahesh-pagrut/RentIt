import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={120} />

          <span className="secondaryText">
            Our vision is to help everyone find <br />
            the perfect place to call home.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Sector 45, Gurugram , Delhi NCR, INDIA
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span
            ><span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
