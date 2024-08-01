import React from "react";
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.png"
import client5 from "../assets/client5.png"
import client6 from "../assets/client6.png"

const Ourclients=()=>{
    return(
        <section className="p-3">
            <div className="about-dis">
          <span className="dispton1">
          Our Clients
          </span>
          <span className="card-text1">With lots of unique blocks,you can easily build a page without
          coding.Build your<br/> next consultancy website within few minutes.You have a business to run.Stop<br/> worrying about cross-browser bugs,designing new pages </span>
        </div>
        <div>
        <div className="client1">
          <img src={client1} className="client"></img>
          <img src={client2} className="client"></img>
          <img src={client3} className="client"></img>
          <img src={client4}></img>
        </div>
        <div className="client2">
        <img src={client5} className="client"></img>
          <img src={client6}></img>
        </div>
        </div>
        </section>
    )
}

export default Ourclients;