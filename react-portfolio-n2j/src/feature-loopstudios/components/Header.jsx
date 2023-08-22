import { useState } from 'react';
import links from '../links';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkStyle = `font-sans text-2xl lg:text-base leading-8 lg:border-b-[1px] lg:border-transparent pt-1 hover:border-white  block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-5 lg:normal-case uppercase`;

  return (
    <nav
      className={
        isOpen
          ? 'bg-black lg:bg h-[50rem] lg:h-[650px]  md:h-[650px] mb-[5rem] sm:h-[600px]  lg:bg-[url("/assetsLoopstudios/desktop/image-hero.jpg")] lg:bg-cover lg:'
          : '2xl:pl-[calc(10%-1.7rem)]  2xl:pr-[calc(10%-1.7rem)] lg:h-[650px]  md:h-[650px] sm:h-[600px] bg-[url("/assetsLoopstudios/mobile/image-hero.jpg")] bg-cover h-[50rem] w-[100%] xl:pl-0 xl:pr-0  lg:bg-[url("/assetsLoopstudios/desktop/image-hero.jpg")] lg:w-[100%] lg:bg-cover  mb-[5rem] md:bg-[url("/assetsLoopstudios/desktop/image-hero.jpg")] md:bg-no-repeat  md:w-[100%] sm:bg-[url("/assetsLoopstudios/desktop/image-hero.jpg")] sm:w-[100%]  '
      }
    >
      <div className="flex justify-between content-center pt-10">
        <div
          className=" text-3xl pl-5 pt-5 lg:pl-32 md:pl-32 sm:pl-20 font-alata text-white
         w-[190px]
          lg:text-4xl md:text-4xl sm:text-4xl "
        >
          loopstudios
        </div>
        <nav className="2xl:pl-[calc(10%-1.7rem)] 2xl:pr-[calc(10%-1.7rem)] xl:pr-32 lg:pr-32 flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72"></div>

          <div className="block lg:hidden pt-7">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 "
            >
              <img
                className={`fill-current h-10  w-10 mt-[-2.6rem] ${
                  isOpen ? 'hidden' : 'block'
                }`}
                src="\assetsLoopstudios\hamburger.svg"
                alt="hamburge"
                srcSet=""
              />

              <img
                className={`fill-current h-10 w-10 mt-[-26rem] mr-10 ${
                  isOpen ? 'block' : 'hidden'
                }`}
                src="\assetsLoopstudios\close.svg"
                alt="close"
                srcSet=""
              />
            </button>
          </div>

          <div
            className={`w-full block ml-[-20rem] font-sans font-thin sm:ml-[-35rem] md:ml-[-30rem] md:mt-24 mt-24 lg:mt-0 flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <div className="text-base lg:flex-grow text-white ">
              {links.map((link) => {
                return (
                  <a key={Math.random()} href="#" className={navLinkStyle}>
                    {link}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      <div
        id="headerText"
        className={
          isOpen
            ? 'hidden lg:block text-3xl font-thin font-sans border border-white text-white w-[90%] h-[12.5rem] p-8 ml-[calc(10%-1rem)] mt-[10rem] lg:w-[600px] lg:h-[300px] lg:ml-32 lg:text-7xl lg:mt-32 lg:p-10 md:h-[220px] md:w-[400px] md:ml-32 md:mr-24 md:text-4xl md:p-10 md:mt-[6rem] sm:mt-[2rem]'
            : 'text-3xl font-thin font-sans border border-white text-white w-[90%] h-[12.5rem] p-8 ml-[calc(10%-1rem)] mt-[10rem] lg:w-[600px] lg:h-[300px] lg:ml-32 lg:text-7xl lg:mt-32 lg:p-10 md:h-[220px] md:w-[400px] md:ml-32 md:mr-24 md:text-4xl md:p-10 md:mt-[6rem] sm:mt-[2rem]'
        }
      >
        <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
      </div>
    </nav>
  );
};

export default Header;
