import PropTypes from 'prop-types';
import WordDataContainerSentence from './WordDataContainerSentence';
import WordDataContainerSingleWord from './WordDataContainerSingleWord';
import React, { useState } from 'react';
import ShowMoreBtn from './ShowMoreBtn';
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
          <ShowMoreBtn
            handlerPropery={handleShowMore}
            PropertyName={'definition'}
          />
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
          <ShowMoreBtn
            handlerPropery={handleShowMore}
            PropertyName={'antonyms'}
          />
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
          <ShowMoreBtn
            handlerPropery={handleShowMore}
            PropertyName={'synonyms'}
          />
        )}
      </div>
    </div>
  );
};

export default MainContentContainer;
MainContentContainer.propTypes = {
  wordObject: PropTypes.object.isRequired,
};
