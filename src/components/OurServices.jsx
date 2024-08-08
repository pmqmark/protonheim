import React from "react";
import ic_layers1 from "../assets/ic_layers1.png";
import ic_layers2 from "../assets/ic-layer2.png";
import ic_layers3 from "../assets/ic-layer3.png";

const headingStyle = {
  fontFamily: 'Gilroy-Bold, sans-serif',
  fontSize: '13px',
  fontWeight: 400,
  lineHeight: '16.09px',
  letterSpacing: '1.625px',
  textAlign: 'center',
  color: 'rgba(40, 56, 145, 1)' // Updated color
};

const OurServices = () => {
  return (
    <div className="p-3">
      <section id="services" className="bg-white w-full p-2">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-10">
              <span className="text-[2.25rem] font-semibold mb-12 block" style={headingStyle}>
                OUR SERVICES
              </span>
              <span className="text-[36px] font-bold leading-[48px] tracking-[-1.2px] text-[rgba(40, 56, 145, 1)] block">
                Beyond Fixes: Dive into Our<br /> Fantastically Futuristic Hardware<br /> Services
              </span>
            </div>
            <div className="flex flex-wrap justify-start gap-8">
              <div className="flex items-center space-x-4 mb-8">
                <img className="w-[50px] h-auto" src={ic_layers1} alt="Icon 1" />
                <div>
                  <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px] text-[rgba(40, 56, 145, 1)]">Embedded System Design</h2>
                  <p className="text-[13px] font-normal leading-[20px] tracking-[-0.2px] text-[rgba(40, 56, 145, 1)] mt-2">
                    With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <img className="w-[50px] h-auto" src={ic_layers2} alt="Icon 2" />
                <div>
                  <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px] text-[rgba(40, 56, 145, 1)]">Embedded System Design</h2>
                  <p className="text-[13px] font-normal leading-[20px] tracking-[-0.2px] text-[rgba(40, 56, 145, 1)] mt-2">
                    With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <img className="w-[50px] h-auto" src={ic_layers3} alt="Icon 3" />
                <div>
                  <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px] text-[rgba(40, 56, 145, 1)]">Embedded System Design</h2>
                  <p className="text-[13px] font-normal leading-[20px] tracking-[-0.2px] text-[rgba(40, 56, 145, 1)] mt-2">
                    With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-start gap-8">
              <div className="flex items-center space-x-4 mb-8">
                <img className="w-[50px] h-auto" src={ic_layers1} alt="Icon 4" />
                <div>
                  <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px] text-[rgba(40, 56, 145, 1)]">Embedded System Design</h2>
                  <p className="text-[13px] font-normal leading-[20px] tracking-[-0.2px] text-[rgba(40, 56, 145, 1)] mt-2">
                    With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <img className="w-[50px] h-auto" src={ic_layers2} alt="Icon 5" />
                <div>
                  <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px] text-[rgba(40, 56, 145, 1)]">Embedded System Design</h2>
                  <p className="text-[13px] font-normal leading-[20px] tracking-[-0.2px] text-[rgba(40, 56, 145, 1)] mt-2">
                    With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <img className="w-[50px] h-auto" src={ic_layers3} alt="Icon 6" />
                <div>
                  <h2 className="text-[24px] font-bold leading-[34px] tracking-[-0.5px] text-[rgba(40, 56, 145, 1)]">Embedded System Design</h2>
                  <p className="text-[13px] font-normal leading-[20px] tracking-[-0.2px] text-[rgba(40, 56, 145, 1)] mt-2">
                    With lots of unique blocks, you can<br /> easily build a page without coding.<br />Build your next landing page
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
