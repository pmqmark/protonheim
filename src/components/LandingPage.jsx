import React, { useEffect } from "react";
import bgImage from "../assets/mainphoto.png";
import Aos from "aos";

const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      className="relative w-full h-screen md:h-[90vh] lg:h-[80vh] xl:h-screen 2xl:h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Main Text Section */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-full">
        <p
          data-aos="fade-up" 
          className="text-white text-[30px] truncate md:text-[32px] lg:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[58px] tracking-[1px] font-[Gilroy-Bold] mb-4"
          style={{
            textShadow: "0px 4px 14px rgba(255, 255, 255, 0.25)", // Text shadow effect
          }}
        >
          We inspire to
          <br />
          innovate
        </p>
        <p
          data-aos="fade-up"data-aos-delay="300"
          className="text-white text-[12px] md:text-[14px] lg:text-[15px] leading-[20px] lg:leading-[28px] tracking-[0.2px] font-[Gilroy-Regular] max-w-md mx-auto w-2/3 lg:w-full"
          style={{ color: "rgba(255, 255, 255, 1)" }}
        >
          Our solutions include smart home devices, industrial automation, and
          data-driven insights for a connected world.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
