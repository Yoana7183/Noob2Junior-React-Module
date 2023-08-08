import PropTypes from 'prop-types';
import WordDataContainerSentence from './WordDataContainerSentence';
import WordDataContainerSingleWord from './WordDataContainerSingleWord';
import React, { useState } from 'react';

const MainContentContainer = ({ wordObject }) => {
  const [showButtons, setShowButtons] = useState({
    definition: 2,
    antonyms: 5,
    synonyms: 5,
  });

  const handleShowMore = (showProperty) => {
    setShowButtons((prevShown) => ({
      ...prevShown,
      [showProperty]: prevShown[showProperty] + 5,
    }));
  };

  return (
    <div className=" border-blue-500 border-8">
      <div className="text-red-800">{wordObject.partOfSpeech}</div>
      <div>
        {wordObject.definitions && 'Definitions:'}
        {wordObject.definitions
          .slice(0, showButtons.definition)
          .map((definitionTexts, index) => (
            <WordDataContainerSentence
              key={index}
              wordData={definitionTexts.definition}
            />
          ))}
        {showButtons.definition < wordObject.definitions.length && (
          <button
            className="bg-grey border-4 border-r-slate-700"
            onClick={() => handleShowMore('definition')}
          >
            Show More Definitions
          </button>
        )}
      </div>
      <div className="flex">
        {wordObject.antonyms.length > 0 && 'Antonyms: '}
        {wordObject.antonyms
          .slice(0, showButtons.antonyms)
          .map((definitionTexts, index) => (
            <WordDataContainerSingleWord
              key={index}
              wordData={definitionTexts}
            />
          ))}
        {showButtons.antonyms < wordObject.antonyms.length && (
          <button
            className="bg-grey border-4 border-r-slate-700"
            onClick={() => handleShowMore('antonyms')}
          >
            Show More Antonyms
          </button>
        )}
      </div>
      <div className="flex">
        {wordObject.synonyms.length > 0 && 'Synonyms: '}
        {wordObject.synonyms
          .slice(0, showButtons.synonyms)
          .map((definitionTexts, index) => (
            <WordDataContainerSingleWord
              key={index}
              wordData={definitionTexts}
            />
          ))}
        {showButtons.synonyms < wordObject.synonyms.length && (
          <button
            className="bg-grey border-4 border-r-slate-700"
            onClick={() => handleShowMore('synonyms')}
          >
            Show More Synonyms
          </button>
        )}
      </div>
    </div>
  );
};

export default MainContentContainer;
MainContentContainer.propTypes = {
  wordObject: PropTypes.object.isRequired,
};
