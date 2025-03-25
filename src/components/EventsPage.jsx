import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import sanityClient from "../sanity/sanityconfig";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion"; // Import framer-motion
import "../styles/EventsPage.css";
import { useNavigate } from "react-router-dom";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source).width(1200).url();

const EventsPage = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [currentEventName, setCurrentEventName] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "eventGallery"]{
          title,
          images[]{
            eventName,
            asset
          }
        }`
      )
      .then((data) => {
        setEvents(data);
        if (data.length > 0 && data[0].images.length > 0) {
          setCurrentEventName(data[0].images[0].eventName);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="events-container">
      <h2 className="events-title">EVENTS</h2>

      {events.map((event, eventIndex) => (
        <div key={eventIndex} className="event-block">
          <Carousel
            controls={true}
            indicators={true}
            interval={3000} // Auto-slide every 3s
            fade
            onSelect={(selectedIndex) => {
              setCurrentEventName(event.images[selectedIndex]?.eventName || "");
            }}
            className="carousel-container"
          >
            {event.images.map((image, index) => (
              <Carousel.Item key={index}>
                {/* Motion div with animation */}
                <motion.div
                  className="image-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }} // Triggers animation when 50% of the element is in view
                  transition={{ duration: 1 }}
                >
                  <img
                    src={urlFor(image.asset)}
                    alt={image.eventName}
                    className="d-block w-100 slider-image"
                  />
                </motion.div>
                <Carousel.Caption>
                  <p className="event-name-overlay">{image.eventName}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ))}

      <div className="decorative-line vertical-line"></div>
      <motion.button
        className="contact-button"
        onClick={() => navigate('/gallery#event-gallery')}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Events <img src="/calendar.png" alt="calendar" className="chat-here" />
      </motion.button>
    </div>
  );
};

export default EventsPage;
