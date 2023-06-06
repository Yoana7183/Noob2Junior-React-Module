import React from 'react';

const Cart = () => {
  return (
    <div className="w-[360px] h-[256px] border-2shadow-2xl rounded-xl	shadow-2xl ml-[52rem]">
      <div className="">
        <div className="h-[67px] border-b-[1px] border-[#E4E9F2] pt-5 pl-3 ">
          Cart
        </div>
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
            <div>$125.00 x 3 $375.00</div>
          </div>
          <div className="pt-5">
            <img
              src="src\feature-eCommerce\images\icon-delete.svg"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="w-[312px] h-[56px] bg-ecommerceOrangeColor hover:bg-hoverEcommerceOrangeColor text-white flex justify-center rounded-xl mt-7 ml-5">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
