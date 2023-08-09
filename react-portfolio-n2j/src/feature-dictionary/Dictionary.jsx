import React, { useContext } from 'react';
import Header from './components/Header';
import OnSubmitInput from './components/OnSubmitInput';
import WordCommonDetails from './components/WordCommonDetails';
import MainContentContainer from './components/MainContentContainer';
import { DictionaryDataContext } from './context/DictionaryContext';
const Dictionary = () => {
  const { wordContextDetails } = useContext(DictionaryDataContext);

  return (
    <div className="font-dictionary">
      <Header />
      {wordContextDetails.loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="animate-spin rounded-full h-[15rem] w-[15rem] border-t-4 border-b-4 border-teal-700"></div>
        </div>
      ) : null}
      <div className="flex justify-center">
        <div className="flex mt-[5rem] mb-[5rem] border border-teal-600 rounded-lg shadow-lg p-24 flex-col ">
          <div className="flex justify-center">
            <WordCommonDetails />
          </div>
          <OnSubmitInput />
        </div>
      </div>

      <div className="flex justify-center mb-[5rem]">
        <div className="flex justify-center flex-col w-[50%]">
          {wordContextDetails.meanings !== null &&
            wordContextDetails.meanings.map((definition, index) => (
              <MainContentContainer key={index} wordObject={definition} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
