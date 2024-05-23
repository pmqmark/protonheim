import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16  p-2">
      <div className="max-w-[1280px] mx-auto w-full h-full text-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <h5 className="text-[#646464] text-lg">Who are we?</h5>
          <span className="text-5xl sm:text-6xl mt-2 font-bold text-center bg-gradient-to-r from-[#25AAE1] to-primaryColor text-transparent bg-clip-text mb-8">
            About Us
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-start w-full h-full md:gap-14">
          <div className="w-full md:w-[1350px] h-[230px] flex items-center ">
            <img
              src={require("../assets/about/about.png")}
              alt="about"
              className="object-cover "
            />
          </div>
          <div className="w-full text-start flex pt-14 h-full ">
            <p className="text-gray-600 md:text-[23px]">
              Protoheim is established in 2023 with the motive to develop
              industrial knowledge, mentorship, and hardware innovation.
              Protoheim is mainly concentrated on the development of robotics
              and automation solutions to address the most significant social
              challenges as well as providing education-related services. In the
              future, we are planning for the development of new AR, VR, and MR
              technologies in Education and other industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
