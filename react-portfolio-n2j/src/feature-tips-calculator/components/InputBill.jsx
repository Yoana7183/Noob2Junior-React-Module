import React, { useContext, useState, useEffect } from 'react';

import { TipsContext as BillConext } from '../Tips_Calculator';

const InputBill = () => {
  const { inputsInObject, setinputsInObject } = useContext(BillConext);
  const [error, setError] = useState('');
  const [bill, setBill] = useState(0);
  //checking for the value in the context, on reset the input value is set to 0
  useEffect(() => {
    if (inputsInObject.bill == 0) {
      inputsInObject.bill = '';
      setError('');
    }
  }, [inputsInObject]);

  const handleChange = (event) => {
    let billAmount = event.target.value.trim();
    setBill(billAmount);
  };

  useEffect(() => {
    if (/^[a-zA-Z]+$/g.test(bill)) {
      setError(`Please enter a number`);
    }
    if (isNaN(bill)) {
      setError(`Please enter a number`);
    } else if (bill < 0) {
      setError(`Can't be negative`);
    } else if (bill === undefined) {
      setError('');
    } else {
      setinputsInObject((prev) => ({ ...prev, bill: bill }));
      setError('');
    }
  }, [bill]);
  //clearing 0 as the value in the context so that it does not appear in the input when the calculation is reset
  if (inputsInObject.bill === 0) {
    inputsInObject.bill = '';
  }

  let value = bill == 0 ? '' : inputsInObject.bill;
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
