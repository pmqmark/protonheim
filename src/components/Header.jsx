import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-blue-600">PROTOHEIM</div>
        <nav className="space-x-4">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">Our Services</a>
          <a href="#team" className="text-gray-700 hover:text-blue-600">Our Team</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Get in Touch</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
