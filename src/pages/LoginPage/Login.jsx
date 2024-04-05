// Login.jsx
import { useState } from "react";
import "./Login.css"; // Import the CSS directly if not using CSS Modules
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for storing login errors
  const navigate = useNavigate(); // Updated to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      const response = await fetch(
        "https://vrbcicompanion-1-d3565436.deta.app/api/v1/auth/login/obtaintoken",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.refresh_token);

      setError(""); // Reset error state in case of successful login

      navigate("/verify"); // Updated to use navigate method
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>
          {error && <div className="login-error">{error}</div>}
          <div className="login-input-group">
            <input
              type="text"
              className="login-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-input-group">
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="login-form-footer">
            <h4>
              Dont have an account?<Link to="/signUp"> Register</Link>
            </h4>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
