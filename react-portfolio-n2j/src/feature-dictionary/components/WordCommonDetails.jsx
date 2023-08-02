import React from 'react';
import PropTypes from 'prop-types';
const WordCommonDetails = ({ word, phonetic, audio, source }) => {
  return (
    <div>
      <div>{word}</div>
      {phonetic && <div>Phonetic:{phonetic} </div>}
      {audio && <div>Audio: {audio} </div>}
      {source && <div>Source: {source} </div>}
    </div>
  );
};
WordCommonDetails.propTypes = {
  word: PropTypes.string.isRequired,
  phonetic: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default WordCommonDetails;
