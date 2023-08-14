import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetchData from './hooks/useGetRequest';

import { DataContext } from './context/DataContext';

/**
 * A React component that fetches user data from GitHub API and updates the context.
 * @param {Object} props - The component props.
 * @param {string} props.userName - The GitHub username to fetch data for.
 */
const FetchAndUpdateContext = ({ userName }) => {
  // Get relevant context and initialize variables
  const { userData, resetToDefaultValue, loadFetchedUser } =
    useContext(DataContext);
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
  const url = `https://api.github.com/users/`;
  const data = useFetchData(url, userName, apiKey);

  // Update user data when fetching is successful or errors occur
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

  // Update user data when loading changes
  useEffect(() => {
    if (data.loading) {
      loadFetchedUser(() => ({
        ...userData,
        loading: data.loading,
      }));
    }
  }, [data.loading]);
};

FetchAndUpdateContext.propTypes = {
  /**
   * The GitHub username to fetch data for.
   */
  userName: PropTypes.string.isRequired,
};

export default FetchAndUpdateContext;
