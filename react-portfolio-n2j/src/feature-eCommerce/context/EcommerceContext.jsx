import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EcommerceContext = createContext();

/**
 * Provides e-commerce state management.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The wrapped child components.
 * @returns {JSX.Element} - A JSX element wrapping children with e-commerce context.
 */
export const EcommerceContextProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartStatus, setcartStatus] = useState('closed');
  const [modalStatus, setModalStatus] = useState('closed');

  /**
   * Stores the values of cart and modal statuses as strings for easier status access and identification.
   * This approach ensures that only one of them can be open at a time,
   * preventing conflicts and maintaining a smooth mobile view experience.
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
