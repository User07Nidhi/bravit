import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ setSelectedCategory }) => {
  const [showDropdown, setShowDropdown] = useState(false); 

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo2.png" alt="Bravit Logo" className="logo-img" />
          </Link>
        </div>

        <h1 className="Title">Bravit Pharmaceuticals Private Limited</h1>
      </div>

      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/about" className="nav-link">About Us</Link>
          </li>

          <li>
            <Link to="/products" onClick={() => setSelectedCategory("")}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/achievements">Certifications</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
