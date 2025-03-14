"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true); // Start submitting

    // Use EmailJS to send the email
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Access environment variable for service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Access environment variable for template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID // Access environment variable for user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("An error occurred while sending your message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Stop submitting
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-orange-line"></div>
      <h1 className="contact-page-heading">Contact</h1>

      <div className="contact-page-content">
        <form onSubmit={handleSubmit}>
          <div className="contact-page-form-section">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-page-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Contact Us ➤"}
            </button>
          </div>
        </form>
      </div>

      <div className="contact-page-orange-line"></div>
    </div>
  );
};

export default ContactForm;
