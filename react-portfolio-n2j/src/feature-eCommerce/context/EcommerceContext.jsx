import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EcommerceContext = createContext();

/**
 * Provides e-commerce state management.

 * @param {React.ReactNode} props.children - The wrapped child components.
 * @returns {JSX.Element} - A JSX element wrapping children with e-commerce context.
 */
const initialEmptyCart = {
  ID: null,
  IMG: null,
  TITLE: null,
  SIZE: null,
  PRICE: null,
  DISCOUNT: null,
  QUANTITY: null,
  TOTAL: null,
};
export const EcommerceContextProvider = ({ children }) => {
  const [cartStatus, setCartStatus] = useState('closed');
  const [modalStatus, setModalStatus] = useState('closed');
  const [cartContent, setProductsInOrder] = useState(initialEmptyCart);
  console.log(initialEmptyCart);
  /**
   * Stores the values of cart and modal statuses as strings for easier status access and identification.
   * This approach ensures that only one of them can be open at a time,
   * preventing conflicts and maintaining a smooth mobile view experience.
   */

  return (
    <EcommerceContext.Provider
      value={{
        cartContent,
        setProductsInOrder,
        cartStatus,
        setCartStatus,
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
