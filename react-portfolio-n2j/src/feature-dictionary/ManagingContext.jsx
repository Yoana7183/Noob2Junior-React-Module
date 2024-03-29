import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DictionaryDataContext } from './context/DictionaryContext';
import { words } from './components/words';
import useGetRequest from '../feature-gitHub/hooks/useGetRequest';

/**
 * Component for managing dictionary context and fetching word details.
 * @param {Object} props - The component props.
 * @param {string} props.value - The word value for which to fetch details.
 */
const ManagingContext = ({ value }) => {
  const [wordToFetch, setWordToFetch] = useState('');
  const [wordOfTheDayShown, setwordOfTheDayShown] = useState(false);
  const { updateContextWordDetails, updateErrorContext } = useContext(
    DictionaryDataContext
  );

  useEffect(() => {
    setwordOfTheDayShown(true);
    const randomIndex = Math.floor(Math.random() * words.length);
    setWordToFetch(words[randomIndex]);
  }, []);

  if (value == undefined) {
    return <></>;
  }

  useEffect(() => {
    if (wordOfTheDayShown) {
      setwordOfTheDayShown(false);
      setWordToFetch(value);
    }
    if (!wordOfTheDayShown && value.length > 0) {
      setWordToFetch(value);
    }
  }, [value]);

  const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
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
      wordOfTheDay: wordOfTheDayShown,
    });
  }, [data.data, data.loading, data.error, wordOfTheDayShown]);
};

ManagingContext.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ManagingContext;
