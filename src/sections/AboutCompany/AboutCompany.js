import React from "react";
import "./AboutCompany.css";

function AboutCompany() {
  return (
    <section className="about section">
      <div className="container about-container">

        {/* Left Image Placeholder */}
        <div className="about-image">
          <div className="image-placeholder">
            Building Image
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="about-tag">THE COMPANY</span>
          <h2>Kepler where quality stands first</h2>
          <p className="about-subtitle">
            At Kepler, everything reflects quality
          </p>
          <p className="about-text">
            Kepler Healthcare delivers the finest-quality innovative products,
            with a well-experienced dynamic field force that believes in serving
            the society.
          </p>

          <a href="/" className="about-btn">
            Know More
          </a>
        </div>

      </div>
    </section>
  );
}

export default AboutCompany;
