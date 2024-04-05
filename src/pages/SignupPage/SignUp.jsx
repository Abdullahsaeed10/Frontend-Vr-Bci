// SignUp.jsx
import { useState } from "react";
import "./SignUp.css"; // Ensure this points to your SignUp.css file
import { Link } from "react-router-dom";
import { parsePhoneNumberFromString } from "libphonenumber-js";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    medical_history: "",
    rehabilitation_program: "",
    diagnosis: "",
  });

  // Check if all fields are filled
  const allFieldsFilled = Object.values(userDetails).every(
    (field) => field.trim() !== ""
  );

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If not all fields are filled, alert the user and return early
    if (!allFieldsFilled) {
      alert("Please fill in all the fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userDetails.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone number validation
    const phoneNumber = parsePhoneNumberFromString(userDetails.phone);
    if (!phoneNumber || !phoneNumber.isValid()) {
      alert("Please enter a valid phone number with country code.");
      return;
    }

    // Validate that password and confirmPassword are the same
    if (userDetails.password !== userDetails.confirmPassword) {
      alert("The passwords do not match.");
      return;
    }

    // Perform the sign-up operation
    const response = await fetch(
      "https://vrbcicompanion-1-d3565436.deta.app/api/v1/patient/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      }
    );

    // Handle the response from the sign-up operation
    if (response.ok) {
      // Handle a successful sign-up
      console.log("Account created successfully!");
    } else {
      // Handle errors, for example:
      console.log("An error occurred during sign-up.");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-form-row full-width">
          <input
            type="text"
            className="signup-input"
            name="username"
            placeholder="@Username"
            value={userDetails.username}
            onChange={handleChange}
          />
        </div>
        <div className="signup-form-row ">
          <input
            type="text"
            className="signup-input"
            name="first_name"
            placeholder="First Name"
            value={userDetails.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="signup-input"
            name="last_name"
            placeholder="Last Name"
            value={userDetails.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="signup-form-row full-width">
          <input
            type="email"
            className="signup-input"
            name="email"
            placeholder="Example@example.com"
            value={userDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="signup-form-row ">
          <input
            type="password"
            className="signup-input"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <input
            type="password"
            className="signup-input"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userDetails.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="signup-form-row">
          <input
            type="tel"
            className="signup-input"
            name="phone"
            placeholder="Phone"
            value={userDetails.phone}
            onChange={handleChange}
          />
          <input
            type="date"
            className="signup-input"
            name="date_of_birth"
            placeholder="Date of Birth"
            value={userDetails.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div className="signup-form-row">
          <input
            type="text"
            className="signup-input"
            name="rehabilitation_program"
            placeholder="Rehabilitation Program"
            value={userDetails.rehabilitation_program}
            onChange={handleChange}
          />
          <input
            type="text"
            className="signup-input"
            name="diagnosis"
            placeholder="Diagnosis"
            value={userDetails.diagnosis}
            onChange={handleChange}
          />
        </div>
        <div className="signup-form-row full-width">
          <textarea
            className="signup-input"
            name="medical_history"
            placeholder="Medical History"
            value={userDetails.medical_history}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <div className="signup-form-footer">
          <p>
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
