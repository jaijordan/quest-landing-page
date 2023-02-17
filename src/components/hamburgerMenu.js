import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row-reverse items-center justify-between text-neutral-800 overflow-hidden relative w-auto">
      <img src="hamburger-menu.svg" className=" ml-5 lg:invisible hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

      <ul className={`fixed top-0 left-0 h-full w-3/4 bg-white ${isOpen ? 'block' : 'hidden'}`}>
        <img className="p-4 hover:cursor-pointer w-12 mt-10" src="xBtn.svg" onClick={() => setIsOpen(!isOpen) }></img>
        <li className="p-4 font-bold border-b border-black">Home</li>
        <li className="p-4 font-bold border-b border-black">About</li>
        <li className="p-4 font-bold border-b border-black ">Cart</li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
