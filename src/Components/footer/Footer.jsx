import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* School Info */}
        <div className="footer-col">
          <h3 className="footer-brand">Crestwood Academy</h3>
          <p>
            Crestwood Academy is dedicated to academic excellence, character
            development, and preparing students for lifelong success in a
            supportive learning environment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/admissions">Admissions</a></li>
          </ul>
        </div>

        {/* Academics */}
        <div className="footer-col">
          <h4>Academics</h4>
          <ul>
            <li>Primary Education</li>
            <li>Science & Technology</li>
            <li>Arts & Humanities</li>
            <li>Digital Skills</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <p className="footer-contact">
            <FaMapMarkerAlt /> Lagos, Nigeria
          </p>

          <p className="footer-contact">
            <FaPhoneAlt /> +234 800 123 4567
          </p>

          <p className="footer-contact">
            <FaEnvelope /> info@crestwoodacademy.edu
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Crestwood Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
