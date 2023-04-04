const Footer = () => {
  return (
    <div className=" xl:w-[88%] lg:mb-[5rem] lg:w-[80%] h-[30px] mt-[10rem] flex  lg:flex-row lg: md:flex-col sm:flex-col lg:justify-between">
      <div>
        <img
          className="lg:pt-13 mb-[2rem]"
          src="/src/feature-equalizer/assets/logo.svg"
          alt=""
          srcSet=""
        />
      </div>
      <div className="">
        <div>All rights reserved © Equalizer 2021</div>
        <div>Have any problems? Contact us via social media or</div>
        <div className="md:mb-[3rem]">
          email us at <strong>equalizer@example.com</strong>
        </div>
      </div>
      <div className="flex md:justify-end md:mt-[-6rem]">
        <img
          className="p-1"
          src="/src/feature-equalizer/assets/icon-facebook.svg"
          alt=""
        />
        <img
          className="p-1"
          src="/src/feature-equalizer/assets/icon-instagram.svg"
          alt=""
        />
        <img
          className="p-1"
          src="/src/feature-equalizer/assets/icon-twitter.svg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Footer;
