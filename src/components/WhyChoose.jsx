import React from 'react';
import planGif from '../assets/strategy.gif';      // replace with actual gif
import exploreGif from '../assets/flag.gif'; // replace with actual gif
import enjoyGif from '../assets/luggage.gif';    // replace with actual gif

const benefits = [
  {
    id: 1,
    title: 'Plan a Trip',
    description:
      'Discover some of the most unique and fulfilling experiences your next destination has to offer. Providing the best.',
    icon: planGif,
  },
  {
    id: 2,
    title: 'Explore and Save',
    description:
      'Discover some of the most unique and fulfilling experiences your next destination has to offer. Providing the best.',
    icon: exploreGif,
  },
  {
    id: 3,
    title: 'Enjoy Your Trip',
    description:
      'Discover some of the most unique and fulfilling experiences your next destination has to offer. Providing the best.',
    icon: enjoyGif,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-Travel font-bold text-[#178FBC] mb-3">
        Top Values For You
      </h2>
      <p className="text-gray-500 font-poppins mb-12 text-base md:text-lg">
        Try variety of benefits when using our services.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#178FBC] rounded-xl shadow-sm p-8 hover:shadow-md transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 mb-6 object-contain"
            />
            <h3 className="text-xl font-poppins font-semibold text-[#178FBC] mb-2">{item.title}</h3>
            <p className="text-gray-500 font-poppins text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
