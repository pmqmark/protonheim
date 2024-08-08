import React from 'react';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import flyskyimg from '../assets/flyskyimg.png';
import featuresimage from '../assets/featuresimage.png';
import featuresimage2 from '../assets/featuresimage2.png';
import commentimage1 from '../assets/commentimage1.png';
import commentimage2 from '../assets/commentimage2.png';
import "../assets/Fonts/FontsFree-Net-Gilroy-Bold.ttf"; 
import "../assets/Fonts/Gilroy-Regular.ttf";
import "../css/Productstyles.css";

const Products = () => {
  return (
    <div className="p-3">
      <section>
        <div className="text-center mb-12">
          <h5
            style={{
              fontFamily: 'Gilroy-Bold',
              fontSize: '13px',
              fontWeight: '400',
              lineHeight: '16.09px',
              letterSpacing: '1.625px',
              color: 'rgba(37, 170, 225, 1)',
              textAlign: 'center'
            }}
          >
            OUR PRODUCTS
          </h5>
          <div className="relative bg-gray-200 p-10" style={{ height: '100vh' }}>
            <section className="absolute right-0 top-1/2 transform -translate-y-1/2 font-gilroy text-5xl font-normal leading-[48px] tracking-custom text-black" style={{ marginRight: '40px' }}>
              Step Into Tomorrow: Explore Our Wonderfully Wacky Hardware!
            </section>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-12 xl:gap-16'>
          <div className='text-center w-full md:w-60 flex-shrink-0'>
            <img src={product1} alt="FlySky CT6B" className="mx-auto w-full" />
            <p className='mt-2 text-[#25AAE1] font-normal'>FlySky CT6B</p>
          </div>
          <div className='text-center w-full md:w-60 flex-shrink-0'>
            <img src={product2} alt="Product e244" className="mx-auto w-full" />
            <p className='mt-2 text-[#161C2D] font-normal'>Product e244</p>
          </div>
          <div className='text-center w-full md:w-60 flex-shrink-0'>
            <img src={product2} alt="Product e244" className="mx-auto w-full" />
            <p className='mt-2 text-[#161C2D] font-normal'>Product e244</p>
          </div>
          <div className='text-center w-full md:w-60 flex-shrink-0'>
            <img src={product2} alt="Product e244" className="mx-auto w-full" />
            <p className='mt-2 text-[#161C2D] font-normal'>Product e244</p>
          </div>
        </div>
      </section>

      <section className='mt-20'>
        <div className='bg-gray-100 p-8 rounded-md shadow-md mx-20 mb-32'>
          <div className="text-center mb-8 flex flex-col items-center">
            <span className="text-2xl font-medium mb-6">
              FlySky CT6B 2.4GHz 6CH Transmitter with<br /> FS-R6B Receiver
            </span>
            <div className='flex flex-col md:flex-row justify-center items-start gap-16'>
              <img src={flyskyimg} alt="FlySky CT6B" className="mx-auto w-[430px] h-[350px]" />
              <div className='text-left opacity-70'>
                <ol className='list-decimal ml-5'>
                  <li>Model Type: Digital Radio Transceiver.</li>
                  <li>Sensitivity: 1024.</li>
                  <li>Bandwidth: 500 kHz.</li>
                  <li>Default Operating Mode: Mode 2 (Left-Hand Throttle).</li>
                  <li>No. of Channels: 6.</li>
                  <li>Operating Voltage: 12V DC (1.5AA x 8 Battery).</li>
                </ol>
                <p className='mt-4'>
                  <b>Brand: </b>FlySky<br />
                  <b>Category: </b>Drone Transmitter and Receiver<br />
                  <b>Tags: </b>Multirotors, quadcopter, Transmitter, Receiver, Gliders, Heli
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-20'>
        <div className='mb-12'>
          <h1 className='text-4xl font-normal mb-8 ml-32'>Description</h1>
          <div className='text-left ml-32 opacity-70 text-lg mb-12'>
            <p>
              Using a drone is easy but controlling a drone is a tough job that's why a transmitter is needed. You can't fly a multirotor without it because<br />
              it uses radio signals to send commands wirelessly to a Radio Receiver. And Flysky is one of the popular brands that only manufactures<br />
              Diverse Range of high-quality Transmitters and Receivers at an affordable price.<br />
              Flysky CT6B 2.4 GHz 6CH transmitter is an entry-level 2.4 GHz radio system offering the reliability of 2.4 GHz signal technology and a<br />
              receiver .it is ideal for quadcopters and multirotor that require the 6ch operation.<br />
              FlySky Transmitter and Receiver is gaining so much popularity due to its originality and compatibility in high-end drone projects and<br />
              Industrial people are interested in this type of Transmitter.<br />
              To know how to choose a flight controller <a href='' className='text-blue-500 underline'>Click here</a><br />
              For more 6CH Transmitter, <a href='#' className='text-blue-500 underline'>Click here</a><br />
              <a href='' className='text-blue-500 underline'>Robu.in</a> is the official Distributor of Flysky in India<br />
              NOTE: For user manual go through attachment PDF.
            </p>
          </div>
        </div>
        <div className='mb-12'>
          <h1 className='text-4xl font-normal mb-8 ml-32'>Features</h1>
          <ol className='list-decimal ml-32 opacity-70 text-lg mb-12'>
            <li>Super active and passive anti-jamming capabilities.</li>
            <li>Very low power consumption.</li>
            <li>High receiving sensitivity.</li>
            <li>8 model memory, digital control.</li>
            <li>We can program by PC with the included software.</li>
            <li>Full range 2.4GHz 6-channel radio.</li>
            <li>4 Types (Airplane, Heli90, Heli120, Heli140).</li>
            <li>Use a linear spread of fine paragraph by an excess antenna.</li>
            <li>It covers the entire bandwidth of the antenna bandwidth range.</li>
            <li>High quality and stability.</li>
          </ol>
        </div>
        <div className='flex flex-wrap justify-center gap-12 mb-12'>
          <img src={featuresimage} alt="Features Image 1" className="w-1/2 h-[340px] object-cover" />
          <img src={featuresimage2} alt="Features Image 2" className="w-1/2 h-[340px] object-cover" />
        </div>
        <div className='mb-12'>
          <h1 className='text-4xl font-normal mb-8 ml-32'>Package Includes</h1>
          <div className='ml-32 opacity-70 text-lg'>
            <p>
              1 x Flysky CT6B Transmitter<br />
              1 x FS-R6B Receiver<br />
              1x USB Interface Cable<br />
              1 x Software CD<br />
              1 x Receiver Binding Cable<br />
              1x User Manual
            </p>
          </div>
        </div>
      </section>
      
      <section className='bg-gray-200 py-20'>
        <div className="flex flex-wrap justify-center gap-20">
          <div className="bg-white shadow-md p-8 rounded-lg text-center w-[18rem]">
            <img className="mx-auto mb-4" src={commentimage1} alt="Corey Valdez" />
            <p className="text-lg font-semibold mb-2">Corey Valdez</p>
            <p className="text-gray-600">Engineer</p>
            <p className="mt-4 text-gray-800">“This FlySky CT6B transmitter exceeded my expectations with its reliable performance and user-friendly design. It’s a great choice for anyone in need of a quality transmitter.”</p>
          </div>
          <div className="bg-white shadow-md p-8 rounded-lg text-center w-[18rem]">
            <img className="mx-auto mb-4" src={commentimage2} alt="Sophie H." />
            <p className="text-lg font-semibold mb-2">Sophie H.</p>
            <p className="text-gray-600">Hobbyist</p>
            <p className="mt-4 text-gray-800">“I’ve been using the FlySky CT6B for a few months now, and it’s been fantastic. The signal strength is solid, and it has all the features I need for my drone projects.”</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
