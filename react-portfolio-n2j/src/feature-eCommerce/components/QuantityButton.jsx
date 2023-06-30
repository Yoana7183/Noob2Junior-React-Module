import React, { useContext, useEffect, useState } from 'react';
import { InitialContext } from '../EcommerceShop';

const QuantityButton = () => {
  const { initialStateObject, setinitialStateObject } =
    useContext(InitialContext);

  const [inputQuantity, setInptQuantity] = useState(0);
  //this effect serves to update the quantity value when the quantities are reset from the shopping cart the value in the quantity field
  // in this component will also reset to 0
  useEffect(() => {
    if (initialStateObject.quantity == 0) {
      setInptQuantity(0);
    }
  }, [initialStateObject.quantity]);

  const handleMinusClick = () => {
    if (initialStateObject.quantity > 0) {
      setInptQuantity((prevCount) => prevCount - 1);
    }
  };
  const handlePlusClick = () => {
    setInptQuantity((prevCount) => prevCount + 1);
  };

  const handleInputChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setInptQuantity(newQuantity);
  };

  return (
    <>
      <div className=" flex lg:justify-between flex-col lg:flex-row lg:mt-10 md:mt-5 ">
        <div className="lg:w-[157px] sm:w-[272px] w-[calc(80vw-1px)] h-[56px]  bg-[#ececec] flex p-5 justify-between rounded-xl">
          <figure
            className="w-[15px] cursor-pointer "
            onClick={handleMinusClick}
          >
            <img
              className="bg-cover pt-1"
              src="src\feature-eCommerce\images\icon-minus.svg"
              alt="minus-quantity"
              srcSet=""
            />
          </figure>
          <div className=" w-[20px] bg-[#ececec]" onChange={handleInputChange}>
            {inputQuantity}
          </div>
          <figure className="w-[15px] cursor-pointer" onClick={handlePlusClick}>
            <img
              className="bg-cover "
              src="src\feature-eCommerce\images\icon-plus.svg"
              alt="plus-quantity"
              srcSet=""
            />
          </figure>
        </div>
        <div
          className="lg:w-[272px] sm:w-[272px] w-[calc(80vw-1px)] h-[56px] mt-2 lg:mt-0 bg-ecommerceOrangeColor hover:bg-hoverEcommerceOrangeColor shadow-lg shadow-hoverEcommerceOrangeColor sm:shadow-none flex justify-center rounded-xl text-white cursor-pointer"
          onClick={() => {
            setinitialStateObject((prev) => ({
              ...prev,
              quantity: inputQuantity,
            }));
          }}
        >
          <button className=" flex justify-center  pt-4">
            <figure>
              <img
                src="src\feature-eCommerce\images\icon-cart.svg"
                alt="shopping-cart"
                srcSet=""
              />
            </figure>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default QuantityButton;
