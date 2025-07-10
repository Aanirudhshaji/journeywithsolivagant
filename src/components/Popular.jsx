import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import delhiAgra from '../assets/1.jpg';
import kulluManali from '../assets/2.jpg';
import matheran from '../assets/3.jpg';

const destinations = [
  {
    id: 1,
    title: 'Kullu–Manali Getaway',
    image: kulluManali,
    price: '₹5,500',
    rating: 4.9,
    duration: '5 Days | Stay, Meals & Sightseeing',
  },
  {
    id: 2,
    title: 'Spiti Valley Adventure',
    image: delhiAgra,
    price: '₹13,999',
    rating: 4.9,
    duration: '7 Days | Manali–Spiti–Chandratal',
  },
  {
    id: 3,
    title: 'Matheran Escape',
    image: matheran,
    price: '₹5,000',
    rating: 4.9,
    duration: '4 Days | Nature Points & Scenic Trails',
  },
];

const Popular = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-10">
        <h2 className="text-3xl md:text-5xl font-Travel font-extrabold text-[#178FBC] leading-tight">
          Recommended popular <br />
          destinations
        </h2>
        <p className="text-gray-600 mt-4 md:mt-0 md:max-w-md text-base md:text-lg">
          Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness.
        </p>
      </div>

      {/* Desktop Cards */}
      <div className={`md:grid md:grid-cols-3 gap-6 hidden ${loading ? 'animate-pulse' : ''}`}>
        {destinations.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl overflow-hidden relative group border border-gray-200"
          >
            <img src={item.image} alt={item.title} className="w-full h-100 object-cover" />

            <div className="absolute top-3 left-3 bg-white/30 text-white px-3 py-1 rounded-full backdrop-blur-md text-sm border border-white/40">
              {item.price} <span className="text-xs">per person</span>
            </div>

            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/30 text-white px-3 py-1 rounded-full backdrop-blur-md text-sm border border-white/40">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {item.rating}
            </div>

            <div className="absolute bottom-0 w-full bg-white/20 backdrop-blur-md px-4 py-4 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-2 rounded-t-2xl">
              <div>
                <h3 className="text-lg font-poppins semibold">{item.title}</h3>
                <p className="text-sm">{item.duration}</p>
              </div>
              <button className="bg-[#00A9E0] text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-[#0094c8] transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-4 pb-2">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="min-w-[90%] rounded-3xl overflow-hidden relative snap-center border border-gray-200"
          >
            <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />

            <div className="absolute top-3 left-3 bg-white/30 text-white px-3 py-1 rounded-full backdrop-blur-md text-sm border border-white/40">
              {item.price} <span className="text-xs">per person</span>
            </div>

            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/30 text-white px-3 py-1 rounded-full backdrop-blur-md text-sm border border-white/40">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {item.rating}
            </div>

            <div className="absolute bottom-0 w-full bg-white/20 backdrop-blur-md px-4 py-4 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 rounded-t-2xl">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.duration}</p>
              </div>
              <button className="bg-[#00A9E0] text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-[#0094c8] transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Category Button */}
      <div className="mt-10 flex justify-center">
        <button className="flex items-center gap-2 text-[#178FBC] border border-[#178FBC] px-6 py-2 rounded-full text-base font-medium hover:bg-[#32B8A0]/10 transition">
          View All category
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Popular;
