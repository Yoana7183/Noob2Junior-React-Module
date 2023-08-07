import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DictionaryDataContext = createContext();
const initialState = {
  word: '',
  phonetic: '',
  audio: '',
  source: '',
  meanings: {},
  error: '',
};
const DictionaryContextProvider = ({ children }) => {
  const [wordContextDetails, setWord] = useState(initialState);
  const updateContextWordDetails = (newWord) => {
    setWord(newWord);
  };
  const updateErrorContext = (notFoundWord) => {
    setWord({
      ...initialState,
      word: notFoundWord,
      error: true,
    });
  };

  return (
    <DictionaryDataContext.Provider
      value={{
        wordContextDetails,
        updateContextWordDetails,
        updateErrorContext,
      }}
    >
      {children}
    </DictionaryDataContext.Provider>
  );
};
DictionaryContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default DictionaryContextProvider;
