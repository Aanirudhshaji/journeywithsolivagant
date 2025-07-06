import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from './components/Popular';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Popular />
    </div>
  );
}

export default App;
