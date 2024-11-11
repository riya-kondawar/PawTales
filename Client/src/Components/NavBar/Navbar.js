import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/UseAuthContext";

const Navbar = (props) => {
  const {logout} = useLogout()
  const {user} = useAuthContext()
  
  const handleLogout = async (e) => {
    e.preventDefault();
    await logout()
  }

  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/pets">Pets</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="logout-username">
        <p>Welcome {user.userName}!</p>
        <Link to="/services">
          <button onClick={handleLogout} className="Navbar-button">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
