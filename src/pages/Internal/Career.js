import React from "react";
import "./Career.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Career() {
  return (
    <div className="career-page">
    <Header/>
      {/* HERO */}
      <section className="career-hero">
        <h1>Career</h1>
      </section>

      {/* APPLY FORM */}
      <section className="career-section section">
        <div className="container">

          <h2 className="career-title">Apply for job</h2>

          <form className="career-form">

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" />
              </div>

              <div className="form-group">
                <label>Mobile</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>City</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Department</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Qualification</label>
                <input type="text" />
              </div>

              <div className="form-group upload-group">
                <label>Upload your resume/CV</label>
                <div className="upload-box">
                  <input type="file" />
                  <span>Browse</span>
                </div>
              </div>

            </div>

            <button type="submit" className="apply-btn">
              Apply Now
            </button>

          </form>

        </div>
      </section>
    <Footer/>
    </div>
  );
}

export default Career;
