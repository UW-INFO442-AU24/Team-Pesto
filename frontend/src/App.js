import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./components/homepage";
import AboutUs from "./components/about-us";
import SelfAssessmentQuiz from "./components/self-assessment-quiz";

export default function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(Header, null),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: "/homepage",
        element: React.createElement(Homepage, null),
      }),
      React.createElement(Route, {
        path: "/about-us",
        element: React.createElement(AboutUs, null),
      }),
      React.createElement(Route, {
        path: "/self-assessment-quiz",
        element: React.createElement(SelfAssessmentQuiz, null),
      })
    )
  );
}
