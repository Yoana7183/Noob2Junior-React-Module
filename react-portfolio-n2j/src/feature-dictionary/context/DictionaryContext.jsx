import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Context for managing dictionary-related state.
 * @type {React.Context}
 */
export const DictionaryDataContext = createContext();

const initialState = {
  word: '',
  phonetic: '',
  audio: '',
  source: '',
  meanings: null,
  error: '',
  loading: false,
};

/**
 * Context provider component for dictionary state management.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 * @returns {JSX.Element} - A JSX element wrapping the children with the dictionary context.
 */
const DictionaryContextProvider = ({ children }) => {
  const [wordContextDetails, setWord] = useState(initialState);

  /**
   * Updates the context with new word details.
   * @param {Object} newWord - The new word details.
   */
  const updateContextWordDetails = (newWord) => {
    setWord(newWord);
  };

  /**
   * Updates the context with an error state for a not found word.
   * @param {string} notFoundWord - The word that was not found.
   */
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
  children: PropTypes.node.isRequired,
};

export default DictionaryContextProvider;
