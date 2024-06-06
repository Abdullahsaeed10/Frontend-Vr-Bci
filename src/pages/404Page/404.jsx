import { Link } from "react-router-dom";
import "./404.css"; // Ensure the CSS file name matches

const NotFoundPage = () => {
  return (
    <div className="not-found-container flex justify-center lg:mt-20 mt-10">
      <div className="not-found-styling lg:p-14 p-5">
        <h1 className="not-found-title text-6xl font-bold py-2">404</h1>
        <p className="not-found-message">
          Oops! We can not seem to find the page you are looking for.
        </p>
        <Link to="/" className="not-found-button">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
