import React from 'react';

const Header = () => {
  const LinksStyle = `px-3.5 border-b-4 border-transparent  rounded-sm pb-10 hover:border-orange-500 ">`;
  return (
    <div className="flex justify-between border-[1px] border-[#E4E9F2]  ">
      <div className="flex">
        <div className="w-[200px] pr-20">
          <img src="src\feature-eCommerce\images\logo.svg" alt="" srcSet="" />
        </div>

        <div className={LinksStyle}>Collections</div>
        <div className={LinksStyle}>Men</div>
        <div className={LinksStyle}>Woman</div>
        <div className={LinksStyle}>About</div>
        <div className={LinksStyle}>Contact</div>
      </div>
      <div className="flex justify-center">
        <div className=" w-[22px] pt-5 ">
          <img
            src="src\feature-eCommerce\images\icon-cart.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="pl-5 w-[70px] ">
          <img
            src="src\feature-eCommerce\images\image-avatar.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
