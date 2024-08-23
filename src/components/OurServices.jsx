import React from "react";
import { useNavigate } from "react-router-dom";
import ic_layers1 from "../assets/ic_layers1.png";
import ic_layers2 from "../assets/ic-layer2.png";
import ic_layers3 from "../assets/ic-layer3.png";

// Define the style for the heading
const headingStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '13px',
  fontWeight: 400,
  lineHeight: '16.09px',
  letterSpacing: '1.625px',
  textAlign: 'center',
  color: 'rgba(37, 170, 225, 1)' // Updated color
};

// Define the style for the main services heading
const mainHeadingStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '36px',
  fontWeight: 400,
  lineHeight: '48px',
  letterSpacing: '-1.2px',
  textAlign: 'center',
  color: 'rgba(40, 56, 145, 1)' // Updated color
};

// Define the style for the "Embedded System Design" text
const serviceHeadingStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '21px',
  fontWeight: 400,
  lineHeight: '32px',
  letterSpacing: '-0.5px',
  textAlign: 'left',
  color: 'rgba(40, 56, 145, 1)' // Updated color
};

// Define the style for the description text
const textStyle = {
  fontFamily: 'Gilroy-Regular, sans-serif',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '-0.2px',
  textAlign: 'left',
  color: 'rgba(40, 56, 145, 1)' // Updated color
};

// Define the style for the button
const buttonStyle = {
  backgroundColor: 'rgba(40, 56, 145, 1)',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  marginTop: '20px',
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '14px',
  cursor: 'pointer',
  border: 'none',
};

const OurServices = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services', { state: { scrollToTop: true } });
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <div className="py-10 lg:py-18 min-h-screen max-w-[1280px] mx-auto w-full">
      <section id="services" className="bg-white w-full p-2">
        <div className="max-w-[1280px] mx-auto w-full">

          <div className="text-center flex flex-col items-center mb-5 ">
            <span data-aos="fade" className="text-[2.25rem] mb-4 font-semibold block" style={headingStyle}>
              OUR SERVICES
            </span>
            <span data-aos="fade-up" className="block text-[#283891] w-full lg:w-1/2 text-center" style={mainHeadingStyle}>
              Beyond Fixes: Dive into Our Fantastically Futuristic Hardware Services
            </span>
          </div>

          {/* 2x2 Grid Layout */}
          <div data-aos='flip-up' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 py-4 place-items-center">
            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers1} alt="Icon 1" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  Embedded System
                </h2>
                <p className="mt-2" style={textStyle}>
                 We specialize in designing and developing <br /> embedded systems, leveraging our expertise <br /> Our team excels in creating tailored <br /> microcontroller based systems, integrating <br /> sensors for real-time data, and developing <br /> bespoke firmware to meet specific needs. <br /> We ensure seamless component integration, optimizing the system for reliability and <br /> efficiency while addressing integration <br /> challenges to achieve peak performance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers2} alt="Icon 2" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  Electronic Product Design
                </h2>
                <p className="mt-2" style={textStyle}>
                  We specialise in transforming electronic devices <br /> from concepts to final products, covering all <br /> aspects of electronic design. Our expertise <br /> includes precise circuit design, careful component <br /> selection, and the creation of functional prototypes. <br /> These prototypes undergo rigorous testing to <br /> ensure they meet your standards before mass <br /> production. Our comprehensive approach ensures <br /> a smooth transition from idea to finished device, <br /> providing innovative and reliable solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers3} alt="Icon 3" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  PCB Design
                </h2>
                <p className="mt-2" style={textStyle}>
                  Our expert engineers design professional <br /> grade printed circuit board (PCB) layouts <br /> with a focus on high quality outcomes. We <br /> meticulously evaluate key factors such as <br /> signal integrity, power distribution, and <br /> manufacturability to ensure that each PCB <br /> performs reliably and efficiently. Our <br /> approach balances technical precision with <br /> practical considerations, resulting in designs <br /> that meet strict performance and production <br /> standards.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers1} alt="Icon 4" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px] mr-[130px]" style={serviceHeadingStyle}>
                  Hardware Consultancy
                </h2>
                <p className="mt-2" style={textStyle}>
                  Our hardware consultancy services offer <br /> expert guidance on a range of hardware <br /> related issues. We assist you with critical <br /> tasks such as component selection, <br /> ensuring you choose parts that meet your <br /> technical and budgetary requirements. <br /> Additionally, we help design robust systems <br /> architectures and provide troubleshooting <br /> support to address and resolve any <br /> hardware challenges you may encounter. <br /> Our goal is to offer valuable insights <br /> and solutions that enhance the functionality <br /> and efficiency of your hardware projects.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers2} alt="Icon 5" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px] mr-[110px]" style={serviceHeadingStyle}>
                  ML Based Product Design
                </h2>
                <p className="mt-2" style={textStyle}>
                  We use machine learning techniques to <br /> develop intelligent products that enhance <br /> functionality and performance. Our <br /> expertise spans various applications, <br /> including predictive maintenance to <br /> prevent equipment failures, image <br /> recognition for visual data, and natural <br /> language processing for understanding <br /> and interacting with human language. <br /> By integrating machine learning into <br /> product design, we create advanced <br /> solutions that improve efficiency, accuracy, <br /> and user management.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers3} alt="Icon 6" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  IoT and Home Automation
                </h2>
                <p className="mt-2" style={textStyle}>
                  Our IoT and home automation solutions <br /> encompass a wide range of applications, <br /> from smart home devices that enhance <br /> everyday living to industrial automation <br /> systems that optimize operations. We focus <br /> on creating interconnected solutions that <br /> leverage data-driven insights to improve <br /> efficiency and convenience in both residential <br /> and industrial environments. By integrating <br /> advanced technology, we enable seamless <br /> connectivity and control, making it easier to <br /> manage and monitor various aspects of your <br /> environment in a connected world.
                </p>
              </div>
            </div>
          </div>

          {/* Single Learn More Button */}
          <div className="text-right mt-10">
            <button style={buttonStyle} onClick={handleClick}>Learn More</button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default OurServices;
