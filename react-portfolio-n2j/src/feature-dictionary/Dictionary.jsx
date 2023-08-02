import React, { useState } from 'react';
import Header from './components/Header';
import OnSubmitInput from './components/OnSubmitInput';
import useGetRequest from '../feature-gitHub/hooks/useGetRequest';

import PartsOfSpeechContainer from './components/PartsOfSpeechContainer';
const Dictionary = () => {
  const [word, setWord] = useState('big');
  const getWord = (value) => {
    setWord(value);
    console.log(word);
  };

  const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  const data = useGetRequest(baseUrl, word);

  if (data.data == null || data.data[0] == undefined) {
    console.log('undef');
    return <div>spinner</div>;
  }

  const partOfSpeechObject = data.data[0];
  console.log(
    '🚀 ~ file: ManagingContext.jsx:16 ~ partOfSpeechObject ~ partOfSpeechObject:',
    partOfSpeechObject
  );

  return (
    <>
      <div className="flex mt-[10rem] p-10 bg-slate-500">
        <Header />
        <OnSubmitInput getWord={getWord} />
      </div>
      <div className="">
        {partOfSpeechObject.meanings.map((definition, index) => (
          <PartsOfSpeechContainer key={index} wordObject={definition} />
        ))}
      </div>
    </>
  );
};

export default Dictionary;
