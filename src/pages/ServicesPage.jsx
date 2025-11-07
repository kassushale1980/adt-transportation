// src/pages/ServicesPage.jsx
import React from "react";
import ServiceCard from "../components/ServiceCard";

// Import service images
import service1 from "../assets/images/Luxury-Sedan.jpg";
import service2 from "../assets/images/Suburban-SUV.jpg";
import service3 from "../assets/images/Party-Bus.jpg";

const servicesData = [
  {
    title: "Airport Transportation",
    description: "Reliable airport pickup and drop-off service.",
    image: service1,
  },
  {
    title: "Corporate Travel",
    description: "Luxury transportation for business and corporate events.",
    image: service2,
  },
  {
    title: "Special Occasions",
    description: "Make your weddings, parties, and events unforgettable.",
    image: service3,
  },
];

const ServicesPage = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 text-warning fw-bold">ADT Transportation Services</h2>
      <div className="row">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
