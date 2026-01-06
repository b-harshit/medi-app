import React from "react";
import "./Awards.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Awards() {
  return (
    <div className="awards-page">
<Header/>
      {/* HERO */}
      <section className="awards-hero">
        <h1>Awards</h1>
      </section>

      {/* AWARDS SECTION */}
      <section className="awards-section section">
        <div className="container">

          <h2 className="awards-title">Awards and Achievements</h2>

          <div className="awards-grid">

            {/* CARD 1 */}
            <div className="award-card">
              <div className="award-image">Image</div>
              <p className="award-text highlight">
                Business Excellence award for “The most emerging Ethical
                Pharma Marketing Company of the year”
              </p>
            </div>

            {/* CARD 2 */}
            <div className="award-card">
              <div className="award-image">Image</div>
              <p className="award-text">
                MOKTEL awarded as “The Most Trusted Brand of the Year in
                Nutraceutical”
              </p>
            </div>

            {/* CARD 3 */}
            <div className="award-card">
              <div className="award-image">Image</div>
              <p className="award-text">
                BI-FOLATE won an award from CPhI worldwide for Welcome Girl –
                A Noble Initiative
              </p>
            </div>

            {/* CARD 4 */}
            <div className="award-card">
              <div className="award-image">Image</div>
              <p className="award-text">
                AAYOG awarded as “GUJARAT PIONEER 2020” by TOI for the
                noteworthy contribution in the field of pharmaceutical
              </p>
            </div>

            {/* CARD 5 */}
            <div className="award-card">
              <div className="award-image">Image</div>
              <p className="award-text">
                MOKTEL IMMUNE awarded as “Immunity Booster of the year”
                in 2020
              </p>
            </div>

          </div>

        </div>
      </section>
<Footer/>
    </div>
  );
}

export default Awards;
