import React, { useContext, useState, useEffect } from 'react';

import { TipsCalculatorContext as PercentTipContext } from '../context/TipsCalculatorContext-file';
import useValidateNumberInput from '../hooks/useValidateNumberInput';
import { v4 as uuidv4 } from 'uuid';
const TipsBtnAndInput = () => {
  const { updateContext } = useContext(PercentTipContext);

  const [percentOfBtn, setPercent] = useState(0);
  const [percentOfTitInput, setpercentOfTitInput] = useState(0);
  const [isTipComesFromBtn, setisTipComesFromBtn] = useState(0);
  const [error, setError] = useState(false);
  const buttonTipsPercent = [5, 10, 15, 25, 50];
  useEffect(() => {
    updateContext(['tip'], percentOfBtn);
  }, [percentOfBtn]);

  const handleChange = (event) => {
    setpercentOfTitInput(event.target.value.trim());
  };
  const validInput = useValidateNumberInput(
    setError,
    percentOfTitInput,
    setpercentOfTitInput,
    ['tip']
  );

  // only butttons tips logic
  const value = isTipComesFromBtn ? '' : validInput;

  function handleButtonClick(newPercent) {
    setisTipComesFromBtn(0);
    setPercent(newPercent);
  }

  const btnStyle = ` bg-buttonOfCalculatorAndRightSideBackground bg-cover hover:bg-hoverbuttonOfCalculatorAndRightSideBackground text-2xl font-bold rounded-md text-white hover:text-black h-[48px] lg:w-[117px] lg:h-[48px] sm:w-[220px] sm:h-[70px]`;
  const errorInInputStyle = error
    ? 'bg-red-800 rounded-md lg:w-[100%] lg:h-[48px] text-2xl text-right pr-4 sm:w-[220px] sm:h-[70px]'
    : 'bg-teal-50 rounded-md lg:w-[100%] lg:h-[48px] text-2xl text-right pr-4 sm:w-[220px] sm:h-[70px]';
  return (
    <section className="pb-10 text-buttonOfCalculatorAndRightSideBackground font-bold ">
      {'  Select Tip %'}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {buttonTipsPercent.map((percent) => (
          <button
            key={uuidv4()}
            className={btnStyle}
            onClick={() => handleButtonClick(percent)}
          >
            {percent}%
          </button>
        ))}
        <input
          inputMode="numeric"
          className={errorInInputStyle}
          value={value}
          placeholder="Custom"
          type="text"
          id="tip"
          name="tip"
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default TipsBtnAndInput;
