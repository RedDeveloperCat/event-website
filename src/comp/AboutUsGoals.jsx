import { useState, useEffect } from "react";
import sanityClient from "../sanity/sanityconfig"// Import your Sanity client
import "./AboutUsGoals.css";

const AboutUsGoals = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "aboutUs"][0]{
          images[]{asset->{url}}
        }`
      )
      .then((data) => {
        const fetchedImages = data?.images?.map((img) => img.asset.url) || [];
        setImages(fetchedImages);
      })
      .catch(console.error);
  }, []);

  const nextSlide = () => {
    if (images.length > 0) {
      setCurrent((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images.length > 0) {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="about-us-container">
      <h1 className="section-title">About Us</h1>
      <h2 className="sub-title">IETE SFIT</h2>

      <div className="slider-container">
        <button onClick={prevSlide} className="slider-btn left">❮</button>
        {images.length > 0 ? (
          <img src={images[current]} alt="Slider" className="slider-img" />
        ) : (
          <p>Loading images...</p>
        )}
        <button onClick={nextSlide} className="slider-btn right">❯</button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)} // Allow users to click on dots
          ></span>
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
