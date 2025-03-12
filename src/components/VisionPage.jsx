import React from "react";
import '../styles/VisionPage.css'; // Ensure the case matches

const VisionPage = () => {
  return (
    <div className="container">
      {/* Vision Title */}
      <h2 className="title">Vision & Mission</h2>

      {/* Image and Logo Section */}
      <div className="image-section">
        {/* College Building Image */}
        <img
          src="/src/assets/college.jpg" // Path to the college building image
          alt="College Building"
          className="college-image"
        />
        {/* Logo with Solid Background */}
            <div className="logo-container">
                    <img src="src/assets/iete-rectangle.jpg" alt="IETE SFIT" className="logo" />
            </div>
      </div>

      {/* Vision Statement */}
      <p className="vision-statement">
        IETE aims to achieve this by expanding educational programs, increasing opportunities for
        hands-on learning, fostering innovation and research, and strengthening industry-academic
        collaborations. IETE wants the students to continuously enhance their technical expertise,
        professional skills, and industry readiness. The focus is on preparing students to excel in
        rapidly evolving technological fields and become leaders in the global tech community.
      </p>

      {/* Decorative Lines */}
      <div className="decorative-line top-line"></div>
    </div>
  );
};

export default VisionPage;