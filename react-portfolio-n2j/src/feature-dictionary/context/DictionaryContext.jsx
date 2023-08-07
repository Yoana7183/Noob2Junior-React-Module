import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DictionaryDataContext = createContext();
const initialState = {
  word: '',
  phonetic: '',
  audio: '',
  text: '',
  source: '',
  meanings: {},
  error: '',
};
const DictionaryContextProvider = ({ children }) => {
  const [word, setWord] = useState(initialState);
  const updateContextWordDetails = (word) => {
    setWord(word);
  };
  const updateErrorContext = () => {
    setWord({
      ...initialState,
      error: 'No Definitions Found',
    });
  };

  return (
    <DictionaryDataContext.Provider
      value={{ word, updateContextWordDetails, updateErrorContext }}
    >
      {children}
    </DictionaryDataContext.Provider>
  );
};
DictionaryContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default DictionaryContextProvider;
