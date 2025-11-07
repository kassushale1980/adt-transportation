import React from "react";
import luxurySedan from "../assets/images/Luxury-Sedan.jpg"; 
import suvImg from '../assets/images/executive-suburban-suv.jpg';
import stretchLimousine from "../assets/images/stretch-limousine.jpg"; 
import partyBus from "../assets/images/Suburban-SUV2.jpg"; 

const Fleet = () => {
  return (

    
    <section className="container my-5">
      <h2 className="text-center mb-4 text-warning fw-bold">Our Fleet</h2>
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0 fleet-card">
            <img
              src={luxurySedan}
              alt="Luxury Sedan"
              className="img-fluid rounded shadow"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Luxury Sedan</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0 fleet-card">
            <img src={suvImg} alt="Executive Suburban SUV"
              className="img-fluid rounded-top"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Executive SUV</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0 fleet-card">
            <img
              src={stretchLimousine}
              alt="Stretch Limousine"
              className="img-fluid rounded-top"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Stretch Limousine</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow-sm border-0 fleet-card">
            <img
              src={partyBus}
              alt="Party Bus"
              className="img-fluid rounded-top"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Subarban suv</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
