import React, { useContext } from 'react';
import { EcommerceContext } from '../context/EcommerceContext';
import { NavLink } from 'react-router-dom';
const Cart = () => {
  const { setQuantity, cartStatus } = useContext(EcommerceContext);
  const quantity = 10;
  return (
    <section
      className={`${
        cartStatus == 'open'
          ? 'opacity-100 relative z-20 flex justify-center'
          : 'opacity-0'
      }`}
    >
      <div className="w-[360px] h-[256px] border-2shadow-2xl rounded-xl bg-white	shadow-2xl xl:ml-[47rem] lg:ml-[40rem] md:ml-[25rem] sm:ml-[18rem] relative-">
        <div className="">
          <div className="h-[67px] border-b-[1px] border-[#E4E9F2] pt-5 pl-3 ">
            Cart
          </div>
          {quantity == 0 && (
            <div className="w-[312px] h-[56px] text-gray-300 flex justify-center rounded-xl mt-16 ml-5">
              <p>Your cart is empty.</p>
            </div>
          )}
          {quantity > 0 && (
            <div className="flex justify-around mt-7 ">
              <figure className="w-[50px] h-[50px] ">
                <img className="rounded" alt="Product_image" srcSet="" />
              </figure>
              <div>
                <h2>Fall Limited Edition Sneakers</h2>
                <div>
                  <p>
                    $125.00 x {quantity} ${quantity * 125.0}.00
                  </p>
                </div>
              </div>
              <figure
                className="pt-5 cursor-pointer"
                onClick={() => setQuantity(0)}
              >
                <img src="\assetsECommerce\icon-delete.svg" alt="delete" />
              </figure>
            </div>
          )}
          {quantity > 0 && (
            <NavLink to={`/e-commerce/shopping-cart`}>
              <div className="w-[312px] h-[56px] bg-ecommerceOrangeColor hover:bg-hoverEcommerceOrangeColor   text-white flex justify-center rounded-xl mt-7 ml-5">
                <button>Checkout</button>
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;