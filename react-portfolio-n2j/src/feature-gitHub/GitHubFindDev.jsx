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
  const toggleDarkToLightStyle =
    theme === 'dark'
      ? 'bg-gitDarkSpaceBackground'
      : 'bg-gitLightSpaceBackground';

  return (
    <div
      className={`flex justify-center pt-[10rem] h-[60rem] ${toggleDarkToLightStyle}`}
    >
      <div
        className={`w-[730px] h-[444px] ${
          theme === 'dark'
            ? ' bg-gitContainerBlackBackground text-white'
            : 'bg-white'
        }`}
      >
        <div className={`flex justify-between  ${toggleDarkToLightStyle}`}>
          <div className="text-lg">devfinder</div>
          <button
            className={`flex justify-between  ${toggleDarkToLightStyle}`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <img
                src="src/feature-gitHub/assets/icon-sun.svg"
                alt=""
                srcSet=""
              />
            ) : (
              <img
                src="src/feature-gitHub/assets/icon-moon.svg"
                alt=""
                srcSet=""
              />
            )}
          </button>
        </div>
        <div>
          <UserDataContext.Provider value={userData}>
            <ThemeContext.Provider value={theme}>
              <div className="border-2 border-black">
                <SearchBarAndSubmitButton getValue={getValue} />
              </div>
              <div className="border-2 border-black">
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
