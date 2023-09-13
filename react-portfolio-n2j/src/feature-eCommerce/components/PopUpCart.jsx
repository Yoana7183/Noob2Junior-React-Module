import React, { useContext, useEffect } from 'react';
import { EcommerceContext } from '../context/EcommerceContext';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const Cart = () => {
  const { setCartStatus, removeItemFromCart, cartStatus, shoppingCartContent } =
    useContext(EcommerceContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      bottom: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <section
      className={`${
        cartStatus == 'open'
          ? 'opacity-100 relative z-20 flex justify-center'
          : 'opacity-0'
      } `}
    >
      <div className=" w-[360px] h-[256px] border-2shadow-2xl rounded-xl bg-white	shadow-2xl xl:ml-[47rem] lg:ml-[40rem] md:ml-[25rem] sm:ml-[18rem] relative-">
        <div className="">
          <div className="h-[67px] border-b-[1px] border-[#E4E9F2] pt-5 pl-3 ">
            Cart
          </div>
          <div className="overflow-y-auto max-h-[150px]">
            {shoppingCartContent.length == 0 && (
              <div className="w-[312px] h-[56px] text-gray-300 flex justify-center rounded-xl mt-16 ml-5">
                <p>Your cart is empty.</p>
              </div>
            )}
            {shoppingCartContent.length > 0 &&
              shoppingCartContent.map((item) => (
                <div key={uuidv4()} className="flex justify-around mt-7 ">
                  <figure className="w-[50px] h-[50px] ">
                    <img
                      className="rounded"
                      alt="Product_image"
                      src={item.IMG}
                      srcSet=""
                    />
                  </figure>
                  <div>
                    <h2 className="w-[140px]">{item.TITLE}</h2>
                    <div>
                      <p className="">
                        <p className="text-[11px]">Price: {item.TOTAL}$</p>
                        <p className="text-[11px]">Quantity: {item.QUANTITY}</p>
                      </p>
                    </div>
                  </div>
                  <figure
                    className="pt-5 cursor-pointer"
                    onClick={() => removeItemFromCart(item.ID, item.SIZE)}
                  >
                    <img src="\assetsECommerce\icon-delete.svg" alt="delete" />
                  </figure>
                </div>
              ))}

            {shoppingCartContent.length > 0 && (
              <NavLink to={`/e-commerce/shopping-cart`}>
                <div
                  onClick={() => {
                    setCartStatus('closed');
                  }}
                  className="w-[312px] h-[56px] bg-ecommerceOrangeColor hover:bg-hoverEcommerceOrangeColor   text-white flex justify-center rounded-xl mt-7 ml-5"
                >
                  <button>Checkout</button>
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
