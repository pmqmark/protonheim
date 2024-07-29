import React from "react";
import ic_layers1 from "../assets/ic_layers1.png"
import ic_layers2 from "../assets/ic-layer2.png"
import ic_layers3 from "../assets/ic-layer3.png"
import '../css/Header.css';

const OurServices=()=>{
    return(
         <div>
            <section id="services" className=" service-section mt-20 md:mt-0 md:py-24 bg-white w-full p-2">
            <div className="max-w-[1280px] mx-auto ">
        <div className="flex flex-col items-center justify-center ">
          <div className="services">
          <span className="products mt-5">
            OUR SERVICES
          </span>
          <span className="dispton mt-5">
          Beyond Fixes: Dive into Our<br/> Fantastically Futuristic Hardware<br/> Services
          </span>
          </div>
<div className="first-row">
          <div className="icon-area1">
  <div className="icon-dis">
  <p>
    <img className="icon-ic1" src={ic_layers1} />
  </p>
  <div className="icon-details">
  <h2 className="icon-header1">Embedded System Design</h2>
  <p className="icon-header2">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>

<div className="icon-area1">
  <div className="icon-dis">
  <p>
    <img className="icon-ic1" src={ic_layers2} />
  </p>
  <div className="icon-details">
  <h2 className="icon-header1">Embedded System Design</h2>
  <p className="icon-header2">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>

<div className="icon-area">
  <div className="icon-dis">
  <p>
    <img className="icon-ic1" src={ic_layers3} />
  </p>
  <div className="icon-details">
  <h2 className="icon-header1">Embedded System Design</h2>
  <p className="icon-header2">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>
</div>

<div className="second-row">
<div className="icon-area1">
  <div className="icon-dis">
  <p>
    <img className="icon-ic1" src={ic_layers1} />
  </p>
  <div className="icon-details">
  <h2 className="icon-header1">Embedded System Design</h2>
  <p className="icon-header2">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>

<div className="icon-area1">
  <div className="icon-dis">
  <p>
    <img className="icon-ic1" src={ic_layers2} />
  </p>
  <div className="icon-details">
  <h2 className="icon-header1">Embedded System Design</h2>
  <p className="icon-header2">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>

<div className="icon-area">
  <div className="icon-dis">
  <p>
    <img className="icon-ic1" src={ic_layers3} />
  </p>
  <div className="icon-details">
  <h2 className="icon-header1">Embedded System Design</h2>
  <p className="icon-header2">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>
</div>
          </div>
          </div>
            </section>
            </div>
    )
}
export default OurServices;