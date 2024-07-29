import React from "react";
import LandingPage from "../components/LandingPage";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import Testimonials from "../components/Testimonials";
import Ourclients from "../components/Ourclients";


const Home = () => {
  return (
    <div className="overflow-hidden">
      <LandingPage />
      <OurServices />
      <Header/>
      <AboutUs />
      <Footer/>
      <OurProducts />
      <Ourclients/>
      <Testimonials />
    </div>
  );
};

export default Home;
