import React, { useRef, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserDataContext as UserError } from '../GitHubFindDev';
const SearchBarAndSubmitButton = ({ getValue }) => {
  const inputRef = useRef(null);
  const userData = useContext(UserError);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (userData.error) {
      setErrorMessage('No results');
      console.log(errorMessage);
    }
    if (!userData.error) {
      setErrorMessage('');
    }
  }, [userData.error]);

  const handleSubmit = () => {
    let value = inputRef.current.value.trim();
    getValue(value);
  };

  return (
    <div className="flex">
      <div>{errorMessage}</div>
      <input
        className=" w-[625px] h-[69px]"
        type="text"
        ref={inputRef}
        placeholder="Search GitHub username… "
      />
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
};
export default SearchBarAndSubmitButton;
('Yoana7183');
