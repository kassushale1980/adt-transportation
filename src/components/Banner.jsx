import React from "react";
import bannerImage from "../assets/images/Banner.jpg";
import carIcon from "../assets/images/Suburban-SUV2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner-background"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <div className="fade-left"></div>
        <div className="fade-right"></div>

        <div className="marquee-wrapper">
          <div className="marquee">
            <span>
              Welcome to A.D.T. Transportation{" "}
              <img src={carIcon} alt="Car" className="car-icon" />{" "}
              Providing excellent services every day{" "}
              <img src={carIcon} alt="Car" className="car-icon" />{" "}
              Safe. Reliable. Luxury Travel.{" "}
              <img src={carIcon} alt="Car" className="car-icon" />{" "}
            </span>

            {/* Duplicate for seamless loop */}
            <span>
              Welcome to A.D.T. Transportation{" "}
              <img src={carIcon} alt="Car" className="car-icon" />{" "}
              Providing excellent services every day{" "}
              <img src={carIcon} alt="Car" className="car-icon" />{" "}
              Safe. Reliable. Luxury Travel.{" "}
              <img src={carIcon} alt="Car" className="car-icon" />{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
