import EventsData from "../Data/EventsData";
import SectionTitle from "../Components/SectionTittle/SectionTitle";
import "./Events.css";

const Events = () => {
  return (
    <main className="events-page">
      {/* Page Hero */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1>School Events</h1>
          <p>
            Explore upcoming academic, cultural, and extracurricular activities
            at Crestwood Academy.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="events-section">
        <div className="events-container">
          <SectionTitle
            title="All Events"
            subtitle="Stay informed about important school programs and activities."
          />

          <div className="events-grid">
            {EventsData.map(event => (
              <article key={event.id} className="event-card">
                <span className="event-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
