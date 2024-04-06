import "./components.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} YourBrand - All Rights Reserved
    </footer>
  );
};

export default Footer;
