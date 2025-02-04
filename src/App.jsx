import { useState } from "react";
import "./App.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img5.jpg";
import img3 from "./assets/img4.jpg";
import img4 from "./assets/img5.jpg";

function App() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="app-container">  {/* Use a wrapper div instead of <body> */}
      <div className="container">
        <h1>ABOUT US</h1>
        <h2>IETE SFIT</h2>
        <div className="orange-line"></div>

        {/* Image Slider */}
        <div className="slider">
          <button onClick={prevSlide} className="nav-btn">❮</button>
          <img src={images[current]} alt="Slider" className="slide-img" />
          <button onClick={nextSlide} className="nav-btn">❯</button>
        </div>

        {/* Gallery Button */}
        <button className="gallery-btn">Gallery </button>

        {/* About Us Text */}
        <p className="about-text">
        The Institute of Electrical and Electronics Engineering (IETE) is an International organization, which has been the nexus for propagating scientific expertise among people all over the globe. IETE continues to attract students, faculty and professionals from various fields all around the world and is committed to incorporating diversity in thoughts which is essential for scientific development.

IEEE serves as a hub to many engineering students and faculty members for expressing their technical acuity to the world and has always been at the forefront of the technical revolution.
        </p>
        <div className="orange-line"></div>

        {/* Goals Section */}
        <h2 className="goals-heading">GOALS</h2>
        <ul className="goals-list">
          <li>Inspire, Enable, Empower, and Energize our student members to enhance their technical interests.</li>
          <li>Inspire, Enable, Empower, and Energize our student members to enhance their technical interests.</li>
          <li>Inspire, Enable, Empower, and Energize our student members to enhance their technical interests.</li>
          
        </ul>
        <div className="orange-line"></div>
      </div>
    </div>
  );
}

export default App;
