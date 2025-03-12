import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Correct import path
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "../styles/EventsPage.css"; // Import your custom styles

const EventsPage = () => {
  // Array of image paths (replace with your actual image paths)
  const images = [
    "/src/assets/event1.jpg",
    "/src/assets/event2.jpg",
    "/src/assets/event4.jpg",
    "/src/assets/event5.jpg",
  ];

  return (
    <div className="events-container">
      {/* Events Title */}
      <h2 className="events-title">Events</h2>

      {/* Event Name */}
      <p className="event-name">DJ Night X SFIT</p>

      {/* Image Slider */}
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]} // Add modules here
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Event ${index + 1}`}
                className="slider-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative Lines */}
      <div className="decorative-line vertical-line"></div>
      <button className="contact-button">
      {/* Contact Us <span className="chat-icon">💬</span> */}
      Events <span className="chat-icon"><img src="src/assets/calendar.png" alt="chat" className="chat-here" /></span>
      </button>
    </div>
  );
};

export default EventsPage;