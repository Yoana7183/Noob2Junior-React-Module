import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const SearchBarAndSubmitButton = ({ getValue, isError }) => {
  const inputRef = useRef(null);
  const [isNotFound, setNotFound] = useState(null);

  useEffect(() => {
    setNotFound(isError);
    console.log(isNotFound);
  }, [isError]);

  const handleSubmit = () => {
    let value = inputRef.current.value.trim();
    getValue(value);
  };

  return (
    <div className="flex">
      <div>{isNotFound}</div>
      <input className=" w-[625px] h-[69px]" type="text" ref={inputRef} />
      <button
        className="w-[106px] h-[50px] bg-buttonOnGitHubFindDevSearchButton"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};
SearchBarAndSubmitButton.propTypes = {
  getValue: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};
export default SearchBarAndSubmitButton;
('Yoana7183');
