import React from "react";
import LandingPage from "../components/LandingPage";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import GetInTouch from "../components/GetInTouch";
import OurTeam from "../components/OurTeam";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <LandingPage />
      <OurServices />
      <AboutUs />
      <OurTeam />
      {/* <GetInTouch /> */}
    </div>
  );
};

export default Home;
