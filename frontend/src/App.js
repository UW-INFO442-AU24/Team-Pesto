import React from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "../src/components/header.js";
import Homepage from "../src/components/homepage.js";
import AboutUs from "../src/components/about-us.js"
import SelfAssessmentQuiz from './components/self-assessment-quiz'
import Resources from './components/resources.js'
import Login from './components/login_form'
import Signup from './components/signup_form'
const App = () => {
  return (
    <div>
      
      <Router>
        {/* <Header /> */}
          {/* <Route path="/homepage" element={<Homepage />} />
          <Route path="/about-us" exact>
            <h1>About Us</h1>
          </Route>
          <Route path="/wellness-history">
            <h1>Wellness History</h1>
          </Route> */}  
          <Routes>
            <Route path="/" element={<Resources />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Routes>
            <Route path="/" element={<AboutUs />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Signup />} />
          </Routes>
          {/* <Route path="/profile">
            <h1>Profile</h1>
          </Route> */}

      </Router>
    </div>
  );
}

export default App;
