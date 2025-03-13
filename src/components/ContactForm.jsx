"use client";

import { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert("Name, Email, and Message are required!");
      return;
    }

    // Generate mailto link
    const mailtoLink = `mailto:ietesfit@gmail.com?subject=Contact Request from ${formData.name}&body=
      Name: ${encodeURIComponent(formData.name)}%0A
      Email: ${encodeURIComponent(formData.email)}%0A
      Phone: ${encodeURIComponent(formData.phone || "N/A")}%0A
      Message: ${encodeURIComponent(formData.message)}`;

    // Open the mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-orange-line"></div>
      <h1 className="contact-page-heading">Contact</h1>

      <div className="contact-page-content">
        <form onSubmit={handleSubmit}>
          <div className="contact-page-form-section">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} />
            <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="contact-page-button">
              Contact Us ➤
            </button>
          </div>
        </form>
      </div>

      <div className="contact-page-orange-line"></div>
    </div>
  );
};

export default ContactForm;
