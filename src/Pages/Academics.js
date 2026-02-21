import "./Academics.css";

const Academics = () => {
  return (
    <main className="academics-page">
      {/* Hero Section */}
      <section className="academics-hero">
        <div className="academics-hero-content">
          <h1>Academics</h1>
          <p>
            At Crestwood Academy, our academic programs are designed to inspire
            curiosity, critical thinking, and a lifelong love of learning.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="academics-content">
        <div className="academics-container">
          <div className="academics-section">
            <h2>Primary Education</h2>
            <p>
              Our primary program focuses on foundational skills in literacy,
              numeracy, and social development.
            </p>
          </div>

          <div className="academics-section">
            <h2>Science & Technology</h2>
            <p>
              Students engage in hands-on experiments and innovative projects
              designed to prepare them for the future.
            </p>
          </div>

          <div className="academics-section">
            <h2>Arts & Humanities</h2>
            <p>
              Creative expression and cultural understanding are central to this
              program.
            </p>
          </div>

          <div className="academics-section">
            <h2>Digital Skills</h2>
            <p>
              We equip students with modern digital tools and problem-solving
              skills for the digital age.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
