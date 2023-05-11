import React, { useState, useEffect } from 'react';
import ResetBtn from './ResetBtn';

const RightPart = (total) => {
  const [isEmptyContainer, setIsEmptyContainer] = useState(false);
  let totalByPerson = total.byPerson;

  if (
    totalByPerson === null ||
    totalByPerson === Infinity ||
    isNaN(totalByPerson)
  ) {
    totalByPerson = 0;
  }
  useEffect(() => {
    if (total.total > 0) {
      setIsEmptyContainer(true);
    } else {
      setIsEmptyContainer(false);
    }
  }, [total.total]);

  const resultNumStyle = `text-hoverbuttonOfCalculatorAndRightSideBackground text-3xl lg:text-6xl  sm:text-6xl flex bold `;
  const backgroundStyleisEmpty = isEmptyContainer
    ? 'bg-buttonOfCalculatorAndRightSideBackground lg:w-[420px] rounded-lg p-10 lg:h-[417px] mr-[5%] ml-[5%]'
    : 'bg-white  lg:w-[420px] rounded-lg p-10 lg:h-[417px] mr-[5%] ml-[5%]';

  return (
    <div className={backgroundStyleisEmpty}>
      <div className="text-white flex justify-between pt-5">
        <div>
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
        <div className="">
          Total
          <p className="text-slate-300">/person</p>
        </div>
        <div className={resultNumStyle}>
          <div className="text-3xl lg:text-4xl  sm:text-4xl lg:pt-2 font-black">
            $
          </div>

          {total.total.toFixed(2)}
        </div>
      </div>
      <ResetBtn />
    </div>
  );
};

export default RightPart;
