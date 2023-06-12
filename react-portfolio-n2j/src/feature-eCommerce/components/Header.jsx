import React, { useContext, useState } from 'react';
import { InitialContext } from '../EcommerceShop';

const Header = () => {
  const { initialStateObject, setinitialStateObject } =
    useContext(InitialContext);
  const [isCartHasBeenOpen, setIsCartHasBeenOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LinksStyle = ` cursor-pointer lg:text-base md:px-3.5 border-b-4 border-transparent  rounded-sm pb-10 hover:border-ecommerceOrangeColor md:text-sm sm:text-xs sm:px-2`;

  const handleClick = () => {
    setIsMenuOpen(false);
    setIsCartHasBeenOpen(!isCartHasBeenOpen);
    setinitialStateObject((prev) => ({
      ...prev,
      isCartOpen: isCartHasBeenOpen,
    }));
  };
  const LinksStyleIfMenuIsOpen = `${
    isMenuOpen ? `flex md:flex-row flex-col` : ` sm:flex sm::flex-row  hidden`
  }`;
  return (
    <div
      className={`${
        isMenuOpen
          ? `fixed top-15 left-0 w-[50%] bg-white pt-[5rem] h-full flex `
          : `flex justify-between border-b-[1px] border-[#E4E9F2]`
      }`}
    >
      <div className="block lg:hidden pt-7">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
          sm:hidden
          flex 
          items-center
           px-3 
           py-2 
           rounded 
           text-black-500 
           hover:text-black-400 "
        >
          <img
            className={`fill-current  mt-[-2.6rem] ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
            src="/src/feature-eCommerce/images/icon-menu.svg"
            alt=""
            srcSet=""
          />

          <img
            className={`fill-current  mt-[-8rem] pb-28 mr-10 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
            src="/src/feature-eCommerce/images/icon-close.png"
            alt=""
            srcSet=""
          />
        </button>
      </div>
      <div className="flex">
        <div
          className={`${
            isMenuOpen
              ? `hidden`
              : `sm:w-[200px] sm:h-[20px] sm:pr-2 sm:mr-[-1.5rem]  h-[25px] md:mr-20 mr-[2rem] w-[150px] md:flex flex `
          } `}
        >
          <img src="src\feature-eCommerce\images\logo.svg" alt="" srcSet="" />
        </div>
        <div className={LinksStyleIfMenuIsOpen}>
          <div className={LinksStyle}>Collections</div>
          <div className={LinksStyle}>Men</div>
          <div className={LinksStyle}>Woman</div>
          <div className={LinksStyle}>About</div>
          <div className={LinksStyle}>Contact</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className=" cursor-pointer w-[22px] pt-5"
          id="cart"
          onClick={handleClick}
        >
          {initialStateObject.quantity > 0 && (
            <div
              className={
                isMenuOpen
                  ? 'w-[20px] h-[15px] bg-ecommerceOrangeColor text-white text-xs flex justify-center font-black rounded-xl'
                  : 'w-[20px] h-[15px] bg-ecommerceOrangeColor text-white text-xs flex justify-end font-black rounded-xl'
              }
            >
              {initialStateObject.quantity}
            </div>
          )}

          <img
            className={
              isMenuOpen
                ? 'lg:mt-[-0.2rem] ml-[-0.5rem] md:mt-[-1.2rem]'
                : 'lg:mt-[-0.2rem] ml-[-0.5rem] md:mt-[-1.2rem]'
            }
            src="src\feature-eCommerce\images\icon-cart.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="pl-5 w-[70px] cursor-pointer mt-[-0.2rem] ">
          <img
            className=""
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
