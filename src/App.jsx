import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx"; // import Banner

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import FleetPage from "./pages/FleetPage.jsx";
import BookingForm from "./components/BookingForm.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner /> {/* Add Banner here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
