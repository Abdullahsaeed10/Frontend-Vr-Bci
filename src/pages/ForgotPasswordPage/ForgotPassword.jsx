import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css"; // Make sure to create a ForgotPasswordPage.css file in the same directory

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL; // Ensure you have VITE_BACKEND_URL set in your environment variables

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        `${backendUrl}/auth/forgot-password?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Something went wrong");
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h1 className="forgot-password-title">Forgot Password</h1>
        {message && <div className="forgot-password-message">{message}</div>}
        {error && <div className="forgot-password-error">{error}</div>}
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
