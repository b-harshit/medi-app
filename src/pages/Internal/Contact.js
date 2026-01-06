import React from "react";
import "./Contact.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import contactBanner from "../../assets/images/contact-banner.jpg";

const Contact = () => {
  return (
    <>
    <Header/>
      {/* HERO SECTION */}
      <section
        className="contact-hero"
        // style={{ backgroundImage: `url(${contactBanner})` }}
      >
        <h1>Contact</h1>
      </section>


      {/* GET IN TOUCH */}
      <section className="contact-info">
        <span className="section-tag">GET IN TOUCH</span>
        <h2>Kepler Healthcare Pvt. Ltd.</h2>

        <div className="info-grid">
          <div className="info-box">
            <i className="icon location"></i>
            <h4>Location</h4>
            <p>
              Solitaire Sky, Floor: 8,9,11,12,19,20,
              <br />
              Beside Hyatt Regency, Ashram Road,
              <br />
              Ahmedabad - 380014 Gujarat
            </p>
          </div>

          <div className="info-box">
            <i className="icon phone"></i>
            <h4>Contact</h4>
            <p>
              079-68145530
              <br />
              +91-9574068165
            </p>
          </div>

          <div className="info-box">
            <i className="icon email"></i>
            <h4>Email</h4>
            <p>info@keplerhealthcare.com</p>
          </div>
        </div>
      </section>

      {/* INQUIRE NOW */}
      <section className="contact-form-section">
        <div className="form-left">
          <span className="section-tag">INQUIRE NOW</span>
          <h2>
            Drop your message for any info <br /> or question
          </h2>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Mobile Number" />
              <input type="text" placeholder="City" />
            </div>

            <input type="text" placeholder="Mention your subject" />
            <textarea placeholder="Your Message Here..." />

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="form-right">
          {/* <img
            src="/assets/images/contact-person.jpg"
            alt="Contact"
          /> */}
          <h3>image</h3>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
