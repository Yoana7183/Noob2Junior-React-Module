import React from 'react';
import PropTypes from 'prop-types';

const ProductCollectionContainer = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <img
        src={product.images[0]}
        alt={`Image 1`}
        className="w-full h-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-2">${product.price}</p>
      </div>
    </div>
  );
};

ProductCollectionContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCollectionContainer;
