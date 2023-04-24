import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        isOpen
          ? 'bg-black lg:h-[650px]  md:h-[550px] mb-[10rem] '
          : '2xl:pl-[calc(10%-1.7rem)]  2xl:pr-[calc(10%-1.7rem)] xl:pl-0 xl:pr-0  lg:bg-[url("/src/feature-loopstudios/images/desktop/image-hero.jpg")] lg:w-[100%] lg:bg-cover lg:h-[650px] mb-[10rem] md:bg-[url("/src/feature-loopstudios/images/desktop/image-hero.jpg")] md:bg-no-repeat md:h-[550px] md:w-[100%]  '
      }
    >
      <div className="flex justify-between pt-10">
        <div
          className="pl-32 font-alata text-white
         w-[190px]
          text-4xl "
        >
          loopstudios
        </div>
        <nav
          className="
      2xl:pl-[calc(10%-1.7rem)] 
      2xl:pr-[calc(10%-1.7rem)] 
      xl:pr-32
      lg:pr-32
      flex 
      items-center
       justify-between 
       flex-wrap
        p-6"
        >
          <div
            className="
      flex
       items-center
        flex-shrink-0
         text-white
          mr-6
           lg:mr-72"
          ></div>

          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex 
          items-center
           px-3 
           py-2 
           rounded 
           text-black-500 
           hover:text-black-400"
            >
              <img
                className={`fill-current h-10 w-10 ${
                  isOpen ? 'hidden' : 'block'
                }`}
                src="/src/feature-loopstudios/images/hamburger.svg"
                alt=""
                srcSet=""
              />

              <img
                className={`fill-current h-10 w-10  ${
                  isOpen ? 'block' : 'hidden'
                }`}
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
                className=" font-sans lg:font-bold block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                About
              </a>
              <a
                href="#"
                className=" font-sans lg:font-bold block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Careers
              </a>
              <a
                href="#"
                className=" font-sans lg:font-bold block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className=" font-sans lg:font-bold block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Events
              </a>

              <a
                href="#"
                className=" font-sans lg:font-bold block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Products
              </a>

              <a
                href="#"
                className=" font-sans lg:font-bold block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              >
                Support
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={
          isOpen
            ? 'hidden'
            : 'font-sans border border-white  text-white lg:w-[600px] lg:h-[300px]  lg:ml-32 lg:text-7xl lg:mt-32 lg:p-10 md:h-[220px] md:w-[400px] md:ml-32 md:mr-24 md:text-4xl md:p-7'
        }
      >
        IMMERSIVE EXPERIENCES THAT DELIVER
      </div>
    </div>
  );
};

export default Header;
