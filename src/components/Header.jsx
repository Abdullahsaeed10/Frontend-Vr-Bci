import { Link, useLocation } from "react-router-dom";
import "./components.css"; // Ensure this is the correct path to your CSS file

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  // Define the paths where the logout button should appear
  const pathsToShowLogout = ["/Verification", "/verify", "/settings"];

  // Check if the current path is one of the paths where the logout should show
  const shouldShowLogout = pathsToShowLogout.includes(pathname);

  const handleLogout = () => {
    // Implement your logout logic here, like clearing the auth token and redirecting to login page
    console.log("Logging out...");
  };

  return (
    <nav className="home-nav">
      <Link to="/" className="nav-logo">
        YourBrand
      </Link>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        {shouldShowLogout && (
          <button onClick={handleLogout} className="nav-action-logout">
            Logout
          </button>
        )}

      </div>
    </nav>
  );
};

export default NavBar;
