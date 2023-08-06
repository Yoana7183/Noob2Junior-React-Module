import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DictionaryDataContext = createContext();

const DictionaryContextProvider = ({ children }) => {
  const [word, setWord] = useState('');
  const updateContextWordDetails = (word) => {
    setWord(word);
  };

  return (
    <DictionaryDataContext.Provider value={(word, updateContextWordDetails)}>
      {children}
    </DictionaryDataContext.Provider>
  );
};
DictionaryContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default DictionaryContextProvider;
