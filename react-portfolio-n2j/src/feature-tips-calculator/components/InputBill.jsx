import React, { useState } from 'react';
import useValidateNumberInput from '../hooks/useValidateNumberInput';

const InputBill = () => {
  const [error, setError] = useState('');
  const [bill, setBill] = useState('');
  const handleChange = (event) => {
    setBill(event.target.value.trim());
  };
  // custom hook for validation on input, and if is valid will update the context
  const validInput = useValidateNumberInput(setError, bill, setBill, ['bill']);
  const value = bill == 0 ? '' : validInput;

  return (
    <section className="pb-10">
      <div className="flex justify-between">
        <p className="pb-2 text-buttonOfCalculatorAndRightSideBackground font-bold">
          Bill
        </p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <div className="relative">
        <img
          className="w-[25px] h-[16px] absolute inset-y-4 left-0 flex items-center pl-3 "
          src="\assetsTipsCalc\icon-dollar.svg"
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
    </section>
  );
};

export default InputBill;
