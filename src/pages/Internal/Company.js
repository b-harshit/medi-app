import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Company.css";

function Company() {

  const [activeValue, setActiveValue] = useState("quality");

  const toggleValue = (value) => {
    setActiveValue(activeValue === value ? null : value);
  };

  return (
    
    <div className="company-page">
     <Header/>
      {/* HERO BANNER */}
      <section className="company-hero">
        <h1>Company</h1>
      </section>

      {/* ABOUT SECTION */}
      <section className="company-about section">
        <div className="container about-grid">

          <div className="about-text">
            <h3>Kepler - where quality stands first</h3>
            <h4>At Kepler, everything reflects quality</h4>
            <p>
              Kepler Healthcare delivers the finest-quality innovative
              products, with a well-experienced dynamic field force that
              believes in serving the society.
            </p>

            <ul>
              <li>Some believe in the power of numbers</li>
              <li>Some believe in the power of technology</li>
              <li>Kepler believes in the power of people</li>
            </ul>
          </div>

          <div className="about-image">
            <div className="image-placeholder">Image</div>
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="company-vision">
        <div className="container">
          <h3>Vision</h3>
          <ul>
            <li>To become a prime contributor for a healthy India</li>
            <li>To become a company of satisfied employees</li>
            <li>To become a company of great culture</li>
          </ul>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="company-values section">
        <div className="container values-grid">

          <div className="values-text">
            <h3>Mission</h3>
            <p>
              To provide innovative and world class quality products to every
              fellow countrymen.
            </p>

            <h3>Values</h3>

            {/* QUALITY */}
            <div className="value-box">
              <div
                className="value-header"
                onClick={() => toggleValue("quality")}
              >
                <span>Quality</span>
                <span className="icon">
                  {activeValue === "quality" ? "−" : "+"}
                </span>
              </div>

              {activeValue === "quality" && (
                <div className="value-content">
                  <p>
                    Kepler Healthcare believes in providing the finest-quality
                    innovative products. Quality is the fundamental belief
                    and policy for every Keplerian. Kepler delivers world-class
                    quality with continuous improvement, innovation and
                    development of products.
                  </p>
                </div>
              )}
            </div>

            {/* ETHICS */}
            <div className="value-box">
              <div
                className="value-header"
                onClick={() => toggleValue("ethics")}
              >
                <span>Ethics</span>
                <span className="icon">
                  {activeValue === "ethics" ? "−" : "+"}
                </span>
              </div>

              {activeValue === "ethics" && (
                <div className="value-content">
                  <p>
                    Ethical business conduct, integrity and commitment to
                    values are the foundations of Kepler's corporate
                    philosophy. Employees adhere to the highest standards
                    of integrity.
                  </p>
                </div>
              )}
            </div>

            {/* DISCIPLINE */}
            <div className="value-box">
              <div
                className="value-header"
                onClick={() => toggleValue("discipline")}
              >
                <span>Discipline</span>
                <span className="icon">
                  {activeValue === "discipline" ? "−" : "+"}
                </span>
              </div>

              {activeValue === "discipline" && (
                <div className="value-content">
                  <p>
                    Discipline ensures commitment, accountability and
                    consistency in all operations, helping Kepler achieve
                    long-term excellence.
                  </p>
                </div>
              )}
            </div>

          </div>

          <div className="values-image">
            <div className="image-placeholder">Image</div>
          </div>

        </div>
      </section>
    <Footer/>
    </div>
  );
}

export default Company;
