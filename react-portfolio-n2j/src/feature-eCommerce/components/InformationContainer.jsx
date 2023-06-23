import React from 'react';
import QuantityButton from './QuantityButton';
const InformationContainer = () => {
  return (
    <section className="mt-[5px] lg:w-[445px] sm:w-[445px] lg:h-[426px] xl:w-[445px] xl:h-[426px] md:w-[245px] md:h-[326px] lg:mt-[-10rem] md:mt-[-12rem] md:mr-[18rem] lg:mr-0 sm:mt-5">
      <div className="w-screen pr-[4rem] lg:w-[445px] sm:w-[445px]">
        <div className="text-ecommerceOrangeColor sm:font-black font-base">
          SNEAKER COMPANY
        </div>
        <div className="sm:text-5xl font-medium mt-5 text-4xl">
          Fall Limited Edition Sneakers
        </div>
        <div className="text-[#69707D] mt-5 text-sm  leading-6  ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they/’ll withstand everything
          the weather can offer.
        </div>
      </div>
      <div className="sm:w-[173px] w-full mt-5 sm:mb-5 flex  sm:inline-block">
        <div className="flex justify-between">
          <div className="text-2xl font-black">$125.00</div>
          <div className="w-[51px] h-[27px] bg-orange-100 text-ecommerceOrangeColor font-black rounded-lg flex justify-center mr-5 ml-3">
            50%
          </div>
        </div>
        <div className="line-through text-[#69707D] mt-2 pl-[calc(15vw+3px)] sm:pl-0">
          $250.00
        </div>
      </div>
      <div className="mt-5 sm:mt-0">
        <QuantityButton />
      </div>
    </section>
  );
};

export default InformationContainer;
