import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../sections/HeroSection/HeroSection";
import AboutCompany from "../../sections/AboutCompany/AboutCompany";
import CorporateVideo from "../../sections/CorporateVideo/CorporateVideo";
import Awards from "../../sections/Awards/Awards";
import NobleInitiatives from "../../sections/NobleInitiatives/NobleInitiatives";
import Divisions from "../../sections/Divisions/Divisions";
import Events from "../../sections/Events/Events";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutCompany />
      <CorporateVideo />
      <Awards />
      <NobleInitiatives />
      <Divisions />
      <Events />
      <Footer />
    </>
  );
}

export default Home;
