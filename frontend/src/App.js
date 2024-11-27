import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "../src/components/header.js";
import Homepage from "../src/components/homepage.js";
import AboutUs from "../src/components/about-us.js"
import SelfAssessmentQuiz from './components/self-assessment-quiz'

const App = () => {
  return (
    <Router>
      <Header />
        <Route path="/homepage" exact>
          <h1>Home Page</h1>
        </Route>
        <Route path="/about-us" exact>
          <h1>About Us</h1>
        </Route>
        <Route path="/wellness-history">
          <h1>Wellness History</h1>
        </Route>
        <Route path="/resources">
          <h1>Resources</h1>
        </Route>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>

    </Router>
  );
}

export default App;