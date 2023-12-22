import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          // Registration successful, you can redirect or perform other actions
          console.log('Registration successful');
        } else {
          // Registration failed, handle errors
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };
    // Add your login logic here
  return (
    <form onSubmit={handleRegister} className="template-form">
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
      <Link to="/login">
        <div className="existing-account">
            Already have an account?
        </div>
      </Link>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default RegisterForm;
