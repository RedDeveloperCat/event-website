import { useState, useEffect } from "react";
import sanityClient from "../sanity/sanityconfig";
import imageUrlBuilder from "@sanity/image-url";
import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion"; // Import framer-motion
import "./Gallery.css";

// Set up the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the image URL
const urlFor = (source) => builder.image(source).url();

const Gallery = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [events, setEvents] = useState([]);

  // Fetch event slider images
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "eventslider"][0]{
          images[]{asset->{_id, url}}
        }`
      )
      .then((data) => {
        const fetchedImages = data?.images?.map((img) => urlFor(img.asset)) || [];
        setSliderImages(fetchedImages);
      })
      .catch(console.error);
  }, []);

  // Fetch event gallery details
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "event"]{
          title,
          date,
          images[]{asset->{_id, url}},
          redirectUrl
        }`
      )
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);

  return (
    <div className="gallery-container">
      <motion.h2
        className="gallery-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Gallery
      </motion.h2>

      {/* Main Slider using Bootstrap Carousel */}
      <div className="slider-container">
        {sliderImages.length > 0 ? (
          <Carousel>
            {sliderImages.map((img, index) => (
              <Carousel.Item key={index}>
                <motion.img
                  src={img}
                  alt={`Slide ${index}`}
                  className="d-block w-100 slider-img"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Loading images...</p>
        )}
      </div>

      {/* Event Gallery */}
      <motion.div
        className="event-gallery"
        id="event-gallery"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        {events.length > 0 ? (
          events.map((event, index) => (
            <motion.div
              key={index}
              className="event-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: index * 0.2 }} // Staggered animation
            >
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>

              {/* Event Image Carousel */}
              {event.images.length > 0 ? (
                <Carousel>
                  {event.images.map((img, imgIndex) => (
                    <Carousel.Item key={imgIndex}>
                      <motion.img
                        src={urlFor(img.asset)}
                        alt={event.title}
                        className="d-block w-100 event-img"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <p>No images available</p>
              )}

              {/* Event Redirect URL */}
              {event.redirectUrl && (
                <a
                  href={event.redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-link"
                >
                  View More ➜
                </a>
              )}
            </motion.div>
          ))
        ) : (
          <p>Loading events...</p>
        )}
      </motion.div>
    </div>
  );
};

export default Gallery;
