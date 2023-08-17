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
  /**
   * Renders a list of components generated from mapping an array of objects.
   *
   * @param {Array} props.objectToBeMaped - The array of objects to be mapped.
   * @param {string|null} [props.propertyOfObject=null] - The property of the objects to use for data mapping.
   * @param {number} props.quantityOfShownWords - The maximum number of items to show.
   * @param {React.ComponentType} props.componentToBeGenerated - The component to generate for each item.
   * @returns {JSX.Element|null} The rendered component list, or null if prop validation fails.
   */
  const MappingResultContainer = ({
    objectToBeMaped,
    propertyOfObject = null,
    quantityOfShownWords,
    componentToBeGenerated: Component,
  }) => {
    if (
      objectToBeMaped === undefined ||
      objectToBeMaped === null ||
      quantityOfShownWords === undefined ||
      quantityOfShownWords === null ||
      Component === undefined ||
      Component === null
    ) {
      return;
    }

    return (
      <div>
        {objectToBeMaped.slice(0, quantityOfShownWords).map((part) => (
          <Component
            key={Math.random()}
            wordData={propertyOfObject ? part[propertyOfObject] : part}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="border-teal-700 font-dictionary border-2 rounded-lg shadow-2xl mb-5 p-10 ">
      <div className="text-teal-950  text-lg  mb-8 uppercase font-bold ">
        {wordObject.partOfSpeech}
      </div>
      <div className="">
        {wordObject.definitions && (
          <div>
            <p className="mb-2 font-medium  text-teal-950  text-lg uppercase text-teal-600 ">
              Definitions:
            </p>

            <MappingResultContainer
              objectToBeMaped={wordObject.definitions}
              propertyOfObject={`definition`}
              quantityOfShownWords={showButtons.definition}
              componentToBeGenerated={WordDataContainerSentence}
            />
          </div>
        )}
        {showButtons.definition < wordObject.definitions.length && (
          <ShowMoreBtn
            handlerPropery={handleShowMore}
            PropertyName={'definition'}
          />
        )}
      </div>
      <div className="flex mt-3 flex-col">
        {wordObject.antonyms.length > 0 && (
          <div>
            <p className="mb-2 font-medium  text-teal-950  text-lg uppercase text-teal-600 ">
              Antonyms:
            </p>
            <MappingResultContainer
              objectToBeMaped={wordObject.antonyms}
              quantityOfShownWords={showButtons.antonyms}
              componentToBeGenerated={WordDataContainerSingleWord}
            />
          </div>
        )}
        {showButtons.antonyms < wordObject.antonyms.length && (
          <ShowMoreBtn
            handlerPropery={handleShowMore}
            PropertyName={'antonyms'}
          />
        )}
      </div>
      <div className="flex mt-3 flex-col">
        {wordObject.synonyms.length > 0 && (
          <div>
            <p className="mb-2 font-medium  text-teal-950  text-lg uppercase text-teal-600 ">
              Synonyms:
            </p>
            <MappingResultContainer
              objectToBeMaped={wordObject.synonyms}
              quantityOfShownWords={showButtons.synonyms}
              componentToBeGenerated={WordDataContainerSingleWord}
            />
          </div>
        )}
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
  objectToBeMaped: PropTypes.array,
  quantityOfShownWords: PropTypes.number,
  componentToBeGenerated: PropTypes.func,
  propertyOfObject: PropTypes.string,
};
