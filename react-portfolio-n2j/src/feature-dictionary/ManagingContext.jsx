// import useGetRequest from '../feature-gitHub/hooks/useGetRequest';
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const ManagingContext = ({ value }) => {
//   const [wordDefinitionObject, setWordDefinitionObject] = useState('');
//   if (value == undefined) {
//     return;
//   }
//   wordDefinitionObject;
//   setWordDefinitionObject;
//   const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
//   const data = useGetRequest(baseUrl, value);
//   if (data.data == null || data.data[0] == undefined) {
//     return;
//   }
//   const partOfSpeechObject = data.data[0].meanings.map((definition) => {
//     return definition;
//   });
//   partOfSpeechObject;
//   console.log(
//     '🚀 ~ file: ManagingContext.jsx:16 ~ partOfSpeechObject ~ partOfSpeechObject:',
//     data.data[0]
//   );
//   return <></>;
// };
// export default ManagingContext;
// ManagingContext.propTypes = {
//   value: PropTypes.string.isRequired,
// };
