import SectionTitle from "../Components/SectionTittle/SectionTitle";
import Button from "../Components/Button/Button";
import "./Admission.css";

const Admissions = () => {
  return (
    <main className="admissions-page">
      {/* Hero */}
      <section className="admissions-hero">
        <div className="hero-content">
          <h1>Admissions</h1>
          <p>
            Join Crestwood Academy and give your child access to quality
            education, strong values, and a bright future.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="admissions-section">
        <div className="container">
          <SectionTitle
            title="Why Choose Crestwood Academy"
            subtitle="We provide a supportive environment that encourages excellence"
          />

          <div className="admissions-grid">
            <div className="admissions-card">
              <h3>Qualified Teachers</h3>
              <p>
                Our teachers are experienced professionals committed to student success.
              </p>
            </div>

            <div className="admissions-card">
              <h3>Modern Facilities</h3>
              <p>
                We offer well-equipped classrooms, science labs, and digital tools.
              </p>
            </div>

            <div className="admissions-card">
              <h3>Holistic Development</h3>
              <p>
                We focus on academics, character building, and extracurricular growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="admissions-section light-bg">
        <div className="container">
          <SectionTitle
            title="Admission Requirements"
            subtitle="Documents needed for enrollment"
          />

          <ul className="requirements-list">
            <li>Completed application form</li>
            <li>Birth certificate copy</li>
            <li>Previous school records</li>
            <li>Passport photographs</li>
            <li>Medical report</li>
          </ul>
        </div>
      </section>

      {/* Application Process */}
      <section className="admissions-section">
        <div className="container">
          <SectionTitle
            title="Application Process"
            subtitle="Simple steps to enroll your child"
          />

          <div className="steps">
            <div className="step">
              <span>1</span>
              <p>Fill out the online or in-person application form</p>
            </div>

            <div className="step">
              <span>2</span>
              <p>Submit required documents</p>
            </div>

            <div className="step">
              <span>3</span>
              <p>Attend student assessment and interview</p>
            </div>

            <div className="step">
              <span>4</span>
              <p>Receive admission decision</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="admissions-cta">
        <h2>Ready to Apply?</h2>
        <p>Start your child’s journey with Crestwood Academy today.</p>
        <Button to="/contact">Apply Now</Button>
      </section>
    </main>
  );
};

export default Admissions;
