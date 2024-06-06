import { Link, useLocation } from 'react-router-dom';
import logoImage from '/images/images/logo.png'; // Update with the correct path to your logo image
import MobileMenu from './MobileMenu';

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  // Define the paths where the logout button should appear
  const pathsToShowLogout = ['/Verification', '/verify', '/settings'];

  // Check if the current path is one of the paths where the logout should show
  const shouldShowLogout = pathsToShowLogout.includes(pathname);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out...');
    // Typically, you would clear the authentication token and redirect the user to the login page
  };
  return (
    <>
      <nav className="flex justify-between md:px-16 px-3 py-5 items-center  bg-black/50 ">
        <Link to="/" className="nav-logo">
          <img src={logoImage} alt="logo" />
        </Link>
        <ul className="text-xl  gap-12 hidden md:flex">
          <Link to="/about" className=" text-white hover:text-white/70">
            About
          </Link>
          <Link to="/services" className=" text-white hover:text-white/70">
            Services
          </Link>
          <Link to="/contact" className=" text-white hover:text-white/70">
            Contact
          </Link>
          {shouldShowLogout && (
            <Link to="/" onClick={handleLogout} className="nav-action-logout">
              Logout
            </Link>
          )}
        </ul>

        <MobileMenu
          shouldShowLogout={shouldShowLogout}
          handleLogout={handleLogout}
        />
      </nav>
    </>
  );
};

export default NavBar;
