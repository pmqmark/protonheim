import React from "react";
import bgImage from "../assets/mainphoto.png";
import "../index.css";

const LandingPage = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute w-[619px] top-[189px] left-[50%] transform -translate-x-1/2 p-8 flex flex-col items-center justify-center gap-[31px] text-center">
        <p className="font-gilroy-bold text-[64px] leading-[58px] tracking-[-1.8px] text-white">
          We inspire to
          <br /> innovate
        </p>
        <p className="font-gilroy-bold text-[16px] leading-[1.5] tracking-[-0.5px] text-white">
          Our Solutions include smart home devices, industrial automation, and
          <br /> data-driven insights for a connected world
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
