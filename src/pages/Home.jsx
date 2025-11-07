import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="bg-dark text-center text-white py-5">
        <h1 className="display-4 text-warning fw-bold">A.D.T Transportation</h1>
        <p className="lead">Luxury • Comfort • Professional Chauffeur Service</p>
        <Link to="/booking" className="btn btn-warning btn-lg fw-bold">
          Book Now
        </Link>
      </section>

      <section className="container text-center my-5">
        <h2 className="text-warning fw-bold mb-4">Our Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow p-4">
              <i className="bi bi-airplane-engines fs-1 text-warning mb-3"></i>
              <h5 className="fw-bold">Airport Transfers</h5>
              <p>On-time pickups and drop-offs for seamless airport travel.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow p-4">
              <i className="bi bi-briefcase fs-1 text-warning mb-3"></i>
              <h5 className="fw-bold">Corporate Travel</h5>
              <p>Professional and reliable transportation for business clients.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow p-4">
              <i className="bi bi-gem fs-1 text-warning mb-3"></i>
              <h5 className="fw-bold">Special Events</h5>
              <p>Weddings, proms, parties — arrive in style and make memories.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
