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
      <div className="w-[1110px] h-[740px]  ">
        <div className="">
          <InitialContext.Provider
            value={{
              initialStateObject,
              setinitialStateObject,
            }}
          >
            <Header />
            <Cart />

            <div className="w-[1015px] h-[565px] flex justify-between">
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
