import React from "react";
import { NavLink } from "react-router-dom";

function CreateHeader() {
  const headerStyle = {
    backgroundColor: "#4c2d48",
    color: "white",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const navStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: "0",
    padding: "0",
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    borderBottom: "2px solid #ffddc1",
  };

  const profileIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#ffddc1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    color: "#4c2d48",
    cursor: "pointer",
  };

  // Return the header structure
  return React.createElement(
    "header",
    { style: headerStyle },
    React.createElement("div", { style: logoStyle }, "My App"),
    React.createElement(
      "ul",
      { style: navStyle },
      React.createElement(
        "li",
        null,
        React.createElement(
          NavLink,
          { to: "/", style: navLinkStyle, activeStyle: activeLinkStyle },
          "Home"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          NavLink,
          { to: "/about-us", style: navLinkStyle, activeStyle: activeLinkStyle },
          "About"
        )
      )
    ),
    React.createElement(
      "div",
      { style: profileIconStyle },
      "S" // Placeholder for the profile icon
    )
  );
}

// Call CreateHeader at the bottom
export default function Header() {
  return CreateHeader();
}
