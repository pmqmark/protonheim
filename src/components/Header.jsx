
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import PROTOHEIMlogo from "../assets/PROTOHEIMlogo.png";
import bgImage from "../assets/mainphoto.png";
import "../index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="relative w-full h-screen md:h-[90vh] lg:h-[80vh] xl:h-screen 2xl:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar Container */}
      <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white absolute left-4 top-4"
          onClick={toggleMenu}
        >
          {isOpen ? <IoCloseCircleOutline size={24} /> : <LuMenu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex justify-center w-full md:justify-start md:ml-8">
          <img src={PROTOHEIMlogo} alt="PROTOHEIM Logo" className="h-12 md:h-20 lg:h-24 md:ml-8" />
        </div>

        {/* Contact Button */}
        <div className="relative flex items-center md:absolute md:right-4 md:top-4">
          <button
            type="button"
            className="relative w-[100px] h-[30px] bg-[rgba(37,170,225,1)] text-white rounded-md text-xs md:text-sm lg:text-base"
            style={{
              fontFamily: 'Gilroy-Bold',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '18px',
              letterSpacing: '-0.5px',
              textAlign: 'center',
              boxShadow: '0px 4px 14px rgba(255, 255, 255, 0.25)',
            }}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Main Text Section */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
        <p
          className="text-white text-[24px] md:text-[32px] lg:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[58px] tracking-[-1.8px] font-[Gilroy-Bold] mb-4"
          style={{
            textShadow: '0px 4px 14px rgba(255, 255, 255, 0.25)', // Text shadow effect
          }}
        >
          We inspire to<br />innovate
        </p>
        <p
          className="text-white text-[12px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-0.2px] font-[Gilroy-Regular] max-w-md mx-auto"
          style={{ color: 'rgba(255, 255, 255, 1)' }}
        >
          Our solutions include smart home devices, industrial automation, and data-driven insights for a connected world.
        </p>
      </div>

      {/* Navbar Links */}
      <nav
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8 ${isOpen ? 'block' : 'hidden'} md:flex p-4`}
      >
        <a
          href="#home"
          className="text-white text-xs md:text-sm lg:text-base"
          style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '26px',
            letterSpacing: '-0.1px',
            textAlign: 'center'
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white text-xs md:text-sm lg:text-base"
          style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '26px',
            letterSpacing: '-0.1px',
            textAlign: 'center'
          }}
        >
          Products
        </a>
        <a
          href="#services"
          className="text-white text-xs md:text-sm lg:text-base"
          style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '26px',
            letterSpacing: '-0.1px',
            textAlign: 'center'
          }}
        >
          Service
        </a>
        <a
          href="#team"
          className="text-white text-xs md:text-sm lg:text-base"
          style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '26px',
            letterSpacing: '-0.1px',
            textAlign: 'center'
          }}
        >
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;

