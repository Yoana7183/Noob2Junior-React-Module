import React from 'react';

import ResultContainer from './ResultContainer';
const RightPart = (total, byPerson) => {
  return (
    <>
      <ResultContainer total={total} byPerson={byPerson} />
    </>
  );
};

export default RightPart;
