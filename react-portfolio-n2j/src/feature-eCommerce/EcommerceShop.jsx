import React, { useContext, useEffect } from 'react';
import MainNavigation from './components/MainNav';

import Cart from './components/Cart';

import { EcommerceContext } from './context/EcommerceContext';
import { Outlet, Link } from 'react-router-dom';

const EcommerceShop = () => {
  const modalStatus = useContext(EcommerceContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const bodyBackgroundStyleInModal = `${
    modalStatus === 'open'
      ? `bg-grey-800 font-kumbhSans flex justify-center pt-16 h-max z-10 h-screen overflow-y-auto  `
      : `font-kumbhSans flex justify-center sm:pt-16 pt-5 h-max overflow-y-auto `
  }`;
  return (
    <main className={bodyBackgroundStyleInModal}>
      <div className="xl:w-[1110px] xl:h-max lg:w-[1000px] lg:h-max  md:w-[850px]  sm:w-[640px]  w-full h-max overflow-hidden ">
        <div className="mb-[50%] h-max sm:h-max  sm:mb-[25rem] md:mb-[15rem] ">
          <MainNavigation />
          <Link to=".." relative="path">
            <div className="flex">
              <img
                src="\assetsECommerce\icons8-back-30.png"
                className="w-6 h-6"
                alt="back"
                srcSet=""
              />
              <p className="text-[10px] mt-1 ">Back</p>
            </div>
          </Link>
          <Cart />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default EcommerceShop;
