import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css"; // Make sure to create a ForgotPasswordPage.css file in the same directory

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, handle the submission (e.g., sending an email for password reset)
    console.log(email); // For demonstration purposes
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h1 className="forgot-password-title">Forgot Password</h1>
        <div className="forgot-password-input-group">
          <input
            type="email"
            className="forgot-password-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="forgot-password-button">
          Send Reset Link
        </button>
        <div className="forgot-password-form-footer">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
