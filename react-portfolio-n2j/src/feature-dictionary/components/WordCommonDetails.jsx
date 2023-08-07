import React, { useContext } from 'react';
import { DictionaryDataContext } from '../context/DictionaryContext';
const WordCommonDetails = () => {
  const { wordContextDetails } = useContext(DictionaryDataContext);

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
      {wordContextDetails.word && (
        <div>
          Details: <div>{wordContextDetails.word}</div>
        </div>
      )}
      {wordContextDetails.phonetic && (
        <div>Phonetic: {wordContextDetails.phonetic}</div>
      )}
      {wordContextDetails.audio && <div>Audio: {wordContextDetails.audio}</div>}
      {wordContextDetails.source && (
        <div>Source: {wordContextDetails.source}</div>
      )}
    </div>
  );
};

export default WordCommonDetails;
