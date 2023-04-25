import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkStyle = `font-sans font-extralight leading-loose hover:border-b-[1px] border-white  font-sans lg:font-bold block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5 ${
    isOpen ? 'uppercase hover:border-b-[0px] text-2xl' : 'inline'
  }`;

  return (
    <div
      className={
        isOpen
          ? 'bg-black h-[50rem] lg:h-[650px]  md:h-[650px] mb-[5rem] sm:h-[600px] '
          : '2xl:pl-[calc(10%-1.7rem)]  2xl:pr-[calc(10%-1.7rem)] lg:h-[650px]  md:h-[650px] sm:h-[600px] bg-[url("/src/feature-loopstudios/images/mobile/image-hero.jpg")] bg-cover h-[50rem] w-[100%] xl:pl-0 xl:pr-0  lg:bg-[url("/src/feature-loopstudios/images/desktop/image-hero.jpg")] lg:w-[100%] lg:bg-cover  mb-[5rem] md:bg-[url("/src/feature-loopstudios/images/desktop/image-hero.jpg")] md:bg-no-repeat  md:w-[100%] sm:bg-[url("/src/feature-loopstudios/images/desktop/image-hero.jpg")] sm:w-[100%]  '
      }
    >
      <div className="flex justify-between content-center pt-10">
        <div
          className=" text-3xl pl-5 lg:pl-32 md:pl-32 sm:pl-20 font-alata text-white
         w-[190px]
          lg:text-4xl md:text-4xl sm:text-4xl "
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
                className={`fill-current h-10 w-10 mt-[-2rem] ${
                  isOpen ? 'hidden' : 'block'
                }`}
                src="/src/feature-loopstudios/images/hamburger.svg"
                alt=""
                srcSet=""
              />

              <img
                className={`fill-current h-10 w-10 mt-[-30rem] mr-10 ${
                  isOpen ? 'block' : 'hidden'
                }`}
                src="/src/feature-loopstudios/images/close.svg"
                alt=""
                srcSet=""
              />
            </button>
          </div>

          <div
            className={`w-full block ml-[-22rem] sm:ml-[-35rem] md:ml-[-30rem] md:mt-24 mt-24 lg:mt-0 flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <div className="text-sm  lg:flex-grow text-white ">
              <a href="#" className={navLinkStyle}>
                About
              </a>
              <a href="#" className={navLinkStyle}>
                Careers
              </a>
              <a href="#" className={navLinkStyle}>
                LinkedIn
              </a>
              <a href="#" className={navLinkStyle}>
                Events
              </a>

              <a href="#" className={navLinkStyle}>
                Products
              </a>

              <a href="#" className={navLinkStyle}>
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
            : 'font-sans border border-white font-light text-white w-[90%] h-[12.5rem] text-[200%] p-8 ml-[calc(10%-1rem)] mt-[10rem]  lg:w-[600px] lg:h-[300px]  lg:ml-32 lg:text-7xl lg:mt-32 lg:p-10 md:h-[220px] md:w-[400px] md:ml-32 md:mr-24 md:text-4xl md:p-10 md:mt-[6rem] sm:mt-[2rem]'
        }
      >
        IMMERSIVE EXPERIENCES THAT DELIVER
      </div>
    </div>
  );
};

export default Header;
