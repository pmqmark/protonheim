import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import flyskyimg from "../assets/flyskyimg.png";
import featuresimage from "../assets/featuresimage.png";
import featuresimage2 from "../assets/featuresimage2.png";
import commentimage1 from "../assets/commentimage1.png";
import commentimage2 from "../assets/commentimage2.png";
import "../assets/Fonts/FontsFree-Net-Gilroy-Bold.ttf";
import "../assets/Fonts/Gilroy-Regular.ttf";
import "../css/Productstyles.css";

const Products = () => {
  return (
    <>
      <main className="max-w-[1180px] mx-auto w-full py-10 lg:pt-20 min-h-screen bg-white overflow-hidden">
        <section className="min-h-screen flex flex-col items-center justify-center gap-5 p-3 my-16 lg:my-0 overflow-hidden">
          <div className="text-center space-y-5 lg:space-y-10">
            <h5
              data-aos="fade"
              className="font-gilroy text-[14px] text-[#25AAE1]"
            >
              OUR PORTFOLIO
            </h5>
            <div className="w-full ">
              <section
                data-aos="fade-up"
                className=" font-gilroy text-4xl font-normal leading-[48px] tracking-custom text-black"
              >
                Discover the Extraordinary: Our Cutting- <br /> Edge Hardware
                Collection Awaits!
              </section>
            </div>
          </div>

          {/* product list */}
          <div className="flex md:flex-wrap gap-5 mt-10 lg:mt-20 w-full overflow-x-scroll">
            <div
              data-aos="fade-left"
              className="group cursor-pointer text-center lg:w-60 flex-shrink-0"
            >
              <img
                src={product1}
                alt="FlySky CT6B"
                className="mx-auto w-full group-hover:border-4 ease-in-out duration-150  border-primaryColor rounded-full"
              />
              <p className="mt-2 group-hover:text-[#25AAE1] ease-in-out duration-150  font-normal">
                FlySky CT6B
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="group cursor-pointer text-center lg:w-60 flex-shrink-0"
            >
              <img
                src={product1}
                alt="FlySky CT6B"
                className="mx-auto w-full group-hover:border-4 ease-in-out duration-150  border-primaryColor rounded-full"
              />
              <p className="mt-2 group-hover:text-[#25AAE1] ease-in-out duration-150  font-normal">
                FlySky CT6B
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="group cursor-pointer text-center lg:w-60 flex-shrink-0"
            >
              <img
                src={product1}
                alt="FlySky CT6B"
                className="mx-auto w-full group-hover:border-4 ease-in-out duration-150  border-primaryColor rounded-full"
              />
              <p className="mt-2 group-hover:text-[#25AAE1] ease-in-out duration-150  font-normal">
                FlySky CT6B
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="group cursor-pointer text-center lg:w-60 flex-shrink-0"
            >
              <img
                src={product1}
                alt="FlySky CT6B"
                className="mx-auto w-full group-hover:border-4 ease-in-out duration-150  border-primaryColor rounded-full"
              />
              <p className="mt-2 group-hover:text-[#25AAE1] ease-in-out duration-150  font-normal">
                FlySky CT6B
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 mt-10 w-full p-3">
          <div className="text-center mb-10 lg:mb-20 flex flex-col items-center">
            <span
              data-aos="fade-up"
              className=" font-gilroy text-4xl font-normal leading-[48px] tracking-custom text-black"
            >
              FlySky CT6B 2.4GHz 6CH Transmitter with
              <br /> FS-R6B Receiver
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-4 lg:gap-16">
            <img
              data-aos="zoom-in-up"
              src={flyskyimg}
              alt="FlySky CT6B"
              className="mx-auto w-full"
            />
            <div className="text-left w-full px-3">
              <ol className="font-gilroy1 ml-3 leading-6">
                <li data-aos="fade-up" data-aos-delay="100">
                  Model Type: Digital Radio Transceiver.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  Sensitivity: 1024.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Bandwidth: 500 kHz.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  Default Operating Mode: Mode 2 (Left-Hand Throttle).
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                  No. of Channels: 6.
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  Operating Voltage: 12V DC (1.5AA x 8 Battery).
                </li>
              </ol>
              <p
                data-aos="fade-up"
                data-aos-delay="700"
                className="mt-4 font-gilroy1"
              >
                <b>Brand: </b>FlySky
                <br />
                <b>Category: </b>Drone Transmitter and Receiver
                <br />
                <b>Tags: </b>Multirotors, quadcopter, Transmitter, Receiver,
                Gliders, Heli
              </p>
            </div>
          </div>
        </section>

        <section className="my-10 md:my-20 w-full p-3">
          <div className="">
            <h1 data-aos="fade-up" className="text-4xl font-normal mb-8 ">
              Description
            </h1>
            <div
              data-aos="fade"
              className="text-left  text-sm tracking-wide leading-6 font-gilroy1  mb-12 text-[#161C2D]"
            >
              <p className="text-wrap">
                Using a drone is easy but controlling a drone is a tough job
                that's why a transmitter is needed. You can't fly a multirotor
                without it because it uses radio signals to send commands
                wirelessly to a Radio Receiver. And Flysky is one of the popular
                brands that only manufactures Diverse Range of high-quality
                Transmitters and Receivers at an affordable price.
                <br />
                Flysky CT6B 2.4 GHz 6CH transmitter is an entry-level 2.4 GHz
                radio system offering the reliability of 2.4 GHz signal
                technology and a receiver .it is ideal for quadcopters and
                multirotor that require the 6ch operation.
                <br />
                FlySky Transmitter and Receiver is gaining so much popularity
                due to its originality and compatibility in high-end drone
                projects and Industrial people are interested in this type of
                Transmitter.
                <br />
                To know how to choose a flight controller{" "}
                <a href="" className="text-blue-500 underline">
                  Click here
                </a>
                <br />
                For more 6CH Transmitter,{" "}
                <a href="#" className="text-blue-500 underline">
                  Click here
                </a>
                <br />
                <a href="" className="text-blue-500 underline">
                  Robu.in
                </a>{" "}
                is the official Distributor of Flysky in India
                <br />
                NOTE: For user manual go through attachment PDF.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h1 data-aos="fade-up" className="text-4xl font-normal mb-8">
              Features
            </h1>
            <ol className="list-decimal mb-12 ml-5 font-gilroy1 tracking-wide leading-7">
              <li data-aos="fade-up">
                Super active and passive anti-jamming capabilities.
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                Very low power consumption.
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                High receiving sensitivity.
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                8 model memory, digital control.
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                We can program by PC with the included software.
              </li>
              <li data-aos="fade-up" data-aos-delay="500">
                Full range 2.4GHz 6-channel radio.
              </li>
              <li data-aos="fade-up" data-aos-delay="600">
                4 Types (Airplane, Heli90, Heli120, Heli140).
              </li>
              <li data-aos="fade-up" data-aos-delay="700">
                Use a linear spread of fine paragraph by an excess antenna.
              </li>
              <li data-aos="fade-up" data-aos-delay="800">
                It covers the entire bandwidth of the antenna bandwidth range.
              </li>
              <li data-aos="fade-up" data-aos-delay="900">
                High quality and stability.
              </li>
            </ol>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-3 lg:gap-5 lg:py-10">
            <img
            data-aos='fade-right'
              src={featuresimage}
              alt="Features_Image 1"
              className="w-full  object-cover"
            />
            <img
            data-aos='fade-left'
              src={featuresimage2}
              alt="Features_Image 2"
              className="w-full object-cover"
            />
          </div>

          <div className="my-12">
            <h1 data-aos='fade-up' className="text-4xl font-normal mb-8 ">Package Includes</h1>
            <div className=" opacity-70 font-gilroy1 tracking-wide leading-7">
              <p data-aos="fade-up" data-aos-delay="100">
                1 x Flysky CT6B Transmitter
                <br />
                1 x FS-R6B Receiver
                <br />
                1x USB Interface Cable
                <br />
                1 x Software CD
                <br />
                1 x Receiver Binding Cable
                <br />
                1x User Manual
              </p>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-gray-200 py-10">
        <div className="flex flex-wrap justify-center gap-20 my-10">
          <div data-aos='fade-up' className="flex flex-col items-center justify-center p-8 rounded-lg text-center w-[18rem]">
            <img
              className="mx-auto mb-4 w-12"
              src={commentimage1}
              alt="Corey Valdez"
            />
            <p>“You made it so simple”</p>

            <p className="mt-4 text-gray-700 text-[13px] font-gilroy1">
              My new site is so much faster and easier to work with than my old
              site.
            </p>
            <div className="my-4">
              <p className="text-lg">Corey Valdez</p>
              <p className="text-gray-600 text-xs font-thin font-gilroy1">
                Founder at Zenix
              </p>
            </div>
          </div>
          <div data-aos='fade-up' className="flex flex-col items-center justify-center p-8 rounded-lg text-center w-[18rem]">
            <img
              className="mx-auto mb-4 w-12"
              src={commentimage2}
              alt="Corey Valdez"
            />
            <p>“Simply the best”</p>

            <p className="mt-4 text-gray-700 text-[13px] truncate font-gilroy1">
              Better than all the rest. I’d <br /> recommend this product to
              beginners.
            </p>
            <div className="my-4">
              <p className="text-lg">Ian Klein</p>
              <p className="text-gray-600 text-xs font-thin font-gilroy1">
                Digital Marketer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
