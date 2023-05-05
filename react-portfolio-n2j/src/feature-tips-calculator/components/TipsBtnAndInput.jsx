import React, { useContext } from 'react';
import { TipsContext as PercentTipContext } from '../Tips_Calculator';

const TipsBtnAndInput = () => {
  const { inputsInObject, setinputsInObject } = useContext(PercentTipContext);

  const handleClick = (event) => {
    const percentTip = event.target.value;

    setinputsInObject((prev) => ({ ...prev, tip: percentTip }));
  };
  return (
    <div>
      <input
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
