import useGetRequest from '../feature-gitHub/hooks/useGetRequest';
import React from 'react';
import PropTypes from 'prop-types';
const ManagingContext = ({ value }) => {
  if (value == undefined) {
    return;
  }
  const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  const data = useGetRequest(baseUrl, value);
  console.log(data);
  return <></>;
};

export default ManagingContext;
ManagingContext.propTypes = {
  value: PropTypes.string.isRequired,
};
