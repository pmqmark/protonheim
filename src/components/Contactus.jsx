import React from 'react'
import chaticon from '../assets/chaticon.png';
import '../css/Contactstyles.css';

const Contactus = () => {
  return (
    // <div className='contactus-page '>
        <section className='contactus-section p-3'  >
            {/* <div className='contact-divmain'>  */}
            <div className='contact-div'>
            <img src={chaticon} className='chat-icon'></img>
            <h1>Let's develop your<br/>
            business intelligence
            </h1>
            <p>Kalamassery, Ernakulam, Kerala, IND-683503<br/><br/>

               Phone Number: 9567180885<br/><br/>

               info@protoheim.com</p>
               </div>
     <div className='form-div'>
               <form className='form'>
               <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
               <input type="name" className="form-control" placeholder='i.e. John Doe' id="exampleInputName" aria-describedby="nameHelp" />
               <div id="nameHelp" className="form-text"></div>
               </div>
               <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
               <input type="email" className="form-control" placeholder="i.e. john@mail.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
               <div id="emailHelp" className="form-text"></div>
               </div>
               <div className="mb-3">
               <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
               <input type="text" className="form-control" placeholder='i.e. 123-456-7890' id="exampleInputPhone" />
               </div>
               <div className="mb-3">
               <label htmlFor="disabledSelect" className="form-label">Which service do you need?</label>
               <select id="disabledSelect" className="form-select">
               <option>Select a service</option>
               </select>
               </div>

               <button type="submit" className="btn btn-primary">Submit</button>
               </form>
    </div>
               {/* </div> */}
      </section>
    // </div>
  )
}

export default Contactus
