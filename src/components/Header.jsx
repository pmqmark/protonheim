import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import PROTOHEIMlogo from "../assets/PROTOHEIMlogo.png";
import "../css/Header.css";

const Header = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="max-w-screen2xl mx-auto p-3 top-nav container-fluid absolute ">
      <div className="protologo">
        <img src={PROTOHEIMlogo}></img>
      </div>
      <div className="text-white flex items-center justify-center ">
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
      </div>
      <div>
        <button type="button" className="btn btn-info text-white ">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
