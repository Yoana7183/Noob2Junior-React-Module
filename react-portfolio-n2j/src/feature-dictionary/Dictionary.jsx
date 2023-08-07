import React, { useContext } from 'react';
import Header from './components/Header';
import OnSubmitInput from './components/OnSubmitInput';
import WordCommonDetails from './components/WordCommonDetails';
import MainContentContainer from './components/MainContentContainer';
import { DictionaryDataContext } from './context/DictionaryContext';
const Dictionary = () => {
  const { wordContextDetails } = useContext(DictionaryDataContext);
  return (
    <>
      <div className="flex mt-[10rem] p-10 bg-slate-500">
        <Header />
        <OnSubmitInput />
      </div>
      <div>
        <WordCommonDetails />
      </div>
      <div className="">
        {wordContextDetails.meanings !== null &&
          wordContextDetails.meanings.map((definition, index) => (
            <MainContentContainer key={index} wordObject={definition} />
          ))}
      </div>
    </>
  );
};

export default Dictionary;
