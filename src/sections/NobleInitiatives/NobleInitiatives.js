import React from "react";
import "./NobleInitiatives.css";

function NobleInitiatives() {
  return (
    <section className="noble section">
      <div className="container">

        <h2 className="section-title">Noble Initiatives</h2>

        <div className="noble-grid">

          <div className="noble-card">
            <h3>Josh</h3>
            <p>
              An initiative to motivate and empower teams to achieve
              excellence with passion and commitment.
            </p>
          </div>

          <div className="noble-card">
            <h3>Heroes</h3>
            <p>
              A tribute to healthcare professionals who dedicate their
              lives to serving society.
            </p>
          </div>

          <div className="noble-card">
            <h3>Welcome Girl</h3>
            <p>
              A program aimed at fostering inclusivity and welcoming
              new talent into the organization.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default NobleInitiatives;
