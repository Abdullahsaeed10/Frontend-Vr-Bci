import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container  flex justify-center  lg:mt-10 mt-5 px-2">
      <div className="lg:p-14 p-5 max-w-3xl about-styling flex flex-col items-center">
        <h1 className="font-bold text-4xl text-black">About Us</h1>
        <p className="text-white md:max-w-prose max-w-[43ch]">
          Welcome where we deliver excellence in [Your Industry/Field]. Founded
          in [Year], we have been committed to providing quality
          [Products/Services] and exceptional customer service.
        </p>
        <div className="mission bg-slate-500/50">
          <h2>Our Mission</h2>
          <p className="md:max-w-prose max-w-[43ch]">
            To empower our customers through innovative [Products/Services],
            transforming [industry-specific problem] into [industry-specific
            solution].
          </p>
        </div>
        <div className="vision bg-slate-500/50">
          <h2>Our Vision</h2>
          <p className="md:max-w-prose max-w-[43ch]">
            We strive to be the leading provider in [Your Industry/Field],
            recognized for our commitment to quality and sustainability.
          </p>
        </div>
        <div className="home-button-container  mb-2">
          <Link to="/" className="login-button px-10">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
