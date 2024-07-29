import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import '../css/Header.css';



const Header = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="bg-image">
      <ul className="top-nav container-fluid">
      
          <nav className=" nav-text ">
            <a href="#home" className="nav-text1 ">
              Home
            </a>
            <a href="#about" className="nav-text2">
              Products
            </a>
            <a href="#services" className="nav-text3">
              Service 
            </a>
            <a href="#team" className="">
              About
            </a>
          </nav>
        
        <div className="contact-button">
        <button type="button" className="btn btn-info text-white ">
            Contact  
          </button>
          {/* <LuMenu
            size={32}
            className="sm:hidden"
            onClick={(e) => setModal(!modal)}
          /> */}
        </div>
      </ul>
      
      {/* Mobile view 
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
             <img src={icon} alt="icon" className="object-cover w-5" />
          </button>
          </div>
        </div>
      )} */}
    </div>
    
  );
};

export default Header;

