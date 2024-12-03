import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/hera_logo.png';
import '../index.css';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    navigate('/login_form'); // Redirect to login page
  };

  return (
    <header className="nav-bar-body">
      <div className="logo-nav-bar-container">
        <img src={logo} alt="Hera logo" className="logo" /> 
        
        <nav>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li> 
            <li><Link to="/dashboard">Check-In</Link></li>
            <li><Link to="/self-assessment-quiz">Self Assessment</Link></li>
            <li><Link to="/about-us">About Us</Link></li> 
            {isAuthenticated ? (
              <li><Link to="#" onClick={handleLogout}>Logout</Link></li>
            ) : (
              <li><Link to="/login_form">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;