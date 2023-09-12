import React, { useContext, useEffect, useState } from 'react';
import { EcommerceContext } from '../context/EcommerceContext';
function ShoppingCart() {
  const { shoppingCartContent } = useContext(EcommerceContext);
  const [totalBillForAllProductsInCart, setTtotalBillForAllProductsInCart] =
    useState(0);
  console.log(shoppingCartContent);
  if (shoppingCartContent.length == 0) {
    return <div className="mt-[-15rem]">Still no items in cart</div>;
  }
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

  return (
    <div className="mt-[-15rem]">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {shoppingCartContent.map((product) => (
        <div
          key={product.ID}
          className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 mb-4 flex flex-col sm:flex-row"
        >
          <img
            src={product.IMG || 'placeholder.jpg'}
            alt={product.TITLE || 'Product Image'}
            className="w-24 h-24 object-cover sm:mr-4 sm:mb-0"
          />
          <div className="p-4 flex flex-col sm:flex-row">
            <h2 className="text-lg font-semibold mb-2">
              {product.TITLE || 'Product Title'}
            </h2>
            <p className="text-gray-700 sm:px-4">ID: {product.ID || 'N/A'}</p>
            <p className="text-gray-700 sm:px-4">
              Size: {product.SIZE || 'N/A'}
            </p>
            <p className="text-gray-700 sm:px-4">${product.PRICE || '0.00'}</p>
            {product.DISCOUNT && (
              <p className="text-red-500 sm:px-4">
                Discount: {product.DISCOUNT}%
              </p>
            )}
            <p className="text-gray-700 sm:px-4">
              Quantity: {product.QUANTITY || '0'}
            </p>
            <p className="text-gray-700 sm:px-4">
              Total: ${product.TOTAL || '0.00'}
            </p>
          </div>
        </div>
      ))}
      <div>Total :{totalBillForAllProductsInCart} $ </div>
    </div>
  );
}

export default ShoppingCart;
