import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import PROTOHEIMlogo from "../assets/PROTOHEIMlogo.png";
import PROTOHEIMlogo2 from "../assets/PROTOHEIMlogo2.png";
import bgImage from "../assets/mainphoto.png";
import "../index.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLogo = () => {
    if (location.pathname === "/" || location.pathname === "/contactus") {
      return PROTOHEIMlogo;
    } else {
      return PROTOHEIMlogo2;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full absolute top-0 z-10 bg-transparent max-w-screen-2xl mx-auto lg:px-5 ">
      {/* Navbar Container */}
      <div className="flex items-center justify-between lg:py-3 p-3">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[rgba(37,170,225,1)] "
          onClick={toggleMenu}
        >
          {isOpen ? <IoCloseCircleOutline size={24} /> : <LuMenu size={28} />}
        </button>

        {/* Logo */}
        <div className="flex justify-center w-full md:justify-start">
          <img src={getLogo()} alt="PROTOHEIM Logo" className="h-10 lg:h-16 " />
        </div>

        {/* Contact Button */}
        <Link to={"/contactus"} className="flex items-center justify-center">
          <button
            type="button"
            className="p-2 lg:w-[100px] lg:h-[30px] bg-[rgba(37,170,225,1)] text-white rounded-md text-xs lg:text-[14px]"
          >
            Contact
          </button>
        </Link>
      </div>

      {/* Navbar Links */}
      {location.pathname === "/" || location.pathname === "/contactus" ? (
        <nav
          className={`absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center 
        space-y-4 md:space-y-0 md:flex-row md:space-x-8 ${
          isOpen ? "block" : "hidden"
        } md:flex p-4`}
        >
          <a
            href="/"
            className="dark:text-white text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            Home
          </a>
          <a
            href="/products"
            className="text-white text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            Products
          </a>
          <a
            href="/services"
            className="text-white text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            Service
          </a>
          <a
            href="about"
            className="text-white text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            About
          </a>
        </nav>
      ) : (
        <nav
          className={`absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center 
        space-y-4 md:space-y-0 md:flex-row md:space-x-8 ${
          isOpen ? "block" : "hidden"
        } md:flex p-4`}
        >
          <a
            href="/"
            className="text-black text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            Home
          </a>
          <a
            href="/products"
            className="text-black text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            Products
          </a>
          <a
            href="/services"
            className="text-black text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            Service
          </a>
          <a
            href="about"
            className="text-black text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: "Gilroy-Bold",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "26px",
              letterSpacing: "-0.1px",
              textAlign: "center",
            }}
          >
            About
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
