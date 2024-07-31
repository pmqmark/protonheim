import React from "react";
import "../css/Header.css";
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"

const Footer = () => {
  return (
    <footer className="footer p-3 ">
       
       <h1 className="footer-text1">Protoheim</h1>
       <div className="footer-text2 ">
      <a href="#" className="footer1">Contact us</a>
      <a href="#" className="footer1">Prodcuts</a>
      <a href="#" className="footer1">About us</a>
      <a href="#" className="footer1">Services</a>
      <a href="#">Careers</a>
      </div>
      <div className="footer-icons">
        <a href="#" className="footer2"><img src={twitter}></img></a>
        <a href="#" className="footer2"><img src={facebook}></img></a>
        <a href="#" className="footer2"><img src={instagram}></img></a>
        <a href="#" className="footer2"><img src={linkedin}></img></a>
      </div>
    </footer>
  );
};

export default Footer;
