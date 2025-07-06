import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from './components/Popular';
import WhyChoose from './components/whychoose.jsx';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Popular />
    </div>
  );
}

export default App;
