import React from 'react';
import { ArrowRight } from 'lucide-react';

const CalltoAction = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] rounded-3xl overflow-hidden my-16 mx-6 md:mx-20">
      {/* Background Video */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="https://player.cloudinary.com/embed/?cloud_name=dhbvmc6xe&public_id=My_Movie_3_x3zfvt&autoplay=true&mute=true&loop=true&controls=false"
        allow="autoplay; fullscreen"
        frameBorder="0"
        title="Call to Action Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Why Wait for Tomorrow? <br className="hidden md:block" />
          Book Today!
        </h2>
        <p className="max-w-xl text-sm md:text-base mb-8">
          Your dream vacation is waiting for you, and there's no time like now to experience it!
          Let’s get your trip booked and the excitement rolling!
        </p>
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-medium hover:bg-gray-100 transition">
          Let’s Go...
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default CalltoAction;
