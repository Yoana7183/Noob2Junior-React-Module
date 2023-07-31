import React, { useState } from 'react';
import ManagingContext from '../ManagingContext';
const OnSubmitInput = () => {
  const [value, setValue] = useState('');
  const [valueToSubmit, setValueToSubmit] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
    setValueToSubmit(value.trim());
    setValue('');
  };

  const handleOnChangeInput = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <ManagingContext value={valueToSubmit} />
      <form onSubmit={handleSubmit} className="flex">
        <div>
          <label htmlFor="">Enter word...</label>
          <input
            onChange={handleOnChangeInput}
            value={value}
            type="text"
            name=""
            id=""
          />
        </div>
        <button>Search</button>
      </form>
    </>
  );
};

export default OnSubmitInput;
