import { useEffect, useState } from "react";
// import * as VANTA from "vanta";
import DOTS from "vanta/dist/vanta.dots.min";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/iete-rectangle.jpg";
import chatIcon from "../assets/chat-icon.svg";

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
          <h1 className="title">IETE Committee</h1>
          <div className="hr-logo-container">
            <img src={logo} alt="IETE SFIT" className="logo" />
          </div>
          <p className="tagline">&gt; Empowering Tech of Today.</p>
          <button
            className="contact-button"
            onClick={() => navigate("/contactus")}
          >
            Contact Us{" "}
            <span className="chat-icon">
              <img src={chatIcon} alt="chat" className="chat-here" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
