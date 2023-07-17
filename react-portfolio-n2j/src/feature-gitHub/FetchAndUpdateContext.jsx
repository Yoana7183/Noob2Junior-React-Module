import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetchData from './hooks/useFetchData';

import { DataContext } from './context/DataContext';

const FetchAndUpdateContext = (userName) => {
  const { userData, resetToDefaultValue, loadFetchedUser } =
    useContext(DataContext);
  const data = useFetchData(userName.userName);
  useEffect(() => {
    if (data.data == null) {
      return;
    }
    if (data.data !== null && data.error === false) {
      loadFetchedUser(() => ({
        urlUser: data.data.html_url,
        name: data.data.name,
        login: data.data.login,
        avatar: data.data.avatar_url,
        timeStamp: data.data.created_at,
        bio: data.data.bio,
        repos: data.data.public_repos,
        followers: data.data.followers,
        following: data.data.following,
        location: data.data.location,
        theme: userData.theme,
        loading: data.loading,
        error: data.error,
      }));
    }
    if (data.data.message === 'Not Found') {
      resetToDefaultValue(true);
    }
    if (data.error === true) {
      resetToDefaultValue(true);
    }
  }, [userName.userName, data.data, data.error]);
  useEffect(() => {
    if (data.loading) {
      loadFetchedUser(() => ({
        ...userData,
        loading: data.loading,
      }));
    }
  }, [data.loading]);
  useEffect(() => {
    if (data.data.message === 'Bad credentials') {
      loadFetchedUser(() => ({
        ...userData,
        error: true,
        expiredAPIkey: true,
      }));
    }
    if (data.data.message === 'Service Unavailable') {
      loadFetchedUser(() => ({
        ...userData,
        error: true,
        serviceUnavailable: true,
      }));
    }
  }, [data.message]);
  return <div></div>;
};
FetchAndUpdateContext.propTypes = {
  userName: PropTypes.string.isRequired,
};
export default FetchAndUpdateContext;
