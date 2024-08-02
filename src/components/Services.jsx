import React from 'react'
import Layout from '../util/Layout'
import serviceicon1 from '../assets/serviceicon1.png'
import serviceicon2 from '../assets/serviceicon2.png'
import serviceicon3 from '../assets/serviceicon3.png'
import serviceicon4 from '../assets/serviceicon4.png'
import chooseimage from '../assets/chooseimage.png'
import '../css/Servicestyles.css'

const Services = () => {
  return (
    <div className='p-3'>
            <section className='service-section1 mt-40 '>
                <div className="about-dis ">
                  <h5 className="products">ABOUT US</h5>
                  <span className="dispton1">
                  Beyond Fixes: Dive into Our<br/>Fantastically Futuristic Hardware<br/>Services
        </span>
        </div>
        
        <div className="first-row">
          <div className="icon-area1">
  <div className="icon-dis">
  <p>
    <img className="icon-ic3" src={serviceicon1} />
  </p>
  <div className="icon-details1">
  <h2 className="icon-headers1 ">Embedded System Design</h2>
  <p className="icon-headers2 ">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>

<div className="icon-area1">
  <div className="icon-dis">
  <p>
    <img className="icon-ic1" src={serviceicon2} />
  </p>
  <div className="icon-details">
  <h2 className="icon-headers1 ">Embedded System Design</h2>
  <p className="icon-headers2 ">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>
</div>

<div className="second-row">
<div className="icon-area1">
  <div className="icon-dis">
  <p>
    <img className="icon-ic3" src={serviceicon3} />
  </p>
  <div className="icon-details1">
  <h2 className="icon-headers1 ">Embedded System Design</h2>
  <p className="icon-headers2 ">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>

<div className="icon-area1">
  <div className="icon-dis">
  <p>
    <img className="icon-ic1" src={serviceicon4} />
  </p>
  <div className="icon-details">
  <h2 className="icon-headers1">Embedded System Design</h2>
  <p className="icon-headers2">With lots of unique blocks, you can<br/> easily build a page without coding.<br/>Build your next landing page </p>
</div>
</div>
</div>
</div>

</section>

<section className='choose-section '>
    <div className='choose-div '>
    <div className='icon-details1'>
    <h1 className='choose-head'>Why Choose<br/> Our Services?</h1>
        <ul className='choose-ul'>
            <li className='choose-li'>Expertise and Experience: Our team of skilled<br/> professionals has extensive experience in the<br/> hardware industry.</li>
            <li className='choose-li'>Customer-Centric Approach: We prioritize<br/> your needs and provide personalized<br/> solutions to ensure your satisfaction.</li>
        </ul>
    </div>
    <div className='choose-image'>
        <img src={chooseimage}></img>
    </div>
    </div>
</section>
  </div>
  )
}

export default Services;
