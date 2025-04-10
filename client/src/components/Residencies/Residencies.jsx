import React, { useState } from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  const [swiperInstance, setSwiperInstance] = useState(null); // <== Store swiper

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <div className="r-swiper-container">
          <Swiper {...sliderSettings} onSwiper={setSwiperInstance}>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pass swiper instance to buttons */}
          {swiperInstance && <SliderButtons swiper={swiperInstance} />}
        </div>
      </div>
    </section>
  );
};

export default Residencies;

// Modify this to accept `swiper` as a prop
const SliderButtons = ({ swiper }) => {
  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
