import React, { useState, createContext } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Gallery from './components/Gallery';
import InformationContainer from './components/InformationContainer';

export const InitialContext = createContext();
const initialStateInfo = {
  quantity: 0,
  isCartOpen: false,
  isModal: false,
};
const EcommerceShop = () => {
  const [initialStateObject, setinitialStateObject] =
    useState(initialStateInfo);

  const bodyBackgroundStyleInModal = `${
    initialStateObject.isModal
      ? `bg-grey-800 font-kumbhSans flex justify-center pt-16 h-[1200px] z-10`
      : `font-kumbhSans flex justify-center pt-16  `
  }`;
  return (
    <div className={bodyBackgroundStyleInModal}>
      <div className="xl:w-[1110px] xl:h-[740px] lg:w-[1000px] lg:h-[840px] md:w-[768px] sm:w-[640px] sm:h-[1050px] h-[950px]  overflow-hidden ">
        <div className="">
          <InitialContext.Provider
            value={{
              initialStateObject,
              setinitialStateObject,
            }}
          >
            <Header />
            <Cart />

            <div className="w-[1015px] h-[565px] md:flex md:justify-between sm:flex-col md:flex-row">
              <Gallery />
              <InformationContainer />
            </div>
          </InitialContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default EcommerceShop;
