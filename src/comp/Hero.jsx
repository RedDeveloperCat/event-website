import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import DOTS from "vanta/dist/vanta.dots.min";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import logo from "/iete-rectangle.jpg";
import chatIcon from "/chat-icon.svg";

const Hero = () => {
  const navigate = useNavigate();
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: "#vanta",
          backgroundColor: 0x191d2e,
          mouseControls: true,
          touchControls: true,
          size: 5.3,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="hero-container">
      <div className="bg" id="vanta">
        <div className="content">
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            IETE Committee
          </motion.h1>

          <motion.div
            className="hr-logo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <img src={logo} alt="IETE SFIT" className="logo" />
          </motion.div>

          <motion.p
            className="tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            &gt; Empowering Tech of Today.
          </motion.p>

          <motion.button
            className="contact-button"
            onClick={() => navigate("/contactus")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            Contact Us{" "}
            <span className="chat-icon">
              <img src={chatIcon} alt="chat" className="chat-here" />
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
