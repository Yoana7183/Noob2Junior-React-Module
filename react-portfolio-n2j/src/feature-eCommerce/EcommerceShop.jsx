import React, { useContext, useRef, useEffect } from 'react';
import MainNavigation from './components/MainNav';
import Cart from './components/Cart';

import { EcommerceContext } from './context/EcommerceContext';
import { Outlet } from 'react-router-dom';
// h-[calc(120vw+550px)]
const EcommerceShop = () => {
  const modalStatus = useContext(EcommerceContext);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const bodyBackgroundStyleInModal = `${
    modalStatus === 'open'
      ? `bg-grey-800 font-kumbhSans flex justify-center pt-16 h-[1200px] z-10 h-screen overflow-y-auto  `
      : `font-kumbhSans flex justify-center sm:pt-16 pt-5 h-screen overflow-y-auto `
  }`;
  return (
    <main ref={contentRef} className={bodyBackgroundStyleInModal}>
      <div className="xl:w-[1110px] xl:h-[940px] lg:w-[1000px] lg:h-[840px] md:w-[768px] sm:w-[640px] h-max overflow-hidden ">
        <div className="">
          <MainNavigation />
          <Outlet />
          <Cart />
        </div>
      </div>
    </main>
  );
};

export default EcommerceShop;
