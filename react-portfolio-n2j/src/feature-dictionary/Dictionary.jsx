import React, { useState } from 'react';
import Header from './components/Header';
import OnSubmitInput from './components/OnSubmitInput';
import useGetRequest from '../feature-gitHub/hooks/useGetRequest';
import WordCommonDetails from './components/WordCommonDetails';
import PartsOfSpeechContainer from './components/PartsOfSpeechContainer';
const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const Dictionary = () => {
  const [word, setWord] = useState('big');
  const getWord = (value) => {
    setWord(value);
  };

  const data = useGetRequest(baseUrl, word);
  if (data.error) {
    // console.log(data.data.title);
    return <div>spinner console.error;</div>;
  }
  if (data.data[0] == undefined) {
    return <div>{data.data.title}</div>;
  }
  const currentWord = data.data[0]?.word || data.data[0].title;
  const currentWordPhonetic = data.data[0]?.phonetic || '';
  const currentWordPhoneticAudio = data.data[0]?.phonetics[0]?.audio || '';
  const currentWordPhoneticSourceUrl =
    data.data[0]?.phonetics[0]?.sourceUrl || '';

  const partOfSpeechObject = data.data[0];
  console.log(
    '🚀 ~ file: ManagingContext.jsx:16 ~ partOfSpeechObject ~ partOfSpeechObject:',
    partOfSpeechObject
  );
  console.log(data.data[0].phonetic);
  return (
    <>
      <div className="flex mt-[10rem] p-10 bg-slate-500">
        <Header />
        <OnSubmitInput getWord={getWord} />
      </div>
      <div>
        {
          <WordCommonDetails
            word={currentWord}
            phonetic={currentWordPhonetic}
            audio={currentWordPhoneticAudio}
            source={currentWordPhoneticSourceUrl}
          />
        }
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
