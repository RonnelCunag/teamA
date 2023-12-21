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
    <form onSubmit={handleRegister} className="login-form">
    <h2>Sign up an account.</h2>
    <h2>Be part of the success.</h2>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <div>
        <h3>By clicking "Sign up," you agree to our Terms of Use and our Privacy Policy.</h3>
      </div>
      <div className="login-account">
          Already have an account?
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default RegisterForm;
