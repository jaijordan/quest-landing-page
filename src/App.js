import React from 'react';
import Navbar from './components/navbar';
import HeroPage from './components/heropage';
import AboutSection from './components/aboutsection';
import BuyNowPage from './components/buynowpage';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroPage />
      <AboutSection />
      <BuyNowPage />
      <Footer />
    </div>
  );
}

export default App;
