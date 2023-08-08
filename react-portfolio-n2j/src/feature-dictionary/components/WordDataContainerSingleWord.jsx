import React from 'react';
import PropTypes from 'prop-types';

const WordDataContainerSingleWord = ({ wordData }) => {
  return <div>{`${wordData},  `}</div>;
};

export default WordDataContainerSingleWord;

WordDataContainerSingleWord.propTypes = {
  wordData: PropTypes.string.isRequired,
};
