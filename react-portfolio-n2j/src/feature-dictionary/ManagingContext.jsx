import useGetRequest from '../feature-gitHub/hooks/useGetRequest';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DictionaryDataContext } from './context/DictionaryContext';
import { words } from './components/words';

const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const ManagingContext = ({ value }) => {
  const [wordToFetch, setWordToFetch] = useState('');
  const [wordOfTheDayShown, setwordOfTheDayShown] = useState(false);
  const { updateContextWordDetails, updateErrorContext } = useContext(
    DictionaryDataContext
  );

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWordToFetch(words[randomIndex]);
    setwordOfTheDayShown(true);
  }, []);

  useEffect(() => {
    if (wordOfTheDayShown) {
      setWordToFetch(value);
      setwordOfTheDayShown(false);
    }
  }, [value]);

  if (value == undefined) {
    return;
  }

  const data = useGetRequest(baseUrl, wordToFetch);

  useEffect(() => {
    if (data.error == true) {
      updateErrorContext(value);
      return;
    }

    if (!data.data?.[0]) {
      return;
    }

    updateContextWordDetails({
      word: data.data[0]?.word ?? null,
      phonetic: data.data[0]?.phonetics[0]?.text ?? null,
      audio: data.data[0]?.phonetics[0]?.audio ?? null,
      source: data.data[0]?.phonetics[0]?.sourceUrl ?? null,
      meanings: data.data[0]?.meanings ?? null,
      error: false,
      loading: data.loading,
      ...(wordOfTheDayShown ? { wordOfTheDay: true } : {}),
    });
  }, [data.data, data.loading, data.error, wordOfTheDayShown]);

  return <></>;
};
export default ManagingContext;
ManagingContext.propTypes = {
  value: PropTypes.string.isRequired,
};
