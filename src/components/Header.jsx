// import React, { useState } from "react";
// import { LuMenu } from "react-icons/lu";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import PROTOHEIMlogo from "../assets/PROTOHEIMlogo.png";
// import "../css/Header.css";

// const Header = () => {
//   const [modal, setModal] = useState(false);
//   return (
//     <div className="max-w-screen2xl mx-auto p-3 top-nav container-fluid absolute ">
//       <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//       <div className="protologo">
//         <img src={PROTOHEIMlogo}></img>
//       </div>
//       <div className="text-white flex items-center justify-center ">
//         <a href="#home" className="nav-text1 ">
//           Home
//         </a>
//         <a href="#about" className="nav-text2">
//           Products
//         </a>
//         <a href="#services" className="nav-text3">
//           Service
//         </a>
//         <a href="#team" className="">
//           About
//         </a>
//       </div>
//       <div>
//         <button type="button" className="btn btn-info text-white ">
//           Contact
//         </button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import PROTOHEIMlogo from "../assets/PROTOHEIMlogo.png";
import "../css/Header.css";

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
        
          <div className=" nav-text text-white flex flex-col md:flex-row items-center justify-center">
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
            <button type="button" className="contact-button btn btn-info text-white">
              Contact
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
