import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72"></div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <img
            className={`fill-current h-10 w-10 ${isOpen ? 'hidden' : 'block'}`}
            src="/src/feature-loopstudios/images/hamburger.svg"
            alt=""
            srcSet=""
          />

          <img
            className={`fill-current h-10 w-10  ${isOpen ? 'block' : 'hidden'}`}
            src="/src/feature-loopstudios/images/close.svg"
            alt=""
            srcSet=""
          />
        </button>
      </div>

      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm lg:flex-grow text-white">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            About
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Careers
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Events
          </a>

          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Products
          </a>

          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Support
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
