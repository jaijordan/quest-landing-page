import React, { useState } from 'react';
import AboutSection from './aboutsection';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex items-center justify-between font-sans text-neutral-800 overflow-hidden h-16 sticky top-0 w-full bg-white border-b border-neutral-800 z-10">


      <a class=" pl-5 font-futura font-bold lg:ml-40" href="#home" onClick={event => handleClick(event, '#home')}>Quest 2</a>
      <img src="hamburger-menu.svg" className=" pr-5 ml-auto absolute right-0 lg:invisible hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

      <ul className={`fixed top-0 right-0 h-full w-full bg-white flex flex-col justify-center  ${isOpen ? 'block' : 'hidden'}`}>
        <img className="p-4 hover:cursor-pointer w-12 mr-10 mt-10 mb-auto  ml-auto aboslute right-0" src="xBtn.svg" onClick={() => setIsOpen(!isOpen) }></img>
        <div className="ml-10 text-3xl absolute mt-0 mb-auto">
        <a class="p-4 font-bold block hover:text-blue-500" href="#home" onClick={() => setIsOpen(!isOpen) } >Home</a>
        <a class="p-4 font-bold block hover:text-blue-500" href="#about" onClick={() => setIsOpen(!isOpen) } >About</a>
        <a class="p-4 font-bold block hover:text-blue-500" href="#pricing" onClick={() => setIsOpen(!isOpen) } >Pricing</a>
        <a class="p-4 font-bold block hover:text-blue-500" href="#" onClick={() => setIsOpen(!isOpen) } >Cart</a>
        </div>
      </ul>
      <ul className=" block space-x-4 invisible lg:visible lg:mr-40">
        <a class=" font-semibold hover:text-blue-500" href="#home" onClick={event => handleClick(event, '#home')}>Home</a>
        <a class=" font-semibold hover:text-blue-500" href="#about" onClick={event => handleClick(event, '#about')}>About</a>
        <button className='lg:inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Cart</button>
      </ul>

    </div>
    
  );
}

export default Navbar;
