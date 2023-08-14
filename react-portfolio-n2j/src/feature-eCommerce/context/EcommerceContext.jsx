import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Context for managing e-commerce related state.
 * @type {React.Context}
 */
export const EcommerceContext = createContext();

/**
 * Context provider component for e-commerce state management.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 * @returns {JSX.Element} - A JSX element wrapping the children with the e-commerce context.
 */
export const EcommerceContextProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartStatus, setcartStatus] = useState('closed');
  const [modalStatus, setModalStatus] = useState('closed');
  /**
   *cartStatus && modalStatus store values in the form of a string to make it easier to access the status 
   *and to know at any moment which of the two is open. so that they can self-close 
   /they cannot both be open/ and not break the mobile view especially!
   */
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
  children: PropTypes.node.isRequired,
};

export default EcommerceContextProvider;
