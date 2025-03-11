import "./events.css";

function Events() {
  return (
    <div className="app-container">
      <div className="container">
        <div className="Eventcontain">
          {/* NEW SECTION (From Your Screenshot) */}
          <h1 className="highlight-title">SFIT Mosiac x IETE</h1>
          <h2 className="highlight-subtitle">IETE SFIT Event</h2>

          <p className="description">
            A unique opportunity to showcase your talent in knowledge-sharing
            skills for a noble social cause in the field of education,
            networking with like-minded people across the nation.
          </p>

          <p className="subtext">
            Want to see our team of Event 2025 of IETE? Click below.
          </p>

          <button className="event-button">Event 2025</button>
          {/* END NEW SECTION */}
        </div>

        <div className="orange-line"></div>
        <h1>PREVIOUS EVENTS</h1>

        {/* Event Boxes */}
        <div className="event-gallery">
          {[...Array(6)].map((_, index) => (
            <div key={index}>
              <div className="event-box">
                <div className="image-placeholder">Image Here</div>
              </div>
              <p className="event-text">Event Name, Date 2025</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
