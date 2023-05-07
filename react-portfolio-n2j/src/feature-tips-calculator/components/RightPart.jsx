import React from 'react';

const RightPart = (total, byPerson) => {
  return (
    <div>
      <div>
        Tip Amount
        <p>/person</p>
        <div>{byPerson.byPerson}</div>
      </div>
      <div>
        Total
        <p>/person</p>
        <div>{total.total}</div>
      </div>
    </div>
  );
};

export default RightPart;
