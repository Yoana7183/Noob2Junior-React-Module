import React from 'react';

const ResultContainer = (total) => {
  let totall = JSON.stringify(total.total.total);
  //   let bePer = JSON.stringify(byPerson.byPerson);

  return (
    <div>
      <div>
        Tip Amount
        <p>/person</p>
        <div>{}</div>
      </div>
      <div>
        Total
        <p>/person</p>
        <div>{totall}</div>
      </div>
    </div>
  );
};

export default ResultContainer;
