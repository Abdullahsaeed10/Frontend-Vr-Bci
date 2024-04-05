import "./components.css"; // Assuming you will create a dedicated CSS file for the footer

const Footer = () => {
  return (
    <footer className="home-footer">
      © {new Date().getFullYear()} YourBrand - All Rights Reserved
    </footer>
  );
};

export default Footer;
