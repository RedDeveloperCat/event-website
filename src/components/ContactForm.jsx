"use client";

import { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="contact-page-container">
      {/* Orange Line */}
      <div className="contact-page-orange-line"></div>
      <h1 className="contact-page-heading">Contact</h1>

      {/* Main Content */}
      <div className="contact-page-content">
        {/* Form Section */}
        <form>
          <div className="contact-page-form-section">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone No" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="contact-page-button">Contact Us ➤</button>
          </div>
        </form>

        {/* Show Details Button (Mobile Only) */}
        <button
          className="contact-page-show-details"
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
      <div className="contact-page-orange-line"></div>
   </div>
  );
};

export default ContactForm;
