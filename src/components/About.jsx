import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import waterfall from '../assets/8.jpg';
import reviewBg from '../assets/7.jpg';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full">
          <p className="text-sm font-medium text-gray-500 mb-3 font-poppins text-center md:text-left">
            Welcome to Journey with Solivagant
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-Travel text-[#178FBC] leading-tight mb-4 text-center md:text-left">
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
          <div className="flex justify-center items-center text-center gap-6 sm:gap-10 mb-12 flex-wrap">
              {/* Item 1 */}
              <div className="flex flex-col items-center px-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black">200+</h3>
                <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-gray-300" />

              {/* Item 2 */}
              <div className="flex flex-col items-center px-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black">65+</h3>
                <p className="text-sm text-gray-600 mt-1">Top Hotels</p>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-gray-300" />

              {/* Item 3 */}
              <div className="flex flex-col items-center px-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black">250+</h3>
                <p className="text-sm text-gray-600 mt-1">Experienced Guides</p>
              </div>
            </div>


          {/* Bottom Info Cards */}
          <div className="flex gap-4 flex-col sm:flex-row mt-6">
            {/* Card 1 */}
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

            {/* Card 2 */}
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

        {/* Right Image Section with Responsive Height and Fade-in Animation */}
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-[30px] overflow-hidden w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[720px] shadow-lg">
            <img
              src={waterfall}
              alt="Scenic Destination"
              className={`w-full h-full object-cover rounded-[30px] transition-opacity duration-1000 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
