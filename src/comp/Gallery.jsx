import { useState, useEffect } from "react";
import sanityClient from "../sanity/sanityconfig";
import imageUrlBuilder from "@sanity/image-url";
import "./Gallery.css";

// Set up the image URL builder
const builder = imageUrlBuilder(sanityClient);

const Gallery = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [events, setEvents] = useState([]);

  // Function to get the image URL
  const urlFor = (source) => builder.image(source).url();

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

  const nextImage = () => {
    if (sliderImages.length > 0) {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }
  };

  const prevImage = () => {
    if (sliderImages.length > 0) {
      setCurrentImage((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      
      {/* Main Slider */}
      <div className="slider-container">
        <button className="slider-btn left" onClick={prevImage}>&lt;</button>
        {sliderImages.length > 0 ? (
          <img src={sliderImages[currentImage]} alt="Gallery" className="slider-img" />
        ) : (
          <p>Loading images...</p>
        )}
        <button className="slider-btn right" onClick={nextImage}>&gt;</button>
      </div>

      {/* Dots Indicator */}
      <div className="dots">
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)} // Clickable dots
          ></span>
        ))}
      </div>

      {/* Event Gallery */}
      <div className="event-gallery">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="event-box">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>

              {/* Event Image Carousel */}
              <div className="event-slider">
                {event.images.length > 0 ? (
                  <div className="event-carousel">
                    {event.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="event-img-container">
                        <img src={urlFor(img.asset)} alt={event.title} className="event-img" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No images available</p>
                )}
              </div>

              {/* Event Redirect URL */}
              {event.redirectUrl && (
                <a href={event.redirectUrl} target="_blank" rel="noopener noreferrer" className="event-link">
                  View More ➜
                </a>
              )}
            </div>
          ))
        ) : (
          <p>Loading events...</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
