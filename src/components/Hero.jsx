import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center px-6 md:px-20">
      
      {/* 🔁 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dhbvmc6xe/video/upload/My_Movie_2_nwxvjm.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🔤 Foreground Content */}
      <div className="text-center max-w-3xl z-10">
        
        {/* ✨ Label above title */}
        <div
          data-aos="fade-up"
          className="inline-block mx-auto mb-4 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-sm md:text-base"
        >
          The Best Place to Start Your Adventure
        </div>

        <h1
          data-aos="fade-up"
          className="font-Travel text-3xl md:text-5xl font-bold mb-4 leading-snug drop-shadow-md"
        >
          Find the next place to explore the beauty of the world
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl mb-8 drop-shadow-sm"
        >
          Find your destination and book anytime, anywhere to explore this.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-[#ffffff] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 transition">
            Let's Explore
          </button>

          <a
            href="https://wa.me/919534557156"
            className="flex items-center gap-2 bg-[#178FBC] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-600 transition"
          >
            <FaWhatsapp className="text-xl" />
            Call or WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
