import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DictionaryDataContext = createContext();
const initialState = {
  word: '',
  phonetic: '',
  audio: '',
  text: '',
  source: '',
  error: 'No Definitions Found',
};
const DictionaryContextProvider = ({ children }) => {
  const [word, setWord] = useState({});
  const updateContextWordDetails = (word) => {
    setWord(word);
  };
  const error = () => {
    setWord(initialState);
  };

  return (
    <DictionaryDataContext.Provider
      value={{ word, updateContextWordDetails, error }}
    >
      {children}
    </DictionaryDataContext.Provider>
  );
};
DictionaryContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default DictionaryContextProvider;
