import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <Link to="/">Kepler</Link>
        </div>

        <nav className="nav">
          <ul>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/awards">Awards</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="login">
              <Link to="/login">Member Login</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
