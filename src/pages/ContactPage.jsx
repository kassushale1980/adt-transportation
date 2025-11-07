import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_35tm1hn",     // <-- Replace with your EmailJS service ID
        "template_zixx3kk",    // <-- Replace with your EmailJS template ID
        form.current,
        "xUXH5M2oWUAzav9gS"      // <-- Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="container py-5">
      <h2 className="text-center text-warning fw-bold mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form ref={form} onSubmit={sendEmail} className="p-4 border rounded shadow">
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Message</label>
              <textarea
                name="message"
                rows="5"
                className="form-control"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Send Message
            </button>
          </form>

          {status && <p className="text-center mt-3 fw-bold">{status}</p>}
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="mb-1">
          <i className="bi bi-telephone-fill text-warning"></i> (240) 715-5200
        </p>
        <p className="mb-1">
          <i className="bi bi-envelope-fill text-warning"></i> info@adttransportation.com
        </p>
        <p>
          <i className="bi bi-geo-alt-fill text-warning"></i> 25 East Wayne AVE Silver Spring, MD 20910
        </p>
      </div>
    </section>
  );
};

export default ContactPage;

