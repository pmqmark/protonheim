import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";

// Text styling for general text and paragraphs
const textStyle = {
  fontFamily: 'Gilroy-Regular, sans-serif',
  fontSize: '13px',
  marginTop: '10px',
  marginBottom: '15px',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '-0.2px',
  textAlign: 'center'
};

// Heading styling for section title
const headingStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '13px',
  fontWeight: 400,
  lineHeight: '16.09px',
  letterSpacing: '1.625px',
  textAlign: 'center',
  color: 'rgba(37, 170, 225, 1)'
};

// Large text styling for the main description
const largeTextStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '36px',
  fontWeight: 400,
  lineHeight: '48px',
  letterSpacing: '-1.2px',
  textAlign: 'center',
  color: 'rgba(0, 0, 0, 1)'
};

// Device name styling
const deviceNameStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '34px',
  letterSpacing: '-0.5px',
  textAlign: 'center',
  color: 'rgba(0, 0, 0, 1)'
};

// Card styling
const cardStyle = {
  width: '14rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexShrink: 0, // Prevent shrinking
  marginBottom: '1rem' // Space between cards when stacked
};

// Styling for the "Learn More" link and arrow
const learnMoreStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '17px',
  fontWeight: 400,
  lineHeight: '32px',
  letterSpacing: '-0.6px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px'
};

const OurProducts = () => {
  return (
    <section id="services" className="mb-20 md:mt-0 md:py-24 bg-white w-full p-3">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <span style={headingStyle} className="text-sm md:text-base">
            OUR PRODUCTS
          </span>
          <span style={{ ...largeTextStyle, marginTop: '1.25rem' }} className="text-xl md:text-4xl">
            Step Into Tomorrow: Explore Our <br />Wonderfully Wacky Hardware!
          </span>
          <div className="flex flex-col md:flex-row overflow-x-auto gap-4 mt-8">
            <div className="card flex flex-col items-center flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-96" style={cardStyle}>
              <img className="card-img-top" src={Rectangle1} alt="Card image cap" />
              <div className="card-body text-center">
                <h5 style={deviceNameStyle} className="text-xl md:text-2xl">Device Name</h5>
                <p style={textStyle} className="text-sm md:text-base">
                  Perfect for both amateur<br /> photographers looking to step up their<br /> game and professionals seeking a<br /> reliable
                </p>
                <a href="#" style={learnMoreStyle} className="text-base md:text-lg">
                  Learn More <HiArrowSmRight style={{ marginLeft: '8px' }} />
                </a>
              </div>
            </div>
            <div className="card flex flex-col items-center flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-96" style={cardStyle}>
              <img className="card-img-top" src={Rectangle2} alt="Card image cap" />
              <div className="card-body text-center">
                <h5 style={deviceNameStyle} className="text-xl md:text-2xl">Device Name</h5>
                <p style={textStyle} className="text-sm md:text-base">
                  Perfect for both amateur<br /> photographers looking to step up their<br /> game and professionals seeking a<br /> reliable
                </p>
                <a href="#" style={learnMoreStyle} className="text-base md:text-lg">
                  Learn More <HiArrowSmRight style={{ marginLeft: '8px' }} />
                </a>
              </div>
            </div>
            <div className="card flex flex-col items-center flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-96" style={cardStyle}>
              <img className="card-img-top" src={Rectangle3} alt="Card image cap" />
              <div className="card-body text-center">
                <h5 style={deviceNameStyle} className="text-xl md:text-2xl">Device Name</h5>
                <p style={textStyle} className="text-sm md:text-base">
                  Perfect for both amateur<br /> photographers looking to step up their<br /> game and professionals seeking a<br /> reliable
                </p>
                <a href="#" style={learnMoreStyle} className="text-base md:text-lg">
                  Learn More <HiArrowSmRight style={{ marginLeft: '8px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
