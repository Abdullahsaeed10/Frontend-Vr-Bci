import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container flex justify-center lg:mt-10 mt-5 px-2">
      <div className="lg:p-14 p-5 max-w-3xl about-styling flex flex-col items-center">
        <h1 className="font-bold text-4xl text-black">About Us</h1>
        <p className="text-white md:max-w-prose max-w-[43ch]">
          Welcome to our platform, where we specialize in the field of
          Brain-Computer Interface (BCI) and Virtual Reality (VR) based
          rehabilitation. Founded in 2024, we are committed to providing
          innovative rehabilitation solutions for post-stroke patients and
          delivering exceptional customer service.
        </p>
        <div className="mission bg-slate-500/50">
          <h2>Our Mission</h2>
          <p className="md:max-w-prose max-w-[43ch]">
            To empower our patients and doctors through innovative
            rehabilitation services, transforming stroke recovery into an
            engaging and effective journey.
          </p>
        </div>
        <div className="vision bg-slate-500/50">
          <h2>Our Vision</h2>
          <p className="md:max-w-prose max-w-[43ch]">
            We strive to be the leading provider in the field of BCI and VR
            rehabilitation, recognized for our commitment to quality and
            sustainability.
          </p>
        </div>
        <div className="slogan text-white md:max-w-prose max-w-[43ch] mt-4">
          <h2>Your Path to Recovery</h2>
        </div>
        <div className="home-button-container mb-2">
          <Link to="/" className="login-button px-10">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
