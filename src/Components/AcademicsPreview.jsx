import { FaSchool, FaFlask, FaPalette, FaLaptopCode } from "react-icons/fa";
import "./AcademicsPreview.css";
// import SectionTitle from "./SectionTittle/SectionTitle";

const AcademicsPreview = () => {
  return (
    <section className="academics-preview">
      <div className="academics-container">

          {/* <SectionTitle
          title="Our Academic Programs"
          subtitle="Crestwood Academy offers a balanced and forward-thinking curriculum designed to prepare students for academic success and personal growth."
        /> */}
        <h2>Our Academic Programs</h2>
        <p className="academics-intro">
          Crestwood Academy offers a balanced and forward-thinking curriculum
          designed to prepare students for academic success and personal growth.
        </p>

        <div className="academics-grid">
          <div className="academic-card">
            <FaSchool className="academic-icon" />
            <h3>Primary Education</h3>
            <p>
              Building strong foundations in literacy, numeracy, and creativity
              for young learners.
            </p>
          </div>

          <div className="academic-card">
            <FaFlask className="academic-icon" />
            <h3>Science & Technology</h3>
            <p>
              Hands-on learning experiences that inspire curiosity and critical
              thinking.
            </p>
          </div>

          <div className="academic-card">
            <FaPalette className="academic-icon" />
            <h3>Arts & Humanities</h3>
            <p>
              Encouraging creativity, communication, and cultural awareness.
            </p>
          </div>

          <div className="academic-card">
            <FaLaptopCode className="academic-icon" />
            <h3>Digital Skills</h3>
            <p>
              Preparing students with modern technology and problem-solving
              skills.
            </p>
          </div>
        </div>

        <a href="/academics" className="academics-btn">
          View All Programs
        </a>
      </div>
    </section>
  );
};

export default AcademicsPreview;
