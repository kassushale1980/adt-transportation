import React from "react";
import limousineService from "../assets/images/Suburban-SUV.jpg";

const About = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center text-warning fw-bold mb-4">
        About A.D.T Transportation
      </h2>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src={limousineService}
            alt="Suburban SUV Limousine Service"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h4 className="fw-bold mt-4 mt-md-0 text-warning">
            Luxury, Comfort & Reliability
          </h4>
          <p>
            <strong>A.D.T Transportation Limousine Service</strong>, founded and
            operated by <strong>Abeil Daniel Tirago</strong>, provides premium,
            chauffeur-driven vehicles that redefine travel. Whether you need
            reliable airport transfers, corporate transportation, weddings,
            proms, or special nights out, our mission is simple:{" "}
            <strong>safe, punctual, and luxurious service</strong>.
          </p>

          <p>
            Every journey with A.D.T Transportation is more than a ride — it’s
            an experience. Our professionally trained drivers are courteous,
            discreet, and focused on ensuring your comfort and safety.
          </p>

          <p className="fw-bold mb-2">Why choose A.D.T Transportation?</p>
          <ul>
            <li>
              <strong>Luxury & Comfort:</strong> Stylish, fully equipped, and
              meticulously maintained vehicles.
            </li>
            <li>
              <strong>Punctual & Reliable:</strong> Timely pickups and seamless
              service guaranteed.
            </li>
            <li>
              <strong>Professional Chauffeurs:</strong> Experienced, licensed
              drivers who prioritize your satisfaction.
            </li>
            <li>
              <strong>Customized Experiences:</strong> Tailored routes and
              services to meet your unique needs.
            </li>
            <li>
              <strong>Safety First:</strong> Vehicles are sanitized and
              maintained regularly for your peace of mind.
            </li>
          </ul>

          <p>
            At <strong>A.D.T Transportation</strong>,{" "}
            <strong>Abeil Daniel Tirago</strong> and his dedicated team take
            care of every detail so you can enjoy a stress-free, elegant
            journey. Arrive in style and create lasting memories with our luxury
            limousine service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
