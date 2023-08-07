import useGetRequest from '../feature-gitHub/hooks/useGetRequest';
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DictionaryDataContext } from './context/DictionaryContext';
const ManagingContext = ({ value }) => {
  const { word, updateContextWordDetails, updateErrorContext } = useContext(
    DictionaryDataContext
  );

  const [wordDefinitionObject, setWordDefinitionObject] = useState('');
  if (value == undefined) {
    return;
  }
  wordDefinitionObject;
  setWordDefinitionObject;
  const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  const data = useGetRequest(baseUrl, value);

  useEffect(() => {
    if (!data.data?.[0]) {
      console.log(`this update`);
      updateErrorContext();
      return;
    }
    if (data.data.title === 'No Definitions Found') {
      updateErrorContext();
      return;
    }
    updateContextWordDetails(data);
  }, [data.data]);

  console.log(word);

  //   const partOfSpeechObject = data.data[0].meanings.map((definition) => {
  //     return definition;
  //   });
  //   partOfSpeechObject;
  //   //   console.log(
  //   //     '🚀 ~ file: ManagingContext.jsx:16 ~ partOfSpeechObject ~ partOfSpeechObject:',
  //   //     data.data[0]
  //   //   );

  return <></>;
};
export default ManagingContext;
ManagingContext.propTypes = {
  value: PropTypes.string.isRequired,
};
