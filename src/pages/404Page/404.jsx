import { Link } from "react-router-dom";
import "./404.css"; // Ensure the CSS file name matches

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        Oops! We can not seem to find the page you are looking for.
      </p>
      <Link to="/" className="not-found-button">
        Go Home
      </Link>
      {/* If you decide to add a footer later, you can use the not-found-footer class */}
    </div>
  );
};

export default NotFoundPage;
