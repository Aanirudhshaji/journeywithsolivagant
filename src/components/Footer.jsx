import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import curv from '../assets/10.jpg';

const Footer = () => {
  return (
    <footer className="relative text-black">
      {/* Background image section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dhbvmc6xe/image/upload/v1752384147/compressed_9_xuu3ob.jpg')`,
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 50%)',
          }}
        />

        {/* All content above gradient */}
        <div className="relative z-10 w-full h-full">
          {/* CTA Top with animation */}
          <motion.div
            className="text-center px-6 md:px-20 pt-24 pb-42"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#178FBC] font-Travel leading-snug text-center">
              Let’s Just Get Travel <br />

              <span className="mt-2 inline-flex items-center justify-center gap-2 whitespace-nowrap">
                <span className="text-[#178FBC] font-Travel text-3xl sm:text-5xl">Ar</span>

                {/* Image hidden on mobile */}
                <span className="hidden sm:inline-block relative w-[80px] h-[40px] sm:w-[160px] sm:h-[48px] rounded-full overflow-hidden">
                  <img
                    src={curv}
                    alt="Mountains"
                    className="w-full h-full object-cover"
                  />
                </span>

                <span className="text-[#178FBC] font-Travel text-3xl sm:text-5xl">ound The World</span>
              </span>
            </h2>

            <p className="text-gray-700 max-w-xl mx-auto mt-6 mb-10 text-base font-poppins">
              Ready to turn your travel dreams into reality? Get in touch with us today and let’s
              start planning your next adventure.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#178FBC] text-white px-6 py-3 rounded-full text-sm font-poppins font-semibold hover:bg-blue-600 transition"
            >
              Join the Trip
            </motion.button>
          </motion.div>

          {/* Footer Content */}
          <div className="px-6 md:px-20 pb-16 text-white text-sm flex flex-col md:grid md:grid-cols-4 gap-10">
            {/* Column 1: Brand and Contact */}
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold mb-2">travellah</h2>
              <p className="text-gray-200 mb-4">
                Experience personalized healthcare from the comfort of your home with our advanced telemedicine services.
              </p>
              <div className="flex gap-4 text-xl mb-4">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
              </div>
              <p className="text-gray-200 font-bold mb-1">Get in touch with us:</p>
              <a
                href="mailto:connect@dolanadoh.travel"
                className="text-white text-2xl font-poppins font-medium underline"
              >
                connect@dolanadoh.travel
              </a>
            </div>

            {/* Footer Link Columns - stacked on mobile, grid on desktop */}
            <div className="grid grid-cols-2 gap-8 md:px-40 px-6 md:gap-0 md:grid-cols-2 md:col-span-3">
              {/* Company */}
              <div className="text-left">
                <h3 className="text-white font-poppins font-semibold text-xl mb-3">Company</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Travel Packages</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">FAQs</a></li>
                </ul>
              </div>

              {/* Address */}
              <div className="text-left">
                <h3 className="text-white font-poppins text-xl font-semibold mb-3">Contacts Us</h3>
                <p className="text-gray-300">
                  8502 Preston Rd.<br />
                  Inglewood, Maine<br />
                  98830<br />
                  (603) 555-0123
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/40 pt-6 px-6 md:px-20 pb-8 text-sm text-gray-200 flex flex-col md:flex-row items-center md:justify-between gap-3 text-center md:text-left">
            <p className="w-full md:w-auto">
              Copyright ©2025 Journey with Solivagant. All rights reserved.
            </p>
            <div className="flex gap-6 w-full md:w-auto justify-center md:justify-end">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
