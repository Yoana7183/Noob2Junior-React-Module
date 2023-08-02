import React, { useState } from 'react';
import PropTypes from 'prop-types';
const OnSubmitInput = ({ getWord }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
    getWord(value.trim());
    setValue('');
  };

  const handleOnChangeInput = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
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
OnSubmitInput.propTypes = {
  getWord: PropTypes.func.isRequired,
};
export default OnSubmitInput;
