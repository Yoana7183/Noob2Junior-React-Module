import React, { useContext } from 'react';
import { QuantityContext } from '../EcommerceShop';

const QuantityButton = () => {
  const { quantity, setQuantity } = useContext(QuantityContext);

  const handleMinusClick = () => {
    if (quantity > 0) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handlePlusClick = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const handleInputChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };
  return (
    <div>
      <div className=" flex justify-between mt-10">
        <div className="w-[157px] h-[56px]  bg-[#ececec] flex p-5 justify-between rounded-xl">
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
            value={quantity}
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
