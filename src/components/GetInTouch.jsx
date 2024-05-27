import React from "react";
import contact from "../assets/contactUs/contact.png";
import { GoArrowRight } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn, CiPhone } from "react-icons/ci";

const GetInTouch = () => {
  return (
    <section id="contact" className="pt-16 p-2">
      <div className="max-w-[1280px] mx-auto text-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <h5 className="text-[#646464] text-lg">Want to know more?</h5>
          <span className="text-5xl sm:text-6xl mt-2 font-bold text-center bg-gradient-to-r from-[#25AAE1] to-primaryColor text-transparent bg-clip-text mb-8">
            Get in Touch
          </span>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-3/5">
            {/* form part */}
            <form className="w-full mx-auto space-y-4 mt-5 md:mt-12 md:pe-10">
              <input
                type="text"
                className="w-full p-4 border-2 border-[#7B7C81]  rounded"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full  p-4 border-2 border-[#7B7C81] rounded"
                placeholder="Email Address"
              />
              <textarea
                className="w-full p-4 border-2 border-[#7B7C81] rounded"
                rows="4"
                placeholder="Write any message here..."
              ></textarea>
              <div className="w-full flex items-start md:pt-5">
                <button className="flex items-center gap-3 bg-gradient-to-l from-primaryColor to bg-secondaryColor text-white px-5 py-3 rounded-lg text-sm">
                  Get in Touch <GoArrowRight />
                </button>
              </div>
            </form>
            {/* contact part */}
            <div className="flex items-start mt-10">
              <span className="text-primaryColor text-[20px] font-[600] px-5  border-l-4 border-[#283891]">
                Contact Info
              </span>
            </div>
            <div className="mt-10 flex flex-col items-start gap-5 mb-10 md:mb-0">
              <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <div className="flex gap-4 items-center ">
                  <span className="bg-[#CAEEFD] p-2 rounded-full">
                    <IoMailOutline size={20} />
                  </span>
                  <span className="flex flex-col items-start ">
                    <span className="uppercase text-primaryColor font-[500]">
                      Email:{" "}
                    </span>
                    <a
                      href="mailto:info@protoheim.com"
                      className="text-[#7B7C81] text-xs"
                    >
                      info@protoheim.com
                    </a>
                  </span>
                </div>
                <div className="flex gap-4 items-center ">
                  <span className="bg-[#CAEEFD] p-2 rounded-full">
                    <CiPhone size={20} />
                  </span>
                  <span className="flex flex-col items-start ">
                    <span className="uppercase text-primaryColor font-[500]">
                      Contact Number:{" "}
                    </span>
                    <a
                      href="tel:+919656718065"
                      className="text-[#7B7C81] text-xs"
                    >
                      +91 96567 18065
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="bg-[#CAEEFD] p-2 rounded-full">
                  <CiLocationOn  size={20} />
                </span>
                <span className="flex flex-col items-start ">
                  <span className="uppercase text-primaryColor font-[500]">
                    Location:{" "}
                  </span>
                  <a
                    href="mailto:info@protoheim.com"
                    className="text-[#7B7C81] text-xs text-start"
                  >
                    KMFA College of Engineering, Moothakunnam, Aluva
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="w-2/5 h-[95vh] hidden md:flex items-start justify-start ">
            <img
              src={contact}
              alt="contact"
              className="object-contain w-full flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
