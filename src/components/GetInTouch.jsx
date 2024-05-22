import React from 'react';

const GetInTouch = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Full Name" />
          <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Email Address" />
          <textarea className="w-full px-4 py-2 border rounded-lg" rows="4" placeholder="Write any message here..."></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Get in Touch</button>
        </form>
        <div className="mt-8">
          <p>Email: <a href="mailto:info@protoheim.com" className="text-blue-600">info@protoheim.com</a></p>
          <p>Contact Number: <a href="tel:+919656718065" className="text-blue-600">+91 96567 18065</a></p>
          <p>Location: KMFA College of Engineering, Moothakunnam, Aluva</p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
