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
      <div className="max-w-[1280px] mx-auto w-full pt-10 lg:pt-20 overflow-hidden px-3">
        <section className="min-h-screen ">
          <div className="w-full flex flex-col items-center my-20 space-y-5 lg:space-y-10">
            <h5
              data-aos="fade"
              className="font-gilroy text-[14px] text-[#25AAE1] uppercase"
            >
              Our Services
            </h5>
            <div
              data-aos="fade-up"
              className="w-full flex items-center justify-center"
            >
              <span className="font-gilroy text-3xl lg:text-4xl text-center font-normal lg:leading-[48px] tracking-custom text-black ">
                Beyond Fixes: Dive into Our
                <br />
                Fantastically Futuristic Hardware Services!
              </span>
            </div>
          </div>

          <div className="w-full gap-5 flex flex-col lg:flex-row items-center justify-center lg:pt-10 ">
            <div data-aos="fade-right" className="flex gap-3 w-full">
              <div className="">
                <img className="w-[300px]" alt="iconImage" src={serviceicon1} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">Embedded System</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3 text-wrap ">
                  We specialize in designing and developing embedded systems,
                  leveraging our expertise Our team excels in creating tailored
                  microcontroller based systems, integrating sensors for
                  real-time data,and developing bespoke firmware to meet
                  specific needs. We ensure seamless component integration,
                  optimizing the system for reliability and efficiency while
                  addressing integration challenges to achieve peak performance.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="flex gap-3 w-full">
              <div className="">
                <img className="w-[300px]" alt="iconImage" src={serviceicon2} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">
                  Electronic Product Design
                </h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  We specialise in transforming electronic devices from concepts
                  to final products, covering all aspects of electronic design.
                  Our expertise includes precise circuit design, careful
                  component selection, and the creation of functional
                  prototypes. These prototypes undergo rigorous testing to
                  ensure they meet your standards before mass production. Our
                  comprehensive approach ensures a smooth transition from idea
                  to finished device. providing innovative and reliable
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full gap-5 flex flex-col lg:flex-row items-center justify-center mt-5 mb-5 lg:mb-0">
            <div data-aos="fade-right" className="flex gap-3 w-full">
              <div className="">
                <img className="w-[300px]" alt="iconImage" src={serviceicon3} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">PCB Design</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  Our expert engineers design proffessional grade printed
                  circuit board (PCB) layouts with a focus on high quality
                  outcomes. We meticulously evaluate key factors such as signal
                  integrity,power distribution, and manufacturability to ensure
                  that each PCB performs reliably and efficiently. Our approach
                  balances technical precision with practical consideration,
                  resulting in designs that meet strict performance and
                  production standards.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="flex gap-3 w-full">
              <div className="">
                <img className="w-[300px]" alt="iconImage" src={serviceicon4} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">Hardware Consultancy</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  Our hardware consultancy services offer expert guidance on a
                  range of hardware related issues .We assist you with critical
                  tasks such as component selection, ensuring you choose parts
                  that meet your technical and budgetary requirments
                  Additionally, we help design robust systems architectures and
                  provide troubleshooting support to address and resolve any
                  hardware challenges you may encounter our goal is to offer
                  valuable insights and solutions that enhance he functionality
                  and efficency of your hardware projects.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full gap-5 flex flex-col lg:flex-row items-center justify-center mt-5 mb-5 lg:mb-0">
            <div data-aos="fade-right" className="flex gap-3 w-full">
              <div className="">
                <img className="w-[300px]" alt="iconImage" src={serviceicon3} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">ML Based Product Design</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  We use machine learning techniques to develop intelligent
                  products that enhance functionality and performance. Our
                  expertise spans various applications, including predictive
                  maintenance to to prevent equipment failures, image
                  recognition for visual data, and natural language processing
                  for understanding and interacting with human language
                  integrating machine learning into product design , We create
                  advanced solutions that improve efficiency accuracy and user
                  management.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="flex gap-3 w-full">
              <div className="">
                <img className="w-[300px]" alt="iconImage" src={serviceicon4} />
              </div>
              <div className="">
                <h2 className="font-gilroy text-lg">IoT and home automation</h2>
                <p className="font-gilroy1 text-sm leading-6 mt-3">
                  Our IoT and home automation solutions encompass a wide range
                  of applications. from smart home devices that enhances
                  everyday living to industrial automation system that optimize
                  operations. We focus on creating interconnected solutions that
                  leverage data-driven insights to improve efficiency and
                  convenience in both residential and industrial environments.
                  By integrating advanced technology, we enable seamless
                  connectivity and control , making it easier to manage and
                  monitor various aspects of your environment in a connected
                  world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className=" bg-white">
        <div className="max-w-[980px] mx-auto w-full py-5 flex flex-col md:flex-row items-start gap-5 justify-center p-3">
          <div data-aos="fade-up" className="w-full lg:my-14">
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
          <div data-aos="fade-up" className="w-full lg:my-14">
            <img src={chooseimage} alt="imagpart" className="object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
