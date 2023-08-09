import React from 'react';
import PropTypes from 'prop-types';

const WordDataContainerSingleWord = ({ wordData }) => {
  return <div className="font-dictionary text-xl">{`${wordData},  `}</div>;
};

export default WordDataContainerSingleWord;

WordDataContainerSingleWord.propTypes = {
  wordData: PropTypes.string.isRequired,
};
