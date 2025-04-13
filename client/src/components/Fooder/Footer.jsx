import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="paddings innerWidth flexCenter f-container">
      {/* left side */}
      <div className="flexColStart f-left">
        <img src="./logo.png" alt="" width={120} />

        <span className="secondaryText">
          Our vision is to help everyone find <br />
          the perfect place to call home.
        </span>
      </div>
    </div>
  );
};

export default Footer;
