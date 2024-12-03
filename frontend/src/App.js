import React from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "../src/components/header.js";
import Resources from "../src/components/homepage.js";
import AboutUs from "../src/components/about-us.js";
import SelfAssessmentQuiz from './components/self-assessment-quiz';
import Homepage from './components/resources.js';
import Login from './components/login_form';
import Signup from './components/signup_form';
const App = () => {
  return (
    <div>
      
      <Router>
        <Header /> 
          <Routes>
            <Route path="/resources" element={<Resources />} />
          
          
            <Route path="/homepage" element={<Homepage />} />
          
          
            <Route path="/about-us" element={<AboutUs />} />
          
            <Route path="/self-assessment-quiz" element={<SelfAssessmentQuiz />} />

            <Route path="/login_form" element={<Login />} />
          
            <Route path="/signup_form" element={<Signup />} />
          </Routes>
          {/* <Route path="/profile">
            <h1>Profile</h1>
          </Route> */}

      </Router>
    </div>
  );
}

export default App;
