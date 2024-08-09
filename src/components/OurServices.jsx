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
  fontSize: '17px',
  fontWeight: 400,
  lineHeight: '29px',
  letterSpacing: '-0.2px',
  textAlign: 'left',
  color: 'rgba(40, 56, 145, 1)' // Updated color
};

const OurServices = () => {
  return (
    <div className="p-3">
      <section id="services" className="bg-white w-full p-2">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[2.25rem] font-semibold mb-12 block" style={headingStyle}>
              OUR SERVICES
            </span>
            <span className="block" style={mainHeadingStyle}>
              Beyond Fixes: Dive into Our<br /> Fantastically Futuristic Hardware<br /> Services
            </span>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 mb-8">
              <img className="w-[50px] h-auto" src={ic_layers1} alt="Icon 1" />
              <div>
                <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>Embedded System Design</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img className="w-[50px] h-auto" src={ic_layers2} alt="Icon 2" />
              <div>
                <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>PCB Design</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img className="w-[50px] h-auto" src={ic_layers3} alt="Icon 3" />
              <div>
                <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>Hardware Consultancy</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img className="w-[50px] h-auto" src={ic_layers1} alt="Icon 4" />
              <div>
                <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>IoT & Home Automation</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img className="w-[50px] h-auto" src={ic_layers2} alt="Icon 5" />
              <div>
                <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>ML Based Product Design</h2>
                <p className="mt-2" style={textStyle}>
                  With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <img className="w-[50px] h-auto" src={ic_layers3} alt="Icon 6" />
              <div>
                <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px]" style={serviceHeadingStyle}>Embedded System Design</h2>
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
