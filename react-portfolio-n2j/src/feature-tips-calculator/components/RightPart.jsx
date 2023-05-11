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
  const resultNumStyle = `text-hoverbuttonOfCalculatorAndRightSideBackground text-6xl flex bold `;

  return (
    <div className="bg-buttonOfCalculatorAndRightSideBackground w-[420px] h-[417px] rounded-lg p-10">
      <div className="text-white flex justify-between pt-5">
        <div>
          Tip Amount
          <p className="text-slate-300">/person</p>
        </div>
        <div className={resultNumStyle}>
          <div className="text-4xl pt-2 font-black">$</div>
          {totalByPerson.toFixed(2)}
        </div>
      </div>
      <div className="text-white flex justify-between pt-10">
        <div className="">
          Total
          <p className="text-slate-300">/person</p>
        </div>
        <div className={resultNumStyle}>
          <div className="text-4xl pt-2 font-black">$</div>

          {total.total.toFixed(2)}
        </div>
      </div>
      <ResetBtn />
    </div>
  );
};

export default RightPart;
