import React from "react";
import Video from "../assets/Video.png";
import No1 from "../assets/No1.png";
import No2 from "../assets/No2.png";
import No3 from "../assets/No3.png";

const AboutUs = () => {
  // Define inline styles for headings and text
  const aboutUsStyle = {
    fontFamily: 'Gilroy-Bold, sans-serif',
    fontSize: '36px',
    fontWeight: 400,
    lineHeight: '48px',
    letterSpacing: '-1.2px',
    textAlign: 'center',
    color: 'rgba(22, 28, 45, 1)', // Updated color
  };

  const descriptionStyle = {
    fontFamily: 'Gilroy-Regular, sans-serif',
    fontSize: '19px',
    fontWeight: 400,
    lineHeight: '32px',
    letterSpacing: '-0.2px',
    textAlign: 'center',
    color: 'rgba(22, 28, 45, 1)', // Updated color
  };

  const iconTextStyle = {
    fontFamily: 'Gilroy-Regular, sans-serif',
    fontSize: '15px', // Decreased font size
    fontWeight: 400,
    lineHeight: '24px', // Adjusted line height for the new size
    letterSpacing: '-0.2px',
    textAlign: 'left',
    color: 'rgba(22, 28, 45, 1)', // Updated color
    marginLeft: '10px', // Added margin-left to move text slightly to the right
  };

  return (
    <section id="about" className="py-16 p-3">
      <div className="text-center mb-8">
        <h5
          style={{
            fontFamily: 'Gilroy-Bold, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '16.09px',
            letterSpacing: '1.625px',
            textAlign: 'center',
            color: 'rgba(37, 170, 225, 1)', // Adjust color as needed
          }}
        >
          ABOUT US
        </h5>
        <span style={aboutUsStyle}>
          Meet the Visionaries: Our Quirky Journey to Hardware Greatness!
        </span>
        <div style={descriptionStyle} className="mt-4">
          Protoheim Pvt Ltd is a team of electronics and embedded systems
          <br />
          enthusiasts. Our journey began in 2021
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-1">
          <img src={Video} alt="about" className="w-full h-auto object-cover" />
        </div>
        <div className="flex-1">
          <div className="space-y-8">
            {[
              { src: No1, title: "Our Mission", text: "We strive to be at the forefront of the technological revolution" },
              { src: No2, title: "Our Vision", text: "We strive to be at the forefront of the technological revolution" },
              { src: No3, title: "Our Values", text: "We strive to be at the forefront of the technological revolution" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 mb-8">
                <img className="w-10 h-10" src={item.src} alt={`Icon ${index + 1}`} />
                <div style={{ marginLeft: '35px' }}> 
                  <h2 className="text-md font-bold mb-2">{item.title}</h2>
                  <p style={iconTextStyle}>
                    {item.text.split(' ').map((word, idx) => (
                      <React.Fragment key={idx}>
                        {idx === 8 ? <><br />{word} </> : `${word} `}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
