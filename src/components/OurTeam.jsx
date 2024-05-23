import React from "react";
import img1 from "../assets/team/1.png";
import img2 from "../assets/team/2.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const teamMembers = [
  {
    name: "Sharan K.S",
    title: "Managing Director",
    image: img1,
  },
  { name: "Divya Lakshmi P", title: "Director", image: img1 },
  { name: "Tessa Shajan", title: "Director", image: img2 },
  { name: "Muhammed Jezwan", title: "Director", image: img1 },
];

const OurTeam = () => {
  return (
    <section id="team" className="md:py-16 bg-white p-2">
      <div className="max-w-[1280px] mx-auto w-full text-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <h5 className="text-[#646464] text-lg">Meet the pillars</h5>
          <span className="text-5xl sm:text-6xl mt-2 font-bold text-center bg-gradient-to-r from-[#25AAE1] to-primaryColor text-transparent bg-clip-text mb-8">
            Our Team
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center border rounded-3xl shadow p-5 w-full md:w-[300px] md:h-[400px] "
            >
              <div className="w-full bg-[#F0F4F6] rounded-lg h-[60%] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-primaryColor mt-5">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.title}</p>
              </div>

              <div className="flex w-full mt-6 items-center justify-around">
                <div className="bg-white shadow p-2 rounded-lg ">
                  <FaXTwitter />
                </div>
                <div className="bg-white shadow p-2 rounded-lg ">
                  <FaFacebookF />
                </div>
                <div className="bg-white shadow p-2 rounded-lg ">
                  <IoLogoInstagram />
                </div>
                <div className="bg-white shadow p-2 rounded-lg ">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
