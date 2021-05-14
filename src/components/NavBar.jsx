import "./NavBar.css";

// STEP 1. IMPORT REACT
import React from "react";

// STEP 2. ADDITIONAL IMPORTS GO HERE
import { NavLink } from "react-router-dom";

// CREATE A FUNCTION BASED COMPONENT (THIS WILL BE OUR STATELESS COMPONENT)
const NavBar = () => {
  return (
    <div className="navbar">
      <h1>
        <NavLink to="/" className="nav-links">
          Moov
        </NavLink>
      </h1>
      <ul className="links">
        <li>
          <NavLink to="/" className="nav-links">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-links">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className="nav-links">
            SEARCH
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-links">
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" className="nav-links">
            SIGN UP
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

// EXPORT THE COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default NavBar;
