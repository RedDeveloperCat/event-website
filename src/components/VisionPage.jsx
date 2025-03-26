import '../styles/VisionPage.css';
import { motion } from "framer-motion"; // Import Framer Motion

const VisionPage = () => {
  return (
    <div className="visionpage-container">
      <h2 className="visionpage-title">VISION & MISSION</h2>

      <div className="visionpage-image-section">
        <img
          src="college.jpg"
          alt="College Building"
          className="visionpage-college-image"
        />
        <div className="visionpage-logo-container">
          <img src="iete-rectangle.jpg" alt="IETE SFIT" className="visionpage-logo" />
        </div>
      </div>

      <p className="visionpage-statement">
        IETE aims to achieve this by expanding educational programs, increasing opportunities for
        hands-on learning, fostering innovation and research, and strengthening industry-academic
        collaborations. IETE wants the students to continuously enhance their technical expertise,
        professional skills, and industry readiness. The focus is on preparing students to excel in
        rapidly evolving technological fields and become leaders in the global tech community.
      </p>
      <motion.button
        className="vision-btn"
        onClick={() => window.open('/message.pdf', '_blank')}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Message from Convenor ➤
      </motion.button>

      {/* <div className="visionpage-decorative-line visionpage-top-line"></div> */}
    </div>
  );
};

export default VisionPage;
