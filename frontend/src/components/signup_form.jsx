import React from "react";
import "../index.css";

const SignupForm = () => {
  return (
    <div className="signup_body">
      <div className="signup_form">
        <h2>Sign Up</h2>
        <form id="signupForm">
          {/* Username Input */}
          <div className="form_group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="form_group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Sign Up</button>
        </form>
        <p id="signup-error-message"></p>
      </div>
    </div>
  );
};

export default SignupForm;
