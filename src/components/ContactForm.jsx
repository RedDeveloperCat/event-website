"use client";

import { useState } from "react";
import MyNavbar from "./MyNavbar"; // Import the Navbar component
import Hero from "./Hero"; // Import the Hero component
import "./ContactForm.css";

const ContactForm = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="contact-page">
      {/* Navbar */}
      <MyNavbar />

      {/* Orange Line */}
      <div className="orange-line"></div>
      <h1 className="headingC">Contact</h1>

      {/* Main Content */}
      <div className="content">
        {/* Form Section */}
        <form>
          <div className="form-section">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone No" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="contact-button">Contact Us</button>
          </div>
        </form>

        {/* Show Details Button (Mobile Only) */}
        <button
          className="show-details-button"
          onClick={() => setShowDetails(prev => !prev)}
        >
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
        {showDetails ? 
        <div className="details-section">
          <p>iete-contact@sfit.ac.in</p>
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
        : " "
        }


      </div>

      {/* Orange Line */}
      <div className="orange-line"></div>

      {/* Footer - Hero Component */}
      <Hero />
    </div>
  );
};

export default ContactForm;
