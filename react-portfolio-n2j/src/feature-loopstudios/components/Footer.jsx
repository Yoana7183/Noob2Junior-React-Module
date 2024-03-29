import links from '../links';
import { v4 as uuidv4 } from 'uuid';
const Footer = () => {
  const linksStyle = ` ml-[35%] mr-[35%] lg:ml-0 lg:mr-0 lg:ml-6 block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 border-b-[1px] border-transparent  hover:border-white`;
  const iconsStyle = `pr-3 pb-2 pl-3 border-b-[2px] border-transparent  hover:border-white`;
  return (
    <footer className="bg-black h-[30rem] lg:h-[10rem] lg:pr-32 lg:pl-32 mt-16 text-center flex items-center justify-center lg:flex lg:justify-between lg:text-left">
      <div className="mx-auto lg:mx-0 lg:w-[100%] lg:flex lg:justify-between ">
        <div className="flex flex-col ">
          <div className="text-white  font-bold text-3xl pb-6 ">
            <p>loopstudios</p>
          </div>
          <div className="">
            <nav className="">
              <div className=""></div>

              <div className="lg:bg-none">
                <div className="text-sm lg:flex-grow text-white ">
                  {links.map((link) => {
                    return (
                      <a href="#" key={uuidv4()} className={linksStyle}>
                        {link}
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col pt-10 ">
          <div className="flex pb-5">
            <img
              className={iconsStyle}
              src="\assetsLoopstudios\icon-facebook.svg"
              alt="facebook"
              srcSet=""
            />
            <img
              className={iconsStyle}
              src="\assetsLoopstudios\icon-twitter.svg"
              alt="twitter"
              srcSet=""
            />
            <img
              className={iconsStyle}
              src="\assetsLoopstudios\icon-pinterest.svg"
              alt="pinterest"
              srcSet=""
            />
            <img
              className={iconsStyle}
              src="\assetsLoopstudios\icon-instagram.svg"
              alt="instagram"
              srcSet=""
            />
          </div>
          <div className="text-xs  text-zinc-500 ">
            {' © 2021 Loopstudios. All rights reserved.'}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
