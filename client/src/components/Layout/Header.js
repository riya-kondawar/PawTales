//

import React from "react";
import { NavLink, Link } from "react-router-dom";
import {} from "./Header.css";
import { FaPaw } from "react-icons/fa";
import { useAuth } from "../../context/auth.js";
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth, user:null,
      token:''
    })
    localStorage.removeItem('auth')
    toast.success('Logout Successfully')
  }
  return (
    <>
      <nav className="navbar-expand-lg bg-body-tertiary">
        <div className="navbar container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <FaPaw /> PawTales
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pets" className="nav-link">
                  Pets
                </NavLink>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" href="#">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" href="#">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink onClick={handleLogout}  to="/login" className="nav-link" href="#">
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/favPets" className="nav-link" href="#">
                  Fav Pets (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
