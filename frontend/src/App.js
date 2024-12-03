import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "../src/components/header.js";
import Home from "../src/components/resources.js";
import AboutUs from "../src/components/about-us.js";
import SelfAssessmentQuiz from './components/self-assessment-quiz';
import Dashboard from './components/homepage.js';
import Login from './components/login_form';
import Signup from './components/signup_form';
import axios from 'axios';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      // Validate the token
      axios.get('http://localhost:8000/validate_token', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(error => {
        console.error('Token validation failed:', error);
        setIsAuthenticated(false);
      });
    }
  }, []);

  return (
    <div>
      <Router>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/self-assessment-quiz" element={<SelfAssessmentQuiz />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login_form" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup_form" element={<Signup />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;