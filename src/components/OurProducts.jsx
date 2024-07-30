import React from "react";
import { services } from "../data/Data";
import Rectangle1 from "../assets/Rectangle1.png"
import Rectangle2 from "../assets/Rectangle2.png"
import Rectangle3 from "../assets/Rectangle3.png"
import { HiArrowSmRight } from "react-icons/hi";
import '../css/Header.css';


const OurProducts = () => {
  return (
    <section id="services" className=" mb-20 md:mt-0 md:py-24 bg-white w-full p-2">
      <div className="max-w-[1280px] mx-auto ">
        <div className="flex flex-col items-center justify-center">
          <span className="products ">
            OUR PRODUCTS
          </span>
          <span className="dispton1 mt-5">
          Step Into Tomorrow: Explore Our <br/>Wonderfully Wacky Hardware!
          </span>
          <div>
            <div className="img-cards ">
          <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={Rectangle1} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Device Name</h5>
    <p className="card-text">Perfect for both amateur <br/>photographers looking to step up their<br/> game and professionals seeking a<br/> reliable</p>
    <a href="#" className="arrow" >Learn More <HiArrowSmRight /></a>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={Rectangle2} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Device Name</h5>
    <p className="card-text">Perfect for both amateur<br/> photographers looking to step up their<br/> game and professionals seeking a<br/> reliable</p>
    <a href="#" className="arrow" >Learn More <HiArrowSmRight /></a>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={Rectangle3} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title text-dark">Device Name</h5>
    <p className="card-text">Perfect for both amateur<br/> photographers looking to step up their<br/> game and professionals seeking a<br/> reliable</p>
    <a href="#" className="arrow">Learn More <HiArrowSmRight /></a>
  </div>
</div>
</div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProducts;
