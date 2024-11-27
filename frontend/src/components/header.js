import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleDropDown() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <div className="logo-nav-bar-container">
        <img src="/images/hera_logo.png" alt="hera logo" className="logo" />
        <nav>
          <div className="menu">
            <button
              type="button"
              className="dropDownButton"
              onClick={toggleDropDown}
              aria-label="hamburger-menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="mask" hidden={!showMenu} onClick={toggleDropDown}></div>
            <div className="dropDown" hidden={!showMenu}>
              <ul className="nav-links">
                <li>
                  <NavLink to="/" exact>
                    Home
                  </NavLink>
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
