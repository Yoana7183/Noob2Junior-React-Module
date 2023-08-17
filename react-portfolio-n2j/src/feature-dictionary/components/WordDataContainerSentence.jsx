import React from 'react';
import PropTypes from 'prop-types';

const WordDataContainerSentence = ({ wordData }) => {
  const firstLetter = wordData.charAt(0).toUpperCase();
  const restOfSentence = wordData.slice(1);

  return (
    <div className="font-dictionary text-base md:text-lg lg:text-xl">
      <span className="mb-2 font-medium text-teal-950 text-lg uppercase text-teal-600">
        {firstLetter}
      </span>
      {restOfSentence}
    </div>
  );
};

export default WordDataContainerSentence;

WordDataContainerSentence.propTypes = {
  wordData: PropTypes.string,
};
