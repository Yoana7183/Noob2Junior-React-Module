import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

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
  error: 'firstLoad',
  loading: false,
  theme: 'light',
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(dummyData);
  const [theme, setTheme] = useState('light');
  const resetToDefaultValue = (addError) => {
    setUserData(() => ({
      ...dummyData,
      error: addError,
    }));
  };

  const loadFetchedUser = (userInfo) => setUserData(userInfo);

  return (
    <DataContext.Provider
      value={{
        userData,
        resetToDefaultValue,
        loadFetchedUser,
        theme,
        setTheme,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default DataProvider;
