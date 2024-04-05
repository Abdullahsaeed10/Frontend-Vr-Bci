import { Link } from "react-router-dom";
import "./Home.css"; // Ensure this is correctly linked to your HomePage styles
import Footer from "../../components/Footer"; // Make sure the path matches where your Footer component is located

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="home-nav">
        <Link to="/" className="nav-logo">
          YourBrand
        </Link>
        <div className="nav-links">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="nav-action">
            Login
          </Link>
          <Link to="/register" className="nav-action">
            Register
          </Link>
        </div>
      </nav>
      <header className="home-hero">
        <h1>Welcome to YourBrand</h1>
        <p>Delivering excellence, one client at a time.</p>
        <div className="hero-actions">
          <Link to="/get-started" className="btn btn-get-started">
            Get Started
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Register
          </Link>
        </div>
      </header>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default HomePage;
