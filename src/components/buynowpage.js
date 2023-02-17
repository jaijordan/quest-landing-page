import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function BuyNowPage() {

  return (
    <div className=' flex font-sans lg:h-screen items-center text-center' id="pricing" data-aos="zoom-in-up">
        <div className=" flex flex-wrap justify-center flex-row space-y-4 items-center xl:pl-32 xl:pr-32 ">
        <img src='buynowimg.png' className=' md:w-3/6'></img>
            <div className=" p-5 md:w-2/4 lg:w-1/4 lg:mr-auto lg:ml-auto">
                <h1  className=' text-xl lg:text-3xl font-semibold'>Meta Quest 2</h1>
                <p className=' lg:text-lg text-base font-thin mb-6'>Starting at $399.99 USD</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Buy Now</button>
            </div>   
        </div>
    </div>

);
}

export default BuyNowPage;
