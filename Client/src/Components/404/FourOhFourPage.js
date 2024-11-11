import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFourPage = () => {
  return (
    <div className="page-not-found-container">
      <h1 className="page-not-found-title">404</h1>
      <p className="page-not-found-message">Oops! The page you’re looking for does not exist.</p>
      <Link to="/" className="page-not-found-home-link">Go to Home</Link>
    </div>
  );
};

export default FourOhFourPage;
