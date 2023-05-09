import React, { useContext, useState, useEffect } from 'react';
import { TipsContext as PercentTipContext } from '../Tips_Calculator';

const TipsBtnAndInput = () => {
  const { inputsInObject, setinputsInObject } = useContext(PercentTipContext);
  const [percent, setPercent] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    setinputsInObject((prev) => ({ ...prev, tip: percent }));
  }, [percent]);

  const handleChange = (event) => {
    let inputPercvet = event.target.value;
    setinputsInObject((prev) => ({ ...prev, tip: inputPercvet }));
    if (isNaN(inputPercvet)) {
      setError('Моля, въведете число.');
    } else if (inputPercvet < 0) {
      setError('Моля, въведете положително число.');
    } else {
      setError('');
    }
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
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        placeholder="Custom"
        type="text"
        id="tip"
        name="tip"
        onChange={handleChange}
      />
    </div>
  );
};

export default TipsBtnAndInput;
