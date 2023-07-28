import React from 'react';
import BackButton from '../components/back-button-navbar';
import Dictionary from '../feature-dictionary/Dictionary';
import { DictionaryDataContext } from '../feature-dictionary/components/context/DictionaryContext';
export default function DictionaryBasic() {
  return (
    <>
      <BackButton />
      <DictionaryDataContext>
        <Dictionary />
      </DictionaryDataContext>
    </>
  );
}
