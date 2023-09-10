import React from 'react';
import QuantityButton from './QuantityButton';
const InformationContainer = () => {
  return (
    <section className=" lg:mt-[-31rem] lg:w-[445px] sm:w-[445px] lg:h-[426px] xl:w-[445px] xl:h-[426px] md:w-[245px] md:h-[326px]  md:mt-[-28rem] md:mr-[18rem] lg:mr-0 ">
      <div className="w-screen pr-[4rem] lg:w-[445px] sm:w-[445px]">
        <div className="text-ecommerceOrangeColor sm:font-black font-base">
          <h3> SNEAKER COMPANY</h3>
        </div>
        <div className="sm:text-5xl font-medium mt-5 text-4xl">
          <h2>Fall Limited Edition Sneakers</h2>
        </div>
        <p className="text-[#69707D] mt-5 text-sm  leading-6  ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they/’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="sm:w-[173px] w-full mt-5 sm:mb-5 flex  sm:inline-block">
        <div className="flex justify-between">
          <div className="text-2xl font-black">
            <p>$125.00</p>
          </div>
          <div className="w-[51px] h-[27px] bg-orange-100 text-ecommerceOrangeColor font-black rounded-lg flex justify-center mr-5 ml-3">
            <p>50%</p>
          </div>
        </div>
        <div className="line-through text-[#69707D] mt-2 pl-[calc(15vw+3px)] sm:pl-0">
          <p> $250.00</p>
        </div>
      </div>
      <div className="mt-5 sm:mt-0">
        <QuantityButton />
      </div>
    </section>
  );
};

export default InformationContainer;
