import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css"

const Header = () => {
  return (
    <header>
      <div className="logo-nav-bar-container">
        <img src="./images/hera_logo.png" alt="hera logo" className="logo" />
        <nav>
            <div>
              <ul className="nav-links">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/wellness-history">Wellness History</NavLink>
                </li>
                <li>
                  <NavLink to="/resources">Resources</NavLink>
                </li>
              </ul>
            </div>
        </nav>
        <div className="profile-icon">
          <NavLink to="/profile">
            <img src="/images/profile_icon.png" alt="Profile" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

// Call the function to insert the header
export default Header;
