import React from "react";
import "./About.css";
import school from "../Assets/schl.jpg"

const About = () => {
  return (
    <main className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content" data-aos="fade-up">
          <h1>About Crestwood Academy</h1>
          <p>
            Building future leaders through academic excellence,
            character development, and innovation.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section container">
        <div className="about-grid">

          <div className="about-text" data-aos="fade-right">
            <h2>Who We Are</h2>
            <p>
              Crestwood Academy is a leading institution dedicated to nurturing
              excellence in academics, leadership, and moral integrity.
              For over 25 years, we have provided a supportive environment
              where students grow intellectually and socially.
            </p>

            <p>
              Our experienced teachers, modern facilities, and commitment to
              innovation ensure that every student reaches their full potential.
            </p>
          </div>

          <div className="about-image" data-aos="fade-left">
          <img src={school} alt="schhol-image"/>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="container mission-grid">

          <div className="mission-card" data-aos="zoom-in">
            <h3>Our Mission</h3>
            <p>
              To provide high-quality education that empowers students
              with knowledge, discipline, and leadership skills.
            </p>
          </div>

          <div className="mission-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Our Vision</h3>
            <p>
              To be a center of excellence recognized globally
              for academic innovation and character formation.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="values container">
        <h2 data-aos="fade-up">Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card" data-aos="fade-up">
            <h4>Integrity</h4>
            <p>We uphold honesty, accountability, and moral principles.</p>
          </div>

          <div className="value-card" data-aos="fade-up" data-aos-delay="150">
            <h4>Excellence</h4>
            <p>We pursue the highest standards in academics and conduct.</p>
          </div>

          <div className="value-card" data-aos="fade-up" data-aos-delay="300">
            <h4>Innovation</h4>
            <p>We embrace creativity and modern learning approaches.</p>
          </div>

          <div className="value-card" data-aos="fade-up" data-aos-delay="450">
            <h4>Leadership</h4>
            <p>We prepare students to lead confidently and responsibly.</p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;
