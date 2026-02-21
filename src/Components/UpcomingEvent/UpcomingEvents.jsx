import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  return (
    <section className="events-preview">
      <div className="events-container">
        <div className="events-header">
          <h2>Upcoming Events</h2>
          <p>
            Stay informed about academic activities, celebrations, and important
            dates at Crestwood Academy.
          </p>
        </div>

        <div className="events-grid">
          <div className="event-card">
            <span className="event-date">Mar 15</span>
            <h3>Science Fair Exhibition</h3>
            <p>
              Students showcase innovative science projects and experiments.
            </p>
          </div>

          <div className="event-card">
            <span className="event-date">Apr 05</span>
            <h3>Parent–Teacher Conference</h3>
            <p>
              An opportunity to discuss student progress and development.
            </p>
          </div>

          <div className="event-card">
            <span className="event-date">May 20</span>
            <h3>Annual Cultural Day</h3>
            <p>
              Celebrating creativity, diversity, and cultural heritage.
            </p>
          </div>
        </div>

        <div className="events-action">
          <a href="/events" className="events-btn">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
