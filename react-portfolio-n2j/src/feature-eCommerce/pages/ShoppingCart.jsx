import React, { useContext, useEffect, useState } from 'react';
import { EcommerceContext } from '../context/EcommerceContext';
function ShoppingCart() {
  const { shoppingCartContent, removeItemFromCart } =
    useContext(EcommerceContext);
  const [totalBillForAllProductsInCart, setTtotalBillForAllProductsInCart] =
    useState(0);
  console.log(shoppingCartContent);

  function sumTotal(shoppingCartContent) {
    return shoppingCartContent.reduce(
      (total, item) => total + parseFloat(item.TOTAL),
      0
    );
  }
  useEffect(() => {
    const totalSum = sumTotal(shoppingCartContent);
    setTtotalBillForAllProductsInCart(totalSum);
  }, [shoppingCartContent.length]);

  if (shoppingCartContent.length == 0) {
    return <div className="mt-[-15rem]">Still no items in cart</div>;
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
              <p className={`${propertyStyle} `}>
                <p>Total:</p>{' '}
                <p className="text-base text-ecommerceOrangeColor font-bold">
                  ${product.TOTAL || '0.00'}
                </p>
              </p>
            </div>
          </div>
          <figure
            className="pt-8 cursor-pointer z-0 ml-[-2%] "
            onClick={() => removeItemFromCart(product.ID, product.SIZE)}
          >
            <img
              src="\assetsECommerce\icon-delete.svg"
              alt="delete"
              className="w-[20px] h-[20px]  sm:mr-10"
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
