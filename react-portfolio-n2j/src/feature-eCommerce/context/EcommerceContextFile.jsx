import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EcommerceContext = createContext();

export const EcommerceContextProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartStatus, setcartStatus] = useState('closed');
  const [modalStatus, setModalStatus] = useState('closed');

  return (
    <EcommerceContext.Provider
      value={{
        quantity,
        setQuantity,
        cartStatus,
        setcartStatus,
        modalStatus,
        setModalStatus,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
EcommerceContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default EcommerceContextProvider;
