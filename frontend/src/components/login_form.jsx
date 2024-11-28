import React from "react";
import '../index.css';

const Login = () => {
  return (
    <div className="login_body">
      <div className="login_form">
        <h2>Login</h2>
        <form id="loginForm">
          <div className="form_group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          
          <button type="submit">Login</button>
        </form>
        <p id="error-message"></p>
      </div>
    </div>
  );
};

export default Login;
