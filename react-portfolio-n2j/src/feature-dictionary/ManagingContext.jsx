import useGetRequest from '../feature-gitHub/hooks/useGetRequest';
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DictionaryDataContext } from './context/DictionaryContext';
const ManagingContext = ({ value }) => {
  const { updateContextWordDetails, updateErrorContext } = useContext(
    DictionaryDataContext
  );
  if (value == undefined) {
    return;
  }

  const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  const data = useGetRequest(baseUrl, value);

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
    });
  }, [data.data, data.loading, data.error]);

  return <></>;
};
export default ManagingContext;
ManagingContext.propTypes = {
  value: PropTypes.string.isRequired,
};
