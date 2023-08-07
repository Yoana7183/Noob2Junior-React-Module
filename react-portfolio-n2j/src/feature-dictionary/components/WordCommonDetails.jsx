import React, { useContext } from 'react';
import { DictionaryDataContext } from '../context/DictionaryContext';
const WordCommonDetails = () => {
  const { wordContextDetails } = useContext(DictionaryDataContext);
  console.log(wordContextDetails);
  if (wordContextDetails.error) {
    return (
      <div>
        <div> No Definitions Found </div>
        <div>
          Sorry pal, we could not find definitions for the
          <span> {`"${wordContextDetails.word}"`} </span> you were looking for.
        </div>
      </div>
    );
  }
  return (
    <div>
      Details:
      {wordContextDetails.word && <div>{wordContextDetails.word}</div>}
      {wordContextDetails.word && (
        <div>Phonetic: {wordContextDetails.phonetic}</div>
      )}
      {wordContextDetails.word && <div>Audio: {wordContextDetails.audio}</div>}
      {wordContextDetails.word && (
        <div>Source: {wordContextDetails.source}</div>
      )}
    </div>
  );
};

export default WordCommonDetails;
