import React from "react";
import {} from "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="home-footer-container">
          {/* PawTales Information */}
          <div className="footer-info" id="footer-info1">
            <h3>PawTales</h3>
            <p>
              At PawTales, we connect loving pets with caring families, making
              adoption easy and meaningful. Together, let's give every pet the
              forever home they deserve.
            </p>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a
                href="https://www.instagram.com/pet_adoption_pune/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/Adoptapetcom"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://x.com/hashtag/IndianStreetDogs?src=hashtag_click"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-info" id="company">
            <p className="footer-info-heading2">Company</p>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <a href="/faq">F.A.Q.</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="copyright">
          &copy; 2024 PawTales. Developed with love &hearts;
        </div>
      </footer>
    </div>
  );
};

export default Footer;
