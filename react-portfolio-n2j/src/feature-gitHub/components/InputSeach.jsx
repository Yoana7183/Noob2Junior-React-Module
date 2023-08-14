import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import FetchAndUpdateContext from '../FetchAndUpdateContext';

const SearchBarAndSubmitButton = () => {
  const [inputValue, setInputValue] = useState('');
  const { userData, theme } = useContext(DataContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState('');
  const toggleDarkToLightStyleContainers =
    theme === 'dark'
      ? ' bg-gitContainerBlackBackground text-white'
      : 'text-black text-gitTextOnLight ';
  // useEffect(() => {
  //   inputRef.current.blur();
  // });
  useEffect(() => {
    if (userData.error == 'firstLoad') {
      setErrorMessage('');
    }
    if (userData.error == true) {
      setErrorMessage('No results');
    }
    if (!userData.error) {
      setErrorMessage('');
    }
  }, [userData]);
  const handleOnChange = (event) => {
    setInputValue(event.target.value.trim());
  };
  const handleSubmit = () => {
    setValue(inputValue);
    setInputValue('');
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setValue(inputValue);
      setInputValue('');
    }
  };

  return (
    <>
      <FetchAndUpdateContext userName={value} />
      <section
        className={`flex items-center w-[330px] lg:w-[730px] md:w-[575px] sm:w-[575px] h-[69px] rounded-2xl p-4 ${
          theme === 'dark'
            ? ' bg-gitContainerBlackBackground text-white'
            : 'text-black bg-white '
        }`}
      >
        <div className="relative flex items-center">
          <img
            className="w-6 h-6 lg:mr-4 md:mr-0 sm:mr-0 "
            src="src/feature-gitHub/assets/icon-search.svg"
            alt="Search Icon"
          />
          <input
            className={` focus:outline-none rounded-2xl w-[270px] lg:w-[520px] md:w-[420px] sm:w-[350px] lg:text-lg md:text-base sm:text-sm text-xs h-14 px-2 ${toggleDarkToLightStyleContainers}`}
            type="text"
            value={inputValue}
            placeholder="Search GitHub username..."
            onKeyPress={handleKeyPress}
            onChange={handleOnChange}
          />

          <div className="relative flex items-center">
            <div className="text-red-500 lg:ml-[-3rem] lg:text-base md:text-base sm:text-sm lg:w-[90px] md:ml-[-5rem] sm:ml-[-1rem] sm:w-[120px] md:w-[150px] w-[80px] ml-[-8rem] mr-[4rem] text-xs ">
              {errorMessage}
            </div>

            <button
              className="lg:ml-[-3rem] sm:h-[50px] sm:w-[106px] h-[46px] w-[84]  md:ml-[-7rem] sm:ml-[-6rem] ml-[-4rem] py-2 px-4  bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBarAndSubmitButton;
