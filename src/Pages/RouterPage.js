
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LandingPage from './LandingPage';
import SignupPage from './Signup';
import Login from './Login';
import "bootstrap/dist/css/bootstrap.min.css";

function RouterPage() {

  console.log("RouterPage rendered");
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default RouterPage;

