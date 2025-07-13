import React from 'react';

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
        {/* Gradient overlay (top to bottom) */}
        <div className="absolute inset-0 z-0" style={{
          background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 50%)',
        }} />

        {/* All content above gradient */}
        <div className="relative z-10 w-full h-full">
          {/* CTA Top */}
          <div className="text-center px-6 md:px-20 pt-24 pb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#178FBC] font-Travel leading-snug">
              Let’s Just Get Travel <br />
              <span className="inline-flex items-center justify-center gap-2 mt-2">
                <span className="text-[#178FBC] font-Travel">Ar</span>
                <span className="relative w-[160px] h-[48px] rounded-full overflow-hidden">
                  <img
                    src="./src/assets/10.jpg"
                    alt="Mountains"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="text-[#178FBC] font-Travel">ound The World</span>
              </span>
            </h2>

            <p className="text-gray-700 max-w-xl mx-auto mt-6 mb-10 text-base font-poppins">
              Ready to turn your travel dreams into reality? Get in touch with us today and let’s
              start planning your next adventure.
            </p>

            <button className="bg-[#178FBC] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
              Join the Trip
            </button>
          </div>

          {/* Main Footer Content */}
          <div className="px-6 md:px-20 pb-16 flex flex-col md:flex-row justify-between gap-12">
            {/* Left - Contact + Brand */}
            <div>
              <p className="text-lg text-white mb-1">Get in touch with us</p>
              <a
                href="mailto:connect@dolanadoh.travel"
                className="text-[#D6F2FF] text-lg font-medium mb-6 block"
              >
                connect@dolanadoh.travel
              </a>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-white font-serif">
                Dolanadoh
              </h2>
            </div>

            {/* Right - Links + Address */}
            <div className="flex flex-col items-start md:items-end justify-between text-white">
              <div className="flex gap-6 text-sm font-medium mb-6">
                <a href="#" className="hover:text-[#D6F2FF] transition">
                  Home
                </a>
                <a href="#" className="hover:text-[#D6F2FF] transition">
                  About
                </a>
                <a href="#" className="hover:text-[#D6F2FF] transition">
                  Our Services
                </a>
                <a href="#" className="hover:text-[#D6F2FF] transition">
                  Travel Packages
                </a>
                <a href="#" className="hover:text-[#D6F2FF] transition">
                  Contact
                </a>
              </div>

              <div className="text-sm text-gray-100 text-right">
                <p>8502 Preston Rd.</p>
                <p>Inglewood, Maine 98830</p>
                <p>(603) 555-0123</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/40 pt-6 px-6 md:px-20 pb-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-100">
            <p>Copyright ©2025 Journey with Solivagant. All rights reserved.</p>
            <div className="flex gap-6 mt-3 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
