import React from "react";
import landingImage from "../assets/landingPage/landingImag.png";
import { GoArrowRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="bg-blue-50  p-2 sm:p-0 w-full sm:h-[100vh] bg-gradient-to-r from-[#CCF0FF] to-[#fcfefe] relative flex items-center justify-center"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row w-full h-full ">
        <div className="w-full flex flex-col items-start gap-2 mt-10 sm:mt-32">
          <h1 className="text-[35px] md:text-[45px] lg:text-[50px] xl:text-[65px] font-bold text-[#2C3145] mb-4 leading-tight">
            Grow up your skills <br /> with{" "}
            <span class="bg-gradient-to-l from-primaryColor to-[#0F75BC] text-transparent bg-clip-text">
              Protoheim
            </span>
            .
          </h1>
          <p className="text-textPrimaryColor mb-6 leading-tight sm:text-[20px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button className="bg-gradient-to-l from-primaryColor to-secondaryColor text-white p-3 px-5 text-sm  sm:px-6 sm:py-4 rounded-lg flex items-center gap-3">
            Explore Protoheim <GoArrowRight />
          </button>
        </div>
        
        <div className="w-full h-full flex flex-col items-center  relative">
          <div className="absolute bg-white rounded-full top-32 md:top-64 right-2  flex items-center justify-center z-10 shadow-lg">
            <img
              src={require("../assets/landingPage/Stars.png")}
              alt=""
              className="object-cover w-16 h-16  md:w-24 md:h-24"
            />
          </div>
          <div className="absolute bg-white rounded-full top-6 md:top-[15%] left-0 md:left-[12%]  flex items-center justify-center z-10 shadow-lg">
            <img
              src={require("../assets/landingPage/filim.png")}
              alt=""
              className="object-contain w-14 md:w-20 p-3 transform -rotate-12"
            />
          </div>
          <div className="absolute bg-white rounded-lg md:w-[250px] p-3 md:h-[100px] bottom-32 md:bottom-40 left-0 gap-5  flex items-center justify-center z-20 shadow-lg">
            <div className="bg-[#EFEFEF] rounded-full">
              <img
                src={require("../assets/landingPage/cap.png")}
                alt=""
                className="object-contain w-10 h-10 md:w-16 md:h-16"
              />
            </div>
            <div className="">
              <h1 className="text-[#283891] font-[600] text-sm md:text-[22px]">1000+</h1>
              <h5 className="text-[#646464] text-xs md:text-sm">Satisfied Learners</h5>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#25AAE1] to-[#25AAE1]/0 w-[100%] sm:w-[490px] h-[90%] sm:h-[80%] absolute rounded-tr-[40%] sm:ml-20 bottom-0"></div>
          <div className="z-10 flex ">
            <img
              src={landingImage}
              alt="landingImage"
              className="sm:w-[500px] sm:h-[700px]  object-cover "
            />
          </div>
        </div>
      </div>

      {/* cross baners */}
      <div class="w-full h-[110px] absolute bottom-0 -left-0 z-20 ">
        <div className="w-full h-full flex items-end justify-center relative">
          <div class="bg-[#27AAE0] w-full h-[90%]  absolute transform rotate-3 sm:rotate-3 rounded-xl"></div>
          <div class="bg-[#2C3145] sm:text-4xl text-nowrap text-white font-semibold w-full h-[90%] absolute transform -rotate-3 sm:-rotate-3 flex items-center justify-center tracking-wide rounded-xl">
            LEARN WITH PROTOHEIM <span className="text-[#27AAE0]"> . </span>{" "}
            LEARN WITH PROTOHEIM . LEARN WITH PROTOHEIM
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
