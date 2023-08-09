import React, { useContext } from 'react';
import { DictionaryDataContext } from '../context/DictionaryContext';
const WordCommonDetails = () => {
  const { wordContextDetails } = useContext(DictionaryDataContext);

  if (wordContextDetails.error) {
    return (
      <div>
        <div> No Definitions Found </div>
        <div>
          Sorry pal, we could not find definitions for the
          <span className="text-amber-700 font-bold text-3xl ">
            {`"${wordContextDetails.word}"`}{' '}
          </span>{' '}
          you were looking for.
        </div>
      </div>
    );
  }
  return (
    <div className="mt-10 mb-12">
      {wordContextDetails.word && (
        <div className="flex justify-center mb-5">
          <div className="text-amber-700 font-bold text-3xl">
            {wordContextDetails.word}
          </div>
        </div>
      )}
      {wordContextDetails.phonetic && (
        <div className="flex justify-center mb-5">
          <div className="text-amber-700 font-bold group flex justify-center">
            {'Phonetic: '}
            <p className="text-amber-700 font-bold text-3xl group flex justify-center mt-[-0.5rem]">
              {wordContextDetails.phonetic}
            </p>
          </div>
        </div>
      )}

      {wordContextDetails.source && (
        <div className="flex justify-center mb-5">
          <a
            href={wordContextDetails.source}
            target="_blank"
            rel="noreferrer"
            className="text-amber-700"
          >
            <img src="src\feature-dictionary\assets\web.png" alt="" srcSet="" />
          </a>
        </div>
      )}

      {wordContextDetails.audio && (
        <div className=" flex justify-center mb-5">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <audio
                controls
                className="w-full bg-gray-200 rounded-lg"
                style={{ appearance: 'none' }}
              >
                <source src={wordContextDetails.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordCommonDetails;
