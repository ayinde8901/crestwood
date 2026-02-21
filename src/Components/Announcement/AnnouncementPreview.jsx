import announcementsData from "../../Data/announcementData";
import SectionTitle from "../SectionTittle/SectionTitle";
import "./AnnouncementPreview.css";

const AnnouncementPreview = () => {
  const latestAnnouncements = announcementsData.slice(0, 3);

  return (
    <section className="announcements-preview">
      <div className="container">
        <SectionTitle
          title="Announcements"
          subtitle="Latest updates and important notices"
        />

        <div className="announcements-list">
          {latestAnnouncements.map(item => (
            <div key={item.id} className="announcement-card">
              <span className="announcement-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.message}</p>
            </div>
          ))}
        </div>

        <a href="/announcements" className="view-all-btn">
          View All Announcements
        </a>
      </div>
    </section>
  );
};

export default AnnouncementPreview;
