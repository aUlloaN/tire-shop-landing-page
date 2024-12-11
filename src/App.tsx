import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Brands from './components/Brands';
import Services from './components/Services';
import TireServices from './components/TireServices';
import Shocks from './components/Shocks';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Brands />
      <Services />
      <TireServices />
      <Shocks />
      <Location />
      <Footer />
    </div>
  );
}

export default App;