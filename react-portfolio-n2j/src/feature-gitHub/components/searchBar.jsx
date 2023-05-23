import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const SearchBarAndSubmitButton = ({ getValue }) => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const value = inputRef.current.value.trim();
    getValue(value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
SearchBarAndSubmitButton.propTypes = {
  getValue: PropTypes.func.isRequired,
};
export default SearchBarAndSubmitButton;
('Yoana7183');
