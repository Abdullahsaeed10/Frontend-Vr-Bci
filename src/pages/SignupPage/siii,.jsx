// SignUp.jsx
import { useState } from 'react';
import './SignUp.css'; // Ensure this points to your SignUp.css file
import { Link } from 'react-router-dom';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

function Signup() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    medical_history: '',
    rehabilitation_program: '',
    diagnosis: '',
  });

  // State to store validation error messages
  const [formErrors, setFormErrors] = useState({});

  // Helper function to check if all fields are filled
  const allFieldsFilled = () => Object.values(userDetails).every((field) => field.trim() !== '');

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    // Optionally, clear error for a field when the user starts correcting it
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userDetails.email)) {
      errors.email = 'Invalid email format.';
    }

    const phoneNumber = parsePhoneNumberFromString(userDetails.phone);
    if (!phoneNumber || !phoneNumber.isValid()) {
      errors.phone = 'Invalid phone number. Include country code.';
    }

    if (userDetails.password !== userDetails.confirmPassword) {
      errors.password = 'Passwords do not match.';
      errors.confirmPassword = 'Passwords do not match.';
    }

    setFormErrors(errors);
    console.log(errors);
    return Object.keys(errors).length == 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!allFieldsFilled()) {
      setFormErrors({ general: "Please fill in all fields." });
      return;
    }

    if (!validateForm()) {
      // If validation fails, stop here.
      return;
    }

    // Attempt to sign up with the validated details
    const response = await fetch('https://vrbcicompanion-1-d3565436.deta.app/api/v1/patient/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });

    if (response.ok) {
      console.log('Account created successfully!');
      // Redirect the user or clear the form as needed
    } else {
      console.log('An error occurred during sign-up.');
      // Handle different kinds of errors here
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
        <button type="submit" className="signup-button">Sign Up</button>
        <div className="signup-form-footer">
          <p>Already have an account? <Link to="/">Log in</Link></p>
        </div>
      </form>
    </div>
  );
}
export default Signup;
