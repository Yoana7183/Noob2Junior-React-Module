import React, { useContext, useState, useEffect } from 'react';
import { TipsContext as PercentTipContext } from '../Tips_Calculator';

const TipsBtnAndInput = () => {
  const { inputsInObject, setinputsInObject } = useContext(PercentTipContext);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setinputsInObject((prev) => ({ ...prev, tip: percent }));
  }, [percent]);

  const handleChange = (event) => {
    let inputPercvet = event.target.value;

    setinputsInObject((prev) => ({ ...prev, tip: inputPercvet }));
  };
  if (inputsInObject.tip === 0) {
    inputsInObject.tip = '';
  }
  const handleButtonClick = (newPercent) => {
    setPercent(newPercent);
  };
  return (
    <div>
      <button id="5" onClick={() => handleButtonClick(5)}>
        5%
      </button>
      <button id="10" onClick={() => handleButtonClick(10)}>
        10%
      </button>
      <button id="15" onClick={() => handleButtonClick(15)}>
        15%
      </button>
      <button id="25" onClick={() => handleButtonClick(25)}>
        25%
      </button>
      <button id="50" onClick={() => handleButtonClick(50)}>
        50%
      </button>
      <input
        placeholder="Custom"
        type="number"
        id="tip"
        name="tip"
        value={inputsInObject.tip}
        onChange={handleChange}
      />
    </div>
  );
};

export default TipsBtnAndInput;
