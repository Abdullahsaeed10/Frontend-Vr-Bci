import { Link } from "react-router-dom";
import "./Home.css"; // Updated CSS for a more professional look

const HomePage = () => {
  return (
    <div className="home-container flex justify-center  lg:mt-40 mt-10 ">
      <header className="home-hero">
        <div className="hero-content">
          <h1>Welcome to NeurohikeVR</h1>
          <p>Your path to recovery</p>
          <div className="hero-actions">
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
      </header>
      {/* Footer component */}
    </div>
  );
};

export default HomePage;
