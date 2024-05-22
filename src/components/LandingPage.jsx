import React from 'react';

const LandingPage = () => {
  return (
    <section id="home" className="bg-blue-50 py-16 p-2">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Grow up your skills with <span className="text-blue-600">Protoheim</span>.</h1>
        <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Explore Protoheim</button>
      </div>
    </section>
  );
};

export default LandingPage;
