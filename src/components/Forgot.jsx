import React from 'react';
import LoginForm from './ForgotForm';

function Forgot({ onNavigateHome, onForgotPassword }) {

  return (
    <div className="auth-container">
      <div className="auth-header">
        <img src="/assets/images/companyLogo.png" alt="Logo" className="logo" />
      </div>
      <div className="auth-navi">
        <div className="home-button">
          <button onClick={onNavigateHome}>Home</button>
        </div>
      </div>
      <div className="label-container">
        <div className="auth-label">
          <h1>SIGN IN</h1>
        </div>
      </div>
      <div className="auth-content">
        <div className="auth-sign">
            <LoginForm onForgotPassword={onForgotPassword} />
        </div>
      </div>
    </div>
  );
}

export default Forgot;