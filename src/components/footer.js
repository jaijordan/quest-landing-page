import React from 'react';

function Footer() {

    const handleClick = (event, targetId) => {
        event.preventDefault();
        const target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <div className=" h-auto p-5 font-sans border-t border-neutral-800 mt-10 bg-zinc-900 text-white">


        <div className=" lg:ml-40 mt-5">
        <div className=" flex flex-col">
            <div className=" mb-8 space-y-2">
                <p className=' text-lg font-bold'>Quest 2</p>
                <p className=' text-sm'>Upgrade your gaming experience</p>
            </div>
            
            <div className=" mb-8">
                <h1 className=' mb-2 text-base'>Learn More</h1>
                <div className=" flex flex-col space-y-0 text-neutral-400">
                    <a href="#home" onClick={event => handleClick(event, '#home')}>Overview</a>
                    <a href="#home" onClick={event => handleClick(event, '#about')}>About</a>
                    <a href="#home" onClick={event => handleClick(event, '#pricing')}>Pricing</a>
                </div>
            </div>
            </div>

            <div className=" flex flex-row justify-center items-center space-x-3 mb-4">
                <a href="https://github.com/jaijordan"><img src='githublogo.svg' className='w-6'></img></a>
                <a href="https://www.linkedin.com/in/jordanjaipaul/"><img src='linkeinlogo.svg' className=" w-6"></img></a>
                <a href="https://dribbble.com/lelouchhimself"><img src='dribbble2.svg' className=" w-7"></img></a>
            </div>

            <p className=' text-center mb-5'>Created by Jordan Jaipaul</p>

            </div>

    </div>
    
  );
}

export default Footer;
