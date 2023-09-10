import React from 'react';
import PropTypes from 'prop-types';

const ProductCollectionContainer = ({ product }) => {
  return (
    <>
      <div>{product.title}</div>
      <div>
        <img src={product.images[0]} alt={`Image 1`} />
      </div>
    </>
  );
};

ProductCollectionContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCollectionContainer;
