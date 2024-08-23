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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full absolute top-0 z-10 max-w-screen-2xl mx-auto lg:px-5"
      style={{
        ...(window.innerWidth <= 640 && {
          backgroundColor: "white",
        }),
      }}
    >
      {/* Navbar Container */}
      <div
        className="flex items-center justify-between lg:py-3 p-3"
        style={{
          ...(window.innerWidth <= 640 && {
            backgroundColor: "white",
          }),
        }}
      >
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
          className="md:hidden"
          onClick={toggleMenu}
          style={{
            ...(window.innerWidth <= 640 && {
              color: "rgba(37, 170, 225, 1)",
            }),
          }}
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
        style={{
          ...(window.innerWidth <= 640 && {
            backgroundColor: "white",
          }),
        }}
      >
        <a
          href="/"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/" ? "text-black" : "text-black"
          }`}
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            letterSpacing: "-0.1px",
            textAlign: "center",
            ...(window.innerWidth <= 640 && {
              color: "black",
            }),
          }}
        >
          Home
        </a>
        <a
          href="/about"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/about" ? "text-black" : "text-black"
          }`}
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            letterSpacing: "-0.1px",
            textAlign: "center",
            ...(window.innerWidth <= 640 && {
              color: "black",
            }),
          }}
        >
          About
        </a>
        <a
          href="/services"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/services" ? "text-black" : "text-black"
          }`}
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            letterSpacing: "-0.1px",
            textAlign: "center",
            ...(window.innerWidth <= 640 && {
              color: "black",
            }),
          }}
        >
          Service
        </a>
        <a
          href="/products"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/products" ? "text-black" : "text-black"
          }`}
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            letterSpacing: "-0.1px",
            textAlign: "center",
            ...(window.innerWidth <= 640 && {
              color: "black",
            }),
          }}
        >
          Portfolio
        </a>
        <a
          href="/contactus"
          className={`text-xs md:text-sm lg:text-base ${
            currentPath === "/contactus" ? "text-black" : "text-black"
          }`}
          style={{
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            letterSpacing: "-0.1px",
            textAlign: "center",
            ...(window.innerWidth <= 640 && {
              color: "black",
            }),
          }}
        >
          Contact
        </a>
      </nav>

      {isOpen && (
        <div
          className="h-screen w-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center"
          style={{
            ...(window.innerWidth <= 640 && {
              backgroundColor: "white",
              color: "black",
            }),
          }}
        >
          <IoCloseCircleOutline
            onClick={() => setIsOpen(false)}
            size={24}
            className="absolute right-2 top-2"
            style={{
              ...(window.innerWidth <= 640 && {
                color: "black",
              }),
            }}
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
              style={{
                ...(window.innerWidth <= 640 && {
                  color: "black",
                }),
                marginBottom: "0.5rem",
              }}
            >
              Home
            </a>
            <a
              href="/about"
              style={{
                ...(window.innerWidth <= 640 && {
                  color: "black",
                }),
                marginBottom: "0.5rem",
              }}
            >
              About
            </a>
            <a
              href="/services"
              style={{
                ...(window.innerWidth <= 640 && {
                  color: "black",
                }),
                marginBottom: "0.5rem",
              }}
            >
              Service
            </a>
            <a
              href="/products"
              style={{
                ...(window.innerWidth <= 640 && {
                  color: "black",
                }),
                marginBottom: "0.5rem",
              }}
            >
              Portfolio
            </a>
            <a
              href="/contactus"
              className="flex items-center justify-center mt-4"
            >
              <button
                type="button"
                className="p-2 px-5 rounded-md text-sm"
                style={{
                  ...(window.innerWidth <= 640 && {
                    backgroundColor: "black",
                    color: "white",
                  }),
                }}
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
