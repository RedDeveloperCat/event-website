"use client";

import { useState } from "react";
import Footer from "./Footer.jsx"; // Import the Hero component
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="contact-page">
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
      </div>

      {/* Orange Line */}
      <div className="orange-line"></div>

      {/* Footer - Hero Component */}
      <Footer/>
   </div>
  );
};

export default ContactForm;
