import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ shouldShowLogout, handleLogout }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="md:hidden relative z-50 ">
      {!isClicked && <Menu size={45} onClick={() => setIsClicked(true)} />}
      {isClicked && <X size={45} onClick={() => setIsClicked(false)} />}
      {isClicked && (
        <ul className="menu-overlay text-xl flex flex-col gap-12 absolute px-10 py-5 -left-24 top-[77px]  bg-black/50">
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
      )}
    </div>
  );
};

export default MobileMenu;
