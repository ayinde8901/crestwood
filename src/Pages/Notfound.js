import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page does not exist</p>
      <Link to="/" className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
