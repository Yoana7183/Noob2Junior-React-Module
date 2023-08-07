import React from 'react';
import PropTypes from 'prop-types';
const WordDataContainerSentence = ({ wordData }) => {
  const List = wordData.split('    ');
  return <div>{List}</div>;
};

export default WordDataContainerSentence;
WordDataContainerSentence.propTypes = {
  wordData: PropTypes.string.isRequired,
};
