import { useState, useEffect } from "react";
import sanityClient from "../sanity/sanityconfig"; // Import your Sanity client
import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion"; // Import Framer Motion
import "./AboutUsGoals.css";
import { useNavigate } from "react-router-dom";

const AboutUsGoals = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

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

  return (
    <div className="about-us-container" id="about-us-container">
      {/* Title Animation on Scroll */}
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      {/* Subtitle Animation on Scroll */}
      <motion.h2
        className="sub-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        IETE SFIT
      </motion.h2>

      {/* Carousel Animation on Scroll */}
      <motion.div
        className="slider-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {images.length > 0 ? (
          <Carousel>
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <img src={img} alt={`Slide ${index}`} className="d-block w-100 slider-img" />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Loading images...</p>
        )}
      </motion.div>

      {/* Gallery Button Animation on Scroll */}
      <motion.button
        className="gallery-btn"
        onClick={() => navigate('/gallery')}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Gallery ➤
      </motion.button>

      {/* Text Section Animation on Scroll */}
      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        The IETE student Chapter at SFIT started in 2008. The objectives of this student forum are as follows:
        To keep the students updated with technological developments in the field of Electronics
        & Telecommunication. To provide them a platform to develop their technical and managerial skills by organizing various technical events such as seminars, workshops, project competitions, and technical paper presentations.
      </motion.p>

      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        It offers educational programs, certifications, and conducts examinations, while also organizing conferences, workshops, placement talks, and technical events. The endeavor of IETE-SFIT student Chapter is to spread awareness about state-of-the-art technologies used in industries and develop all-round skills of engineers.
      </motion.p>

      {/* Goals Section Animation on Scroll */}
      <motion.h2
        className="goals-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        Goals
      </motion.h2>

      {/* Goals List Animation on Scroll */}
      <motion.ul
        className="goals-list"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Professional Development: Workshops, seminars, and conferences to enhance technical and professional skills.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          Certifications: Opportunities to earn professional certifications and recognition.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          Networking: Connect with industry professionals, academicians, and peers through events and local chapters.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 2.6 }}
        >
          Career Support: Placement talks, job fairs, and guidance from experienced professionals.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          Research Opportunities: Platforms to present and publish research work.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Recognition: Awards and honors for outstanding contributions and achievements in the field.
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default AboutUsGoals;
