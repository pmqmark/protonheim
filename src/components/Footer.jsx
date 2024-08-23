import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#283891] text-white p-4 flex flex-col items-center justify-center gap-4 text-center h-[400px]">
      <h1 className="text-2xl font-bold mb-2">Protoheim</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a href="/" className="text-md hover:underline font-thin tracking-wider">Home</a>
        <a href="/about" className="text-md hover:underline font-thin tracking-wider">About us</a>
        <a href="/services" className="text-md hover:underline font-thin tracking-wider">Services</a>
        <a href="/products" className="text-md hover:underline font-thin tracking-wider">Portfolio</a>
        <a href="/contactus" className="text-md hover:underline font-thin tracking-wider">Contact us</a>
      </div>
      <div className="flex gap-4">
        {/* Uncomment and provide valid URLs if needed */}
        {/* <a href="https://twitter.com/yourprofile" className="w-6 h-6 flex items-center justify-center">
          <img src={twitter} alt="Twitter" className="w-4 h-6 object-contain" />
        </a> */}
        <a href="mailto:info@protoheim.com" className="w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-white" size="lg" />
        </a>
        <a href="https://www.instagram.com/protocube_community" className="w-6 h-6 flex items-center justify-center">
          <img src={instagram} alt="Instagram" className="w-4 h-6 object-contain" />
        </a>
        <a href="https://www.linkedin.com/company/protoheim/" className="w-6 h-6 flex items-center justify-center">
          <img src={linkedin} alt="LinkedIn" className="w-4 h-6 object-contain" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
