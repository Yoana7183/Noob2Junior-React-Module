import React, { useContext, useState } from 'react';
import SearchBarAndSubmitButton from './components/InputSeach';

import PersonalUserInformation from './components/PersonalUserInformation';
import TableInformation from './components/TableInformation';
import LinksAndLocation from './components/Links';
import { DataContext } from './context/DataContext';

const GitHubFindDev = () => {
  const { userData, loadFetchedUser } = useContext(DataContext);

  const [toggledTheme, setToggledTheme] = useState('light');
  const toggleTheme = () => {
    setToggledTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    loadFetchedUser(() => ({ ...userData, theme: toggledTheme }));
  };

  const toggleDarkToLightStyleBackground =
    userData.theme === 'dark'
      ? 'bg-gitDarkSpaceBackground'
      : 'bg-gitLightSpaceBackground';
  const toggleDarkToLightStyleContainers =
    userData.theme === 'dark'
      ? ' bg-gitContainerBlackBackground text-white'
      : 'bg-white text-gitTextOnLight';

  return (
    <main
      className={`flex justify-center pt-16 lg:pt-[10rem] lg:h-[75rem] lg:pb-[30rem] md:h-[70rem] md:pb-[30rem] sm:pb-[30rem] sm:h-[65rem] h-[55rem] pb-[35rem] md:pt-[10rem] sm:pt-[10rem] font-mono ${toggleDarkToLightStyleBackground}`}
    >
      <div
        className={` w-[330px] lg:w-[730px] md:w-[575px] sm:w-[575px]  ${toggleDarkToLightStyleContainers}`}
      >
        {userData.loading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : null}
        {userData.expiredAPIkey ? (
          <div className={toggleDarkToLightStyleBackground}>
            Ooops..A problem has occurred, most likely due to a problem with API
            key!
          </div>
        ) : null}
        {userData.serviceUnavailable ? (
          <div className={toggleDarkToLightStyleBackground}>
            Ooops..503 Service Unavailable error status code try the request
            again later!
          </div>
        ) : null}
        <div
          className={`flex justify-between pb-6 ${toggleDarkToLightStyleBackground}`}
        >
          <header
            className={`text-3xl font-black ${
              userData.theme === 'dark'
                ? ' bg-gitDarkSpaceBackground text-white'
                : 'bg-gitLightSpaceBackground text-black'
            }`}
          >
            devfinder
          </header>
          <button
            className={`flex justify-between  ${toggleDarkToLightStyleBackground}`}
            onClick={toggleTheme}
          >
            {userData.theme === 'light' ? (
              <div className="hover:text-black">
                <div className="mt-[1rem] flex justify-center">
                  Dark
                  <img
                    className="w-[20px] h-[20px] ml-2 "
                    src="src/feature-gitHub/assets/icon-moon.svg"
                    alt="moon-icon"
                    srcSet=""
                  />
                </div>
              </div>
            ) : (
              <div className="mt-[1rem] flex justify-center">
                Light
                <img
                  className="w-[20px] h-[20px] ml-2"
                  src="src/feature-gitHub/assets/icon-sun.svg"
                  alt="sun-icon"
                  srcSet=""
                />
              </div>
            )}
          </button>
        </div>
        <div className={` ${toggleDarkToLightStyleBackground}`}>
          <div className=" rounded-2xl shadow-2xl mb-8">
            <SearchBarAndSubmitButton />
          </div>
          <div
            className={`rounded-2xl shadow-2xl mt-6 p-6 h-[444px] ${toggleDarkToLightStyleContainers}`}
          >
            <PersonalUserInformation />
            <TableInformation />
            <LinksAndLocation />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GitHubFindDev;
