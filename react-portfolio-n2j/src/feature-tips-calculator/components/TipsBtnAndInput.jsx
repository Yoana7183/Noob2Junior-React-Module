import React, { useContext, useState, useEffect } from 'react';
import { TipsContext as PercentTipContext } from '../Tips_Calculator';

const TipsBtnAndInput = () => {
  const { inputsInObject, setinputsInObject } = useContext(PercentTipContext);
  const [percentOfBtn, setPercent] = useState(0);
  const [percentOfTitInput, setpercentOfTitInput] = useState(0);
  const [isTipComesFromBtn, setisTipComesFromBtn] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setinputsInObject((prev) => ({ ...prev, tip: percentOfBtn }));
  }, [percentOfBtn]);

  useEffect(() => {
    if (/^[a-zA-Z]+$/g.test(percentOfTitInput)) {
      setError(true);
    }
  }, [percentOfTitInput]);

  useEffect(() => {
    if (percentOfTitInput == 0) {
      setError(false);
    }
  }, [percentOfTitInput, inputsInObject.tip]);

  useEffect(() => {
    if (inputsInObject.tip == 0) {
      inputsInObject.tip = '';
      setError(false);
    }
  }, [inputsInObject]);

  useEffect(() => {
    if (percentOfTitInput == 0) {
      setError(false);
    }
  }, [percentOfTitInput, inputsInObject.tip]);

  const handleChange = (event) => {
    let inputPercent = event.target.value.trim();
    setpercentOfTitInput(inputPercent);
  };

  useEffect(() => {
    if (isNaN(percentOfTitInput)) {
      setError(true);
    } else if (percentOfTitInput < 0) {
      setError(true);
    } else if (percentOfTitInput === undefined) {
      setError(true);
    } else {
      setisTipComesFromBtn(1);
      setinputsInObject((prev) => ({ ...prev, tip: percentOfTitInput }));
      setError(false);
    }
  }, [percentOfTitInput]);

  if (inputsInObject.tip === 0) {
    inputsInObject.tip = '';
  }
  // only butttons logic
  let value = isTipComesFromBtn == 0 ? '' : inputsInObject.tip;

  function handleButtonClick(newPercent) {
    setisTipComesFromBtn(0);
    setPercent(newPercent);
  }

  const btnStyle = ` bg-buttonOfCalculatorAndRightSideBackground bg-cover hover:bg-hoverbuttonOfCalculatorAndRightSideBackground text-2xl font-bold rounded-md text-white hover:text-black h-[48px] lg:w-[117px] lg:h-[48px] sm:w-[220px] sm:h-[70px]`;
  const errorInInputStyle = error
    ? 'bg-red-800 rounded-md lg:w-[100%] lg:h-[48px] text-2xl text-right pr-4 sm:w-[220px] sm:h-[70px]'
    : 'bg-teal-50 rounded-md lg:w-[100%] lg:h-[48px] text-2xl text-right pr-4 sm:w-[220px] sm:h-[70px]';
  return (
    <div className="pb-10 text-buttonOfCalculatorAndRightSideBackground font-bold ">
      {'  Select Tip %'}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        <button className={btnStyle} onClick={() => handleButtonClick(5)}>
          5%
        </button>
        <button className={btnStyle} onClick={() => handleButtonClick(10)}>
          10%
        </button>
        <button className={btnStyle} onClick={() => handleButtonClick(15)}>
          15%
        </button>
        <button className={btnStyle} onClick={() => handleButtonClick(25)}>
          25%
        </button>
        <button className={btnStyle} onClick={() => handleButtonClick(50)}>
          50%
        </button>
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
    </div>
  );
};

export default TipsBtnAndInput;
