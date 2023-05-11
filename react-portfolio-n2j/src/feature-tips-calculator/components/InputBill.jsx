import React, { useContext, useState } from 'react';

import { TipsContext as BillConext } from '../Tips_Calculator';

const InputBill = () => {
  const { inputsInObject, setinputsInObject } = useContext(BillConext);
  const [error, setError] = useState('');

  const handleClick = (event) => {
    const amountBill = event.target.value.trim();
    setinputsInObject((prev) => ({ ...prev, bill: amountBill }));

    if (isNaN(amountBill)) {
      setError(`Please enter a number`);
    } else if (amountBill <= 0) {
      setError(`Can/'t be zero`);
    } else {
      setError('');
    }
  };

  if (inputsInObject.bill === 0) {
    inputsInObject.bill = '';
  }
  return (
    <div className="pb-10">
      <div className="flex justify-between">
        <p className="pb-2 text-buttonOfCalculatorAndRightSideBackground">
          Bill
        </p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <div className="relative">
        <img
          className="w-[25px] h-[16px] absolute inset-y-4 left-0 flex items-center pl-3 "
          src="src\feature-tips-calculator\images\icon-dollar.svg"
          alt=""
          srcSet=""
        />

        <input
          className=" bg-teal-50 rounded-md w-[100%] h-[48px] text-2xl text-right pr-4"
          type="text"
          id="bill"
          name="bill"
          value={inputsInObject.bill}
          onChange={handleClick}
        />
      </div>
    </div>
  );
};

export default InputBill;
