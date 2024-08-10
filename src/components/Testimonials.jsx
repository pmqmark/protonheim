import React from "react";
import Oval1 from "../assets/Oval1.png";
import Oval2 from "../assets/Oval2.png";
import Oval3 from "../assets/Oval3.png";

const Testimonials = () => {
  // Define inline styles
  const headingStyle = {
    fontFamily: "Gilroy-Bold, sans-serif",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "16.09px",
    letterSpacing: "1.625px",
    textAlign: "center",
    color: "rgba(37, 170, 225, 1)", // Updated color
  };

  const descriptionStyle = {
    fontFamily: "Gilroy-Regular, sans-serif",
    fontSize: "19px",
    fontWeight: 400,
    lineHeight: "32px",
    letterSpacing: "-0.2px",
    textAlign: "center",
    color: "rgba(22, 28, 45, 1)", // Updated color
    marginBottom: "20px", // Ensure there’s some space below the text
  };

  const quoteHeadingStyle = {
    fontFamily: "Gilroy, sans-serif",
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "48px",
    letterSpacing: "-1.2px",
    textAlign: "center",
    color: "rgba(22, 28, 45, 1)", // Updated color
    padding: "20px", // Ensure there's space below the quote heading
  };

  const cardTextStyle = {
    fontFamily: "Gilroy, sans-serif",
    fontSize: "19px",
    fontWeight: 400,
    lineHeight: "32px",
    letterSpacing: "-0.5px",
    textAlign: "left",
    color: "rgba(22, 28, 45, 1)", // Updated color
    marginBottom: "20px", // Add margin to separate text from author name
  };

  const authorLinkStyle = {
    fontFamily: "Gilroy, sans-serif",
    fontSize: "17px",
    fontWeight: 700,
    lineHeight: "29px",
    letterSpacing: "-0.2px",
    textAlign: "left",
    color: "rgba(22, 28, 45, 1)", // Updated color
    marginTop: "10px", // Adjust margin-top as needed
  };

  const lucasMannStyle = {
    ...authorLinkStyle,
    marginTop: "60px", // Increase margin-top for "Lucas Mann"
  };

  const cardStyle = {
    width: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative", // Ensure relative positioning
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
  };

  return (
    <section className="py-14 lg:py-20 min-h-screen max-w-[1280px] mx-auto w-full">
      <div className="text-center pb-8 ">
        <h5 data-ao='fade' style={headingStyle} className="mb-1">
          TESTIMONIALS
        </h5>
        <div data-aos='fade-up' style={quoteHeadingStyle} className="">
          What people say about us
        </div>
        <div data-aos='fade' style={descriptionStyle}>
          With lots of unique blocks, you can easily build a page without
          coding.
          <br />
          Build your next landing page.
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 lg:mt-10">
        <div data-aos='fade-up'  className="">
          <div className="border rounded border-black/80 p-10 h-[380px]" style={cardStyle}>
            <img className="pb-16 w-12" src={Oval1} alt="Card image cap" />
            <div className="">
              <p style={cardTextStyle}>
                “You made it so simple. My
                <br /> new site is so much faster
                <br /> and easier to work with than
                <br /> my old site.”
              </p>
              <a href="#" style={authorLinkStyle}>
                Isabella Chavez
              </a>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='200' className="">
          <div className="border rounded border-black/80 p-10 h-[380px]" style={cardStyle}>
            <img className="pb-16 w-12" src={Oval2} alt="Card image cap" />
            <div className="">
              <p style={cardTextStyle}>
                “Simply the best. Better than
                <br /> all the rest. I’d recommend this product to beginners and
                <br /> advanced users.”
              </p>
              <a href="#" style={authorLinkStyle}>
                Curtis Rhodes
              </a>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='400'  className="">
          <div className="border rounded border-black/80 p-10 h-[380px]" style={cardStyle}>
            <img className="pb-16 w-12" src={Oval3} alt="Card image cap" />
            <div className="">
              <p style={cardTextStyle}>
                “Must have book for all, who
                <br /> want to be Product Designer or
                <br /> Interaction Designer.”
              </p>
              <a href="#" style={lucasMannStyle}>
                Lucas Mann
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
