import ContactForm from "../Components/Contacts/ContactForm";
import ContactInfo from "../Components/Contacts/ContactInfo";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you. Reach out for admissions, enquiries,
          or general information.
        </p>
      </section>

      {/* Content */}
      <section className="contact-content">
        <ContactInfo />
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
