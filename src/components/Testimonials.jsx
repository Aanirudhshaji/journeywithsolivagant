import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Our adventure with Dolanadoh was nothing short of extraordinary. From the moment we contacted them to the end of our trip, every detail was meticulously planned and executed flawlessly...",
      name: "Petter Joe",
      location: "United States",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      text: "Booking our vacation through Dolanadoh was the best decision that we made. They listened to our preferences and crafted a perfect itinerary...",
      name: "Sarah Hanz",
      location: "Tanzania",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face&auto=format"
    },
    {
      id: 3,
      text: "The level of service and attention to detail provided by Dolanadoh exceeded all our expectations...",
      name: "Michael Chen",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format"
    }
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || window.innerWidth < 768) return;

    let index = 0;
    const cardWidth = container.firstChild?.offsetWidth || 400;

    const scroll = () => {
      if (!container) return;
      index = (index + 1) % testimonials.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(scroll, 3000); // 3s interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-px bg-gray-400"></div>
                <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">
                  TESTIMONIALS
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-Travel font-bold text-[#178FBC] leading-tight">
                Don't Just Take Our Word for It,{' '}
                <span className="font-bold">See What Our Travelers Say</span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover what our clients have to say about their incredible travel experiences with us.
            </p>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3 lg:flex-1">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide scroll-smooth"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[90%] sm:min-w-[70%] md:min-w-[400px] max-w-[400px] snap-start flex-shrink-0"
                >
                  <div className="mb-6">
                    <span className="text-6xl text-gray-300 font-serif leading-none">"</span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-8">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
