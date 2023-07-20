import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TipsCalculatorContext = createContext();
const initialState = {
  bill: 0,
  tip: 0,
  people: 0,
};

const TipsCalculatorContextProvider = ({ children }) => {
  const [inputsInObject, setinputsInObject] = useState(initialState);
  const resetToInitialState = () => {
    setinputsInObject(initialState);
  };
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
  children: PropTypes.any.isRequired,
};

export default TipsCalculatorContextProvider;
