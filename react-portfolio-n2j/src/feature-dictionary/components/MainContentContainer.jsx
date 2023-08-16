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
    <div className="border-teal-700 font-dictionary border-2 rounded-lg shadow-2xl mb-5 p-10 ">
      <div className="text-teal-950  text-lg  mb-2 uppercase font-bold">
        {wordObject.partOfSpeech}
      </div>
      <div className="">
        {wordObject.definitions && (
          <p className="mb-2 font-medium  text-teal-950  text-lg uppercase text-teal-600 ">
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
            className="bg-gradient-to-r from-teal-800 to-teal-600 hover:from-teal-700 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent py-3 px-6 text-white font-normal w-[240px] rounded-md text-sm mt-3 transition duration-500 ease-in-out transform hover:scale-105 shadow-md ring-2 ring-teal-700"
            onClick={() => handleShowMore('definition')}
          >
            <span className="shadow-inner">Show More Definitions</span>
          </button>
        )}
      </div>
      <div className="flex mt-3 flex-col">
        {wordObject.antonyms.length > 0 && (
          <p className="mb-2 font-medium  text-teal-950  text-lg uppercase text-teal-600 ">
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
            className="bg-gradient-to-r from-teal-800 to-teal-600 hover:from-teal-700 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent py-2 px-4 text-white font-bold w-[220px] rounded-md text-sm mt-2 transition duration-300 shadow-md ring-2 ring-teal-700"
            onClick={() => handleShowMore('antonyms')}
          >
            <span className="shadow-inner">Show More Antonyms</span>
          </button>
        )}
      </div>
      <div className="flex mt-3 flex-col">
        {wordObject.synonyms.length > 0 && (
          <p className="mb-2 font-medium  text-teal-950  text-lg uppercase text-teal-600 ">
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
            className="bg-gradient-to-r from-teal-800 to-teal-600 hover:from-teal-700 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent py-2 px-4 text-white font-bold rounded-md w-[220px] text-sm mt-2 transition duration-300 shadow-md ring-2 ring-teal-700"
            onClick={() => handleShowMore('synonyms')}
          >
            <span className="shadow-inner">Show More Synonyms</span>
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
