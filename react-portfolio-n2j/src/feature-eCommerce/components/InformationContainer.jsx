import React from 'react';

const InformationContainer = () => {
  return (
    <div className=" w-[445px] h-[426px] mt-[-10rem]">
      <div>
        <div className="text-ecommerceOrangeColor font-black">
          SNEAKER COMPANY
        </div>
        <div className="text-5xl font-medium mt-5 ">
          Fall Limited Edition Sneakers
        </div>
        <div className="text-[#69707D] mt-5">
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
      <div className=" flex justify-between mt-10">
        <div className="w-[157px] h-[56px]  bg-[#ececec] flex p-5 justify-center rounded-xl">
          <div className="w-[15px]">
            <img
              className="bg-cover pt-1"
              src="src\feature-eCommerce\images\icon-minus.svg"
              alt=""
              srcSet=""
            />
          </div>
          <input type="text" className="w-[80px] bg-[#ececec]" />
          <div className="w-[15px]">
            <img
              className="bg-cover"
              src="src\feature-eCommerce\images\icon-plus.svg"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="w-[272px] h-[56px] bg-ecommerceOrangeColor hover:bg-hoverEcommerceOrangeColor flex justify-center rounded-xl text-white">
          <button className=" flex justify-center pt-4">
            <div>
              <img
                src="src\feature-eCommerce\images\icon-cart.svg"
                alt=""
                srcSet=""
              />
            </div>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationContainer;
