import { Link } from "react-router-dom";
import "./Home.css"; // Updated CSS for a more professional look
// import Footer from '../../components/Footer'; // Ensure correct import path

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Welcome to Neurohike</h1>
        <p>Delivering excellence</p>
        <div className="hero-actions">
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Register
          </Link>
        </div>
      </header>
      {/* Footer component */}
    </div>
  );
};

export default HomePage;
