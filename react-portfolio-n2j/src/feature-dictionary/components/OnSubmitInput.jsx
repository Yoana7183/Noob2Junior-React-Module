import React, { useState } from 'react';

import ManagingContext from '../ManagingContext';
const OnSubmitInput = () => {
  const [value, setValue] = useState('');
  const [valueToBubmit, setValueToSubmit] = useState('');

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
      <ManagingContext value={valueToBubmit} />
      <form
        onSubmit={handleSubmit}
        className="flex items-center  justify-center lg:flex-row flex-col mb-10 sm:mb-0 mx-auto"
      >
        <div className="flex sm:w-[320px] sm:flex-row flex-col w-[90%]">
          <input
            onChange={handleOnChangeInput}
            value={value}
            type="text"
            name="search"
            id="search"
            placeholder="Enter word..."
            className="bg-white border sm:w border-teal-600 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent sm:w-full transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <button className="mt-3 lg:mt-0 w-[160px]  bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-4 py-2 sm:ml-2 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
          Search
        </button>
      </form>
    </>
  );
};

export default OnSubmitInput;
