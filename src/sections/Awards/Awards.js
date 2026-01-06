import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <section className="awards section">
      <div className="container">

        <h2 className="section-title">Awards & Achievements</h2>

        <div className="awards-grid">

          <div className="award-card">
            <span className="award-year">2023</span>
            <h3>Best Emerging Pharma Company</h3>
            <p>Recognized for excellence in pharmaceutical growth.</p>
          </div>

          <div className="award-card">
            <span className="award-year">2022</span>
            <h3>Quality Excellence Award</h3>
            <p>Awarded for maintaining top quality standards.</p>
          </div>

          <div className="award-card">
            <span className="award-year">2021</span>
            <h3>Innovation in Healthcare</h3>
            <p>Honored for innovative healthcare solutions.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Awards;
