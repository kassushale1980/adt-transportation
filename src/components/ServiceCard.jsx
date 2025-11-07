// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-0 service-card">
        <img src={image} alt={title} className="img-fluid rounded shadow" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
