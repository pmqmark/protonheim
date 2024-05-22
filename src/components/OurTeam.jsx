import React from 'react';

const teamMembers = [
  { name: 'Sharan K.S', title: 'Managing Director', image: '/path/to/sharan.jpg' },
  { name: 'Divya Lakshmi P', title: 'Director', image: '/path/to/divya.jpg' },
  { name: 'Tessa Shajan', title: 'Director', image: '/path/to/tessa.jpg' },
  { name: 'Muhammed Jezwan', title: 'Director', image: '/path/to/jezwan.jpg' },
];

const OurTeam = () => {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
