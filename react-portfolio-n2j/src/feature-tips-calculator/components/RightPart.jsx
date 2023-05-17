import React, { useState, useEffect } from 'react';
import ResetBtn from './ResetBtn';

const RightPart = (total) => {
  const [isEmptyContainer, setIsEmptyContainer] = useState(false);
  let totalByPerson = total.byPerson;
  let totalAmount = total.total;

  if (
    totalByPerson === null ||
    totalByPerson === Infinity ||
    isNaN(totalByPerson) ||
    totalByPerson === -Infinity ||
    totalByPerson < 0
  ) {
    totalByPerson = 0;
  }
  if (
    totalAmount === null ||
    totalAmount === Infinity ||
    isNaN(totalAmount) ||
    totalAmount === -Infinity ||
    totalAmount < 0
  ) {
    totalAmount = 0;
  }
  if (totalAmount == 0) {
    totalAmount == '';
  }
  if (totalByPerson == 0) {
    totalByPerson == '';
  }
  useEffect(() => {
    if (total.total > 0) {
      setIsEmptyContainer(true);
    } else {
      setIsEmptyContainer(false);
    }
  }, [totalAmount]);

  const resultNumStyle = `text-hoverbuttonOfCalculatorAndRightSideBackground text-3xl lg:text-6xl  sm:text-6xl flex bold `;
  const backgroundStyleisEmpty = isEmptyContainer
    ? 'bg-buttonOfCalculatorAndRightSideBackground mt-[-6rem] lg:w-[420px] sm:mt-[-3rem] lg:mt-0 rounded-lg p-6 lg:h-[417px] mr-[5%] ml-[5%]'
    : 'bg-white  lg:w-[420px] mt-[-6rem]  rounded-lg p-10 lg:h-[417px] sm:mt-[-3rem] lg:mt-0 mr-[5%] ml-[5%] ';

  return (
    <div className={backgroundStyleisEmpty}>
      <div className="text-white flex justify-between pt-5">
        <div className="font-bold">
          Tip Amount
          <p className="text-slate-300">/person</p>
        </div>
        <div className={resultNumStyle}>
          <div className="text-3xl lg:text-4xl  sm:text-4xl p-0 lg:pt-2 font-black">
            $
          </div>
          {totalByPerson.toFixed(2)}
        </div>
      </div>
      <div className="text-white flex justify-between pt-10">
        <div className="font-bold">
          Total
          <p className="text-slate-300">/person</p>
        </div>
        <div className={resultNumStyle}>
          <div className="text-3xl lg:text-4xl  sm:text-4xl lg:pt-2 font-black">
            $
          </div>

          {totalAmount.toFixed(2)}
        </div>
      </div>
      <ResetBtn />
    </div>
  );
};

export default RightPart;
