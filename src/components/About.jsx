import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import waterfall from '../assets/8.jpg';
import reviewBg from '../assets/7.jpg';

const About = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full">
          <p className="text-sm font-medium text-gray-500 mb-3 font-poppins">
            Welcome to Journey with Solivagant
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-Travel text-[#178FBC] leading-tight mb-4">
            Explore top destinations <br />
            and create <span className='text-gray-500'>unforgettable </span> <br />
            <span className="text-gray-500">journeys</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed font-poppins mb-8">
            At Journey with Solivagant, we believe travel is more than just visiting places — 
            it’s about discovering yourself, connecting with new cultures, and creating memories that last a lifetime. 
            We curate meaningful group trips and solo-friendly adventures designed to inspire, empower, and bring people 
            together through the joy of travel.
          </p>

          {/* Stats Row */}
          <div className="flex gap-30 mb-10">
            <div>
              <h3 className="text-4xl font-extrabold text-black text-center">7K+</h3>
              <p className="text-sm text-gray-600 mt-1">Happy customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-black text-center">27K+</h3>
              <p className="text-sm text-gray-600 mt-1">Miles together</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-black text-center">105+</h3>
              <p className="text-sm text-gray-600 mt-1">Countries passed</p>
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="flex gap-4 flex-col sm:flex-row mt-6">
            {/* Card 1 — No Navigation */}
            <div
              className="relative w-full sm:w-1/2 h-64 rounded-2xl overflow-hidden bg-cover bg-center hover:shadow-lg transition"
              style={{ backgroundImage: `url(${reviewBg})` }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="text-black w-5 h-5" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm leading-relaxed font-poppins z-10">
                Follow the link to see all the reviews and write your own impressions. If you have any questions, please contact our contact center.
              </div>
            </div>

            {/* Card 2 — Still Navigates to /about */}
            <Link to="/about" className="w-full sm:w-1/2">
              <div className="relative bg-[#D6F2FF] rounded-2xl p-4 flex flex-col justify-between h-64 hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center -space-x-4 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User 1"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/47.jpg"
                    alt="User 2"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User 3"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <ArrowUpRight className="text-black w-5 h-5" />
                </div>
                <p className="text-sm text-black leading-relaxed font-poppins mt-auto">
                  Follow the link to see all the reviews and write your own impressions. If you have any questions, please contact our contact center.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-[30px] overflow-hidden w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
