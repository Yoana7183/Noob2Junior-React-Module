import React from 'react';
import BackButton from '../components/back-button-navbar';
import Dictionary from '../feature-dictionary/Dictionary';
import DictionaryContextProvider from '../feature-dictionary/components/context/DictionaryContext';
export default function DictionaryBasic() {
  return (
    <>
      <BackButton />
      <DictionaryContextProvider>
        <Dictionary />
      </DictionaryContextProvider>
    </>
  );
}
