import React, { useState } from 'react';
import QuantityButton from './QuantityButton';
import PropTypes from 'prop-types';
import Store from '../store';
import getTotalPriceAfterDescount from '../getTotalPrice';

const InformationContainer = ({ id }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [error, setError] = useState({
    size: false,
    quantity: false,
  });

  const productInformation = Store.find(
    (product) => product.id === parseInt(id, 10)
  );
  const handleErrorIfSizeIsNotSelected = (isError) => {
    setError(isError);
  };
  return (
    <section className=" lg:w-[445px] sm:w-[445px] lg:h-[426px] xl:w-[445px] xl:h-[426px] md:w-[350px] h-max lg:mt-[-27rem]  md:mt-[-28rem] md:mr-[17rem] md:ml-[7rem] lg:mr-0 ">
      <div className="w-screen pr-[4rem] lg:w-[445px] sm:w-[445px]">
        <div className="text-ecommerceOrangeColor sm:font-black font-base">
          <h3> SNEAKER COMPANY</h3>
        </div>
        <div className="sm:text-4xl font-medium mt-5 text-4xl  w-[350px] sm:w-[600px] md:w-[350px]">
          <h2>{productInformation.title}</h2>
        </div>
        <p className="text-[#69707D] mt-5 text-sm sm:w-[600px] w-[320px] h-max">
          {productInformation.description}
        </p>
      </div>
      <div className="sm:w-[173px] w-full mt-5 sm:mb-5 flex  sm:inline-block">
        <div className="flex justify-between">
          <div className="text-2xl font-black">
            <p>{getTotalPriceAfterDescount(productInformation)}$</p>
          </div>
          <div className="w-[51px] h-[27px] bg-orange-100 text-ecommerceOrangeColor font-black rounded-lg flex justify-center mr-5 ml-3">
            <p>{productInformation.discount}%</p>
          </div>
        </div>
        <div className="line-through text-[#69707D] text-2xl mt-2 pl-[calc(15vw+3px)] sm:pl-0">
          <p> {productInformation.price}$</p>
        </div>
      </div>

      <div className="mt-4">
        {error.size ? (
          <p className="text-ecommerceOrangeColor">Please select a size!</p>
        ) : (
          <label
            htmlFor="sizeSelect"
            className="block font-semibold text-gray-700"
          >
            Select size:
          </label>
        )}
        <select
          id="sizeSelect"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="block w-24 mt-1 p-2 border rounded-md shadow-sm focus:ring focus:ring-ecommerceOrangeColor focus:border-ecommerceOrangeColor"
        >
          <option value="">Available size:</option>
          {productInformation.availableSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      {error.quantity && (
        <p className="text-ecommerceOrangeColor">Please select a quantity</p>
      )}
      <div className="mt-5 sm:mt-0">
        <QuantityButton
          handleErrorIfSizeIsNotSelected={handleErrorIfSizeIsNotSelected}
          size={selectedSize}
          product={productInformation}
        />
      </div>
    </section>
  );
};
InformationContainer.propTypes = {
  id: PropTypes.string,
};

export default InformationContainer;
