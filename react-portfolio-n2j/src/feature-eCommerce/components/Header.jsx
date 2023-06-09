import React, { useContext, useState, useEffect } from 'react';
import { InitialContext } from '../EcommerceShop';

const Header = () => {
  const { initialStateObject, setinitialStateObject } =
    useContext(InitialContext);
  const [isCartHasBeenOpen, setIsCartHasBeenOpen] = useState(true);
  const [isMobileMenuOpen, setIsMenuOpen] = useState();

  const eachLinkStyle = `cursor-pointer lg:text-base md:px-3.5 border-b-4 border-transparent rounded-sm pb-10 hover:border-ecommerceOrangeColor md:text-sm sm:text-xs sm:px-2`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMobileMenuOpen);
  };
  //updating the context if the mobile menu is open, the shopping cart should close automatically
  useEffect(() => {
    if (isMobileMenuOpen) {
      setinitialStateObject((prev) => ({
        ...prev,
        isCartOpen: false,
      }));
    }
  }, [isMobileMenuOpen]);

  const handleClick = () => {
    setIsCartHasBeenOpen(!isCartHasBeenOpen);
    setinitialStateObject((prev) => ({
      ...prev,
      isCartOpen: isCartHasBeenOpen,
    }));
  };

  return (
    <div className="flex justify-between border-b-[1px] border-[#E4E9F2] pt-4 px-1 sm:px-0">
      <div className="block lg:hidden pt-7">
        <button
          onClick={toggleMenu}
          className="sm:hidden flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          {!isMobileMenuOpen && (
            <img
              className="fill-current mt-[-2.6rem]"
              src="/src/feature-eCommerce/images/icon-menu.svg"
              alt="Menu"
            />
          )}
          {isMobileMenuOpen && (
            <img
              className="fill-current mt-[-2.6rem] "
              src="/src/feature-eCommerce/images/icon-close.png"
              alt="Close"
            />
          )}
        </button>
      </div>
      <nav className="flex justify-start">
        <div className="sm:w-[200px] sm:h-[20px] sm:pr-0 sm:mr-[-1.5rem] h-[25px] md:mr-0 mr-[2rem] w-[150px] md:flex flex">
          <img src="/src/feature-eCommerce/images/logo.svg" alt="Logo" />
        </div>
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-40 z-10 flex justify-start items-center">
            <div className="w-[50%] h-full bg-white pt-20">
              <button
                onClick={toggleMenu}
                className="absolute top-[4.7rem] left-[-2px] m-4 p-2 rounded-full text-black bg-white hover:bg-gray-200"
              >
                {isMobileMenuOpen ? (
                  <img
                    className="w-8 h-8 fill-current"
                    src="/src/feature-eCommerce/images/icon-close.svg"
                    alt="Close"
                  />
                ) : (
                  <img
                    className="w-4 h-4 fill-current"
                    src="/src/feature-eCommerce/images/icon-menu.svg"
                    alt="Menu"
                  />
                )}
              </button>
              <div className="sm:flex sm:justify-between cursor-pointer lg:text-base md:px-3.5 pb-7 ml-7 pt-[6rem] md:text-sm sm:text-xs font-bold sm:px-2">
                <div className="pt-2">Collections</div>
                <div className="pt-2">Men</div>
                <div className="pt-2">Woman</div>
                <div className="pt-2">About</div>
                <div className="pt-2">Contact</div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <nav
        className={isMobileMenuOpen ? `hidden` : ` sm:flex sm:flex-row  hidden`}
      >
        <div className={eachLinkStyle}>Collections</div>
        <div className={eachLinkStyle}>Men</div>
        <div className={eachLinkStyle}>Woman</div>
        <div className={eachLinkStyle}>About</div>
        <div className={eachLinkStyle}>Contact</div>
      </nav>
      <div className="flex justify-center">
        <div
          className="cursor-pointer w-[22px] "
          id="cart"
          onClick={handleClick}
        >
          {initialStateObject.quantity > 0 && (
            <div
              className={` w-[20px] h-[15px] absolute  bg-ecommerceOrangeColor text-white text-xs flex font-black rounded-xl justify-center`}
            >
              {initialStateObject.quantity}
            </div>
          )}
          <img
            className="lg:mt-[0.2rem] mt-[0.5rem] sm:pt-2   ml-[-0.5rem] md:mt-[0.1rem] sm:mt-[-0.2rem]  sm:ml-[-0.7rem] "
            src="/src/feature-eCommerce/images/icon-cart.svg"
            alt="Cart"
          />
        </div>
        <figure className="pl-5  w-[60px] md:w-[70px] cursor-pointer mt-[-0.1rem] sm:w-[50px] sm:mt-[-0.1rem] md:mt-[-0.5rem]">
          <img
            className="hover:border-2 hover:border-ecommerceOrangeColor hover:rounded-full"
            src="/src/feature-eCommerce/images/image-avatar.png"
            alt="Avatar"
          />
        </figure>
      </div>
    </div>
  );
};

export default Header;
