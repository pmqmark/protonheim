import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import PROTOHEIMlogo from "../assets/PROTOHEIMlogo.png";
import "../css/Header.css";  // Import updated CSS
import "../assets/Fonts/FontsFree-Net-Gilroy-Bold.ttf"; // Ensure font file is available

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-screen2xl mx-auto p-3 top-nav container-fluid absolute">
      <div className="flex items-center justify-between">
        <div className="protologo">
          <img src={PROTOHEIMlogo} alt="PROTOHEIM Logo" />
        </div>
        <button className="navbar-toggler text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? <IoCloseCircleOutline size={24} /> : <LuMenu size={24} />}
        </button>
        <div className={`navbar-collapse ${isOpen ? "block" : "hidden"} md:flex`} id="navbarTogglerDemo01">
          <div className="nav-text text-white flex flex-col md:flex-row items-center justify-center">
            <a href="#home" className="nav-text1 p-2 md:p-0">
              Home
            </a>
            <a href="#about" className="nav-text2 p-2 md:p-0">
              Products
            </a>
            <a href="#services" className="nav-text3 p-2 md:p-0">
              Service
            </a>
            <a href="#team" className="p-2 md:p-0">
              About
            </a>
          </div>
          <div className="navbar-end">
            <button
              type="button"
              className="contact-button btn btn-info text-white"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
