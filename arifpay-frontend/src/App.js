// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LoanApplication from './pages/LoanApplication';
import LandingPage from './pages/LandingPage';

// ---------------- Private Route ----------------
function PrivateRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem('access'); // Check if JWT access token exists
  return isLoggedIn ? children : <Navigate to="/login" />;
}

// ---------------- App ----------------
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* Private / Authenticated Routes */}
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path='/loan-application' element={
          <PrivateRoute>
            <LoanApplication />
          </PrivateRoute>
        } />
        <Route path='/my-loans' element={
          <PrivateRoute>
           
          </PrivateRoute>
        } />

        {/* Fallback */}
        <Route path="*" element={<h2 className="p-6 text-red-600">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
