import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

/**
 * Dummy data for the initial state of the context.
 * @type {Object}
 */
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

/**
 * Data context for storing user data and theme.
 */
export const DataContext = createContext();

/**
 * Data provider component for wrapping the application and providing data context.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 * @returns {JSX.Element} - A JSX element wrapping the children with data context.
 */
export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(dummyData);
  const [theme, setTheme] = useState('light');

  /**
   * Reset user data to default values.
   * @param {string|boolean} addError - The error value to set in user data.
   */
  const resetToDefaultValue = (addError) => {
    setUserData(() => ({
      ...dummyData,
      error: addError,
    }));
  };

  /**
   * Load fetched user information into user data.
   * @param {Object} userInfo - The user information to load.
   */
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
  children: PropTypes.node.isRequired,
};

export default DataProvider;
