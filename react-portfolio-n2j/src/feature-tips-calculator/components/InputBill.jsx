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
    <div>
      <p>Bill</p>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        className=" bg-url(./src/feature-tips-calculator/images/icon-dollar.svg) w-9 h-9"
        type="text"
        id="bill"
        name="bill"
        value={inputsInObject.bill}
        onChange={handleClick}
      />
    </div>
  );
};

export default InputBill;
