import React from "react";
import "./Divisions.css";

function Divisions() {
  return (
    <section className="divisions section">
      <div className="container">

        <h2 className="section-title">Our Divisions</h2>

        <div className="divisions-grid">

          <div className="division-card">
            <h3>Kepler Pharma</h3>
            <p>
              A wide range of high-quality pharmaceutical formulations
              catering to diverse healthcare needs.
            </p>
            <a href="/" className="division-btn">View Products</a>
          </div>

          <div className="division-card">
            <h3>Kepler Derma</h3>
            <p>
              Specialized dermatology products designed for effective
              skin care solutions.
            </p>
            <a href="/" className="division-btn">View Products</a>
          </div>

          <div className="division-card">
            <h3>Kepler Nutraceuticals</h3>
            <p>
              Nutritional supplements promoting overall wellness and
              healthy living.
            </p>
            <a href="/" className="division-btn">View Products</a>
          </div>

          <div className="division-card">
            <h3>Kepler Pediatrics</h3>
            <p>
              Pediatric formulations crafted with care for children's
              health and safety.
            </p>
            <a href="/" className="division-btn">View Products</a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Divisions;
