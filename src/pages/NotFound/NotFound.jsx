import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Not found</h1>
      <Link to="/">
        <p>Volver</p>
      </Link>
    </div>
  );
};

export default NotFound;
