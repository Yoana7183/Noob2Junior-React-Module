const Header = () => {
  return (
    <div className="grid w-full">
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
          className="
          mt-[-5rem] hidden lg:w-[20%] lg:inline md:inline md:w-[35%] sm:inline sm:w-[30%]
                "
          src="/src/feature-equalizer/assets/bg-pattern-1.svg"
          alt=""
          srcSet=""
        />
      </div>
      <div>
        <div
          className="
          font-Equalizer font-black text-4xl mt-[3rem] mb-[3rem] md:w-[60%] lg:-tracking-[0.50rem] lg:mt-[-12rem] lg:text-8xl
           lg:w-[65%] md:mt-[-12rem] md:text-6xl md:font-extrabold sm:w-[50%] sm:mt-[-7rem]"
        >
          We make your music sound extraordinary.
        </div>
        <div
          className="  text-light lg:text-1xl font-Equalizer leading-loose flex justify-center lg:font-base lg:w-[50%]
         md:w-[60%] md:font-bold sm:font-bold md:drop-shadow-4xl sm:drop-shadow-4xl sm:w-[70%]"
        >
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
