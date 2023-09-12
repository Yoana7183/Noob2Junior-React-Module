import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getTotalPriceAfterDescount from '../getTotalPrice';

/**
 * Context for managing e-commerce state.
 * @property {Array<Object>} shoppingCartContent - The content of the shopping cart.
 * @property {function} addToCart - Function to add a product to the cart.
 * @property {function} removeFromCart - Function to remove a product from the cart.
 * @property {function} editCartItem - Function to edit a product in the cart.
 * @property {string} cartStatus - The status of the cart (open/closed).
 * @property {function} setCartStatus - Function to set the cart status.
 * @property {string} modalStatus - The status of the modal (open/closed).
 * @property {function} setModalStatus - Function to set the modal status.
 */

export const EcommerceContext = createContext();

/**
 * Provides e-commerce state management.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The wrapped child components.
 * @returns {JSX.Element} A JSX element wrapping children with e-commerce context.
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
  const [shoppingCartContent, setShoppingCartContent] = useState([
    initialEmptyCart,
  ]);

  /**
   * Stores the values of cart and modal statuses as strings for easier status access and identification.
   * This approach ensures that only one of them can be open at a time,
   * preventing conflicts and maintaining a smooth mobile view experience.
   * @function
   * @param {Object} productToAdd - The product to add to the cart.
   * @param {number} quantity - The quantity of the product to add.
   * @param {string} selectedSize - The selected size of the product.
   */
  const addToCart = (productToAdd, quantity = 1, selectedSize) => {
    if (selectedSize >= 0 || quantity == 0) {
      return;
    }

    const existingProductIndex = shoppingCartContent.findIndex(
      (product) =>
        product.ID === productToAdd.id && product.SIZE === selectedSize
    );

    if (existingProductIndex !== -1) {
      editCartItem(existingProductIndex, { QUANTITY: quantity });
    } else {
      setShoppingCartContent((prevProducts) => [
        ...prevProducts,
        {
          ID: productToAdd.id,
          IMG: productToAdd.images[0],
          TITLE: productToAdd.title,
          SIZE: selectedSize,
          PRICE: productToAdd.price,
          DISCOUNT: productToAdd.discount,
          QUANTITY: quantity,
          TOTAL: getTotalPriceAfterDescount(productToAdd),
        },
      ]);
    }
  };

  /**
   * Removes a product from the cart.
   * @function
   * @param {number} productId - The ID of the product to remove.
   */
  const removeFromCart = (productId) => {
    setShoppingCartContent((prevProducts) =>
      prevProducts.filter((product) => product.ID !== productId)
    );
  };

  /**
   * Edits a product in the cart.
   * @function
   * @param {number} index - The index of the product to edit.
   * @param {Object} updatedProperties - The properties to update for the product.
   */
  const editCartItem = (index, updatedProperties) => {
    setShoppingCartContent((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index] = {
        ...updatedProducts[index],
        ...updatedProperties,
      };
      return updatedProducts;
    });
  };

  return (
    <EcommerceContext.Provider
      value={{
        shoppingCartContent,
        addToCart,
        removeFromCart,
        editCartItem,
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
