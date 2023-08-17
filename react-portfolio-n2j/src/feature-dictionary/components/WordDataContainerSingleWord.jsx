import React from 'react';
import PropTypes from 'prop-types';

const WordDataContainerSingleWord = ({ wordData }) => {
  const capitalizedWord = wordData.charAt(0).toUpperCase() + wordData.slice(1);

  return (
    <div className="font-dictionary  normal-case text-base md:text-lg lg:text-xl">
      <span className="mb-2 font-3xl text-teal-950 text-lg uppercase text-teal-600">
        {capitalizedWord.slice(0, 1)}
      </span>
      {capitalizedWord.slice(1)},{' '}
    </div>
  );
};

export default WordDataContainerSingleWord;

WordDataContainerSingleWord.propTypes = {
  wordData: PropTypes.string,
};
