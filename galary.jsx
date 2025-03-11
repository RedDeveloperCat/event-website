import { useState } from "react";
import "./galary.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1>GALLERY</h1>
        <div className="orange-line"></div>

        {/* Image Slider */}
        <div className="slider">
          <button onClick={prevSlide} className="nav-btn left-btn">
            ❮
          </button>
          <div className="slide-container">
            <img src={images[current]} alt="Slider" className="slide-img" />
          </div>
          <button onClick={nextSlide} className="nav-btn right-btn">
            ❯
          </button>
        </div>

        {/* Event Boxes */}
        {/* Event Boxes */}
        <div className="event-gallery">
          {[...Array(6)].map((_, index) => (
            <div key={index}>
              <div className="event-box">
                <div className="image-placeholder">Image Here</div>
              </div>
              <p className="event-text">Event Name, Date 2025</p>{" "}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
