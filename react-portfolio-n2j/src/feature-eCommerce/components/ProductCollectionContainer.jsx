import React from 'react';
import PropTypes from 'prop-types';
import getTotalPriceAfterDescount from '../getTotalPrice';

const ProductCollectionContainer = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.images[0]}
          alt={`Image 1`}
          className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-300 hover:scale-100"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {product.title}
        </h2>
        <div className="flex items-center mb-2">
          <div className="w-[51px] h-[27px] bg-orange-100 text-ecommerceOrangeColor font-black rounded-lg flex justify-center mr-3">
            <p>{product.discount}%</p>
          </div>
          <div className="text-[#69707D] line-through">
            <p className="text-gray-400 text-lg">${product.price}</p>
          </div>
        </div>
        <p className="text-black  text-bold text-lg mb-2">
          {getTotalPriceAfterDescount(product)}$
        </p>
        <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg shadow-md hover:shadow-sm hover:bg-orange-500 hover:text-white transition duration-300">
          See More
        </button>
      </div>
    </div>
  );
};

ProductCollectionContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCollectionContainer;
