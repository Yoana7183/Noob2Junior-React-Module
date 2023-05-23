import React, { useState, useRef } from 'react';
import useFetchData from '../hooks/useFetchData';

const SearchBarAndSubmitButton = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const value = inputRef.current.value.trim();
    setInputValue(value);
  };
  console.log(inputValue);
  useFetchData(inputValue);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default SearchBarAndSubmitButton;
('Yoana7183');
