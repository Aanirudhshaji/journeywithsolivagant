import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from './components/Popular';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Popular />
      <About />
      <Testimonials />
    </div>
  );
}

export default App;
