import React from "react";
// import LandingPage from "../components/LandingPage";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Ourclients from "../components/Ourclients";


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header/>
      {/* <LandingPage /> */}
      <OurProducts />
      <OurServices />
      <AboutUs />
      <Testimonials />
      <Ourclients/>
      <Footer/>
      
    </div>
  );
};

export default Home;
