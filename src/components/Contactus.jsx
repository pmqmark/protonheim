import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import chaticon from '../assets/chaticon.png';
import '../css/Contactstyles.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_b7jperf';
    const templateID = 'template_1rl1z3h';
    const userID = 'NB0nk2zRXi4nQNlf2';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Optionally reset the form or display a success message here
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        // Optionally display an error message here
      });
  };

  return (
    <section className='contactus-section p-3'>
      <div className='contact-div'>
        <img src={chaticon} className='chat-icon' alt='Chat Icon'></img>
        <h1>Let's develop your<br />business intelligence</h1>
        <p>
          Kalamassery, Ernakulam, Kerala, IND-683503<br /><br />
          Phone Number: 9567180885<br /><br />
          info@protoheim.com
        </p>
      </div>
      <div className='form-div'>
        <form className='form' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder='i.e. John Doe'
              id="exampleInputName"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="i.e. john@mail.com"
              id="exampleInputEmail1"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder='i.e. 123-456-7890'
              id="exampleInputPhone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputService" className="form-label">Which service do you need?</label>
            <select
              id="disabledSelect"
              name="service"
              className="form-select"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
              <option value="Service 3">Service 3</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
