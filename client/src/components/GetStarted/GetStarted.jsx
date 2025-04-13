import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with RentIt</span>
          <span className="secondaryText">
            Subscribe now to explore unbeatable rental deals <br />
            and discover your next perfect residence.
          </span>
          <button className="button">
            <a href="mailto:maheshdpmayshu@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
