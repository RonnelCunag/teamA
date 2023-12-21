import React, { useState } from 'react';

function RegisterForm({ onForgotPassword }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Registering in with:', { email, password });
  };

  return (
    y>
    <div class="container">
        <div class="forms-container">
            <form action="verification.html" class="sign-in-form" onsubmit="return validateForm()">
                <h2 class="title">Forgot Password</h2>
                <p>Please enter your email address to reset your password.</p>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <input type="submit" class="btn" value="Reset Password" />
            </form>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3 class="center-text">Remember your password?</h3>
                    <p class="center-text">
                        <a href="index.html" class="back-to-login-link">Back to Login</a>
                    </p>
                </div>
                <img src="your-image.png" class="image" alt="" />
            </div>
        </div>
    </div>
  );
}

export default RegisterForm;