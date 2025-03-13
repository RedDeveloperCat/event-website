import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../styles/EventsPage.css";
import sanityClient from "../sanity/sanityconfig"
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const EventsPage = () => {
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
        console.log(data);
        // Set the first event name as default
        if (data.length > 0 && data[0].images.length > 0) {
          setCurrentEventName(data[0].images[0].eventName);
        }
      })
      .catch(console.error);
  }, []);

  const handleSlideChange = (swiper) => {
    const currentImage = events[swiper.activeIndex]?.images[swiper.realIndex];
    setCurrentEventName(currentImage?.eventName || "");
  };

  return (
    <div className="events-container">
      <h2 className="events-title">Events</h2>

      {events.map((event, eventIndex) => (
        <div key={eventIndex}>
          {/* <p className="event-name">Events</p> */}
          <div className="slider-container">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              onSlideChange={handleSlideChange} // Add the slide change handler
            >
              {event.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={urlFor(image.asset).width(800).url()}
                    alt={image.eventName}
                    className="slider-image"
                  />
                  <p  className="slider-image">{image.eventName}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Display the current event name */}
          <p className="event-name-display">{currentEventName}</p>
        </div>
      ))}

      {/* <div className="decorative-line vertical-line"></div> */}
      <button className="contact-button">
        Events <span className="chat-icon"><img src="src/assets/calendar.png" alt="chat" className="chat-here" /></span>
      </button>
    </div>
  );
};

export default EventsPage;
