import React, { useState } from 'react';

function ForgotForm({ onForgotPassword }) {
  const [email, setEmail] = useState('');

  const handleForgot = (e) => {
    e.preventDefault();
    // Call the onForgotPassword prop with the email value
    onForgotPassword(email);
    console.log('Resetting password for email:', email);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <form className="sign-in-form" onSubmit={handleForgot}>
          <h2 className="title">Forgot Password</h2>
          <p>Please enter your email address to reset your password.</p>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            {/* Use setEmail to update the email state */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input type="submit" className="btn" value="Reset Password" />
        </form>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="center-text">Remember your password?</h3>
            <p className="center-text">
              <a href="index.html" className="back-to-login-link">
                Back to Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotForm;
