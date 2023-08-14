import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Context for storing tips calculator input values and functions.
 */
export const TipsCalculatorContext = createContext();

/**
 * Initial state for the tips calculator context.
 * @type {Object}
 */
const initialState = {
  bill: 0,
  tip: 0,
  people: 0,
};

/**
 * Context provider component for the tips calculator.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 * @returns {JSX.Element} - A JSX element wrapping the children with the tips calculator context.
 */
const TipsCalculatorContextProvider = ({ children }) => {
  const [inputsInObject, setinputsInObject] = useState(initialState);

  /**
   * Reset the context to the initial state.
   */
  const resetToInitialState = () => {
    setinputsInObject(initialState);
  };

  /**
   * Update a property in the context.
   * @param {string} objProperty - The property to update.
   * @param {number} newValue - The new value for the property.
   */
  const updateContext = (objProperty, newValue) => {
    setinputsInObject((prev) => ({
      ...prev,
      [objProperty]: newValue,
    }));
  };

  return (
    <TipsCalculatorContext.Provider
      value={{
        inputsInObject,
        resetContext: resetToInitialState,
        updateContext,
      }}
    >
      {children}
    </TipsCalculatorContext.Provider>
  );
};

TipsCalculatorContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TipsCalculatorContextProvider;
