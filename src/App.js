import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Company from "./pages/Internal/Company";
import Products from "./pages/Internal/Products";
import EventsPage from "./pages/Internal/EventsPage";
import AwardsPage from "./pages/Internal/Awards";
import Career from "./pages/Internal/Career";
import Contact from "./pages/Internal/Contact";
// import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
