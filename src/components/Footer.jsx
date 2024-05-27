import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = [
    {
      id: 1,
      heading: "OUR MENTORS",
      link: [
        { id: 1, link: "#", name: "Web Mentors" },
        { id: 2, link: "#", name: "IoT Mentors" },
        { id: 3, link: "#", name: "Hardware Mentors" },
        { id: 4, link: "#", name: "AR/VR Mentors" },
        { id: 5, link: "#", name: "MR Mentors" },
      ],
    },
    {
      id: 2,
      heading: "OUR MENTORS",
      link: [
        { id: 1, link: "#", name: "Web Mentors" },
        { id: 2, link: "#", name: "IoT Mentors" },
        { id: 3, link: "#", name: "Hardware Mentors" },
        { id: 4, link: "#", name: "AR/VR Mentors" },
        { id: 5, link: "#", name: "MR Mentors" },
      ],
    },
    {
      id: 3,
      heading: "OUR MENTORS",
      link: [
        { id: 1, link: "#", name: "Web Mentors" },
        { id: 2, link: "#", name: "IoT Mentors" },
        { id: 3, link: "#", name: "Hardware Mentors" },
        { id: 4, link: "#", name: "AR/VR Mentors" },
        { id: 5, link: "#", name: "MR Mentors" },
      ],
    },
  ];
  return (
    <footer className="bg-[#2C3145] text-gray-200 py-8 p-2">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start justify-between md:py-5 gap-10 md:gap-32">
          <div className="sm:mb-4 flex flex-col w-full md:w-2/6">
            <a href="#home" className="text-white text-xl font-bold">
              <img
                src={require("../assets/protoheimLogo.png")}
                alt="logo"
                className="object-cover h-[130px] md:h-full md:w-[300px]"
              />
            </a>
            <div className=" text-[10px] sm:text-[14px] font-[300] flex gap-5 md:gap-0 md:justify-between mt-5 md:mt-8 text-nowrap">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-between w-full">
            {data.map((items) => (
              <div className="flex flex-col mb-10">
                <h1
                  key={items?.id}
                  className="uppercase text-[#25AAE1] mb-7 text-xl"
                >
                  {items?.heading}
                </h1>
                <ul className="text-white/70 space-y-5 font-[300]">
                  {items?.link.map((items) => (
                    <li className="" key={items?.id}>
                      <Link to={items?.link}>{items?.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[12px] w-full flex items-start md:items-center md:justify-center md:gap-2 text-white/40 mt-7">
          {" "}
          <Link to={"https://qmarktechnolabs.com"}>
            Copyright © 2023 All rights reserved. Developed by{" "}
            <br className="block md:hidden" /> <span className="text-[15px] text-secondaryColor"> Qmark Technolabs</span>{" "}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
