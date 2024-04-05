// Login.jsx
import { useState } from "react";
import "./Login.css"; // Import the CSS directly if not using CSS Modules
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder for your login logic
    console.log(username, password);
    // Here you would handle the login logic, possibly sending a request to your server

    try {
      const response = await fetch(
        "https://vrbcicompanion-1-d3565436.deta.app/api/v1/auth/login/obtaintoken",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: username, password: password }),
        }
      );
      console.log(response);

      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.refresh_token);

      if (!response.ok) {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Display error message to the user
    }
  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>
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
