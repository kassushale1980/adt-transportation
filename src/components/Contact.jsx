import React from "react";
import Contact from "../components/Contact";

const Contact = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center">We’re available 24/7 for your transportation needs.</p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; // ✅ This line is required
