import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Section Header (Matching alignment with Popular.jsx) */}
      <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-10 mb-12">
        {/* Left: Title */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-gray-500 mb-2 font-poppins">
            Welcome to Journey with Solivagant
          </p>
          <h2 className="text-3xl font-Travel sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#178FBC] mb-2">
            We help you explore the world <br />
            and turn your dreams into <span className="text-gray-700">unforgettable journeys</span>
          </h2>
        </motion.div>

        {/* Right: Description */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-gray-700 leading-relaxed mb-6 font-poppins">
            At Journey with Solivagant, we believe travel is more than just visiting places —
            it’s about discovering yourself, connecting with new cultures, and creating memories
            that last a lifetime. We curate meaningful group trips and solo-friendly adventures
            designed to inspire, empower, and bring people together through the joy of travel.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <button className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition">
              Solo-friendly
            </button>
            <button className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition">
              Group trips
            </button>
            <button className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition">
              Curated escapes
            </button>
          </div>
        </motion.div>
      </div>

      {/* Video Section - same rounded style */}
      <motion.div
        className="rounded-[20px] overflow-hidden border-[3px] border-[#178FBC]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="relative pt-[56.25%] md:pt-[45%] lg:pt-[38%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://player.cloudinary.com/embed/?cloud_name=dhbvmc6xe&public_id=AQOiqxWLIAMCCPDfL_B6JRhspRtrxdyS3pN9EjL9yLNd74jrAcMPA4xBaVA9PpM612ournXJ0cQdjN_bgz1wu&profile=cld-default"
            title="Journey with Solivagant"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
