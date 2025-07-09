import React, { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Petter Joe',
    country: 'United States',
    text: `Our adventure with Dolanadoh was extraordinary. Every detail was flawlessly planned.`,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Hanz',
    country: 'Tanzania',
    text: `Booking with them was the best decision! Everything was filled with adventure and peace.`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Liam Wong',
    country: 'Singapore',
    text: `Incredible service and curated local experiences! I made lifelong friends on our group travel.`,
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    name: 'Aanya Verma',
    country: 'India',
    text: `As a solo female traveler, I felt safe and empowered. Everything was thoughtfully arranged.`,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Carlos Mendoza',
    country: 'Mexico',
    text: `Beautiful moments and great organization. I’ll definitely book again.`,
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    name: 'Naomi Zhang',
    country: 'China',
    text: `Such a seamless experience. Loved the cultural touches!`,
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const cardWidth = container.firstChild.offsetWidth + 24;
      const nextIndex = (activeIndex + 1) % testimonials.length;

      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth',
      });

      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative py-20 px-6 md:px-20 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Side Heading */}
        <div className="md:w-1/3 w-full text-center md:text-left">
          <p className="uppercase text-sm tracking-wide text-gray-400 mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-Travel font-bold text-[#178FBC] leading-tight mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-poppins mb-6">
            Discover what our clients say about their travel experiences with us.
          </p>
        </div>

        {/* Right Side Scroll Section */}
        <div className="relative md:w-2/3 mt-2 md:mt-4">
          {/* Gradient edges */}
          <div className="pointer-events-none absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white to-transparent z-10" />

          {/* Cards */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 snap-x snap-mandatory scroll-smooth pb-2 overflow-x-hidden"
            style={{ touchAction: 'none' }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[85%] md:min-w-[48%] bg-gray-100 p-6 rounded-2xl text-gray-800 shadow-sm snap-center"
              >
                <p className="text-2xl mb-4">“</p>
                <p className="mb-6 text-base leading-relaxed">{item.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-[#178FBC]' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
