import React from 'react';
import ResetBtn from './ResetBtn';

const RightPart = (total) => {
  let totalByPerson = total.byPerson;
  if (
    totalByPerson === null ||
    totalByPerson === Infinity ||
    isNaN(totalByPerson)
  ) {
    totalByPerson = 0;
  }
  return (
    <div>
      <div>
        Tip Amount
        <p>/person</p>
        <div>{JSON.stringify(totalByPerson)}</div>
      </div>
      <div>
        Total
        <p>/person</p>
        <div>{JSON.stringify(total.total)}</div>
      </div>
      <ResetBtn />
    </div>
  );
};

export default RightPart;
