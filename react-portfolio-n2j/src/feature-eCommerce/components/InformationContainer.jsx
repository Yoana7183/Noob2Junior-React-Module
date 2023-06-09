import React from 'react';
import QuantityButton from './QuantityButton';
const InformationContainer = () => {
  return (
    <div className=" lg:w-[445px] lg:h-[426px] xl:w-[445px] xl:h-[426px] md:w-[245px] md:h-[326px] lg:mt-[-10rem] md:mt-[-12rem] md:mr-[18rem] lg:mr-0">
      <div>
        <div className="text-ecommerceOrangeColor font-black">
          SNEAKER COMPANY
        </div>
        <div className="text-5xl font-medium mt-5 ">
          Fall Limited Edition Sneakers
        </div>
        <div className="text-[#69707D] mt-5 md:text-sm">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they/’ll withstand everything
          the weather can offer.
        </div>
      </div>
      <div className="w-[173px] mt-5">
        <div className="flex justify-between">
          <div className="text-2xl font-black">$125.00</div>
          <div className="w-[51px] h-[27px] bg-orange-200 text-ecommerceOrangeColor font-black flex justify-center mr-5">
            50%
          </div>
        </div>
        <div className="line-through text-[#69707D] mt-2">$250.00</div>
      </div>
      <div>
        <QuantityButton />
      </div>
    </div>
  );
};

export default InformationContainer;
