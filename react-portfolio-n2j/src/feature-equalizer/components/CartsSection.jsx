const CartSection = () => {
  return (
    <div
      className="flex-col xl:flex-row lg:mr-16 lg:flex-row  lg:ml-0 lg:mt-[18rem] mt-[8rem] mr-[-5%] ml-[-5%] md:flex-row 
      md:mr-6 md:ml-1 md:mt-[15rem] sm:flex-row  sm:ml-[-3rem] sm:mt-[14rem] flex md:flex  "
    >
      <div
        className=" ml-[calc(50%-11.7rem)] w-[375px] h-[600px] xl:ml-[0] bg-black xl:h-[600px]  xl:w-[1110px] lg:w-[850px] 
          lg:ml-[0] lg:h-[500px] flex rounded-xl md:ml-[0] md:w-[696px] md:h-[600px] sm:ml-[0] sm:w-[600px] sm:h-[520px] sm-ml-[-2rem] "
      >
        <div className=" z-40 w-[1150px] h-[600px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] md:z-40 sm:z-40 ">
          <img
            className="ml-[60%] mr-[30%] mt-[-4rem] w-[950px] h-[370px] bg-cover xl:h-[642px] xl:w-[312px] xl:ml-[4rem] xl:mt-[-180px]
             md:w-[270px] md:h-[556px] md:mt-[-120px] md:ml-[3rem] sm:h-[500px] sm:w-[220px] sm:mt-[-6rem]  sm:ml-6"
            src="/src/feature-equalizer/assets/illustration-app.png"
            alt="illustration-app-phone"
            srcSet=""
          />
        </div>
        <div className=" w-[90rem] h-[420px] lg:w-[350px] md:w-[280px] sm:w-[220px]">
          <img
            className="ml-[-40%] w-[500px] h-[420px  xl:ml-[-35rem] lg:bg-cover lg:ml-[-25rem] md:ml-[-16rem] sm:ml-[-15rem]  "
            src="/src/feature-equalizer/assets/bg-pattern-2.svg"
            alt="bg-pattern-2"
            srcSet=""
          />
        </div>
      </div>
      <div
        className=" ml-[calc(50%-11.7rem)] w-[375px] pb-[5rem] mt-[-15rem] rounded-xl bg-[#FA7453] p-10 text-white xl:w-[446px] 
      xl:h-[600px] xl:mt-[7rem] xl:ml-[-40rem] xl:p-10 lg:ml-[-28rem] lg:w-[400px] lg:h-[580px] lg:mt-[7rem] lg:rounded-xl md:w-[399px]
       md:h-[580px] md:ml-[-29rem] md:z-40 md:mt-[10rem] md:p-10 md:rounded-xl sm:w-[330px] sm:h-[550px] sm:rounded-xl sm:p-8 sm:mt-[7rem]
        sm:ml-[-25rem] sm:z-40"
      >
        <div className=" font-titleEqualizer text-4xl font-bold xl:text-4xl xl:font-bold xl:mb-[1.5rem] md:text-3xl md:font-bold md:mb-[1rem]">
          Premium EQ
        </div>
        <div className="leading-9 font-Equalizer mb-[1.5rem]">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </div>
        <div className="flex mb-[1.5rem]">
          <div
            className="
          text-7xl
           pr-5
            font-bold"
          >
            {' '}
            $4{' '}
          </div>
          <div className="mt-[1.5rem]"> / month</div>
        </div>
        <div
          className="flex
         flex-col"
        >
          <button
            type="button"
            className=" flex pt-4 pl-20 hover:bg-[#66E2DC] cursor-pointer bg-black xl:w-[333px] h-[61px] rounded-xl mb-4 "
          >
            <img
              className="w-[30px] h-[22px]  pr-[10px]"
              src="\src\feature-equalizer\assets\icon-apple.svg"
              alt=""
              srcSet=""
            />
            {' iOS Download'}
          </button>
          <button
            type="button"
            className=" flex pt-4 pl-20 hover:bg-[#FFB964] cursor-pointer bg-white text-black xl:w-[333px] h-[61px] rounded-xl"
          >
            <img
              className=" w-[30px] h-[22px] pr-[10px] "
              src="\src\feature-equalizer\assets\icon-android.svg"
              alt=""
              srcSet=""
            />
            {'Android Download'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartSection;
