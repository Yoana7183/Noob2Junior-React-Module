import React, { useEffect, useState, createContext } from 'react';
import SearchBarAndSubmitButton from './components/InputSeach';
import useFetchData from './hooks/useFetchData';
import PersonalUserInformation from './components/PersonalUserInformation';
import TableInformation from './components/TableInformation';
import LinksAndLocation from './components/Links';
export const UserDataContext = createContext();
export const ThemeContext = createContext();

const dummyData = {
  urlUser: 'https://github.com/octocat',
  name: 'The Octocat',
  avatar: 'https://avatars.githubusercontent.com/u/583231?v=4',
  login: 'octocat',
  timeStamp: '2011-01-25',
  bio: '',
  repos: 8,
  followers: 9350,
  following: 9,
  location: 'San Francisco',
};

const GitHubFindDev = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState({});
  const [theme, setTheme] = useState('light');
  const [isInitial, setIsInitial] = useState(true);

  const userDataObject = useFetchData(inputValue);

  const getValue = (value) => {
    setInputValue(value);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (isInitial) {
      // on initial load, the context will have these values loaded, but will not cause any error
      setUserData(() => ({
        ...dummyData,
        error: 'firstLoad',
      }));
    }
  }, []);

  useEffect(() => {
    if (userDataObject.data == null) {
      return;
    }
    if (userDataObject.data != null) {
      setUserData(() => ({
        //if a successful fetch request, the data we need to use  will be loaded into the context
        urlUser: userDataObject.data.html_url,
        name: userDataObject.data.name,
        login: userDataObject.data.login,
        avatar: userDataObject.data.avatar_url,
        timeStamp: userDataObject.data.created_at,
        bio: userDataObject.data.bio,
        repos: userDataObject.data.public_repos,
        followers: userDataObject.data.followers,
        following: userDataObject.data.following,
        location: userDataObject.data.location,
        loading: userDataObject.loading,
        error: userDataObject.error,
      }));
    }

    if (userDataObject.data.message === 'Not Found') {
      // on error, the dummy data will be reloaded again,
      // but this time an error will be thrown in the context object,
      // which means that the user has entered wrong or invalid data
      setUserData(() => ({
        ...dummyData,
        error: true,
      }));
      setIsInitial(false);
    }
    if (userDataObject.data.message === 'Bad credentials') {
      setUserData(() => ({
        ...dummyData,
        error: true,
        expiredAPIkey: true,
      }));
      setIsInitial(false);
    }
    if (userDataObject.data.message === 'Service Unavailable') {
      setUserData(() => ({
        ...dummyData,
        error: true,
        serviceUnavailable: true,
      }));
      setIsInitial(false);
    }
  }, [userDataObject.data, isInitial]);
  const toggleDarkToLightStyleBackground =
    theme === 'dark'
      ? 'bg-gitDarkSpaceBackground'
      : 'bg-gitLightSpaceBackground';
  const toggleDarkToLightStyleContainers =
    theme === 'dark'
      ? ' bg-gitContainerBlackBackground text-white'
      : 'bg-white text-gitTextOnLight';

  return (
    <main
      className={`flex justify-center pt-16 lg:pt-[10rem] lg:h-[75rem] lg:pb-[30rem] md:h-[70rem] md:pb-[30rem] sm:pb-[30rem] sm:h-[65rem] h-[55rem] pb-[35rem] md:pt-[10rem] sm:pt-[10rem] font-mono ${toggleDarkToLightStyleBackground}`}
    >
      <div
        className={` w-[330px] lg:w-[730px] md:w-[575px] sm:w-[575px]  ${toggleDarkToLightStyleContainers}`}
      >
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
              theme === 'dark'
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
            {theme === 'light' ? (
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
          <UserDataContext.Provider value={userData}>
            <ThemeContext.Provider value={theme}>
              <div className=" rounded-2xl shadow-2xl mb-8">
                <SearchBarAndSubmitButton getValue={getValue} />
              </div>
              <div
                className={`rounded-2xl shadow-2xl mt-6 p-6 h-[444px] ${toggleDarkToLightStyleContainers}`}
              >
                <PersonalUserInformation />
                <TableInformation />
                <LinksAndLocation />
              </div>
            </ThemeContext.Provider>
          </UserDataContext.Provider>
        </div>
      </div>
    </main>
  );
};

export default GitHubFindDev;
