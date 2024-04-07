import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome where we deliver excellence in [Your Industry/Field]. Founded in
        [Year], we have been committed to providing quality [Products/Services]
        and exceptional customer service.
      </p>
      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          To empower our customers through innovative [Products/Services],
          transforming [industry-specific problem] into [industry-specific
          solution].
        </p>
      </div>
      <div className="vision">
        <h2>Our Vision</h2>
        <p>
          We strive to be the leading provider in [Your Industry/Field],
          recognized for our commitment to quality and sustainability.
        </p>
      </div>
      <div className="home-button-container">
        <Link to="/" className="home-button">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
