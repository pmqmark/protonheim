import React from "react";
import Layout from "../util/Layout";
import serviceicon1 from "../assets/serviceicon1.png";
import serviceicon2 from "../assets/serviceicon2.png";
import serviceicon3 from "../assets/serviceicon3.png";
import serviceicon4 from "../assets/serviceicon4.png";
import chooseimage from "../assets/chooseimage.png";
import "../css/Servicestyles.css";

const Services = () => {
  return (
    <>
    {/* landing part */}
      <div className="max-w-[1280px] mx-auto w-full pt-10 lg:pt-20 overflow-hidden">
        <section className="min-h-screen ">
          <div className="w-full flex flex-col items-center my-20 space-y-5 lg:space-y-10">
            <h5 className="font-gilroy text-[14px] text-[#25AAE1] uppercase">Our Services</h5>
            <div className="w-full flex items-center justify-center">
              <span className="font-gilroy text-3xl lg:text-4xl text-center font-normal lg:leading-[48px] tracking-custom text-black ">
                Beyond Fixes: Dive into Our
                <br />
                Fantastically Futuristic Hardware
                Services!
              </span>
            </div>
          </div>

          <div className="w-full gap-5 flex flex-col lg:flex-row items-center justify-center lg:pt-10 ">
            <div className="flex gap-5">
              <div className="">
                <img className="w-20" alt="iconImage" src={serviceicon1} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">Embedded System Design</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  With lots of unique blocks, you can
                  <br /> easily build a page without coding.
                  <br />
                  Build your next landing page{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="">
                <img className="w-20" alt="iconImage" src={serviceicon2} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">Embedded System Design</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  With lots of unique blocks, you can
                  <br /> easily build a page without coding.
                  <br />
                  Build your next landing page{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full gap-5 flex flex-col lg:flex-row items-center justify-center mt-5 mb-5 lg:mb-0">
            <div className="flex gap-5">
              <div className="">
                <img className="w-20" alt="iconImage" src={serviceicon3} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">Embedded System Design</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  With lots of unique blocks, you can
                  <br /> easily build a page without coding.
                  <br />
                  Build your next landing page{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="">
                <img className="w-20" alt="iconImage" src={serviceicon4} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">Embedded System Design</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  With lots of unique blocks, you can
                  <br /> easily build a page without coding.
                  <br />
                  Build your next landing page{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className=" bg-white">
        <div className="max-w-[980px] mx-auto w-full py-5 flex flex-col md:flex-row items-start gap-5 justify-center p-3">
          <div className="w-full lg:my-14">
            <h1 className=" font-gilroy text-3xl ">
              Why Choose
              <br /> Our Services?
            </h1>
            <ul className="font-gilroy1 text-sm ml-4 mt-4 leading-6 tracking-wider list-disc">
              <li className="mb-3">
                Expertise and Experience: Our team of skilled
                <br /> professionals has extensive experience in the
                <br /> hardware industry.
              </li>
              <li className="">
                Customer-Centric Approach: We prioritize
                <br /> your needs and provide personalized
                <br /> solutions to ensure your satisfaction.
              </li>
            </ul>
          </div>
          <div className="w-full lg:my-14">
            <img src={chooseimage} alt="imagpart" className="object-contain"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
