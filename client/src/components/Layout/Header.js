import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { useAuth } from "../../context/auth.js";
import toast from "react-hot-toast";
import "./Header.css";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#274c92",
          color: "white",
          textTransform: "uppercase",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          boxShadow: "0px 8px 10px -7px #274c92",
          WebkitBoxShadow: "0px 8px 6px -6px #274c92",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "white" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "white" }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              to="/"
              className="navbar-brand"
              style={{
                color: "white",
                margin: "auto 20px",
                fontWeight: 700,
                fontFamily: "roboto, sans-serif",
                display: "flex",
                gap: "5px",
                letterSpacing: "2px",
              }}
            >
              <FaPaw /> PawTales
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ margin: "auto 10px", fontWeight: 400 }}
                  activeClassName="active"
                  activeStyle={{
                    borderBottom: "2px solid white",
                    fontWeight: 700,
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pets"
                  className="nav-link"
                  style={{ margin: "auto 10px", fontWeight: 400 }}
                  activeClassName="active"
                  activeStyle={{
                    borderBottom: "2px solid white",
                    fontWeight: 700,
                  }}
                >
                  Pets
                </NavLink>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link"
                      style={{ margin: "auto 10px", fontWeight: 400 }}
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      style={{ margin: "auto 10px", fontWeight: 400 }}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                          style={{
                            margin: "auto",
                            fontWeight: 400,
                            backgroundColor: "#274c92",
                            color: "white",
                            textTransform: "uppercase",
                            // top: 0,
                            width: "100%",
                            // zIndex: 1000,
                            boxShadow: "0px 8px 10px -7px #274c92",
                            // WebkitBoxShadow: "0px 8px 6px -6px #274c92",
                          }}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                          style={{
                            margin: "auto",
                            fontWeight: 400,
                            backgroundColor: "#274c92",
                            color: "white",
                            textTransform: "uppercase",
                            // top: 0,
                            width: "100%",
                            // zIndex: 1000,
                            // boxShadow: "0px 8px 10px -7px #274c92",
                            // WebkitBoxShadow: "0px 8px 6px -6px #274c92",
                          }}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink
                  to="/favPets"
                  className="nav-link"
                  style={{ margin: "auto 10px", fontWeight: 400 }}
                >
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
