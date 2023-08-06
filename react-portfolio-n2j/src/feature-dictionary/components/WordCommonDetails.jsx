import React from 'react';
import PropTypes from 'prop-types';
const WordCommonDetails = ({ data }) => {
  if (data.data == undefined) {
    return;
  }
  return (
    <div>
      <div>{data.data[0].word}</div>
      {data.data[0].phonetic && <div>Phonetic:{data.data[0].phonetic} </div>}
      {/* {audio && <div>Audio: {audio} </div>}
      {source && <div>Source: {source} </div>} */}
    </div>
  );
};
WordCommonDetails.propTypes = {
  data: PropTypes.object.isRequired,
  // phonetic: PropTypes.string.isRequired,
  // audio: PropTypes.string.isRequired,
  // source: PropTypes.string.isRequired,
};

export default WordCommonDetails;
