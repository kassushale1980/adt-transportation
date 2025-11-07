// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// const BookingForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     pickupAddress: "",
//     dropoffAddress: "",
//     vehicle: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const serviceID = "service_62qg39p";
//     const templateID = "template_c3xvqih";
//     const publicKey = "xUXH5M2oWUAzav9gS";

//     console.log("Booking data:", formData);

//     try {
//       const response = await emailjs.send(serviceID, templateID, formData, publicKey);
//       console.log("EmailJS Response:", response);
//       alert("Booking submitted successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         date: "",
//         time: "",
//         pickupAddress: "",
//         dropoffAddress: "",
//         vehicle: "",
//       });
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       alert("Failed to send booking. Check network or form fields.");
//     }
//   };

//   return (
//     <section className="container my-5">
//       <h2 className="text-center mb-4 text-warning fw-bold">Book Your Ride</h2>
//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="form-control mb-3"/>
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="form-control mb-3"/>
//         <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="form-control mb-3"/>
//         <input type="date" name="date" value={formData.date} onChange={handleChange} required className="form-control mb-3"/>
//         <input type="time" name="time" value={formData.time} onChange={handleChange} required className="form-control mb-3"/>
//         <input type="text" name="pickupAddress" placeholder="Pick-up Address" value={formData.pickupAddress} onChange={handleChange} required className="form-control mb-3"/>
//         <input type="text" name="dropoffAddress" placeholder="Drop-off Address" value={formData.dropoffAddress} onChange={handleChange} required className="form-control mb-3"/>
//         <select name="vehicle" value={formData.vehicle} onChange={handleChange} required className="form-select mb-3">
//           <option value="">Select Vehicle</option>
//           <option value="Luxury Sedan">Luxury Sedan</option>
//           <option value="Executive SUV">Executive SUV</option>
//           <option value="Stretch Limousine">Stretch Limousine</option>
//           <option value="Party Bus">Party Bus</option>
//         </select>
//         <button type="submit" className="btn btn-warning w-100 fw-bold">Book Now</button>
//       </form>
//     </section>
//   );
// };

// export default BookingForm;


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const form = useRef();
  const [service, setService] = useState("");
  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState("");
  const [total, setTotal] = useState(0);

  const STRIPE_LINK = "https://buy.stripe.com/test_4gweVb2xB2ABC12345"; // Replace with your real Stripe link

  const calculateTotal = (type, dist, hrs) => {
    let price = 0;

    switch (type) {
      case "Airport Pickup":
        price = 50 + dist * 3;
        break;
      case "Wedding Limo":
        price = 100 + dist * 4;
        break;
      case "Hourly Charter":
        price = 80 + hrs * 60;
        break;
      default:
        price = 0;
    }

    setTotal(price);
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setService(value);
    calculateTotal(value, distance, hours);
  };

  const handleDistanceChange = (e) => {
    const value = Number(e.target.value);
    setDistance(value);
    calculateTotal(service, value, hours);
  };

  const handleHoursChange = (e) => {
    const value = Number(e.target.value);
    setHours(value);
    calculateTotal(service, distance, value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_de5eyur",   
        "template_ny4ghxc",   // 🔁 replace with your Template ID
        form.current,
        "xUXH5M2oWUAzav9gS"     // 🔁 replace with your Public Key
      )
      .then(
        () => {
          alert("✅ Booking request sent successfully!");
          e.target.reset();
          setTotal(0);
        },
        (error) => {
          console.error(error);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="container my-5">
      <h2 className="text-center text-warning fw-bold mb-4">
        Book Your Ride
      </h2>

      <form ref={form} onSubmit={sendEmail} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="from_name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="from_email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" name="phone" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Service Type</label>
          <select
            name="service"
            className="form-select"
            value={service}
            onChange={handleServiceChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Airport Pickup">Airport Pickup</option>
            <option value="Wedding Limo">Wedding Limo</option>
            <option value="Hourly Charter">Hourly Charter</option>
          </select>
        </div>

        {service !== "Hourly Charter" && (
          <div className="mb-3">
            <label className="form-label">Distance (in miles)</label>
            <input
              type="number"
              name="distance"
              className="form-control"
              value={distance}
              onChange={handleDistanceChange}
              min="0"
            />
          </div>
        )}

        {service === "Hourly Charter" && (
          <div className="mb-3">
            <label className="form-label">Duration (in hours)</label>
            <input
              type="number"
              name="hours"
              className="form-control"
              value={hours}
              onChange={handleHoursChange}
              min="0"
            />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Additional Details</label>
          <textarea
            name="message"
            rows="3"
            className="form-control"
            placeholder="Pickup location, drop-off, time, etc."
          ></textarea>
        </div>

        {/* 💰 Hidden total field for EmailJS */}
        <input type="hidden" name="total_price" value={total} />

        <div className="alert alert-info text-center fw-bold">
          Estimated Total: ${total.toFixed(2)}
        </div>

        <button type="submit" className="btn btn-dark w-100 mb-3">
          Send Booking Request
        </button>

        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning w-100 fw-bold"
        >
          Proceed to Payment 💳
        </a>

        <p className="text-center mt-2 small text-muted">
          On the next page, enter <strong>${total.toFixed(2)}</strong> as your total payment amount.
        </p>
      </form>
    </section>
  );
};

export default BookingForm;