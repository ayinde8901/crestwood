import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contacts.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Get in Touch</h2>

      <p>
        <FaMapMarkerAlt /> 12 College Road, Lagos, Nigeria
      </p>
      <p>
        <FaPhoneAlt /> +234 801 234 5678
      </p>
      <p>
        <FaEnvelope /> info@crestwoodacademy.com
      </p>

      <p className="office-hours">
        Office Hours: Mon – Fri, 8:00am – 4:00pm
      </p>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="School Location"
          src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
