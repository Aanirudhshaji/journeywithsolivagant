import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from './components/Popular';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
       
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Popular />
                <WhyChoose />
                <About />
                <Testimonials />
              </>
            }
          />

          {/* About Page Only */}
          <Route path="./Pages/About.jsx" element={<About />} />
        </Routes>
      </div>
       <Footer />
    </Router>
  );
}

export default App;
