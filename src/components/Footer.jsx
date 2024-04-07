import "./components.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Rehabilitaion - All Rights Reserved
    </footer>
  );
};

export default Footer;
