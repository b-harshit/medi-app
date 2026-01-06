import React from "react";
import "./Products.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Products() {
  return (
    <div className="products-page">
    <Header/>
      {/* HERO */}
      <section className="products-hero">
        <h1>Products</h1>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-section section">
        <div className="container">

          <div className="products-grid">

            <div className="product-card">
              <div className="product-logo">
                Kepler Logo
              </div>
              <h3>Kepler Onyx & Kepler Opal</h3>
            </div>

            <div className="product-card">
              <div className="product-logo">
                Skinfinity Logo
              </div>
              <h3>Skinfinity</h3>
            </div>

            <div className="product-card">
              <div className="product-logo">
                Jovia Logo
              </div>
              <h3>Jovia</h3>
            </div>

            <div className="product-card">
              <div className="product-logo">
                Vibronica Logo
              </div>
              <h3>Vibronica</h3>
            </div>

          </div>

        </div>
      </section>
    <Footer/>
    </div>
  );
}

export default Products;
