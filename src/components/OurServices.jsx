import React from "react";
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

const OurServices = () => {
  return (
    <div className="py-10 lg:py-18 min-h-screen max-w-[1280px] mx-auto w-full">
      <section id="services" className="bg-white w-full p-2">
        <div className="max-w-[1280px] mx-auto w-full">

          <div className="text-center flex flex-col items-center mb-5 ">
            <span className="text-[2.25rem] mb-4 font-semibold block" style={headingStyle}>
              OUR SERVICES
            </span>
            <span className="block text-[#283891] w-full lg:w-1/2 text-center" style={mainHeadingStyle}>
              Beyond Fixes: Dive into Our Fantastically Futuristic Hardware Services
            </span>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 py-4 place-items-center">
            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers1} alt="Icon 1" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" >
                  Embedded System Design
                </h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers2} alt="Icon 2" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" >PCB Design</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers3} alt="Icon 3" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>Hardware Consultancy</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers1} alt="Icon 4" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>IoT & Home Automation</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers2} alt="Icon 5" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>ML Based Product Design</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-7 lg:space-x-4 mb-8">
              <img className="w-[35px] h-auto object-contain" src={ic_layers3} alt="Icon 6" />
              <div>
                <h2 className="text-[18px] text-[#283891] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>Embedded System Design</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
