import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/hera_logo.png'; // Use import for image
import profileIcon from '../images/profile_icon.png'; // Use import for image
import '../index.css';

const Header = () => {
  return (
    <header className="nav-bar-body">
      <div className="logo-nav-bar-container">
        <img src={logo} alt="Hera logo" className="logo" /> {/* Use imported image here */}
        
        <nav>
          <ul className="nav-links">
            <li><Link to="/homepage">Home</Link></li> {/* Remove .js from the route */}
            <li><Link to="/resources">Check-In</Link></li>
            <li><Link to="/about-us">About Us</Link></li> {/* Remove .js from the route */}
            <li><Link to="/login_form">Login</Link></li>
          </ul>
        </nav>

        {/* <div className="profile-icon"> */}
          {/* <Link to="/login_form">
            <img src={profileIcon} alt="Profile" />
          </Link> */}
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
