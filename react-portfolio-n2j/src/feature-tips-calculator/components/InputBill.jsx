import React, { useState } from 'react';

import useValidateNumberInput from '../hooks/useValidateNumberInput';

const InputBill = () => {
  const [error, setError] = useState('');
  const [bill, setBill] = useState(0);
  //checking for the value in the context, on reset the input value is set to 0

  const handleChange = (event) => {
    setBill(event.target.value.trim());
  };
  // custom hook for validation on input, and if is valid will update the context

  let validInput = useValidateNumberInput(setError, bill);
  if (validInput == 0) {
    validInput = '';
  }

  //clearing 0 as the value in the context so that it does not appear in the input when the calculation is reset

  let value = bill == 0 ? '' : validInput;
  return (
    <div className="pb-10">
      <div className="flex justify-between">
        <p className="pb-2 text-buttonOfCalculatorAndRightSideBackground font-bold">
          Bill
        </p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <div className="relative">
        <img
          className="w-[25px] h-[16px] absolute inset-y-4 left-0 flex items-center pl-3 "
          src="src\feature-tips-calculator\images\icon-dollar.svg"
          alt="icon-dollar"
          srcSet=""
        />

        <input
          inputMode="numeric"
          className=" bg-teal-50 rounded-md h-[48px] w-[100%] lg:h-[48px] text-2xl text-right pr-4 sm:h-[70px]"
          type="text"
          id="bill"
          name="bill"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputBill;
