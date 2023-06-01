import React, { useEffect, useState, createContext } from 'react';
import SearchBarAndSubmitButton from './components/InputSeach';
import useFetchData from './hooks/useFetchData';
import PersonalUserInformation from './components/PersonalUserInformation';
import TableInformation from './components/TableInformation';
import LinksAndLocation from './components/Links';

export const UserDataContext = createContext();
export const ThemeContext = createContext();

const initialState = {};
const initialTheme = 'light';

const GitHubFindDev = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(initialState);
  const [theme, setTheme] = useState(initialTheme);
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
      setUserData(() => ({
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
      setUserData(() => ({
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
        error: true,
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
    <div
      className={`flex justify-center pt-16 lg:pt-[10rem] lg:h-[75rem] lg:pb-[30rem] md:h-[70rem] md:pb-[30rem] sm:pb-[30rem] sm:h-[65rem] h-[55rem] pb-[35rem] md:pt-[10rem] sm:pt-[10rem] font-mono ${toggleDarkToLightStyleBackground}`}
    >
      <div
        className={` w-[330px] lg:w-[730px] md:w-[575px] sm:w-[575px]  ${toggleDarkToLightStyleContainers}`}
      >
        <div
          className={`flex justify-between pb-6 ${toggleDarkToLightStyleBackground}`}
        >
          <div
            className={`text-3xl font-black ${
              theme === 'dark'
                ? ' bg-gitDarkSpaceBackground text-white'
                : 'bg-gitLightSpaceBackground text-black'
            }`}
          >
            devfinder
          </div>
          <button
            className={`flex justify-between  ${toggleDarkToLightStyleBackground}`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <div className="flex">
                <p className="mt-[1rem]">Dark</p>
                <img
                  className="w-[20px] h-[20px] ml-2"
                  src="src/feature-gitHub/assets/icon-sun.svg"
                  alt=""
                  srcSet=""
                />
              </div>
            ) : (
              <div className="flex">
                <p className="mt-[1rem]">Light</p>
                <img
                  className="w-[20px] h-[20px] ml-2"
                  src="src/feature-gitHub/assets/icon-moon.svg"
                  alt=""
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
    </div>
  );
};

export default GitHubFindDev;
