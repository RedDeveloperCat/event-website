import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./about-us-goals.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

function AboutUsGoals() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1>ABOUT US</h1>
        <h2>IETE SFIT</h2>
        <div className="orange-line"></div>

        {/* Image Slider */}
        <div className="slider">
          <button onClick={prevSlide} className="nav-btn left-btn">❮</button>
          <div className="slide-container">
            <img src={images[current]} alt="Slider" className="slide-img" />
          </div>
          <button onClick={nextSlide} className="nav-btn right-btn">❯</button>
        </div>

        {/* Gallery Button - Navigates to /gallery */}
        <button className="gallery-btn" onClick={() => navigate("/gallery")}>
          Gallery
        </button>

        {/* About Us Text */}
        <p className="about-text">
        IETE is a premier professional society in India, founded in 1953, dedicated to the advancement of Electronics & Telecommunication. It offers educational programs, certifications and conducts examinations, while also organizing conferences, workshops, placement talks, technical events. The endeavor of IETE-SFIT student Chapter is to spread awareness about the state-of-the-art technologies used in industries and develop all-round skills of engineers keeping in mind the interest of students.
        </p>

        <div className="orange-line"></div>

        {/* Goals Section */}
        <h2 className="goals-heading">GOALS</h2>
        <ul className="goals-list">
          <li>Professional Development: Workshops, seminars, and conferences to enhance technical and professional skills.
          </li>
          <li>Certifications: Opportunities to earn professional certifications and recognition.
          </li>
          <li>Networking: Connect with industry professionals, academicians, and peers through events and local chapters.
          </li>
          <li>Career Support: Placement talks, job fairs, and guidance from experienced professionals.
          </li>
          <li>Research Opportunities: Platforms to present and publish research work.</li>
          <li>Recognition: Awards and honors for outstanding contributions achievements in the field. and</li>
        </ul>
        <div className="orange-line"></div>
      </div>
    </div>
  );
}

export default AboutUsGoals;
