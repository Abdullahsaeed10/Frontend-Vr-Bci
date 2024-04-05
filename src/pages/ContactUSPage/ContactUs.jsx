import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions? We are ready to help. Contact us through the following
        channels:
      </p>
      <ul className="contact-info">
        <li>Email: contact@yourbrand.com</li>
        <li>Phone: +123 456 7890</li>
        <li>Address: 123 Business Rd, Your City, YC 10101</li>
      </ul>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
