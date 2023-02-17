import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroPage() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      mirror: true,
    });
  }, []);

  return (

    
    <div id="home" className=' flex flex-col justify-center z-0 text-center h-screen font-sans' data-aos="fade-in">
        <h1 className=' text-3xl lg:text-5xl font-sans font-bold  text-stone-900'>Meta Quest 2</h1>
        <h2 className=' text-lg lg:text-2xl font-sans font-semibold text-stone-600 tracking-customSpace'>"See the future"</h2>
    </div>
  );
}

export default HeroPage;
