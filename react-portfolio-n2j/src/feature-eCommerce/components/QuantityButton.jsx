import React, { useContext, useState } from 'react';
import { InitialContext } from '../EcommerceShop';

const QuantityButton = () => {
  const { initialStateObject, setinitialStateObject } =
    useContext(InitialContext);

  const [inputQuantity, setInptQuantity] = useState(0);

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
    <div>
      <div className=" flex lg:justify-between md:flex-col lg:flex-row lg:mt-10 md:mt-5">
        <div className="lg:w-[157px] md:w-[272px] h-[56px]  bg-[#ececec] flex p-5 justify-between rounded-xl">
          <div className="w-[15px] cursor-pointer " onClick={handleMinusClick}>
            <img
              className="bg-cover pt-1"
              src="src\feature-eCommerce\images\icon-minus.svg"
              alt=""
              srcSet=""
            />
          </div>
          <input
            type="text"
            className=" w-[20px] bg-[#ececec]"
            value={inputQuantity}
            onChange={handleInputChange}
          />
          <div className="w-[15px] cursor-pointer" onClick={handlePlusClick}>
            <img
              className="bg-cover "
              src="src\feature-eCommerce\images\icon-plus.svg"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div
          className="w-[272px] h-[56px] md:mt-2 lg:mt-0 bg-ecommerceOrangeColor hover:bg-hoverEcommerceOrangeColor flex justify-center rounded-xl text-white cursor-pointer"
          onClick={() => {
            setinitialStateObject((prev) => ({
              ...prev,
              quantity: inputQuantity,
            }));
          }}
        >
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
