import { useState } from "react";
import "./AboutUsGoals.css";
import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/img3.jpg";
import img4 from "../assets/about/img4.jpg";

const AboutUsGoals = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="about-us-container">
      <h1 className="section-title">About Us</h1>
      <h2 className="sub-title">IETE SFIT</h2>

      <div className="slider-container">
        <button onClick={prevSlide} className="slider-btn left">❮</button>
        <img src={images[current]} alt="Slider" className="slider-img" />
        <button onClick={nextSlide} className="slider-btn right">❯</button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span key={index} className={`dot ${current === index ? "active" : ""}`}></span>
        ))}
      </div>

      <button className="gallery-btn">Gallery ➤</button>

      <p className="about-text">
        The Institute of Electrical and Electronics Engineering (IETE) is an international organization, fostering scientific expertise worldwide. IETE attracts students, faculty, and professionals across various fields and promotes diversity in thought, crucial for scientific progress.
      </p>

      <p className="about-text">
        IEEE serves as a hub for engineering students and faculty to express their technical knowledge globally, remaining at the forefront of technical innovation.
      </p>

      <h2 className="goals-heading">Goals</h2>
      <ul className="goals-list">
        <li>Inspire, Enable, Empower, and Energize students to enhance their technical interests.</li>
        <li>Encourage knowledge-sharing and skill development through collaborative learning.</li>
        <li>Provide a platform for innovation, leadership, and professional growth.</li>
      </ul>
    </div>
  );
};

export default AboutUsGoals;
