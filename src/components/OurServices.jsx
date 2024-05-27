import React from "react";
import { services } from "../data/Data";

const OurServices = () => {
  return (
    <section id="services" className=" mt-20 md:mt-0 md:py-24 bg-white w-full p-2">
      <div className="max-w-[1280px] mx-auto ">
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-[#646464] text-lg">Why are we the best?</h5>
          <span className="text-5xl sm:text-6xl mt-2 font-bold text-center bg-gradient-to-r from-[#25AAE1] to-primaryColor text-transparent bg-clip-text mb-8">
            Our Services
          </span>
        </div>

        <div className="flex flex-wrap gap-7  w-full h-full items-start justify-center my-6 sm:mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:me-14 items-center justify-center w-full h-[250px] sm:w-[250px] sm:h-[250px] border rounded-xl shadow-lg p-6 overflow-hidden cursor-pointer 
               hover:bg-gradient-to-r from-[#25AAE1] to-primaryColor transition duration-300 ease-in-out text-primaryColor hover:text-white group"
            >
              <div className=" mb-3">{service?.icon}</div>
              <h3 className="text-wrap text-center group-hover:text-white text-[#646464]">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
