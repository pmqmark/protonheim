import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold mb-2">Protoheim</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a href="#" className="text-sm hover:underline">Contact us</a>
        <a href="#" className="text-sm hover:underline">Products</a>
        <a href="#" className="text-sm hover:underline">About us</a>
        <a href="#" className="text-sm hover:underline">Services</a>
        <a href="#" className="text-sm hover:underline">Careers</a>
      </div>
      <div className="flex gap-4">
        <a href="#" className="w-6 h-6 flex items-center justify-center">
          <img src={twitter} alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="#" className="w-6 h-6 flex items-center justify-center">
          <img src={facebook} alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="#" className="w-6 h-6 flex items-center justify-center">
          <img src={instagram} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="#" className="w-6 h-6 flex items-center justify-center">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
