import React, { useState,useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [showEvents, setShowEvents] = useState(false);
  const dropdownRef = useRef(null);

   // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowEvents(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            {/* EVENTS CLICK DROPDOWN */}
            <li className="dropdown" ref={dropdownRef}>
              <span
                className="dropdown-title"
                onClick={() => setShowEvents(!showEvents)}
              >
                Events
              </span>

              {showEvents && (
                <div className="dropdown-menu">
                  <Link to="/events/scientific-conferences">
                    Scientific Conferences
                  </Link>

                  <Link to="/events/game-changer-workshop">
                    Game Changer Workshop
                  </Link>

                  <Link to="/events/news">
                    News
                  </Link>
                </div>
              )}
            </li>
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
