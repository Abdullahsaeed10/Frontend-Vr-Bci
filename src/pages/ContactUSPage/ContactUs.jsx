import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions? We are ready to help. Contact us through the following
        channels:
      </p>
      <ul className="contact-info">
        <li>Email: contact@example.com</li>
        <li>Phone: +0201099947655</li>
        <li>Address: 123 example street, city, country.</li>
      </ul>
      <form className="contact-form">
        <label></label>
        <input type="text" id="name" name="name" placeholder="Name" required />

        <label></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <label></label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
      <div className="home-button-container">
        <Link to="/" >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
