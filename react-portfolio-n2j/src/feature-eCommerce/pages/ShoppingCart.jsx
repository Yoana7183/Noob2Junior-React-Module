import React, { useContext, useEffect, useState } from 'react';
import { EcommerceContext } from '../context/EcommerceContext';
function ShoppingCart() {
  const { shoppingCartContent, removeItemFromCart } =
    useContext(EcommerceContext);
  const [totalBillForAllProductsInCart, setTtotalBillForAllProductsInCart] =
    useState(0);
  console.log(shoppingCartContent);

  function sumTotal(shoppingCartContent) {
    if (shoppingCartContent.length === 0) {
      return 0;
    }
    return shoppingCartContent.reduce((total, item) => {
      return total + parseFloat(item.QUANTITY) * parseFloat(item.TOTAL);
    }, 0);
  }
  function sumTotalPerProduct(product) {
    return product.TOTAL * product.QUANTITY;
  }
  useEffect(() => {
    const totalSum = sumTotal(shoppingCartContent);
    setTtotalBillForAllProductsInCart(totalSum);
  }, [shoppingCartContent.length]);

  if (shoppingCartContent.length == 0) {
    return (
      <div className="flex items-center justify-center text-gray-500 mt-[-15rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H4z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M8 12a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zm-3-5a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Your cart is empty
      </div>
    );
  }
  const propertyStyle = `text-gray-700 sm:text-[10px] flex flex-col text-[10px] px-0 md:text-xs sm:px-2 md:px-4`;
  return (
    <div className="mt-[-15rem]">
      <h1 className=" ml-5 text-2xl font-bold mb-4">Shopping Cart</h1>
      {shoppingCartContent.map((product) => (
        <div
          key={product.ID}
          className="md:w-[820px]  bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl  mb-4 flex flex-row sm:mx-0 mx-5"
        >
          <img
            src={product.IMG || 'placeholder.jpg'}
            alt={product.TITLE || 'Product Image'}
            className="w-24 h-24 object-cover  sm:mb-0"
          />
          <div className="sm:pt-6 p-4 flex flex-row sm:flex-row">
            <h2 className=" text-xs font-semibold mb-2 w-[80px] sm:w-[150px]">
              {product.TITLE || 'Product Title'}
            </h2>
            <div className="flex sm:flex-row flex-col p-1">
              <p className={propertyStyle}>
                <p> ID:</p> {product.ID || 'N/A'}
              </p>
              <p className={propertyStyle}>
                <p>Size:</p> {product.SIZE || 'N/A'}
              </p>
              <p className={propertyStyle}>
                <p className=""> Regular: </p>${product.PRICE || '0.00'}
              </p>
            </div>
            <div className="flex sm:flex-row flex-col p-1">
              {product.DISCOUNT && (
                <p className={`${propertyStyle} text-ecommerceOrangeColor`}>
                  <p>Discount:</p> {product.DISCOUNT}%
                </p>
              )}
              <p className={propertyStyle}>
                <p>Quantity:</p> {product.QUANTITY || '0'}
              </p>
              <p className={`${propertyStyle} flex flex-row`}>
                <p>Product price:</p>
                <p className="text-base text-ecommerceOrangeColor font-bold">
                  ${product.TOTAL || '0.00'}
                  {product.QUANTITY >= 2 ? (
                    <p className="mt-1">
                      <p className="text-gray-700 sm:text-[10px] p-0 m-0 text-[10px] mt-[-5px]">
                        Total:
                      </p>
                      <p className="mt-[-10px]">
                        {' '}
                        {sumTotalPerProduct(product) || '0.00'}${' '}
                      </p>
                    </p>
                  ) : null}
                </p>
              </p>
            </div>
          </div>
          <figure
            className="pt-8 cursor-pointer z-0 sm:ml-[-2%] ml-[-4%] "
            onClick={() => removeItemFromCart(product.ID, product.SIZE)}
          >
            <img
              src="\assetsECommerce\icon-delete.svg"
              alt="delete"
              className="w-[20px] h-[20px]  sm:mr-10 mr-5"
            />
          </figure>
        </div>
      ))}
      <div className="text-lg font-bold flex justify-end mx-5 ">
        <p className="px-2">Total:</p>
        <p className="text-ecommerceOrangeColor">
          {totalBillForAllProductsInCart}$
        </p>
      </div>
    </div>
  );
}

export default ShoppingCart;
