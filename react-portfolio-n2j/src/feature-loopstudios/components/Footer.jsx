import Navbar from './Navbar';
const Footer = () => {
  return (
    <div
      className=" 2xl:pl-[calc(10%-1.7rem)] 
    2xl:pr-[calc(10%-1.7rem)]
     xl:pl-0 xl:pr-0 
      lg:h-[160px]
       w-full
        bg-black
         mt-40
          text-white "
    >
      <div
        className=" flex 
      pl-32 
      justify-between  "
      >
        <div className="mt-5 mb-5">
          <div
            className="font-alata text-white 
          w-[190px] 
          text-4xl "
          >
            loopstudios
          </div>
          <div className="pl-5 mt-5">
            <Navbar />
          </div>
        </div>
        <div className="pr-32">
          <div className="flex mt-6 mb-6 ">
            <img
              src="src\feature-loopstudios\images\icon-facebook.svg"
              alt=""
              srcSet=""
            />
            <img
              src="src\feature-loopstudios\images\icon-twitter.svg"
              alt=""
              srcSet=""
            />
            <img
              src="src\feature-loopstudios\images\icon-pinterest.svg"
              alt=""
              srcSet=""
            />
            <img
              src="src\feature-loopstudios\images\icon-instagram.svg"
              alt=""
              srcSet=""
            />
          </div>
          <div>© 2021 Loopstudios. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
