import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import logo from "../assets/logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Import Icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchPopup = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "English" ? "বাংলা" : "English");
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <button className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Menu (Mobile) */}
      <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/download" className="nav-item" onClick={toggleMenu}>Download</Link>
        <Link to="/login" className="login-button" onClick={toggleMenu}>Login</Link>
        <button className="language-toggle" onClick={toggleLanguage}>{language}</button>
        <button className="search-icon" onClick={toggleSearchPopup}>
          <FaSearch /> Search
        </button>
      </nav>

      {/* Desktop Menu (Hidden on Mobile) */}
      <nav className="nav-links">
        <Link to="/download" className="nav-item">Download</Link>
        <Link to="/login" className="login-button">Login</Link>
        <button className="language-toggle" onClick={toggleLanguage}>{language}</button>
        <button className="search-icon" onClick={toggleSearchPopup}>
          <FaSearch />
        </button>
      </nav>

      {/* Search Popup Window */}
      {isSearchOpen && (
        <div className="search-popup">
          <div className="search-content">
            <input type="text" placeholder="Search..." className="search-input" />
            <div className="search-options">
              <label><input type="radio" name="searchType" /> Topic Search</label>
              <label><input type="radio" name="searchType" /> Location Search</label>
              <label><input type="radio" name="searchType" /> Search Organization</label>
            </div>
            <button className="close-search" onClick={toggleSearchPopup}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
