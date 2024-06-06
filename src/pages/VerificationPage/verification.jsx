import { useState, useRef, useEffect } from 'react';
import './verification.css';

const Verification = () => {
  const [codes, setCodes] = useState(new Array(6).fill(''));
  const [error, setError] = useState(''); // For displaying any error messages
  const [successMessage, setSuccessMessage] = useState(''); // For displaying success message

  const inputsRef = useRef(new Array(6));

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (value, index) => {
    const newCodes = [...codes];
    newCodes[index] = value.slice(0, 1);
    setCodes(newCodes);

    if (index < 5 && value) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const verifyCode = async () => {
    // Reset error and success messages each time verification is attempted
    setError('');
    setSuccessMessage('');

    const fullCode = codes.join('');
    if (fullCode.length < codes.length) {
      setError('Please fill in all the fields.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No authentication token found. Please login again.');
        return;
      }

      const response = await fetch(`${backendUrl}/auth/enterotp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code: fullCode }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Verification failed');
      }
      // Assuming the success message is in data.data or data.message
      // Adjust according to your API response
      setSuccessMessage(data.data || data.message);
      console.log('Verification successful');
    } catch (error) {
      console.error('Verification error:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  return (
    <div className="home-container">
      <div className="verification-container">
        <h2>Connect Your Headset</h2>
        <p>
          Please enter the 6-digit code that appears on your headset to connect.
        </p>
        {error && <div className="error-message">{error}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}{' '}
        {/* Display success message */}
        <div className="code-container">
          {codes.map((code, index) => (
            <input
              key={index}
              type="text"
              className="code"
              maxLength="1"
              value={code}
              onChange={e => handleChange(e.target.value, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              ref={el => (inputsRef.current[index] = el)}
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
    </div>
  );
};

export default Verification;
