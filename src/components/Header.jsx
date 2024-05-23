import React, { useState } from "react";
import icon from "../assets/nav/navButtonLogo.png";
import logo from "../assets/nav/logo.png";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";

const Header = () => {
  const [modal, setModal] = useState(false);
  return (
    <header className="bg-white fixed w-full z-40">
      <div className="max-w-[1280px] mx-auto  flex justify-between items-center p-2 py-5 sm:p-4 ">
        <div className="flex items-center justify-center gap-20">
          <img src={logo} alt="logo" className="object-contain w-[180px] " />
          <nav className="space-x-4 text-[#646464]  gap-5 hidden sm:flex">
            <a href="#home" className="font-semibold text-primaryColor">
              Home
            </a>
            <a href="#about" className="">
              About Us
            </a>
            <a href="#services" className="">
              Courses
            </a>
            <a href="#team" className="">
              Careers
            </a>
          </nav>
        </div>
        <div className="">
          <button className="bg-gradient-to-l from-primaryColor to-secondaryColor p-2 py-3 px-5  rounded-[6px] sm:flex items-center justify-center gap-2  text-white text-sm hidden ">
            Reach out <img src={icon} alt="icon" className="object-cover w-5" />
          </button>
          <LuMenu
            size={32}
            className="sm:hidden"
            onClick={(e) => setModal(!modal)}
          />
        </div>
      </div>
      
      {/* Mobile view  */}
      {modal && (
        <div className="fixed w-full h-full top-0 left-0 z-50 bg-white">
          <div className="flex  flex-col items-center mt-40 gap-10 w-full h-full">
            <IoCloseCircleOutline
              size={32}
              className="absolute top-5 right-5 "
              onClick={(e) => setModal(!modal)}
            />
            <img src={logo} alt="logo" className="object-contain w-[250px]" />
            <nav className="text-[#646464]  gap-5 flex flex-col items-center justify-center w-full ">
              <a href="#home" className="font-semibold text-primaryColor ">
                Home
              </a>
              <a href="#about" className="">
                About Us
              </a>
              <a href="#services" className="">
                Courses
              </a>
              <a href="#team" className="">
                Careers
              </a>
            </nav>
            <button className="bg-gradient-to-l from-primaryColor to-secondaryColor p-2 py-3 px-5  rounded-[6px] flex items-center justify-center gap-2  text-white text-sm ">
            Reach out <img src={icon} alt="icon" className="object-cover w-5" />
          </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
