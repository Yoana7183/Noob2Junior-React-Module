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
          className="mt-[-5rem] hidden sm:inline lg:inline md:inline md:w-[30%] lg:w-[20%]"
          src="/src/feature-equalizer/assets/bg-pattern-1.svg"
          alt=""
          srcSet=""
        />
      </div>
      <div>
        <div className=" lg:-tracking-[0.50rem] font-titleEqualizer text-5xl mt-[3rem] mb-[3rem] md:w-[68%] md:mt-[-10rem] lg:w-[60%] md:text-5xl lg:text-8xl font-[1000] lg:mt-[-12rem]">
          We make your music sound extraordinary.
        </div>
        <div className="text-base leading-loose flex justify-center lg:w-[50%] md:w-[60%]">
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
