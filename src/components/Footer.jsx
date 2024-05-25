import "./components.css";

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Neurohike - All Rights Reserved
    </footer>
  );
};

export default Footer;
