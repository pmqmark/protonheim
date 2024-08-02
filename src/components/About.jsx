import React from 'react'
import '../css/About.css';
import aboutimage1 from '../assets/aboutimage1.png';
import aboutimage2 from '../assets/aboutimage2.png';
import aboutimage3 from '../assets/aboutimage3.png';
import ourteam1 from '../assets/ourteam1.png';
import ourteam2 from '../assets/ourteam2.png';
import ourteam3 from '../assets/ourteam3.png';

const About = () => {
  return (
    <div className='p-3'>
      <section className='card-section '>
      <div className="about-dis flex items-center">
        <h5 className="products">ABOUT US</h5>
        <span className="dispton1">
        We develop innovative solutions focused<br/> on the data for humans responsible for<br/> make informed decisions
        </span>
        </div>
        <div className='about-cards'>
        <div className="card" style={{width: '18rem'}}>
        <img src={aboutimage1} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">Our data valorization experts have a high level of knowledge which is demonstrated by successful achievements with partners of all sizes.</p>
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
        <img src={aboutimage2} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">We automate your non-value-added manual tasks and complex manipulations using the best data integration technologies in clear and transparent processes.</p>
    </div>
    </div>
    <div className="card" style={{width: '18rem'}}>
        <img src={aboutimage3} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">We integrate data visualization tools adapted to a human's decision-making process, allowing them to be informed when they need it.</p>
    </div>
   </div>

        </div>
        </section>
        <section className='ourteam-section'>
            <h1 className='our-team'>Our Team</h1>
            <div className='ourteam-div'>
            <div className='ourteam-row1'>
                <div className='image-dis'>
            <img src={ourteam1} className='team-images'></img>
                <p className='ourteam-p'>
                    <h3 className='p-h3'>Rihanna johnson</h3>
                    <h4 className='p-h4'>product designer</h4>
                </p>
                </div>
                <div className='image-dis'> 
            <img src={ourteam2} className='team-images'></img>
            <p className='ourteam-p'>
                    <h3 className='p-h3'>Rihanna johnson</h3>
                    <h4 className='p-h4'>product designer</h4>
                </p>
                </div>
                <div className='image-dis'>
            <img src={ourteam3} className='team-images'></img>
            <p className='ourteam-p'>
                    <h3 className='p-h3'>Rihanna johnson</h3>
                    <h4 className='p-h4'>product designer</h4>
                </p>
                </div>
                </div>
            <div className='ourteam-row2'>
            <div className='image-dis'>
            <img src={ourteam1} className='team-images'></img>
            <p className='ourteam-p'>
                    <h3 className='p-h3'>Rihanna johnson</h3>
                    <h4 className='p-h4'>product designer</h4>
                </p>
                </div>
                <div className='image-dis'>
            <img src={ourteam2} className='team-images'></img>
            <p className='ourteam-p'>
                    <h3 className='p-h3'>Rihanna johnson</h3>
                    <h4 className='p-h4'>product designer</h4>
                </p>
                </div>
                <div className='image-dis'>
            <img src={ourteam3} className='team-images'></img>
            <p className='ourteam-p'>
                    <h3 className='p-h3'>Rihanna johnson</h3>
                    <h4 className='p-h4'>product designer</h4>
                </p>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default About
