import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import PROTOHEIMlogo from "../assets/PROTOHEIMlogo.png";
import PROTOHEIM_LOGO from "../assets/PROTOHEIM_LOGO.png";
import PROTOHEIM_ from "../assets/PROTOHEIM_.png";
import "../index.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const getLogo = () => {
    if (currentPath === "/" || currentPath === "/contactus") {
      return PROTOHEIMlogo;
    } else {
      return PROTOHEIM_LOGO;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine if the current page is one of the special pages
  const isSpecialPage = ["/about", "/services", "/products"].includes(currentPath);

  return (
    <header className="w-full absolute top-0 z-10 bg-transparent max-w-screen-2xl mx-auto lg:px-5">
      {/* Navbar Container */}
      <div className="flex items-center justify-between lg:py-3 p-3">
        {/* Logo */}
        <a href="/" className="flex items-center lg:w-full md:justify-start">
          <img
            src={PROTOHEIM_LOGO}
            alt="PROTOHEIM Logo"
            className="h-6 lg:h-10" // Adjust size for desktop
          />
          <img
            src={PROTOHEIM_}
            alt="PROTOHEIM Additional Logo"
            className="h-5 lg:h-8 ml-1" // Adjust size for desktop, smaller than the main logo
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[rgba(37,170,225,1)]"
          onClick={toggleMenu}
        >
          {isOpen ? <IoCloseCircleOutline size={24} /> : <LuMenu size={28} />}
        </button>
      </div>

      {/* Navbar Links */}
      <nav
        className={`absolute top-1 right-0 flex flex-col items-center 
        space-y-4 md:space-y-0 md:flex-row md:space-x-8 ${
          isOpen ? "block" : "hidden"
        } md:flex p-4`}
      >
        <a
          href="/"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/" || isSpecialPage ? "text-black" : "text-white"
          }`}
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
          href="/about"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/about" || isSpecialPage ? "text-black" : "text-white"
          }`}
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
        <a
          href="/services"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/services" || isSpecialPage ? "text-black" : "text-white"
          }`}
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
          href="/products"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/products" || isSpecialPage ? "text-black" : "text-white"
          }`}
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            letterSpacing: "-0.1px",
            textAlign: "center",
          }}
        >
          Portfolio
        </a>
        <a
          href="/contactus"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/contactus" || isSpecialPage ? "text-black" : "text-white"
          }`}
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            letterSpacing: "-0.1px",
            textAlign: "center",
          }}
        >
          Contact
        </a>
      </nav>

      {isOpen && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-white z-50 flex flex-col items-center justify-center">
          <IoCloseCircleOutline
            onClick={() => setIsOpen(false)}
            size={24}
            className="absolute right-2 top-2"
          />

          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center">
              <img
                src={PROTOHEIM_LOGO}
                alt="PROTOHEIM Logo"
                className="object-contain w-12" // Adjust size for mobile
              />
              <img
                src={PROTOHEIM_}
                alt="PROTOHEIM Additional Logo"
                className="object-contain w-10 ml-1" // Adjust size for mobile, smaller than the main logo
              />
            </div>
            <a
              href="/"
              className={`text-black mb-2 ${
                currentPath === "/" || isSpecialPage ? "text-black" : "text-white"
              }`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`text-black mb-2 ${
                currentPath === "/about" || isSpecialPage ? "text-black" : "text-white"
              }`}
            >
              About
            </a>
            <a
              href="/services"
              className={`text-black mb-2 ${
                currentPath === "/services" || isSpecialPage ? "text-black" : "text-white"
              }`}
            >
              Service
            </a>
            <a
              href="/products"
              className={`text-black mb-2 ${
                currentPath === "/products" || isSpecialPage ? "text-black" : "text-white"
              }`}
            >
              Portfolio
            </a>
            <a
              href="/contactus"
              className={`flex items-center justify-center mt-4 ${
                currentPath === "/contactus" || isSpecialPage ? "text-black" : "text-white"
              }`}
            >
              <button
                type="button"
                className={`p-2 px-5 ${
                  currentPath === "/contactus" || isSpecialPage
                    ? "bg-black text-white"
                    : "bg-[rgba(37,170,225,1)] text-black"
                } rounded-md text-sm`}
              >
                Contact
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
