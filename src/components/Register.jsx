import React from 'react';

function Register({ onNavigateHome }) {
  const handleRegister = () => {
    alert('Register button clicked');
    // You can add register logic here
  };

  return (
    <div>
      <div className="auth-header">
        <img src="/assets/images/companyLogo.png" alt="Logo" className="logo" />
      </div>
      <div className="auth-navi">
        <div className="home-button">
          <button onClick={onNavigateHome}>Home</button>
        </div>
      </div>
      <div className="auth-content">
        <h2>Register</h2>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;
