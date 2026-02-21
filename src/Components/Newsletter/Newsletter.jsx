import { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // For now, just simulate success
    setSuccess(true);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Stay updated with the latest school news and events.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {success && <p className="success">Thanks for subscribing!</p>}
    </section>
  );
};

export default Newsletter;
