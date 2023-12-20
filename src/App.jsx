import React, { useState } from 'react';
import './index.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="app">
      {currentPage !== 'login' && currentPage !== 'register' && (
        <header className="app-header">
          <h1>Welcome to My App</h1>
          <div className="buttons">
            <button onClick={() => handleNavigation('home')}>Home</button>
            <button onClick={() => handleNavigation('login')}>Login</button>
            <button onClick={() => handleNavigation('register')}>Register</button>
          </div>
        </header>
      )}

      {currentPage === 'home' && (
        <div>
          <p>This is the home page content.</p>
        </div>
      )}

      {currentPage === 'login' && <Login onNavigateHome={handleNavigateHome} />}

      {currentPage === 'register' && <Register onNavigateHome={handleNavigateHome} />}
    </div>
  );
}

export default App;