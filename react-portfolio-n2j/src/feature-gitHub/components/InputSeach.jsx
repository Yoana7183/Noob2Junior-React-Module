import React, { useRef, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserDataContext as UserError, ThemeContext } from '../GitHubFindDev';

const SearchBarAndSubmitButton = ({ getValue }) => {
  const inputRef = useRef(null);
  const userData = useContext(UserError);
  const initialTheme = useContext(ThemeContext);
  const [errorMessage, setErrorMessage] = useState('');
  const toggleDarkToLightStyleContainers =
    initialTheme === 'dark'
      ? ' bg-gitContainerBlackBackground text-white'
      : 'text-black text-gitTextOnLight ';
  useEffect(() => {
    inputRef.current.blur();
  });
  useEffect(() => {
    if (userData.error == 'firstLoad') {
      setErrorMessage('');
    }
    if (userData.error === true) {
      setErrorMessage('No result');
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
    <div
      className={`flex items-center w-[730px] h-[69px] rounded-2xl p-4 ${
        initialTheme === 'dark'
          ? ' bg-gitContainerBlackBackground text-white'
          : 'text-black bg-white '
      }`}
    >
      <div className="relative flex items-center">
        <img
          className="w-6 h-6 mr-4 "
          src="src/feature-gitHub/assets/icon-search.svg"
          alt="Search Icon"
        />
        <input
          className={` focus:outline-none rounded-2xl w-96 h-14 px-2 ${toggleDarkToLightStyleContainers}`}
          type="text"
          ref={inputRef}
          placeholder="Search GitHub username..."
        />
        {errorMessage && (
          <div className="text-red-500 ml-2">{errorMessage}</div>
        )}
        <button
          className="ml-52 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};
SearchBarAndSubmitButton.propTypes = {
  getValue: PropTypes.func.isRequired,
};
export default SearchBarAndSubmitButton;
('Yoana7183');
