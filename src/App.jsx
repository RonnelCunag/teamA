import React, { useState } from 'react';
import './index.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Verify from './components/Verification'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </>
  )
}

export default App;