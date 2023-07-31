import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DictionaryDataContext = createContext();

const DictionaryContextProvider = ({ children }) => {
  const [word, setWord] = useState('');
  const updateContextWordDetails = (word) => {
    setWord(word);
  };
  const resetContext = () => {
    setWord('');
  };
  return (
    <DictionaryDataContext.Provider
      value={(word, updateContextWordDetails, resetContext)}
    >
      {children}
    </DictionaryDataContext.Provider>
  );
};
DictionaryContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
export default DictionaryContextProvider;
