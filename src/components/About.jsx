import React from "react";
import "../css/About.css";
import aboutimage1 from "../assets/aboutimage1.png";
import aboutimage2 from "../assets/aboutimage2.png";
import aboutimage3 from "../assets/aboutimage3.png";
import ourteam1 from "../assets/ourteam1.png";
import ourteam2 from "../assets/ourteam2.png";
import ourteam3 from "../assets/ourteam3.png";

const About = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-full pt-10 lg:pt-10 overflow-hidden">
      <section className=" min-h-screen flex flex-col items-center justify-center mb-10 lg:mb-20">
        {/* top Part */}
        <div className="w-full flex flex-col items-center my-16 lg:my-16 space-y-5 lg:space-y-10">
          <h5 data-aos='fade' className="font-gilroy text-[14px] text-[#25AAE1] ">ABOUT US</h5>
          <div data-aos='fade-up' className="w-full flex items-center justify-center">
            <span className="font-gilroy text-3xl lg:text-4xl text-center font-normal lg:leading-[48px] tracking-custom text-black">
              We develop innovative solutions focused
              <br /> on the data for humans responsible for
              <br /> make informed decisions
            </span>
          </div>
        </div>
        {/* second image */}
        <div  className="max-w-[1100px] flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-8 px-3">
          {/* imageCard 1 */}
          <div data-aos='fade-right'  className="w-full">
            <img src={aboutimage1} className="w-full lg:h-[180px]" alt="..." />
            <div className="card-body">
              <p className="font-gilroy1 mt-3">
                Our data valorization experts have a high level of knowledge
                which is demonstrated by successful achievements with partners
                of all sizes.
              </p>
            </div>
          </div>
          {/* imageCard 1 */}
          <div data-aos='fade-right' data-aos-delay='200' className="w-full">
            <img src={aboutimage2} className="w-full lg:h-[180px]" alt="..." />
            <div className="card-body">
              <p className="font-gilroy1 mt-3">
                We automate your non-value-added manual tasks and complex
                manipulations using the best data integration technologies in
                clear and transparent processes.
              </p>
            </div>
          </div>
          {/* imageCard 1 */}
          <div data-aos='fade-right' data-aos-delay='300' className="w-full">
            <img src={aboutimage3} className="w-full lg:h-[180px] " alt="..." />
            <div className="card-body">
              <p className="font-gilroy1 mt-3">
                We integrate data visualization tools adapted to a human's
                decision-making process, allowing them to be informed when they
                need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 pb-40">
        <div>
          <h1 data-aos='fade-up' className="font-gilroy text-3xl lg:text-4xl text-center font-normal lg:leading-[48px] tracking-custom text-black ">Our Team</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-14 lg:mt-20">
          <div data-aos='fade-up' className="px-3 lg:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20">
            <div className="flex flex-col items-center justify-center">
              <img src={ourteam1} className=" object-contain   lg:w-60" alt="..."></img>
              <p className="ourteam-p text-center mt-3">
                <h3 className="text-[15px] truncate font-bold">Rihanna johnson</h3>
                <h4 className="text-xs font-gilroy1 mt-1">product designer</h4>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={ourteam2} className="object-contain  lg:w-60" alt="..."></img>
              <p className="ourteam-p text-center mt-3">
                <h3 className="text-[15px] truncate font-bold">Rihanna johnson</h3>
                <h4 className="text-xs font-gilroy1 mt-1">product designer</h4>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={ourteam3} className="object-contain   lg:w-60" alt="..."></img>
              <p className="ourteam-p text-center mt-3">
                <h3 className="text-[15px] truncate font-bold">Rihanna johnson</h3>
                <h4 className="text-xs font-gilroy1 mt-1">product designer</h4>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={ourteam1} className=" object-contain   lg:w-60" alt="..."></img>
              <p className="ourteam-p text-center mt-3">
                <h3 className="text-[15px] truncate font-bold">Rihanna johnson</h3>
                <h4 className="text-xs font-gilroy1 mt-1">product designer</h4>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={ourteam2} className="object-contain  lg:w-60" alt="..."></img>
              <p className="ourteam-p text-center mt-3">
                <h3 className="text-[15px] truncate font-bold">Rihanna johnson</h3>
                <h4 className="text-xs font-gilroy1 mt-1">product designer</h4>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={ourteam3} className="object-contain   lg:w-60" alt="..."></img>
              <p className="ourteam-p text-center mt-3">
                <h3 className="text-[15px] truncate font-bold">Rihanna johnson</h3>
                <h4 className="text-xs font-gilroy1 mt-1">product designer</h4>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
