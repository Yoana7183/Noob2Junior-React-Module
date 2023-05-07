import React, { useContext } from 'react';
import { TipsContext as PercentTipContext } from '../Tips_Calculator';

const TipsBtnAndInput = () => {
  const { inputsInObject, setinputsInObject } = useContext(PercentTipContext);

  const handleClick = (event) => {
    const percentTip = event.target.value;

    setinputsInObject((prev) => ({ ...prev, tip: percentTip }));
  };
  if (inputsInObject.tip === 0) {
    inputsInObject.tip = '';
  }

  return (
    <div>
      <button id="5" onChange={handleClick}>
        5%
      </button>
      <button id="10">10%</button>
      <button id="15">15%</button>
      <button id="25">25%</button>
      <button id="50"> 50%</button>
      <input
        placeholder="Custom"
        type="number"
        id="tip"
        name="tip"
        value={inputsInObject.tip}
        onChange={handleClick}
      />
    </div>
  );
};

export default TipsBtnAndInput;
