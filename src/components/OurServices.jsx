import React from 'react';

const services = [
  { title: 'Hardware Solutions', icon: '🔧' },
  { title: 'Webinars & Talk Sessions', icon: '🗣️' },
  { title: 'Product Design & Development', icon: '💡' },
  { title: 'Manufacturing & Assembly', icon: '🏭' },
  { title: 'Trainings & Workshops', icon: '🎓' },
  { title: 'Consulting & Tech Support', icon: '💻' },
];

const OurServices = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
