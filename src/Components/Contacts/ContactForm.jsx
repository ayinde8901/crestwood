import React from 'react'
import "./Contacts.css";

const ContactForm = () => {
  return (
    <div>
       <form className="contact-form">
      <h2>Send Us a Message</h2>

      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="text" placeholder="Subject" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </form>
    </div>
  )
}

export default ContactForm
