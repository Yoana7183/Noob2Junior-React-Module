import React, { useContext } from 'react';
import { InitialContext } from '../EcommerceShop';

const Cart = () => {
  const { initialStateObject, setinitialStateObject } =
    useContext(InitialContext);

  const cartContentStyle = initialStateObject.isCartOpen
    ? 'opacity-100 relative z-20'
    : 'opacity-0';
  const totalAmount = initialStateObject.quantity * 125.0;
  return (
    <div className={cartContentStyle}>
      <div className="w-[360px] h-[256px] border-2shadow-2xl rounded-xl bg-white	shadow-2xl xl:ml-[52rem] lg:ml-[40rem] md:ml-[25rem] sm:ml-[20rem]">
        <div className="">
          <div className="h-[67px] border-b-[1px] border-[#E4E9F2] pt-5 pl-3 ">
            Cart
          </div>
          {initialStateObject.quantity == 0 && (
            <div className="w-[312px] h-[56px] text-gray-300 flex justify-center rounded-xl mt-16 ml-5">
              <p>Your cart is empty.</p>
            </div>
          )}
          {initialStateObject.quantity > 0 && (
            <div className="flex justify-around mt-7 ">
              <div className="w-[50px] h-[50px] ">
                <img
                  className="rounded"
                  src="src\feature-eCommerce\images\image-product-1-thumbnail.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <div>
                <div>Fall Limited Edition Sneakers</div>
                <div>
                  $125.00 x {initialStateObject.quantity} ${totalAmount}.00
                </div>
              </div>
              <div
                className="pt-5 cursor-pointer"
                onClick={() =>
                  setinitialStateObject((prev) => ({
                    ...prev,
                    quantity: 0,
                  }))
                }
              >
                <img
                  src="src\feature-eCommerce\images\icon-delete.svg"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          )}
          {initialStateObject.quantity > 0 && (
            <div className="w-[312px] h-[56px] bg-ecommerceOrangeColor hover:bg-hoverEcommerceOrangeColor text-white flex justify-center rounded-xl mt-7 ml-5">
              <button
                onClick={() =>
                  setinitialStateObject((prev) => ({
                    ...prev,
                    quantity: 0,
                  }))
                }
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
