import React from "react";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import OurProducts from "../components/OurProducts";
import Testimonials from "../components/Testimonials";
import Ourclients from "../components/Ourclients";
import Footer from "../components/Footer";
import "../css/Header.css";
import LandingPage from "../components/LandingPage";

const Home = () => {
  return (
    <div className="home-container bg-white">
      <main className="flex-grow">
        <div className="w-full">
          <section>
            <LandingPage />
          </section>
          <section className="our-products ">
            <OurProducts />
          </section>
          <section className="our-services ">
            <OurServices />
          </section>
          <section className="about-us">
            <AboutUs />
          </section>
          <section className="testimonials ">
            <Testimonials />
          </section>
          <section className="our-clients ">
            <Ourclients />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
