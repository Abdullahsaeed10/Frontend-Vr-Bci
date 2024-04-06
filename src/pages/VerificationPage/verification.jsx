import { useState, useRef, useEffect } from "react";
import "./verification.css"; // Ensure the CSS file is correctly imported.

import Footer from "../../components/Footer"; // Ensure correct import path
import NavBar from "../../components/Header";

const Verification = () => {
  const [codes, setCodes] = useState(new Array(6).fill(""));
  const [error, setError] = useState(""); // For displaying any error messages
  const inputsRef = useRef(new Array(6));

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log("🚀 ~ Verification ~ backendUrl:", backendUrl);

  const handleChange = (value, index) => {
    const newCodes = [...codes];
    newCodes[index] = value.slice(0, 1);
    setCodes(newCodes);

    if (index < 5 && value) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const verifyCode = async () => {
    // Join the individual codes into a single string
    const fullCode = codes.join("");

    // Basic validation to check if all inputs are filled
    if (fullCode.length < codes.length) {
      setError("Please fill in all the fields.");
      return;
    }

    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem("token");
      console.log("🚀 ~ verifyCode ~ token:", token);
      if (!token) {
        setError("No authentication token found. Please login again.");
        return;
      }

      const response = await fetch(`${backendUrl}/auth/login/obtaintoken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use the token
        },
        body: JSON.stringify({ code: fullCode }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Verification failed");
      }

      // Handle success (e.g., navigate to another page or show a success message)
      console.log("Verification successful");
    } catch (error) {
      console.error("Verification error:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    inputsRef.current[0].focus(); // Automatically focus the first input on component mount
  }, []);

  return (
    <div className="home-container">
      <NavBar /> {/* Using NavBar component */}
      <div className="verification-container">
        <h2>Connect Your Headset</h2>
        <p>
          Please enter the 6-digit code that appears on your headset to connect.
        </p>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display any error messages */}
        <div className="code-container">
          {codes.map((code, index) => (
            <input
              key={index}
              type="text"
              className="code"
              maxLength="1"
              value={code}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              required
            />
          ))}
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={verifyCode}
          >
            Verify
          </button>
        </div>
        <small className="info">
          If you are having trouble, make sure your headset is on and within
          range.
        </small>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default Verification;
