import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import '../styles/Navbar.css'; // make sure this file exists


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("access_token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MicroFinanceApp</h2>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`nav-link ${location.pathname === "/about" ? "active-link" : ""}`}
        >
          About
        </Link>
        <Link 
          to="/services" 
          className={`nav-link ${location.pathname === "/services" ? "active-link" : ""}`}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`}
        >
          Contact
        </Link>

        {!token ? (
          <Link to="/register" className="nav-button">Register/Login</Link>
        ) : (
          <>
            <Link to="/loan-application" className="nav-button">Apply Loan</Link>
            <button onClick={handleLogout} className="nav-button">Logout</button>
          </>
        )}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
