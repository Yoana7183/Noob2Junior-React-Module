import React, { useContext, useState, useEffect, useRef } from 'react';
import { TipsContext as PercentTipContext } from '../Tips_Calculator';

const TipsBtnAndInput = () => {
  const { inputsInObject, setinputsInObject } = useContext(PercentTipContext);
  const [percentOfBtn, setPercent] = useState(0);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    setinputsInObject((prev) => ({ ...prev, tip: percentOfBtn }));
  }, [percentOfBtn]);

  useEffect(() => {
    if (inputsInObject.tip == 0) {
      inputRef.current.value = '';
    }
  }, [inputsInObject]);

  const handleChange = (event) => {
    event.preventDefault();
    let inputPercent = inputRef.current.value;

    if (isNaN(inputPercent)) {
      setError(`Please enter a number`);
    } else if (inputPercent < 0) {
      setError(`Can/'t be zero`);
    } else {
      setError('');
      setinputsInObject((prev) => ({ ...prev, tip: inputPercent }));
    }
  };

  if (inputsInObject.tip === 0) {
    inputsInObject.tip = '';
  }

  function handleButtonClick(newPercent) {
    inputRef.current.value = '';
    setPercent(newPercent);

    if (inputRef.current) {
      inputRef.current.disabled = true;
    }
    inputRef.current.disabled = false;
  }

  return (
    <div>
      {'  Select Tip %'}

      <div className="grid grid-cols-3">
        <button id="percent" onClick={() => handleButtonClick(5)}>
          5%
        </button>
        <button id="percent" onClick={() => handleButtonClick(10)}>
          10%
        </button>
        <button id="percent" onClick={() => handleButtonClick(15)}>
          15%
        </button>
        <button id="percent" onClick={() => handleButtonClick(25)}>
          25%
        </button>
        <button id="percent" onClick={() => handleButtonClick(50)}>
          50%
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <input
          ref={inputRef}
          placeholder="Custom"
          type="text"
          id="tip"
          name="tip"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TipsBtnAndInput;
