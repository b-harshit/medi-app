import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-column">
          <h3 className="footer-logo">Kepler Healthcare</h3>
          <p>
            Delivering high-quality pharmaceutical products with trust
            and innovation.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@keplerhealthcare.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kepler Healthcare</p>
      </div>
    </footer>
  );
}

export default Footer;
