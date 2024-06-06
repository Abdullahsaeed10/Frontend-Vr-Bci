import { useState } from "react";
import "./Login.css"; // Import the CSS directly if not using CSS Modules
import { Link, useNavigate } from "react-router-dom";
// import Footer from "../../components/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for storing login errors
  const navigate = useNavigate(); // Updated to useNavigate

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/auth/login/obtaintoken`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

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
      <div className="login-container flex justify-center  lg:mt-20 mt-10 ">
        <form onSubmit={handleSubmit} className="login-styling lg:p-14 p-5 ">
          <h2 className="login-title text-3xl font-bold py-2">Login</h2>
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
              Dont have an account? <Link to="/signup">Register</Link>
            </h4>
            <h4>
              Forgot your password?{" "}
              <Link to="/forgotpassword">Reset it here</Link>
            </h4>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
