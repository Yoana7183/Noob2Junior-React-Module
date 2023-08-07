import PropTypes from 'prop-types';
import WordDataContainer from './WordDataContainer';
import React, { useState } from 'react';

const PartsOfSpeechContainer = ({ wordObject }) => {
  const [showButtons, setShowButtons] = useState({
    definition: 5,
    antonyms: 5,
    synonyms: 5,
  });
  console.log(wordObject);
  const handleShowMoreDefinition = () => {
    setShowButtons((prevShown) => ({
      ...prevShown,
      definition: prevShown.definition + 5,
    }));
  };

  const handleShowMoreAntonyms = () => {
    setShowButtons((prevShown) => ({
      ...prevShown,
      antonyms: prevShown.antonyms + 5,
    }));
  };

  const handleShowMoreSynonyms = () => {
    setShowButtons((prevShown) => ({
      ...prevShown,
      synonyms: prevShown.synonyms + 5,
    }));
  };

  return (
    <div className="flex border-blue-500 border-8">
      <div className="text-red-800">{wordObject.partOfSpeech}</div>
      <div>Definitions:</div>
      <div className="w-[55%]">
        {wordObject.definitions
          .slice(0, showButtons.definition)
          .map((definitionTexts, index) => (
            <WordDataContainer
              key={index}
              wordData={definitionTexts.definition}
            />
          ))}
        <div className="flex">
          {wordObject.antonyms
            .slice(0, showButtons.antonyms)
            .map((definitionTexts, index) => (
              <WordDataContainer key={index} wordData={definitionTexts} />
            ))}
        </div>
        <div>
          Synonyms:
          {wordObject.synonyms
            .slice(0, showButtons.synonyms)
            .map((definitionTexts, index) => (
              <WordDataContainer key={index} wordData={definitionTexts} />
            ))}
        </div>
      </div>
      {showButtons.definition < wordObject.definitions.length && (
        <button onClick={handleShowMoreDefinition}>
          Show More Definitions
        </button>
      )}
      {showButtons.synonymss < wordObject.synonyms.length && (
        <button onClick={handleShowMoreSynonyms}>Show More Synonyms</button>
      )}

      {showButtons.antonyms < wordObject.antonyms.length && (
        <button onClick={handleShowMoreAntonyms}>Show More Antonyms</button>
      )}
    </div>
  );
};

export default PartsOfSpeechContainer;
PartsOfSpeechContainer.propTypes = {
  wordObject: PropTypes.object.isRequired,
};
