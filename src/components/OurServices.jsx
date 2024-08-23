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

// Define the style for the "See More" link
const linkStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '14px',
  color: 'rgba(40, 56, 145, 1)',
  textDecoration: 'underline',
  cursor: 'pointer',
};

const OurServices = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services');
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
              Innovative Hardware Solutions for the Future
            </span>
          </div>

          {/* 2x2 Grid Layout */}
          <div data-aos='flip-up' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4 place-items-center">
            <div className="flex items-start space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers1} alt="Icon 1" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  Embedded Systems
                </h2>
                <p className="mt-2" style={textStyle}>
                  Designing and developing embedded systems with expertise in microcontroller-based systems, integrating sensors, and creating bespoke firmware.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers2} alt="Icon 2" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  Electronic Product Design
                </h2>
                <p className="mt-2" style={textStyle}>
                  Transforming electronic devices from concept to product with precise circuit design and functional prototypes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers3} alt="Icon 3" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  PCB Design
                </h2>
                <p className="mt-2" style={textStyle}>
                  Designing high-quality PCBs with a focus on signal integrity, power distribution, and manufacturability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers1} alt="Icon 4" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  Hardware Consultancy
                </h2>
                <p className="mt-2" style={textStyle}>
                  Expert guidance on component selection, system design, and troubleshooting.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers2} alt="Icon 5" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  ML-Based Product Design
                </h2>
                <p className="mt-2" style={textStyle}>
                  Using machine learning to develop intelligent products, including predictive maintenance and image recognition.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers3} alt="Icon 6" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>
                  IoT & Home Automation
                </h2>
                <p className="mt-2" style={textStyle}>
                  Creating interconnected solutions for smart homes and industrial automation with advanced technology.
                </p>
              </div>
            </div>
          </div>

          {/* Single See More Link */}
          <div className="text-right mt-10">
            <span style={linkStyle} onClick={handleClick}>See More</span>
          </div>

        </div>
      </section>
    </div>
  );
};

export default OurServices;
