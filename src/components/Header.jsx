import { Link, useLocation } from "react-router-dom";
import logoImage from "/images/images/logo.png"; // Update with the correct path to your logo image
import "./components.css"; // Ensure this is the correct path to your CSS file

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  // Define the paths where the logout button should appear
  const pathsToShowLogout = ["/Verification", "/verify", "/settings"];

  // Check if the current path is one of the paths where the logout should show
  const shouldShowLogout = pathsToShowLogout.includes(pathname);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
    // Typically, you would clear the authentication token and redirect the user to the login page
  };

  return (
    <nav className="home-nav">
      <Link to="/" className="nav-logo">
        <img src={logoImage} alt="YourBrand Logo" />
      </Link>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        {shouldShowLogout && (
          <Link to="/" onClick={handleLogout} className="nav-action-logout">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
