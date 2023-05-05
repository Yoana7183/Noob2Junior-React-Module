import React, { useContext } from 'react';

import { TipsContext as BillConext } from '../Tips_Calculator';

const InputBill = () => {
  const { inputsInObject, setinputsInObject } = useContext(BillConext);

  const handleClick = (event) => {
    const amountBill = event.target.value;

    setinputsInObject((prev) => ({ ...prev, bill: amountBill }));
  };
  return (
    <div>
      <input
        type="number"
        id="bill"
        name="bill"
        value={inputsInObject.bill}
        onChange={handleClick}
      />
    </div>
  );
};

export default InputBill;
