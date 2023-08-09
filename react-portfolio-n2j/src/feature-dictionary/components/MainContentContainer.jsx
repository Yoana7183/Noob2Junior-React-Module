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
    <div className="border-teal-300 font-dictionary border-2 p-4 rounded-lg shadow-lg ">
      <div className="text-teal-950  text-lg  mb-2 uppercase font-bold">
        {wordObject.partOfSpeech}
      </div>
      <div>
        {wordObject.definitions && (
          <p className="mb-2 font-medium  text-teal-950  text-lg uppercase text-teal-600  ">
            Definitions:
          </p>
        )}
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
            className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded-md text-sm mt-2 transition duration-300"
            onClick={() => handleShowMore('definition')}
          >
            Show More Definitions
          </button>
        )}
      </div>
      <div className="flex mt-3 flex-col">
        {wordObject.antonyms.length > 0 && (
          <p className="mr-2 font-semibold text-teal-950  text-lg  mb-2 ">
            Antonyms:
          </p>
        )}
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
            className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded-md text-sm mt-2 transition duration-300"
            onClick={() => handleShowMore('antonyms')}
          >
            Show More Antonyms
          </button>
        )}
      </div>
      <div className="flex mt-3 flex-col">
        {wordObject.synonyms.length > 0 && (
          <p className="mr-2 font-semibold text-teal-950  text-lg  mb-2 ">
            Synonyms:
          </p>
        )}
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
            className="bg-teal-400 hover:bg-teal-500 py-2 px-4 rounded-md text-sm mt-2 transition duration-300"
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
