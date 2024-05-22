import React from "react";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import GetInTouch from "../components/GetInTouch";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <OurServices />
      <AboutUs />
      <OurTeam />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
