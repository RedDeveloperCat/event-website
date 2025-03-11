import { useState } from "react";
import "./Gallery.css";
import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/img3.jpg";
import img4 from "../assets/about/img4.jpg";

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [img1, img2, img3, img4];
  
    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
  
    return (
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="slider-container">
          <button className="slider-btn left" onClick={prevImage}>&lt;</button>
          <img src={images[currentImage]} alt="Gallery" className="slider-img" />
          <button className="slider-btn right" onClick={nextImage}>&gt;</button>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span key={index} className={`dot ${index === currentImage ? 'active' : ''}`}></span>
          ))}
        </div>
        <div className="event-gallery">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="event-box" key={index}>
              <div className="event-image">
                <img src={images[index % images.length]} alt="Event" className="event-img" />
              </div>
              <p className="event-text">Event Name, Date 2025</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Gallery;