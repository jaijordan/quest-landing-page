import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function AboutSection() {

    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-in-out',
          mirror: true,
        });
      }, []);

  return (
    <div className=" h-auto p-5 font-sans" id="about">
        <div className=" flex-wrap flex space-y-4  items-center xl:pl-32 xl:pr-32" data-aos="zoom-in-up">
            <img src='questheadset.jpg' className=' md:w-3/6'></img>
            <div className=" p-5 md:w-2/4 lg:w-1/4 space-y-2 lg:mr-auto lg:ml-auto">
                <h3 className=' text-xl lg:text-3xl font-semibold'>Enjoy Hours of Gamplay</h3>
                <p className=' lg:text-lg text-base font-thin'>The Quest 2 is a fully immersive VR Headset that has a library filled with hundreds of games. </p>
            </div>   
        </div>

        <div className=" flex flex-wrap flex-row-reverse space-y-4 items-center xl:pl-32 xl:pr-32" data-aos="zoom-in-up">
            <img src='playingimg.png' className=' md:w-3/6'></img>
            <div className=" p-5 md:w-2/4 lg:w-1/4 lg:mr-auto lg:ml-auto space-y-2">
                <h3  className=' text-xl lg:text-3xl font-semibold'>Play However You Want</h3>
                <p className=' lg:text-lg text-base font-thin'>Play with just the headset and the controllers, by downloading the app on your smartphone 
                or connect to your pc for an even more immersive experience. </p>
            </div>   
        </div>
    </div>
  );
}

export default AboutSection;
