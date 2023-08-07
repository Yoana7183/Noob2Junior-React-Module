import React from 'react';
import PropTypes from 'prop-types';
import WordDefinition from './WordDefinition';
const PartsOfSpeechContainer = ({ wordObject }) => {
  console.log(wordObject);

  return (
    <div className="flex border-blue-500 border-4">
      <div className="text-red-800">{wordObject.partOfSpeech}</div>
      <div>Definitions:</div>
      <div className="w-[55%]">
        {wordObject.definitions.map((definitionTexts, index) => {
          return (
            <WordDefinition
              key={index}
              wordDefinition={definitionTexts.definition}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PartsOfSpeechContainer;
PartsOfSpeechContainer.propTypes = {
  wordObject: PropTypes.object.isRequired,
};
