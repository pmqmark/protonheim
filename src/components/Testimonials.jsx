import React from "react";
import Oval1 from "../assets/Oval1.png"
import Oval2 from "../assets/Oval2.png"
import Oval3 from "../assets/Oval3.png"

const Testimonials=()=>{
    return(
        <section className="p-3">
            <div className="about-dis">
          <h5 className="products">TESTIMONIALS</h5>
          <span className="dispton1">
          What people say about us
          </span>
          <span className="card-text1">With lots of unique blocks,you can easily build a page without<br/>coding.Building your next landing page</span>
        </div>
<div className="quotes">
        <div className="img-cards2 ">
          <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top1" src={Oval1} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text1">“You made it so simple. My<br/> new site is so much faster<br/> and easier to work with than<br/> my old site.”</p>
    <a href="#" className="arrow1" >Isabella Chavez</a>
  </div>
  </div>
  </div>

  <div className="img-cards2 ">
          <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top1" src={Oval2} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text1">“Simply the best. Better than<br/> all the rest. I’d recommend this product to beginners and  advanced users.”</p>
    <a href="#" className="arrow1" >Curtis Rhodes</a>
  </div>
  </div>
  </div>

  <div className="img-cards2 ">
          <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top1" src={Oval3} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text1">“Must have book for all, who<br/> want to be Product Designer or Interaction Designer.”
</p>
    <a href="#" className="arrow1" >Lucas Mann</a>
  </div>
  </div>
  </div>
  </div>
        </section>
        
    )
}
export default Testimonials;