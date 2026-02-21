import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Shaping Minds. Building Futures.</h1>
          <p>
            Crestwood Academy is committed to academic excellence, character
            development, and lifelong learning in a safe and inclusive
            environment.
          </p>

          <a href="/admissions" className="hero-btn">
            Apply for Admission
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
