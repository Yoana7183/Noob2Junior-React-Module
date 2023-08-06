import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import OnSubmitInput from './components/OnSubmitInput';
import useGetRequest from '../feature-gitHub/hooks/useGetRequest';
import WordCommonDetails from './components/WordCommonDetails';
// import PartsOfSpeechContainer from './components/PartsOfSpeechContainer';
const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const Dictionary = () => {
  const [word, setWord] = useState('big');
  const [wordObject, setWordObject] = useState({});

  const getWord = (value) => {
    setWord(value);
  };
  const data = useGetRequest(baseUrl, word);
  useEffect(() => {
    if (data.data == null) {
      return;
    }
    if (data.error) {
      setWordObject(data);
      console.log(data.data.title);
    }
    if (data.data[0] !== undefined) {
      setWordObject(data);
    }

    if (data.data[0] == undefined) {
      setWordObject({});
    }
  }, [data.data]);

  console.log(wordObject);
  return (
    <>
      <div className="flex mt-[10rem] p-10 bg-slate-500">
        <Header />
        <OnSubmitInput getWord={getWord} />
      </div>
      <div>{<WordCommonDetails data={wordObject} />}</div>
      {/* <div className="">
        {partOfSpeechObject.meanings.map((definition, index) => (
          <PartsOfSpeechContainer key={index} wordObject={definition} />
        ))}
      </div> */}
    </>
  );
};

export default Dictionary;
