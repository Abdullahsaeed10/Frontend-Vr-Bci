import './components.css';

const Footer = () => {
  return (
    <footer className="mt-auto py-1 h-full">
      © {new Date().getFullYear()} Neurohike - All Rights Reserved
    </footer>
  );
};

export default Footer;
