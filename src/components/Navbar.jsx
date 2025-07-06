import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Our Services', 'Travel Packages'];

  return (
    <header className="absolute top-6 left-0 w-full z-50 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-12 h-12 bg-white rounded-full flex-shrink-0"></div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center flex-1">
          <nav className="flex items-center bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full shadow-lg h-14 px-6 space-x-8 ml-20 pr-1.5">
            {/* Nav Items */}
            <ul className="flex gap-12 text-base font-medium">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-200 cursor-pointer transition-colors duration-200 whitespace-nowrap"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Enquire Now Button */}
            <button className="bg-[#178FBC] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-200 whitespace-nowrap">
              Enquire Now
            </button>
          </nav>
        </div>

        {/* 🔗 Social Icons - Desktop only */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:text-blue-300 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:text-blue-300 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:text-blue-300 transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Hamburger - Mobile Only */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-8 h-8 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white/90 backdrop-blur-md border border-white/30 text-slate-700 rounded-2xl py-6 px-6 shadow-lg space-y-4">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="text-lg font-medium cursor-pointer hover:text-blue-600 transition-colors duration-200 py-2"
            >
              {item}
            </div>
          ))}

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full text-base font-semibold transition-all duration-200 mt-4">
            Enquire Now
          </button>

          {/* 🔗 Social Icons - Mobile version */}
          <div className="flex justify-center items-center gap-6 pt-6">
            <a
              href="#"
              className="p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-slate-700 hover:text-blue-600 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-slate-700 hover:text-blue-600 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-slate-700 hover:text-blue-600 transition"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
