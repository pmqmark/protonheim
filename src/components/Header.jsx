import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import PROTOHEIM_LOGO from "../assets/PROTOHEIM_LOGO.png";
import PROTOHEIM_ from "../assets/PROTOHEIM_.png";
import "../index.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkStyle = (path) => {
    // Determine active link color and inactive link color
    let activeColor = "#283891";
    let inactiveColor = "white";
    let homeAndContactColor = "black";

    if (currentPath === "/") {
      // When 'Home' is active, make all other links white
      if (path === "/") {
        return { color: activeColor };
      } else {
        return { color: inactiveColor };
      }
    } else if (currentPath === "/contactus") {
      // When 'Contact' is active, make all other links white
      if (path === "/contactus") {
        return { color: activeColor };
      } else {
        return { color: inactiveColor };
      }
    } else if (currentPath === "/about" || currentPath === "/services" || currentPath === "/products") {
      // When 'About', 'Service', or 'Portfolio' is active
      if (path === currentPath) {
        return { color: activeColor };
      } else if (path === "/" || path === "/contactus") {
        return { color: homeAndContactColor };
      } else {
        return { color: "black" };
      }
    }
    return { color: "black" };
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full absolute top-0 z-10 max-w-screen-2xl mx-auto lg:px-5"
      style={{
        backgroundColor: window.innerWidth <= 640 ? "#ffffff" : "transparent",
      }}
    >
      {/* Navbar Container */}
      <div
        className="flex items-center justify-between lg:py-3 p-3"
        style={{
          backgroundColor: window.innerWidth <= 640 ? "#ffffff" : "transparent",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center lg:w-full md:justify-start">
          <img
            src={PROTOHEIM_LOGO}
            alt="PROTOHEIM Logo"
            className="h-6 lg:h-10"
          />
          <img
            src={PROTOHEIM_}
            alt="PROTOHEIM Additional Logo"
            className="h-5 lg:h-8 ml-1"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          style={{
            color: window.innerWidth <= 640 ? "#283891" : "#283891",
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
          backgroundColor: window.innerWidth <= 640 ? "#ffffff" : "transparent",
        }}
      >
        <a
          href="/"
          style={{
            ...getLinkStyle("/"),
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            textAlign: "center",
          }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            ...getLinkStyle("/about"),
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            textAlign: "center",
          }}
        >
          About
        </a>
        <a
          href="/services"
          style={{
            ...getLinkStyle("/services"),
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            textAlign: "center",
          }}
        >
          Service
        </a>
        <a
          href="/products"
          style={{
            ...getLinkStyle("/products"),
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            textAlign: "center",
          }}
        >
          Portfolio
        </a>
        <a
          href="/contactus"
          style={{
            ...getLinkStyle("/contactus"),
            fontFamily: "Gilroy-Bold",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "26px",
            textAlign: "center",
          }}
        >
          Contact
        </a>
      </nav>

      {isOpen && (
        <div
          className="h-screen w-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#ffffff",
            color: "#283891",
          }}
        >
          <IoCloseCircleOutline
            onClick={() => setIsOpen(false)}
            size={24}
            className="absolute right-2 top-2"
            style={{
              color: "#283891",
            }}
          />

          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center mb-3">
              <img
                src={PROTOHEIM_LOGO}
                alt="PROTOHEIM Logo"
                className="object-contain w-8"
              />
              <img
                src={PROTOHEIM_}
                alt="PROTOHEIM Additional Logo"
                className="object-contain w-48 ml-1"
              />
            </div>
            <a
              href="/"
              style={{
                color: "#283891",
                marginBottom: "0.5rem",
              }}
            >
              Home
            </a>
            <a
              href="/about"
              style={{
                color: "#283891",
                marginBottom: "0.5rem",
              }}
            >
              About
            </a>
            <a
              href="/services"
              style={{
                color: "#283891",
                marginBottom: "0.5rem",
              }}
            >
              Service
            </a>
            <a
              href="/products"
              style={{
                color: "#283891",
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
                  backgroundColor: "#283891",
                  color: "white",
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
