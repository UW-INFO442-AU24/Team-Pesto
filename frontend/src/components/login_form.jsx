import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const styles = {
    global: {
      fontFamily: "'Open Sans', 'Helvetica Neue', sans-serif",
    },
    loginBody: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
      backgroundColor: "#FAF8FA",
    },
    loginForm: {
      width: "50%",
      maxWidth: "400px",
      border: "1px solid lightgrey",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      backgroundColor: "white",
      textAlign: "center",
    },
    loginFormHeading: {
      color: "#7a5a72",
      marginBottom: "1rem",
      textAlign: "center",
    },
    input: {
      width: "80%",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
      textAlign: "center",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#7A5A72",
      color: "white",
      fontWeight: 600,
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    buttonHover: {
      backgroundColor: "#5f4758",
    },
    errorMessage: {
      color: "red",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.global}>
      <div style={styles.loginBody}>
        <div style={styles.loginForm}>
          <h1 style={styles.loginFormHeading}>Login</h1>
          <form id="loginForm">
            <input
              type="text"
              placeholder="Username"
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
          <p id="error-message" style={styles.errorMessage}></p>
          <div style={styles.signupLink}>
          <Link to="/signup_form" style={styles.signupButton}>
            Don't have an account? Sign up!
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
