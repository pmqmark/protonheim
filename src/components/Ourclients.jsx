import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

const Ourclients = () => {
  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Our Clients
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8">
          With lots of unique blocks, you can easily build a page without coding.
          <br />
          Build your next consultancy website within a few minutes. You have a business to run.
          <br />
          Stop worrying about cross-browser bugs, designing new pages.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
          <img src={client1} alt="Client 1" className="w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16" />
          <img src={client2} alt="Client 2" className="w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16" />
          <img src={client3} alt="Client 3" className="w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16" />
          <img src={client4} alt="Client 4" className="w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto mt-4">
          <img src={client5} alt="Client 5" className="w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16" />
          <img src={client6} alt="Client 6" className="w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16" />
        </div>
      </div>
    </section>
  );
};

export default Ourclients;
