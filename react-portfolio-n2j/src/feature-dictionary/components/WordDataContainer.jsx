import React from 'react';
import PropTypes from 'prop-types';
const WordDataContainer = ({ wordData }) => {
  return <div>{` ${wordData},  `}</div>;
};

export default WordDataContainer;
WordDataContainer.propTypes = {
  wordData: PropTypes.string.isRequired,
};
