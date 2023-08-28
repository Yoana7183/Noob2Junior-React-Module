const Footer = () => {
  return (
    <footer
      className="ml-[calc(50%-11.7rem)] p-5 h-[30px] mt-[5rem] flex xl:w-[88%] xl:ml-[0] lg:ml-[0] lg:justify-between 
    lg:mb-[5rem] lg:flex-row lg:w-[80%] md:ml-[0] flex-col mb-[15rem] md:w-[90%] md:flex-col sm:flex-col sm:mb-[12rem] sm:p-0 sm:ml-[0]"
    >
      <figure>
        <img
          className=" mb-[1rem] lg:pt-13 md:mb-[2rem] sm:mb-[1rem]"
          src="\assetsEqualizer\logo.svg"
          alt=""
          srcSet=""
        />
      </figure>
      <div className="">
        <p>All rights reserved © Equalizer 2021</p>
        <p>Have any problems? Contact us via social media or</p>
        <p className=" mb-[2rem] md:mb-[3rem] sm:mb-[1rem]">
          email us at <strong>equalizer@example.com</strong>
        </p>
      </div>
      <div className="flex xl:mt-0 lg:mt-0 md:justify-end md:mt-[-6rem] ">
        <div className="flex items-center mr-4 ">
          <div className="bg-[url('/assetsEqualizer/icons8-facebook(1).svg')] w-[25px] h-[25px] bg-cover hover:bg-[url('/assetsEqualizer/icons8-facebook(2).svg')]  "></div>
        </div>
        <div className="flex items-center mr-4 ">
          <div className="bg-[url('/assetsEqualizer/icons8-instagram(1).svg')] w-[25px] h-[25px] bg-cover hover:bg-[url('/assetsEqualizer/icons8-instagram(2).svg')]   "></div>
        </div>
        <div className="flex items-center mr-4">
          <div className="bg-[url('/assetsEqualizer/icons8-twitter.svg')] w-[25px] h-[25px] bg-cover hover:bg-[url('/assetsEqualizer/icons8-twitter(1).svg')]   "></div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
