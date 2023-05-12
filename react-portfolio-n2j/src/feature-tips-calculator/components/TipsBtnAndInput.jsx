import React, { useContext, useState, useEffect, useRef } from 'react';
import { TipsContext as PercentTipContext } from '../Tips_Calculator';

const TipsBtnAndInput = () => {
  const { inputsInObject, setinputsInObject } = useContext(PercentTipContext);
  const [percentOfBtn, setPercent] = useState(0);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setinputsInObject((prev) => ({ ...prev, tip: percentOfBtn }));
  }, [percentOfBtn]);

  useEffect(() => {
    if (inputsInObject.tip == 0) {
      inputRef.current.value = '';
      setError(false);
    }
  }, [inputsInObject]);

  const handleChange = (event) => {
    event.preventDefault();
    let inputPercent = inputRef.current.value;

    if (isNaN(inputPercent)) {
      setError(true);
    } else if (inputPercent < 0) {
      setError(true);
    } else {
      setError(false);
      setinputsInObject((prev) => ({ ...prev, tip: inputPercent }));
    }
  };

  if (inputsInObject.tip === 0) {
    inputsInObject.tip = '';
  }

  function handleButtonClick(newPercent) {
    inputRef.current.value = '';
    setPercent(newPercent);

    if (inputRef.current) {
      inputRef.current.disabled = true;
    }
    inputRef.current.disabled = false;
  }

  const btnStyle = ` bg-buttonOfCalculatorAndRightSideBackground bg-cover hover:bg-hoverbuttonOfCalculatorAndRightSideBackground text-2xl font-bold rounded-md text-white hover:text-black h-[48px] lg:w-[117px] lg:h-[48px] sm:w-[220px] sm:h-[70px]`;
  const errorInInputStyle = error
    ? 'bg-red-800 text-white  bg-teal-50 rounded-md lg:w-[100%] lg:h-[48px] text-2xl text-right pr-4 sm:w-[220px] sm:h-[70px]'
    : 'bg-teal-50 rounded-md lg:w-[100%] lg:h-[48px] text-2xl text-right pr-4 sm:w-[220px] sm:h-[70px]';
  return (
    <div className="pb-10 text-buttonOfCalculatorAndRightSideBackground">
      {'  Select Tip %'}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
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
          className={errorInInputStyle}
          ref={inputRef}
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
