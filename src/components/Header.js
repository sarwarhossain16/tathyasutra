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
      <nav className="nav-links">
        <Link to="/download" className="nav-item">Download</Link>
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
};

export default Header;