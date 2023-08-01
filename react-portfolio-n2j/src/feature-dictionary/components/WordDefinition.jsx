import React from 'react';
import PropTypes from 'prop-types';
const WordDefinition = ({ word, key }) => {
  console.log(word);
  console.log(key);
  return <div>{word}</div>;
};

export default WordDefinition;
WordDefinition.propTypes = {
  word: PropTypes.object.isRequired,
  key: PropTypes.any.isRequired,
};
