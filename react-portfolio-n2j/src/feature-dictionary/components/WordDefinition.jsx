import React from 'react';
import PropTypes from 'prop-types';
const WordDefinition = ({ wordDefinition }) => {
  console.log(wordDefinition);

  return (
    <div>
      <div>{wordDefinition}</div>
    </div>
  );
};

export default WordDefinition;
WordDefinition.propTypes = {
  wordDefinition: PropTypes.string.isRequired,
};
