import React, { useContext } from 'react';
import { DictionaryDataContext } from '../context/DictionaryContext';
const WordCommonDetails = () => {
  const { wordContextDetails } = useContext(DictionaryDataContext);
  const playAudio = () => {
    const audio = new Audio(wordContextDetails.audio);
    audio.play();
  };
  if (wordContextDetails.error) {
    return (
      <div className="mt-10 mb-12 sm:p-8 p-3 rounded-lg shadow-lg border-2 border-teal-700">
        <div className="text-teal-700 font-bold text-2xl mb-3">
          No Definitions Found
        </div>
        <div className="text-teal-700">
          Sorry pal, we could not find definitions for the{' '}
          <span className="text-amber-700 font-bold text-3xl">
            {`"${wordContextDetails.word}"`}{' '}
          </span>
          you were looking for.
        </div>
      </div>
    );
  }
  return (
    <div className="mt-10 mb-12 p-8 rounded-lg shadow-xl border border-transparent border-opacity-0 text-teal-950  ">
      {wordContextDetails.word && (
        <div>
          <div className="flex justify-center mb-5 flex-col">
            {wordContextDetails.wordOfTheDay && (
              <div className="text-teal-700 text-3xl font-light pb-5">
                {'This is your word of the day:'}
              </div>
            )}
            <div className="text-3xl font-bold uppercase text-teal-800 flex justify-center">
              {wordContextDetails.word}
            </div>
          </div>
        </div>
      )}
      {wordContextDetails.phonetic && (
        <div className="flex justify-center mb-5">
          <div className="group flex justify-center items-center">
            <p className="text-2xl font-semibold mt-[-0.5rem]  text-teal-800">
              Phonetic: {wordContextDetails.phonetic}
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
            className="text-teal-500"
          >
            <img src="\assetsDictionary\icons8-external-link-80.png" alt="" />
          </a>
        </div>
      )}

      {wordContextDetails.audio && (
        <div className="flex justify-center mb-5">
          <button
            onClick={playAudio}
            className="flex items-center justify-center bg-teal-500 p-2 rounded-lg shadow-md"
          >
            <img
              src="\assetsDictionary\icons8-sound-50.png"
              alt="Play Audio"
              className="w-8 h-8"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default WordCommonDetails;
