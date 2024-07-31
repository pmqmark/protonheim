import React from "react";
import "../css/Header.css";
import Video from "../assets/Video.png";
import No1 from "../assets/No1.png";
import No2 from "../assets/No2.png";
import No3 from "../assets/No3.png";

const AboutUs = () => {
  return (
    <section id="about" className="about-section py-16  p-2">
      <div className="about-dis">
        <h5 className="products">ABOUT US</h5>
        <span className="dispton1">
          Meet the Visionaries: Our Quirky Journey to Hardware Greatness!
        </span>
        <span className="card-text1">
          Protoheim Pvt Ltd is a team of electonics and embedded systems
          <br />
          enthusiasts.Our journey began in 2021{" "}
        </span>
      </div>
      <div className="video-dis">
        <div className="video-img ">
          <img src={Video} alt="about" className="object-cover " />
        </div>
        <div className=" ">
          <div className="icon-area1">
            <div className="icon-dis">
              <p>
                <img className="icon-ic1" src={No1} />
              </p>
              <div className="icon-details">
                <h2 className="icon-header1">Our Mission</h2>
                <p className="icon-header2">
                  We strive to be at the forefront of the
                  <br />
                  technological revolution
                </p>
              </div>
            </div>

            <div className="icon-area1">
              <div className="icon-dis">
                <p>
                  <img className="icon-ic1" src={No2} />
                </p>
                <div className="icon-details">
                  <h2 className="icon-header1">Our Vision</h2>
                  <p className="icon-header2">
                    We strive to be at the forefront of the
                    <br />
                    technological revolution
                  </p>
                </div>
              </div>

              <div className="icon-area1">
                <div className="icon-dis">
                  <p>
                    <img className="icon-ic1" src={No3} />
                  </p>
                  <div className="icon-details">
                    <h2 className="icon-header1 text-dark">Our Mission</h2>
                    <p className="icon-header2">
                      We strive to be at the forefront of the
                      <br />
                      technological revolution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
