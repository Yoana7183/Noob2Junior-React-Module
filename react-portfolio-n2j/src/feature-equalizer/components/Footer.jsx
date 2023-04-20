const Footer = () => {
  return (
    <div
      className=" ml-[calc(50%-11.7rem)]
     p-5 
     h-[30px]
     mt-[5rem]
      flex 
     xl:w-[88%]
     xl:ml-[0]
      lg:ml-[0] 
      lg:justify-between 
      lg:mb-[5rem]
      lg:flex-row
       lg:w-[80%] 
      md:ml-[0]
        flex-col
         mb-[15rem] 
          md:w-[90%] 
              md:flex-col 
              sm:flex-col 
              sm:mb-[12rem] 
              sm:p-0
              sm:ml-[0]"
    >
      <div>
        <img
          className=" mb-[1rem]
           lg:pt-13
            md:mb-[2rem]
             sm:mb-[1rem]"
          src="/src/feature-equalizer/assets/logo.svg"
          alt=""
          srcSet=""
        />
      </div>
      <div className="">
        <div>All rights reserved © Equalizer 2021</div>
        <div>Have any problems? Contact us via social media or</div>
        <div
          className=" mb-[2rem] 
        md:mb-[3rem]
         sm:mb-[1rem]"
        >
          email us at <strong>equalizer@example.com</strong>
        </div>
      </div>
      <div
        className="flex
      xl:mt-0 
      lg:mt-0 
       md:justify-end
        md:mt-[-6rem] "
      >
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
