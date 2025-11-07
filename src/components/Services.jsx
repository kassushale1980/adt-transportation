import React from "react";

const Services = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h5>Airport Transfers</h5>
            <p>Reliable drop-off and pick-up service to all major airports.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h5>Corporate Travel</h5>
            <p>Executive transportation for business meetings and events.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h5>Special Events</h5>
            <p>Weddings, Proms, Parties — ride in style and comfort.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
