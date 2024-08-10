import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";

// Text styling for general text and paragraphs
const textStyle = {
  fontFamily: "Gilroy-Regular, sans-serif",
  fontSize: "17px",
  marginTop: "10px",
  marginBottom: "15px",
  fontWeight: 500,
  lineHeight: "25px",
  letterSpacing: "-0.2px",
  textAlign: "center",
};

// Heading styling for section title
const headingStyle = {
  fontFamily: "Gilroy-Bold, sans-serif",
  fontSize: "13px",
  fontWeight: 400,
  lineHeight: "16.09px",
  letterSpacing: "1.625px",
  textAlign: "center",
  color: "rgba(37, 170, 225, 1)",
};

// Large text styling for the main description
const largeTextStyle = {
  fontFamily: "Gilroy-Bold, sans-serif",
  fontSize: "36px",
  fontWeight: 400,
  lineHeight: "48px",
  letterSpacing: "-1.2px",
  textAlign: "center",
  color: "rgba(0, 0, 0, 1)",
};

// Device name styling
const deviceNameStyle = {
  fontFamily: "Gilroy-Bold, sans-serif",
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "34px",
  letterSpacing: "-0.5px",
  textAlign: "center",
  color: "rgba(0, 0, 0, 1)",
};

// Card styling
const cardStyle = {
  width: "14rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: 0, // Prevent shrinking
  marginBottom: "1rem", // Space between cards when stacked
};

// Styling for the "Learn More" link and arrow
const learnMoreStyle = {
  fontFamily: "Gilroy-Bold, sans-serif",
  fontSize: "17px",
  fontWeight: 400,
  lineHeight: "32px",
  letterSpacing: "-0.6px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
};

const OurProducts = () => {
  return (
    <section
      id=""
      className="max-w-[1180px] mx-auto w-full py-10 lg:py-20 min-h-screen bg-white"
    >
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <span
            data-aos="fade-in"
            data-aos-delay="200"
            style={headingStyle}
            className="text-sm md:text-base"
          >
            OUR PRODUCTS
          </span>
          <span
            data-aos="fade-up"
            style={{ ...largeTextStyle, marginTop: "1.25rem" }}
            className="text-lg md:text-4xl lg:mb-5"
          >
            Step Into Tomorrow: Explore Our <br />
            Wonderfully Wacky Hardware!
          </span>

          {/* Content Part */}
          <div className="flex flex-col md:flex-row overflow-hidden gap-4 lg:gap-5 py-5 w-full items-center justify-center p-3">
            {/* product listing */}
            <div
              data-aos="fade-up-right"
              className="w-full p-3 flex flex-col items-center bg-[#F4F7FA] rounded-lg"
            >
              <div className="overflow-hidden rounded-lg w-full">
                <img
                  className="w-full object-cover cursor-pointer hover:scale-105 ease-in-out duration-200"
                  src={Rectangle1}
                  alt="Card_imag_cap"
                />
              </div>
              <div className="my-4 flex flex-col items-center justify-center">
                <h5 style={deviceNameStyle} className="text-xl md:text-2xl">
                  Device Name
                </h5>
                <p style={textStyle} className="text-sm md:text-xl">
                  Perfect for both amateur
                  <br /> photographers looking to step up their
                  <br /> game and professionals seeking a<br /> reliable
                </p>
                <a
                  href="products"
                  style={learnMoreStyle}
                  className=" md:text-lg hover:text-primaryColor ease-in-out duration-200"
                >
                  Learn More <HiArrowSmRight style={{ marginLeft: "8px" }} />
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up-right"
              data-aos-delay="200"
              className="w-full p-3 flex flex-col items-center bg-[#F4F7FA] rounded-lg"
            >
              <div className="overflow-hidden rounded-lg w-full">
                <img
                  className="w-full object-cover cursor-pointer hover:scale-105 ease-in-out duration-200"
                  src={Rectangle2}
                  alt="Card_imag_cap"
                />
              </div>
              <div className="my-4 flex flex-col items-center justify-center">
                <h5 style={deviceNameStyle} className="text-xl md:text-2xl">
                  Device Name
                </h5>
                <p style={textStyle} className="text-sm md:text-xl">
                  Perfect for both amateur
                  <br /> photographers looking to step up their
                  <br /> game and professionals seeking a<br /> reliable
                </p>
                <a
                  href="products"
                  style={learnMoreStyle}
                  className=" md:text-lg hover:text-primaryColor ease-in-out duration-200"
                >
                  Learn More <HiArrowSmRight style={{ marginLeft: "8px" }} />
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up-right"
              data-aos-delay="400"
              className="w-full p-3 flex flex-col items-center bg-[#F4F7FA] rounded-lg"
            >
              <div className="overflow-hidden rounded-lg w-full">
                <img
                  className="w-full object-cover cursor-pointer hover:scale-105 ease-in-out duration-200"
                  src={Rectangle3}
                  alt="Card_imag_cap"
                />
              </div>
              <div className="my-4 flex flex-col items-center justify-center">
                <h5 style={deviceNameStyle} className="text-xl md:text-2xl">
                  Device Name
                </h5>
                <p style={textStyle} className="text-sm md:text-xl">
                  Perfect for both amateur
                  <br /> photographers looking to step up their
                  <br /> game and professionals seeking a<br /> reliable
                </p>
                <a
                  href="products"
                  style={learnMoreStyle}
                  className=" md:text-lg hover:text-primaryColor ease-in-out duration-200"
                >
                  Learn More <HiArrowSmRight style={{ marginLeft: "8px" }} />
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
