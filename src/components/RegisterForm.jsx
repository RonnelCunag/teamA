import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 8 characters with at least 1 uppercase, 1 numeric, and 1 symbol
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    const isValid = passwordRegex.test(password);

    if (!isValid) {
      setError('Password must be at least 8 characters with at least 1 uppercase, 1 numeric, and 1 symbol.');
    } else {
      setError('');
    }

    return isValid;
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const passwordValidationStyle = {
    color: error ? 'red' : 'green',
    fontSize: '12px',
    fontWeight: '700',
    transition: 'color 0.3s', // Add a smooth transition effect
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !validatePassword(password)) {
      setError('Invalid email or password. Please check your input.');
      return;
    }

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
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <div className="data-validation">
        <label style={passwordValidationStyle}>
          Password must be at least 8 characters long with one uppercase character, number, and symbol.
        </label>
      </div>
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
