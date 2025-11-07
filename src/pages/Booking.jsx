import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    pickupAddress: "",
    dropoffAddress: "",
    vehicle: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_62qg39p";
    const templateID = "template_c3xvqih";
    const publicKey = "xUXH5M2oWUAzav9gS";

    // Log form data before sending
    console.log("Sending booking with data:", formData);

    try {
      const response = await emailjs.send(serviceID, templateID, formData, publicKey);
      console.log("EmailJS response:", response);
      alert("Booking submitted! We will contact you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        pickupAddress: "",
        dropoffAddress: "",
        vehicle: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      // Show detailed error alert
      if (error.text) {
        alert(`Failed to send booking: ${error.text}`);
      } else if (error.status) {
        alert(`Server error ${error.status}: ${error.message}`);
      } else {
        alert("Failed to send booking. Please check your network and try again.");
      }
    }
  };

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 text-warning fw-bold">Book Your Ride</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Pick-up Time</label>
          <input
            type="time"
            className="form-control"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Pick-up Address</label>
          <input
            type="text"
            className="form-control"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Drop-off Address</label>
          <input
            type="text"
            className="form-control"
            name="dropoffAddress"
            value={formData.dropoffAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Vehicle</label>
          <select
            className="form-select"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            required
          >
            <option value="">Select Vehicle</option>
            <option value="Luxury Sedan">Luxury Sedan</option>
            <option value="Executive SUV">Executive SUV</option>
            <option value="Stretch Limousine">Stretch Limousine</option>
            <option value="Party Bus">Party Bus</option>
          </select>
        </div>

        <button type="submit" className="btn btn-warning w-100 fw-bold">
          Book Now
        </button>
      </form>
    </section>
  );
};

export default Booking;
