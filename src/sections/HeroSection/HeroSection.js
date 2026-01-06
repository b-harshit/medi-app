import React from "react";
import "./HeroSection.css";
// import heroImage from "../../assets/images/hero-banner.jpg"; // replace later

function HeroSection() {
  return (
    <section
      className="hero"
      // style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            The Fastest Growing <br />
            Pharmaceutical Company
          </h1>

          <div className="hero-buttons">
            <a href="/" className="btn outline">
              Know More
            </a>
            <a href="/" className="btn solid">
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
