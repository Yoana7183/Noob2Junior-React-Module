import React, { useContext } from 'react';
import { DictionaryDataContext } from '../context/DictionaryContext';
const WordCommonDetails = () => {
  const word = useContext(DictionaryDataContext);

  if (word == undefined) {
    return <div>is undefined</div>;
  }
  return (
    <div>
      Details:
      {/* <div>{word.word}</div> */}
      {/* {word.data[0].phonetic && <div>Phonetic:{word.data[0].phonetic} </div>} */}
      {/* {audio && <div>Audio: {audio} </div>}
      {source && <div>Source: {source} </div>} */}
    </div>
  );
};

export default WordCommonDetails;
