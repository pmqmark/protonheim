import React from "react";
import Video from "../assets/Video.png";
import No1 from "../assets/No1.png";
import No2 from "../assets/No2.png";
import No3 from "../assets/No3.png";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Define inline styles for headings and text
  const aboutUsStyle = {
    fontFamily: "Gilroy-Bold, sans-serif",
    fontSize: "36px",
    fontWeight: 400,
    lineHeight: "48px",
    letterSpacing: "-1.2px",
    textAlign: "center",
    color: "rgba(22, 28, 45, 1)", // Updated color
  };

  const descriptionStyle = {
    fontFamily: "Gilroy-Regular, sans-serif",
    fontSize: "19px",
    fontWeight: 400,
    lineHeight: "32px",
    letterSpacing: "-0.2px",
    textAlign: "center",
    color: "rgba(22, 28, 45, 1)", // Updated color
    marginBottom: "20px", // Updated color
  };

  const iconTextStyle = {
    fontFamily: "Gilroy-Regular, sans-serif",
    fontSize: "15px", // Decreased font size
    fontWeight: 400,
    lineHeight: "24px", // Adjusted line height for the new size
    letterSpacing: "-0.2px",
    textAlign: "left",
    color: "rgba(22, 28, 45, 1)", // Updated color
    marginLeft: "10px", // Added margin-left to move text slightly to the right
  };

  const handleClick = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="min-h-screen max-w-[1280px] mx-auto w-full p-3"
    >
      <div className="text-center my-10 lg:my-20">
        <h5
          data-aos="fade"
          className="mb-4"
          style={{
            fontFamily: "Gilroy-Bold, sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "16.09px",
            letterSpacing: "1.625px",
            textAlign: "center",
            color: "rgba(37, 170, 225, 1)", // Adjust color as needed
          }}
        >
          ABOUT US
        </h5>
        <span data-aos="fade-up" style={aboutUsStyle}>
          Meet the Visionaries: Our Quirky Journey to Hardware Greatness!
        </span>
        <div data-aos="fade" style={descriptionStyle} className="mt-4">
          Protoheim Pvt Ltd is a dynamic team of electronics and embedded
          systems enthusiasts dedicated to advancing hardware knowledge and
          innovation. Our journey began in 2021 with the mission to foster a
          community where young engineers could deepen their understanding of
          electronics and embedded systems, while also inspiring them to become
          creators and innovators. Recognizing the potential for growth and the
          economic opportunities within this community, we evolved in 2023 into
          a leading provider of hardware services. By leveraging our expertise
          and insights gained from working closely with the next generation of
          engineers, we now offer top- tier solutions and support in hardware
          design and development, bridging the gap between aspiring makers and
          industry- ready technology.
          <br />
          "We Inspire to Innovate"
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-7 lg:gap-20 mb-10">
        <div data-aos="fade-left" className="flex-1">
          <img src={Video} alt="about" className="w-full h-auto object-cover" />
        </div>
        <div data-aos="fade-right" className="flex-1">
          <div className="">
            {[
              {
                src: No1,
                title: "Our Mission",
                text: "To lead the technological revolution by embracing innovation and pushing boundaries in electronics,hardware, and prototyping",
              },
              {
                src: No2,
                title: "Our Vision",
                text: "To transform industries and accelerate growth through cutting-edge solutions while advancing our country's technical development.",
              },
              {
                src: No3,
                title: "Our Values",
                text: "Commitment to empowering local talent, fostering skill development, and contributing to a brighter future through active participation in technological progress.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start mb-8">
                <img
                  className="w-10 h-10"
                  src={item.src}
                  alt={`Icon ${index + 1}`}
                />
                <div style={{ marginLeft: "35px" }}>
                  <h2 className="text-md font-bold mb-2 hover:text-primaryColor cursor-cell">
                    {item.title}
                  </h2>
                  <p style={iconTextStyle}>
                    {item.text.split(" ").map((word, idx) => (
                      <React.Fragment key={idx}>
                        {idx === 8 ? (
                          <>
                            <br />
                            {word}{" "}
                          </>
                        ) : (
                          `${word} `
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-right mt-10">
        <button
          style={{
            backgroundColor: 'rgba(40, 56, 145, 1)', // Example button color
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
