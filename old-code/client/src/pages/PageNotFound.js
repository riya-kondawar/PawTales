import React from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={'404: page not found'}>
      {/* <h1>404: Page Not Found</h1> */}
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <NavLink to="/" className="back-home-link">
          Go Back Home
        </NavLink>
      </div>
    </Layout>
  );
};

export default PageNotFound;
