import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach us at{" "}
          <a className="mail-links" href="mailto:riya.kondawar@gmail.com">
            pawfinds@gmail.com
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href="https://github.com/riya-kondawar/PawTales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> GitHub
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i> Instagram
          </a>          
        </p>
        <p>&copy; 2024 PawFinds</p>
      </div>
    </footer>
  );
};

export default Footer;
