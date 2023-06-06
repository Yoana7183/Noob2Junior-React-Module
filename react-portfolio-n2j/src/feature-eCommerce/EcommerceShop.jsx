import React, { useState, createContext } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Gallery from './components/Gallery';
import InformationContainer from './components/InformationContainer';

export const CartContext = createContext();

const EcommerceShop = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className=" font-kumbhSans flex justify-center mt-16">
      <div className="w-[1110px] h-[740px] ">
        <div className="">
          <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
            <Header />
            <Cart />
          </CartContext.Provider>
          <div className="w-[1015px] h-[565px] flex justify-between">
            <Gallery />
            <InformationContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceShop;
