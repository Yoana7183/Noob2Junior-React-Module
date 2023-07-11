import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetchData from './hooks/useFetchData';

import { DataContext } from './context/DataContext';

// const dummyData = {
//   urlUser: 'https://github.com/octocat',
//   name: 'The Octocat',
//   avatar: 'https://avatars.githubusercontent.com/u/583231?v=4',
//   login: 'octocat',
//   timeStamp: '2011-01-25',
//   bio: '',
//   repos: 8,
//   followers: 9350,
//   following: 9,
//   location: 'San Francisco',
//   theme: {
//     theme: 'light',
//   },
// };
const FetchAndUpdateContext = (userName) => {
  if (userName.lenght < 0) {
    return;
  } else {
    const data = useFetchData(userName.userName);
    console.log(
      '🚀 ~ file: FetchAndUpdateContext.jsx:28 ~ FetchAndUpdateContext ~ data:',
      data
    );
  }
  const { resetToDefaultValue, loadFetchedUser } = useContext(DataContext);
  loadFetchedUser;
  resetToDefaultValue;
  //   useEffect(() => {
  //     resetToDefaultValue(dummyData);
  //   }, []);

  //   if (data !== null) {
  //     loadFetchedUser(data);
  //   } else resetToDefaultValue(dummyData);

  return <div></div>;
};
FetchAndUpdateContext.propTypes = {
  userName: PropTypes.string.isRequired,
};
export default FetchAndUpdateContext;
// const [userData, setUserData] = useState(dummyData);
// const [isInitial, setIsInitial] = useState(true);

// useEffect(() => {
//   if (isInitial) {
//     // on initial load, the context will have these values loaded, but will not cause any error
//     setUserData(() => ({
//       ...dummyData,
//       error: 'firstLoad',
//     }));
//   }
// }, []);

// useEffect(() => {
//   if (data == null) {
//     return;
//   }
//   if (data != null) {
//     setUserData(() => ({
//       //if a successful fetch request, the data we need to use  will be loaded into the context
//       urlUser: data.html_url,
//       name: data.name,
//       login: data.login,
//       avatar: data.avatar_url,
//       timeStamp: data.created_at,
//       bio: data.bio,
//       repos: data.public_repos,
//       followers: data.followers,
//       following: data.following,
//       location: data.location,
//       loading: data.loading,
//       error: data.error,
//     }));
//   }

//   if (data.message === 'Not Found') {
//     // on error, the dummy data will be reloaded again,
//     // but this time an error will be thrown in the context object,
//     // which means that the user has entered wrong or invalid data
//     setUserData(() => ({
//       ...dummyData,
//       error: true,
//     }));
//     setIsInitial(false);
//   }
//   if (data.message === 'Bad credentials') {
//     setUserData(() => ({
//       ...dummyData,
//       error: true,
//       expiredAPIkey: true,
//     }));
//     setIsInitial(false);
//   }
//   if (data.message === 'Service Unavailable') {
//     setUserData(() => ({
//       ...dummyData,
//       error: true,
//       serviceUnavailable: true,
//     }));
//     setIsInitial(false);
//   }
// }, [data, isInitial]);
