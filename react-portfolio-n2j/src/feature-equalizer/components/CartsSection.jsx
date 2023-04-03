const CartSection = () => {
  return (
    <div className="mt-[15rem] mr-[-5%] ml-[-5%] lg:mr-16 lg:ml-0 lg:mt-[18rem] md:mr-6 md:ml-1 md:mt-[15rem] sm:ml-[-3rem] flex ">
      <div className="bg-black h-[600px] w-[1110px] flex ">
        <div className="w-[100%] lg:z-40">
          <img
            className=" bg-cover h-[642px] ml-[4rem] mt-[-180px]"
            src="/src/feature-equalizer/assets/illustration-app.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="lg:w-[350px] lg:z-0">
          <img
            className="  lg:bg-cover xl:ml-[-33.5rem] lg:ml-[-46rem] md:ml-[-25rem]"
            src="/src/feature-equalizer/assets/bg-pattern-2.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div></div>
      </div>
      <div className="bg-[#FA7453]  text-white w-[446px] h-[625px] xl:mt-[7rem] xl:ml-[-37rem] z-20 pb-[5rem] xl:p-10 ">
        <div className="xl:text-4xl xl:font-bold font-titleEqualizer xl:mb-[1.5rem]">
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
            className="cursor-pointer bg-black xl:w-[333px] xl:h-[61px] rounded-xl mb-4"
          >
            iOS Download iOS Download
          </button>
          <button
            type="button"
            className="cursor-pointer bg-white text-black xl:w-[333px] xl:h-[61px] rounded-xl"
          >
            Android Download
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartSection;
