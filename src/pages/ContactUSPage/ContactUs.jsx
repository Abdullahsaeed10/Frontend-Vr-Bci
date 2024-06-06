import { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    fetch("https://formspree.io/f/mrgnobdv", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setSubmitting(false);
        if (response.ok) {
          setMessage(
            "Thank you for your message. We will get back to you soon!"
          );
          setFormData({ name: "", email: "", message: "" });
        } else {
          setMessage(
            "There was a problem with your submission. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitting(false);
        setMessage(
          "An error occurred while sending your message. Please try again."
        );
      });
  };

  return (
    <div className="contact-container flex justify-center lg:mt-10 mt-5 px-2">
      <div className="contact-styling lg:p-14 p-5 max-w-3xl flex flex-col items-center">
        <h1 className="font-bold text-4xl text-black">Contact Us</h1>
        <p className="text-white md:max-w-prose max-w-[43ch]">
          Have questions? We are ready to help. Contact us through the
          following:
        </p>
        <ul className="contact-info text-white md:max-w-prose max-w-[43ch]">
          {/* <li>Email: contact@example.com</li>
          <li>Phone: +0212345678</li>
          <li>Address: 123 example street, city, country.</li> */}
        </ul>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {message && <p className="form-message">{message}</p>}
        <div className="home-button-container mb-2">
          <Link to="/" className="login-button px-10">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
