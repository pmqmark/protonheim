import React from "react";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import OurProducts from "../components/OurProducts";
import Testimonials from "../components/Testimonials";
import Ourclients from "../components/Ourclients";
import LandingPage from "../components/LandingPage";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <LandingPage />
      <OurProducts />
      <OurServices />
      <AboutUs />
      <Testimonials />
      <Ourclients />
    </div>
  );
};

export default Home;
