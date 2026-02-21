import "./AboutPreview.css";
import aboutImage from "../../Assets/about school.avif";

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Crestwood Academy campus" />
        </div>

        <div className="about-content">
          <h2>About Crestwood Academy</h2>
          <p>
            Crestwood Academy is a leading educational institution dedicated to
            nurturing academic excellence, personal growth, and strong values.
            Our experienced educators, modern facilities, and student-centered
            approach prepare learners for success in a rapidly changing world.
          </p>

          <a href="/about" className="about-btn">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
