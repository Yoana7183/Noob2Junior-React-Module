import React from 'react';

const QuantityButton = () => {
  return (
    <div>
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
        <div className="w-[272px] h-[56px] bg-ecommerceOrangeColor hover:bg-hoverEcommerceOrangeColor flex justify-center rounded-xl text-white cursor-pointer">
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

export default QuantityButton;
