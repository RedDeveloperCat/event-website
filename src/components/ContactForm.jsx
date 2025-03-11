"use client";

import { useState } from "react";
import MyNavbar from "./MyNavbar"; // Import the Navbar component
import Hero from "./Hero"; // Import the Hero component
import "./contactus.css";

const ContactUs = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="contact-page">
      {/* Navbar */}
      <MyNavbar />

      {/* Orange Line */}
      <div className="orange-line"></div>

      {/* Main Content */}
      <div className="content">
        {/* Form Section */}
        <div className="form-section">
          <div className="card">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone No" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="contact-button">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Show Details Button (Mobile Only) */}
        <button className="show-details-button" onClick={() => setShowDetails(true)}>
          Show Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {/* Contact Details Section (Desktop) */}
        <div className="details-section">
          <div className="card">
            <p>sete-contact@sfit.AC.IN</p>
            <p>8755329842</p>
            <p>9785329842</p>
            <p className="address">
              St. Francis Institute of Technology, Mount Poinsur,
              <br />
              S.V.P. Road,
              <br />
              Borivali West, Mumbai,
              <br />
              Maharashtra 400103
            </p>
          </div>
        </div>
      </div>

      {/* Orange Line */}
      <div className="orange-line"></div>

      {/* Footer - Hero Component */}
      <Hero />
    </div>
  );
};

export default ContactUs;
