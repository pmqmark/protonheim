import React from 'react'
import "../css/Productstyles.css";
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import flyskyimg from '../assets/flyskyimg.png';
import featuresimage from '../assets/featuresimage.png';
import featuresimage2 from '../assets/featuresimage2.png';
import commentimage1 from '../assets/commentimage1.png';
import commentimage2 from '../assets/commentimage2.png';


const Products = () => {
  return (
    <div className='p-3'>
        <section>
      <div className="about-dis ">
                  <h5 className="products">OUR PRODUCTS</h5>
                  <span className="dispton11">
                  Discover the Extraordinary: Our Cutting-<br/>Edge Hardware Collection Awaits!
        </span>
        </div>
        <div className='product-images'>
  <div>
    <img src={product1} alt="FlySky CT6B" />
    <p className='product-name1'>FlySky CT6B</p>
  </div>
  <div>
    <img src={product2} alt="Product e244" />
    <p className='product-name'>Product e244</p>
  </div>
  <div>
    <img src={product2} alt="Product e244" />
    <p className='product-name'>Product e244</p>
  </div>
  <div>
    <img src={product2} alt="Product e244" />
    <p className='product-name'>Product e244</p>
  </div>
</div>

        </section>

        <section className='flysky-section'>
            <div className='flysky-div'>
        <div className="about-dis1 ">
                  <span className="dispton1">
                  FlySky CT6B 2.4GHz 6CH Transmitter with<br/> FS-R6B Receiver
        </span>
        <div className='video-dis1'>
            <div className='flysky-img'>
            <img src={flyskyimg}></img>
            </div>
            <div>
                <ol style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                    <li>Model Type: Digital Radio Transceiver.</li>
                    <li>Sensitivity: 1024.</li>
                    <li>Bandwidth: 500 kHz.</li>
                    <li>Default Operating Mode: Mode 2 (Left-Hand Throttle).</li>
                    <li>No. of Channels: 6.</li>
                    <li>Operating Voltage: 12V DC (1.5AA x 8 Battery).</li>
                </ol>
                <p className='flysky-p'><b>Brand: </b>FlySky<br/><b>Category: </b>Drone Transmitter and Receiver<br/><b>Tags: </b>Multirotors,,quadcopter,Transmitter,Receiver,Gliders,Heli</p>
            </div>
        </div>
        </div>
        </div>
        </section>

        <section className='description-section'>
            <div className='description'>
                <h1 className='description-head'>Description</h1>
                <div className='description-p'>
                <p>Using a drone is easy but controlling a drone is a tough job that's why a transmitter is needed. You can't fly a multirotor without it because<br/> it uses radio signals to send commands wirelessly to a Radio Receiver.
                     And Flysky is one of the popular brands that only manufactures <br/> Diverse Range of high-quality Transmitters and Receivers at an affordable price.<br/>
                  Flysky CT6B 2.4 GHz 6CH transmitter is an entry-level 2.4 GHz radio system offering the reliability of 2.4 GHz signal technology and a<br/> receiver .it is ideal for quadcopters and multirotor that require the 6ch operation.<br/>
                  FlySky Transmitter and Receiver is gaining so much popularity due to its originality and compatibility in high-end drone projects and<br/> Industrial people are interested in this type of Transmitter.<br/>
                To know how to choose a flight controller <a href='' className='links'>Click here</a><br/>
                 For more 6CH Transmitter, <a href='#' className='links'>Click here</a><br/>
                 <a href='' className='links'>Robu. in</a> is the official Distributor of Flysky in India<br/>
                 NOTE : For user manual go through attachment PDF.</p>
                 </div>
            </div>
            <div>
            <h1 className='description-head'>Features</h1>
            <ol className='features-ol' style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
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
            <div className='feature-images'>
                <img src={featuresimage}></img>
                <img src={featuresimage2}></img>
            </div>
            <div>
            <h1 className='description-head'>Package Includes</h1>
            <div className='description-p'>
                <p>1 x Flysky CT6B Transmitter<br/>
                   1 x FS-R6B Receiver<br/>
                   1x USB Interface Cable<br/>
                   1 x Software CD<br/>
                   1 x Receiver Binding Cable<br/>
                   1x User Manual</p>
                 </div>
            </div>
        </section>
        
        <section className='comment-section'>
        <div className="quotes1">
        <div className="img-cards3 ">
          <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top1" src={commentimage1} alt="Card image cap" />
  <div className="card-body">
    <h1 className='comment-head'>“You made it so simple”</h1>
    <p className="card-text1">My new site is so much faster and easier<br/> to work with than my old site.</p>
    <div className="arrow1" >Corey Valdez</div>
    <div>Founder at Zenix</div>
  </div>
  </div>
  </div>

  <div className="img-cards3 ">
          <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top1" src={commentimage2} alt="Card image cap" />
  <div className="card-body">
    <h1 className='comment-head'>“Simply the best”</h1>
    <p className="card-text1">Better than all the rest. I’d recommend<br/> this product to beginners.</p>
    <div className="arrow1" >Ian Klein</div>
    <div>Digital Markete</div>
  </div>
  </div>
  </div>
  </div>
        </section>
    </div>
  )
}

export default Products
