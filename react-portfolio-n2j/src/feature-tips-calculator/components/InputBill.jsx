import React, { useContext, useState } from 'react';

import { TipsContext as BillConext } from '../Tips_Calculator';

const InputBill = () => {
  const { inputsInObject, setinputsInObject } = useContext(BillConext);
  const [error, setError] = useState('');

  const handleClick = (event) => {
    const amountBill = event.target.value.trim();
    setinputsInObject((prev) => ({ ...prev, bill: amountBill }));
    console.log(amountBill);
    if (isNaN(amountBill)) {
      setError('Моля, въведете число.');
    } else if (amountBill < 0) {
      setError('Моля, въведете положително число.');
    } else {
      setError('');
    }
  };

  if (inputsInObject.bill === 0) {
    inputsInObject.bill = '';
  }
  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
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
