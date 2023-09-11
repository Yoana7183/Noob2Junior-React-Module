import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { EcommerceContext } from '../context/EcommerceContext';

import { v4 as uuidv4 } from 'uuid';
const MainNavigation = () => {
  const { setCartStatus, quantity } = useContext(EcommerceContext);
  const [isCartHasBeenOpen, setIsCartHasBeenOpen] = useState(true);
  const [isBurgerMenuOnMobileViewIsOpen, setisBurgerMenuOnMobileViewIsOpen] =
    useState();
  const categories = ['Collections', 'Men', 'Woman', 'About', 'Contact'];
  const eachLinkStyle = ` w-full h-full cursor-pointer lg:text-base md:px-3.5 border-b-4 border-transparent rounded-sm pb-10 hover:border-ecommerceOrangeColor md:text-sm sm:text-xs sm:px-2`;

  const toggleMenu = () => {
    setisBurgerMenuOnMobileViewIsOpen(!isBurgerMenuOnMobileViewIsOpen);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (isBurgerMenuOnMobileViewIsOpen) {
      setCartStatus('closed');
    }
  }, [isBurgerMenuOnMobileViewIsOpen]);

  const handleClick = () => {
    setIsCartHasBeenOpen(!isCartHasBeenOpen);
    let newStatus = isCartHasBeenOpen ? 'open' : 'closed';
    setCartStatus(newStatus);
  };

  return (
    <div className="flex justify-between border-b-[1px]  border-[#E4E9F2] pt-4 px-1 sm:px-0">
      <div className="block sm:hidden pt-7">
        <button
          onClick={toggleMenu}
          className="sm:hidden flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          {isBurgerMenuOnMobileViewIsOpen ? (
            <img
              className="fill-current  mt-[-2.6rem] "
              src="\assetsECommerce\icons8-close.svg"
              alt="Close"
            />
          ) : (
            <img
              className="fill-current mt-[-2.6rem]"
              src="\assetsECommerce\icon-menu.svg"
              alt="Menu"
            />
          )}
        </button>
      </div>
      <nav className="flex justify-start">
        <div className="sm:w-[200px] sm:h-[20px] sm:pr-0 sm:mr-[-1.5rem] h-[25px] md:mr-0 mr-[2rem] w-[150px] md:flex flex">
          <img src="\assetsECommerce\logo.svg" alt="Logo" />
        </div>
        {isBurgerMenuOnMobileViewIsOpen && (
          <div
            className="sm:hidden fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-40 z-10 flex justify-start items-center"
            onClick={toggleMenu}
          >
            <div className="w-[50%] sm:w-0 h-full bg-white pt-20 ">
              <button
                onClick={toggleMenu}
                className="absolute top-[7rem] left-[-9px] m-4 p-2 rounded-full text-black bg-white hover:bg-gray-200"
              >
                {isBurgerMenuOnMobileViewIsOpen ? (
                  <img
                    className="w-6 h-6 fill-current mt-[-2.2rem]  "
                    src="\assetsECommerce\icons8-close.svg"
                    alt="Close"
                  />
                ) : (
                  <img
                    className="w-4 h-4 fill-current"
                    src="\assetsECommerce\icon-menu.svg"
                    alt="Menu"
                  />
                )}
              </button>
              <div className="sm:flex sm:justify-between cursor-pointer lg:text-base md:px-3.5 pb-7 ml-7 pt-[6rem] md:text-sm sm:text-xs font-bold sm:px-2">
                {categories.map((category) => {
                  return (
                    <div
                      key={uuidv4()}
                      style={{
                        outline: 'none',
                        boxShadow: 'none',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                      className="pt-2"
                    >
                      <NavLink to={`/e-commerce/${category}`}>
                        {category}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
      <nav className="hidden sm:flex sm:flex-row">
        {categories.map((category) => {
          return (
            <NavLink
              key={uuidv4()}
              className={eachLinkStyle}
              to={`/e-commerce/${category}`}
            >
              {category}
            </NavLink>
          );
        })}
      </nav>
      <div className="flex justify-center">
        <div
          className="cursor-pointer w-[22px] "
          id="cart"
          onClick={handleClick}
        >
          <div className="w-[20px] h-[15px] ">
            {quantity > 0 && (
              <div
                className={` relative  bg-ecommerceOrangeColor text-white text-xs flex font-black rounded-xl justify-center`}
              >
                <p className="  ">{quantity}</p>
              </div>
            )}
          </div>
          <img
            className="lg:mt-[-0.5rem]  sm:pt-2   ml-[-0.5rem] md:mt-[-0.5rem] sm:mt-[-1rem]  sm:ml-[-0.7rem] "
            src="\assetsECommerce\icon-cart.svg"
            alt="Cart"
          />
        </div>
        <figure className="pl-5  w-[60px] md:w-[70px] cursor-pointer sm:w-[50px] sm:mt-[-0.1rem] md:mt-[-0.5rem]">
          <img
            className="hover:border-2 hover:border-ecommerceOrangeColor hover:rounded-full"
            src="\assetsECommerce\image-avatar.png"
            alt="Avatar"
          />
        </figure>
      </div>
    </div>
  );
};

export default MainNavigation;
