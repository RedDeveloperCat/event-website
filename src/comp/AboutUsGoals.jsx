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
        The IETE student Chapter at SFIT started in 2008. The objectives of this student forum are as follows
        To keep the students updated with technological developments in the field of Electronics
        & Telecommunication. To provide them a platform to develop their technical and managerial skills by organizing various technical events such as seminars, workshops, project competitions and technical paper presentations to name a few.

      </p>

      <p className="about-text">
        It offers educational programs, certifications and conducts examinations, while also organizing conferences, workshops, placement talks, technical events. The endeavor of IETE-SFIT student Chapter is to spread awareness about the state- of-the-art technologies used in industries and develop all-round skills of engineers keeping in mind the interest of students.
      </p>

      <h2 className="goals-heading">Goals</h2>
      <ul className="goals-list">
        <li>Professional Development: Workshops,seminars, and conferences to enhance technical and professional skills.
        </li>
        <li>Certifications: Opportunities to earn professional certifications and recognition.</li>
        <li>Networking: Connect with industry professionals, academicians, and peers through events and local chapters.</li>
        <li>Career Support: Placement talks, job fairs, and guidance from experienced professionals.
        </li>
        <li>Research Opportunities: Platforms to present and publish research work.</li>
        <li>Recognition: Awards and honors for outstanding contributions and
          achievements in the field.
        </li>
      </ul>
    </div>
  );
};

export default AboutUsGoals;
