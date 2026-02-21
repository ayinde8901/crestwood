import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Enroll Your Child at Crestwood Academy</h2>
        <p>
          Join a community dedicated to academic excellence, character
          development, and lifelong learning.
        </p>

        <a href="/admissions" className="cta-btn">
          Apply for Admission
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
