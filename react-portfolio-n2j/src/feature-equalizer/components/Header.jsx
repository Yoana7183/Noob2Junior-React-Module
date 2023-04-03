const Header = () => {
  return (
    <div className="grid">
      <div className="">
        <img
          className="pt-12"
          src="/src/feature-equalizer/assets/logo.svg"
          alt=""
          srcSet=""
        />
      </div>
      <div className="grid justify-items-end">
        <img
          className="mt-[-5rem] hidden sm:inline lg:inline md:inline sm:w-[30%] md:w-[30%] lg:w-[20%]"
          src="/src/feature-equalizer/assets/bg-pattern-1.svg"
          alt=""
          srcSet=""
        />
      </div>
      <div>
        <div className=" lg:-tracking-[0.50rem] font-Equalizer font-black text-5xl sm:w-[50%] sm:mt-[-7rem]  mt-[3rem]  mb-[3rem] md:w-[68%] md:mt-[-10rem] lg:w-[60%] md:text-5xl lg:text-8xl  lg:mt-[-12rem]">
          We make your music sound extraordinary.
        </div>
        <div className="text-base leading-loose flex justify-center lg:w-[50%] md:w-[60%] sm:w-[70%]">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </div>
      </div>
    </div>
  );
};
export default Header;
