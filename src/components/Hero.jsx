import React from "react";

const Hero = () => {
  return (
    <div
      className="text-center text-white d-flex align-items-center justify-content-center"
      style={{
        height: "90vh",
        background: "url('/images/limo-bg.jpg') center/cover no-repeat",
      }}
    >
      <div className="bg-dark bg-opacity-50 p-5 rounded-3">
        <h1 className="display-4 fw-bold text-warning">Luxury Limousine Services</h1>
        <p className="lead">
          Airport Transfers • Corporate Travel • Weddings • Special Events
        </p>
        <a href="/booking" className="btn btn-warning btn-lg mt-3 fw-bold">
          Book Your Ride
        </a>
      </div>
    </div>
  );
};

export default Hero;
