import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#home" className="text-white text-xl font-bold">PROTOHEIM</a>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
        </div>
        <p>Copyright © 2023 All rights reserved. Developed by <a href="#" className="text-blue-400">Ashiq T</a></p>
      </div>
    </footer>
  );
};

export default Footer;
