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
  const resultNumStyle = `text-hoverbuttonOfCalculatorAndRightSideBackground text-6xl`;

  return (
    <div className="bg-buttonOfCalculatorAndRightSideBackground w-[420px] h-[417px] rounded-lg p-10">
      <div className="text-white">
        Tip Amount
        <p className="text-slate-300">/person</p>
        <div className={resultNumStyle}>{totalByPerson.toFixed(2)}</div>
      </div>
      <div className="text-white">
        Total
        <p className="text-slate-300">/person</p>
        <div className={resultNumStyle}>{total.total.toFixed(2)}</div>
      </div>
      <ResetBtn />
    </div>
  );
};

export default RightPart;
