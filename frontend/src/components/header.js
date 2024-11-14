import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.../images/hera_logo.png';
import { getAuth, signOut } from 'firebase/auth';

export default function Header() {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <header>
      <div className="logo-nav-bar-container">
        <img src={logo} alt="hera logo" className="logo" />
        <nav>
          <ul>
            <li><Link to="/home">HomePage</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            
          </ul>
        </nav>
        <div className="auth-container">
          {user ? (
            <button onClick={handleSignOut} className="sign-out-button">
              Sign Out
            </button>
          ) : (
            <Link to="/signin" className="sign-in-link">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}