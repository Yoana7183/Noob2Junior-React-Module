const CartSection = () => {
  return (
    <div className="mt-[15rem] mr-[-5%] ml-[-5%] lg:mr-16 lg:ml-0 lg:mt-[18rem] md:mr-6 md:ml-1 md:mt-[15rem] sm:ml-[-3rem] flex md:flex  ">
      <div className="bg-black xl:h-[600px] xl:w-[1110px] lg:w-[850px] lg:h-[500px] flex rounded-xl md:w-[696px] md:h-[600px] sm:w-[600px] sm:h-[520px] ">
        <div className="w-[100%]  md:z-40 sm:z-40 ">
          <img
            className=" bg-cover xl:h-[642px] xl:w-[312px] xl:ml-[4rem] xl:mt-[-180px] md:w-[270px] md:h-[556px] md:mt-[-120px] md:ml-[3rem] sm:h-[500px] sm:w-[220px] sm:mt-[-6rem] sm:ml-6"
            src="/src/feature-equalizer/assets/illustration-app.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="lg:w-[350px] md:w-[280px] sm:w-[220px]">
          <img
            className="  lg:bg-cover xl:ml-[-35rem] lg:ml-[-25rem] md:ml-[-16rem] sm:ml-[-15rem]  "
            src="/src/feature-equalizer/assets/bg-pattern-2.svg"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <div className="bg-[#FA7453] roundedn-xl text-white xl:w-[446px] xl:h-[600px] xl:mt-[7rem] xl:ml-[-40rem] pb-[5rem] xl:p-10 lg:ml-[-28rem] lg:w-[400px] lg:h-[580px] lg:mt-[7rem] lg:rounded-xl md:w-[399px] md:h-[580px] md:ml-[-29rem] md:z-40 md:mt-[10rem] md:p-10 md:rounded-xl sm:w-[330px] sm:h-[520px] sm:rounded-xl sm:p-8 sm:mt-[7rem] sm:ml-[-25rem] sm:z-40 ">
        <div className="xl:text-4xl xl:font-bold font-titleEqualizer xl:mb-[1.5rem] md:text-3xl md:font-bold md:mb-[1rem]">
          Premium EQ
        </div>
        <div className="leading-9 font-Equalizer mb-[1.5rem]">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </div>
        <div className="flex mb-[1.5rem]">
          <div className="text-7xl pr-5 font-bold"> $4 </div>
          <div className="mt-[1.5rem]"> / month</div>
        </div>
        <div className="flex flex-col">
          <button
            type="button"
            className="cursor-pointer bg-black xl:w-[333px] h-[61px] rounded-xl mb-4 "
          >
            iOS Download iOS Download
          </button>
          <button
            type="button"
            className="cursor-pointer bg-white text-black xl:w-[333px] h-[61px] rounded-xl"
          >
            Android Download
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartSection;
