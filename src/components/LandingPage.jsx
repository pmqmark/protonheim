import React from "react";
import mainphoto from "../assets/mainphoto.png"
import { GoArrowRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="container-fluid  p-2 sm:p-0 w-full sm:h-[100vh] bg-gradient-to-r from-[#CCF0FF] to-[#fcfefe] relative flex items-center justify-center"
    >
      <div>
      <img src={mainphoto}></img>
      <p className="text-above">We inspire to<br/> innovate</p>
      <p className="text-below">Our Solutions include smart home devices,industrial automation, and<br/> data-driven insights for a connected world </p>
      </div>
    </section>
  );
};

export default LandingPage;
