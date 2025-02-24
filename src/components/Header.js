import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      
      {/* Search Bar with Radio Buttons */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <div className="search-options">
          <label><input type="radio" name="searchType" /> Topic Search</label>
          <label><input type="radio" name="searchType" /> Location Search</label>
          <label><input type="radio" name="searchType" /> Search Organization</label>
        </div>
      </div>

      {/* Language Toggle */}
      <button className="language-toggle">Bangla/English</button>

      <nav className="nav-links">
        <Link to="/download" className="nav-item">Download</Link>
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
};

export default Header;