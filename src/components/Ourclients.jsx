import React from "react";
import client1 from "../assets/client7.png";
import client2 from "../assets/client8.png";
import client3 from "../assets/client9.png";
import client4 from "../assets/client10.png";
import client5 from "../assets/client11.png";


const Ourclients = () => {
  return (
    <section className="py-10 min-h-[65vh] max-w-[1280px] flex flex-col items-center justify-center mx-auto w-full p-3 overflow-hidden">
      <div className="text-center mb-8">
        <h2 data-aos='fade-up' className="text-3xl font-extrabold text-[#161C2D] mb-4">
          Our Clients
        </h2>
        <div data-aos='fade' className="font-gilroy1">
          With lots of unique blocks, you can easily build a page without coding.
          <br />
          Build your next consultancy website within a few minutes. You have a business to run.
          <br />
          Stop worrying about cross-browser bugs, designing new pages.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:gap-3 w-full ">
        <div className="flex flex-wrap justify-center gap-[20px] lg:gap-6 ">
          <img src={client1} alt="Client 1" className="w-24 md:w-24 md:h-14 lg:w-36 lg:h-16 object-contain" />
          <img src={client2} alt="Client 2" className="w-24 md:w-24 md:h-14 lg:w-36 lg:h-16 object-contain" />
          <img src={client3} alt="Client 3" className="w-24 md:w-24 md:h-14 lg:w-36 lg:h-16 object-contain" />
          <img src={client4} alt="Client 4" className="w-16 md:w-24 md:h-14 lg:w-22 lg:h-16 object-contain" />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-3 lg:mt-0">
          <img src={client5} alt="Client 5" className="w-16 md:w-24 md:h-14 lg:w-22 lg:h-10 object-contain" />
       
        </div>
      </div>
    </section>
  );
};

export default Ourclients;
