import React from 'react';
import PropTypes from 'prop-types';
const WordDataContainerSentence = ({ wordData }) => {
  const List = wordData.split('    ');
  return (
    <div className="font-dictionary text-base md:text-lg lg:text-xl">
      {List}
    </div>
  );
};

export default WordDataContainerSentence;
WordDataContainerSentence.propTypes = {
  wordData: PropTypes.string,
};
